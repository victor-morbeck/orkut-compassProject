import React, { useState } from 'react';
import './Login.css';


interface LoginState {
  email: string;
  password: string;
  errorMessages: { email: string; password: string };
}

interface LoginProps {
    onLoginSuccess: () => void;
  }

  const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
    const [loginState, setLoginState] = useState<LoginState>({
      email: '',
      password: '',
      errorMessages: { email: '', password: '' },
    });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginState({
      ...loginState,
      [name]: value,
    });
  };

  const handleLogin = () => {
   
    const { email, password } = loginState;
    const errorMessages: { email: string; password: string } = { email: '', password: '' };

    if (!email) {
      errorMessages.email = 'Campo de e-mail não pode estar vazio';
    }

    if (!password) {
      errorMessages.password = 'Campo de senha não pode estar vazio';
    }

    if (errorMessages.email || errorMessages.password) {
      setLoginState({ ...loginState, errorMessages });
    } else {

      alert('Login bem-sucedido! Redirecionando para o perfil...');
     
      onLoginSuccess();
    }
  };

  return (

    <div className="login-container">
      <h1>Login</h1>
      <div className="form-group">
        <label>E-mail:</label>
        <input
          type="text"
          name="email"
          value={loginState.email}
          onChange={handleChange}
          className={loginState.errorMessages.email ? 'error' : ''}
        />
        {loginState.errorMessages.email && (
          <span className="error-message">{loginState.errorMessages.email}</span>
        )}
      </div>
      <div className="form-group">
        <label>Senha:</label>
        <input
          type="password"
          name="password"
          value={loginState.password}
          onChange={handleChange}
          className={loginState.errorMessages.password ? 'error' : ''}
        />
        {loginState.errorMessages.password && (
          <span className="error-message">{loginState.errorMessages.password}</span>
        )}
      </div>
      <button onClick={handleLogin}>Entrar na Conta</button>
    </div>

  );
};

export default Login;
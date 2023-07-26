
import './RegisterForm.css'


export const RegisterForm = () => {
  return (
    <>
    
    {/* //Nome, email, datNasc,cidade/estado, senha e confirmação de senha */}

    <div className="formContainer">
        <label>
            <span>Nome: </span>
            <input type="text"  />
        </label>
        <label>
            <span>Email: </span>
            <input type="email"  />
        </label>
        <label>
            <span>Data de nascimento: </span>
            <input type="text"/>
        </label>
        <label>
            <span>Cidade e Estado: </span>
            <input type="text"  />
        </label>
        <label>
            <span>Senha: </span>
            <input type="password"  />
        </label>
        <label>
            <span>Confirmação de senha: </span>
            <input type="password"  />
        </label>
    </div>
    
    
    </>
  )
}

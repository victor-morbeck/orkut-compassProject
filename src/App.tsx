import React, { useState } from 'react';
import './App.css';
import Login from '../src/components/Login/Login';
import Profile from '../src/components/Profile/Profile';
import Header from './components/Header/Header';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

<<<<<<< HEAD
  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} />
      {isLoggedIn ? <Profile /> : <Login onLoginSuccess={handleLoginSuccess} />}
    </div>
  );
};

export default App;
=======
import React from 'react';
import Header from './components/Header';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      {/* Outras seções do LinkedIn seriam adicionadas aqui */}
    </div>
  );
}

export default App;
>>>>>>> ca86d38deb62066601a19959fe67346e98c2c8f6

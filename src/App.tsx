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
  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} />
      {isLoggedIn ? <Profile /> : <Login onLoginSuccess={handleLoginSuccess} />}
    </div>
  );
};

export default App;

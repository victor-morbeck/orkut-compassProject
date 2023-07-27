
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
import { RegisterForm } from "./components/RegisterForm"
import './App.css';

function App() {
  
  return (
    <>
     <RegisterForm/>
    </>
  )
}

export default App;

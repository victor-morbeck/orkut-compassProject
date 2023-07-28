
import React from 'react';
import './index.css';
import Header from './components/Header-profile';
import MainSection from './components/MainSection';


const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };
  return (
    <div className="App">

    </div>
  );
};

export default App;
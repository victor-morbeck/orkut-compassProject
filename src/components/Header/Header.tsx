import React from 'react';
import './Header.css';

interface HeaderProps {
    isLoggedIn: boolean;
  }
  
  const Header: React.FC<HeaderProps> = ({ isLoggedIn }) => {
    return (
      <header className="header">
        <nav>
          <ul>
            {isLoggedIn ? (
              <>
                <li>Início</li>
                <li>Perfil</li>
                <li>Comunidades</li>
                <li>Jogos</li>
              </>
            ) : (
              <>
                <li>Sobre o Orkut</li>
                <li>Centro de Segurança</li>
              </>
            )}
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;
import React from "react";
import "./Header.css";
import Logo from "../../assets/image/logo-orkut.svg";

interface HeaderProps {
  isLoggedIn: boolean;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn }) => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img src={Logo} alt="Logo Orkut" />
        </div>
        <ul>
          {isLoggedIn ? (
            <>
              <li>Início</li>
              <li>Perfil</li>
              <li>Comunidades</li>
              <li>Jogos</li>
              <input className="header-input" type="text" placeholder="Pesquisar no Orkut" />
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

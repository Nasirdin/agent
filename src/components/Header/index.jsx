import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const Header = ({authorized}) => {

  return (
    <header className="header">
      <div className="container">
        <Link className="header__logo" to="/">
          Logo
        </Link>
        {!authorized ? (
          <div className="header__authLinks">
            <Link to="/auth/registration" className="header__authLink">
              Зарегистрироваться
            </Link>
            <span>/</span>
            <Link to="/auth/login" className="header__authLink">
              Войти
            </Link>
          </div>
        ) : (
          <Link className="header__adminLink">admin</Link>
        )}
      </div>
    </header>
  );
};

export default Header;

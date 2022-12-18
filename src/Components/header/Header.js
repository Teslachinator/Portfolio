import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div className="blur">
      <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">
            <strong>
              <em>Никита Кантов</em>
            </strong>
            <br />
            Frontend-разработчик
          </h1>
        </div>
      </header>
    </div>
  );
};

export default Header;

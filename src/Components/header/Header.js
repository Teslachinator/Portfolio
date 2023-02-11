import React from "react";
import "./style.css";
import photo from "./../../img/head.jpg";

const Header = () => {
  return (
    <div className="blur">
      <header className="header">
        <div className="header__wrapper">
          <dv>
            <h1 className="header__title">
              <strong>
                <em>Никита Кантов</em>
              </strong>
              <br />
              Frontend-разработчик
              <br />
            </h1>

            <div className="header__btn">
              <a
                className=""
                rel="noreferrer"
                href="https://drive.google.com/file/d/1BJLe3ysQB8Gzh4wJKu2YEY8oJq505lOb/view?usp=sharing"
                target="_blank"
              >
                Скачать CV
              </a>
            </div>
          </dv>
          <div className="header__photo">
            <img src={photo} alt="#" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

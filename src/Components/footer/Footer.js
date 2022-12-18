import React from "react";
import vk from "./../../img/icons/vk.svg";
import inst from "./../../img/icons/instagram.svg";
import Git from "./../../img/icons/gitHub.svg";
import tg from "./../../img/icons/telegram.svg";

import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a
                href="https://vk.com/tesslach"
                target="_blank"
                rel="noreferrer"
              >
                <img src={vk} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.instagram.com/teslach_/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={inst} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://t.me/Tesslach" target="_blank" rel="noreferrer">
                <img src={tg} alt="Link" />
              </a>
            </li>

            <li className="social__item">
              <a
                href="https://github.com/Teslachinator"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Git} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© Kantov Nikita 2022 </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

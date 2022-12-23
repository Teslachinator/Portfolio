import React from "react";
import Header from "../Components/header/Header";
import Timer from "../timer/Timer";

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              {/* <Timer/> */}
              <h2 className="title-2">Мои навыки</h2>
              <p>
                JavaScript, ReactJS, Redux, HTML, CSS, SCSS, NPM, Yarn, NPX,
                StyledComponents
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Инструменты</h2>
              <p>VS Code, Prettier, Figma/Photoshop, Git</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;

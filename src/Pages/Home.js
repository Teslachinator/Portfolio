import React from "react";
import Header from "../Components/header/Header";
// import Timer from "../timer/Timer";

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
              <span>
                JavaScript, ReactJS, Redux, HTML, CSS, SCSS, NPM, NPX,
                StyledComponents
              </span>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Инструменты</h2>
              <span>VS Code, Prettier, Figma/Photoshop, Git</span>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;

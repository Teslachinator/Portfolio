import React from "react";
import gitHubIcon from ".//gitHub-black.svg";
import "./style.css";

const BtnGit = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={gitHubIcon} alt="" />
      GitHub
    </a>
  );
};

export default BtnGit;

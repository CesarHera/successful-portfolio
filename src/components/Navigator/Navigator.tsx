// react
import React from "react";

// styles
import "../../scss/components/__navigator.scss";

// assets
import github from "../../assets/icons/github.webp";
import down from "../../assets/icons/down.webp";
import mail from "../../assets/icons/mail.webp";

const Navigator: React.FC = () => {
  return (
    <ul className="navigator">
      <a href="https://github.com/CesarHera" target={"_blank"} rel="noreferrer" className="navigator__item">
        <img src={github} alt="GitHub icon" />
      </a>
      <a href="mailto:cesar.hr2003@gmail.com" className="navigator__item">
        <img src={mail} alt="Mail icon" title="cesar.hr2003@gmail.com" />
      </a>
      <a href="#projects" className="navigator__item">
        <img src={down} alt="Down arrows icon" style={{width: "21px"}} />
      </a>
    </ul>
  );
};

export default Navigator;

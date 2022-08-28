// react
import React from "react";

// styles
import "../../scss/components/_contact.scss";

// assets
import mail from "../../assets/icons/mail.webp";

const Contact: React.FC = () => {
  return (
    <div className="contact" id="contact">
      <a href="mailto:cesar.hr2003@gmail.com">
        Get in touch <img src={mail} alt="Email" />
      </a>
    </div>
  );
};

export default Contact;

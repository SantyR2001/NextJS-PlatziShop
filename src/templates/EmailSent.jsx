import React from "react";
import Button from "../components/Buttons";
import "../styles/EmailSent.scss";
import emailIcon from "@icons/email.svg";

function EmailSent(props) {
  return (
    <div className="login">
      <div className="form-container">
        <img src="../logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">
          Please check your inbox for instructions and how to reset the password
        </p>
        <div className="email-image">
          <img src={emailIcon} alt="email" />
        </div>
        <Button value="Log in" styleName="primary-button login-button" />
        <p className="resend">
          <span>didn´t receive the email?</span> <a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
}

export default EmailSent;

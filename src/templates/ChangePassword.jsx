import React from "react";
import Button from "../components/Buttons";
import Image from "next/image";

function ChangePassword() {
  return (
    <div className="login">
      <div className="form-container">
        <Image src="../logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <h3 className="title">Create a new password</h3>
        <p className="subtitle">Enter a new password for your account</p>
        <form className="form">
          <label htmlFor="password" className="label">
            {" "}
            Password{" "}
          </label>
          <input
            type="password"
            id="password"
            placeholder="*********"
            className="input input-password"
          />
          <label htmlFor="new-password" className="label">
            {" "}
            Re-enter password{" "}
          </label>
          <input
            type="password"
            id="new-password"
            placeholder="*********"
            className="input input-password"
          />
          <Button
            value="Confirm"
            type="submit"
            styleName="primary-button login-button"
          />
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;

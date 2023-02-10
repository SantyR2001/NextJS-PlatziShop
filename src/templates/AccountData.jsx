import React from "react";
import { Link } from "react-router-dom";
import Image from "next/image";
import Button from "../components/Buttons";
import logoYardSale from "@logos/logo_yard_sale.svg";
import "../styles/AccountData.scss";

function AccountData(props) {
  return (
    <div className="login">
      <div className="form-container">
        <Image src={logoYardSale} alt="logo" className="logo" />
        <h1 className="account-title">My account</h1>
        <form className="form">
          <div>
            <label htmlFor="name" className="label">
              {" "}
              Name{" "}
            </label>
            <p className="value"> Jeff </p>
            <label htmlFor="email" className="label">
              {" "}
              Email{" "}
            </label>
            <p className="value"> Platzi@example.com </p>
            <label htmlFor="password" className="label">
              {" "}
              Password{" "}
            </label>
            <p className="value"> ******** </p>
          </div>
          <button className="secondary-button login-button">
            <Link to="/edit-account">Edit</Link>
          </button>
          {/* <Button value="Edit" styleName="secondary-button login-button" />  */}
        </form>
      </div>
    </div>
  );
}

export default AccountData;

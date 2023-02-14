import React, { useRef } from 'react';
import Button from '../components/Buttons';
import logoYardSale from '@logos/logo_yard_sale.svg';
import Image from 'next/image';
import '../styles/Login.scss';

function Login() {
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
    };
    console.log(data);
  };

  return (
    <div className="login">
      <div className="form-container">
        <Image src={logoYardSale} alt="logo" className="logo" />
        <form ref={form} className="form">
          <label htmlFor='email' className="label"> Email address </label>
          <input type="text" id='email' name="email" placeholder="platzi@example.com" className="input input-password" />
          <label htmlFor='password' className="label"> Password </label>
          <input type="password" name="password" id='password' placeholder="*********" className="input input-password" />
          <button onClick={handleSubmit} className="primary-button login-button">
            Log in
          </button>
          <a href="/recovery-password"> Forgot my password </a>
        </form>
        <Button onClick={(e) => handleSubmit(e)} value="Sign Up" styleName="secondary-button signup-button" />
      </div>
    </div>
  );
}

export default Login;

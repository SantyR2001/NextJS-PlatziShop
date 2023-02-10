import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ChangePassword from "../pages/ChangePassword";
import EmailSent from "../pages/EmailSent";
import AccountData from "../pages/AccountData";
import Account from "../pages/Account";
import PasswordRecovery from "../pages/PasswordRecovery";
import CreateAccount from "../pages/CreateAccount";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";
import useInitialState from "../hooks/useInitialState";
import AppContext from "../context/AppContext";
import "../styles/global.css";

function App(props) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/password-recovery" element={<PasswordRecovery />} />
            <Route path="/account" element={<AccountData />} />
            <Route path="edit-account" element={<Account />} />
            <Route path="/sign-up" element={<CreateAccount />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/login" element={<Login />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="email-sent" element={<EmailSent />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;

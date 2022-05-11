import React from "react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { authRouterNames } from "../../../routers";
import s from "./login.module.scss";

export const Login: FC = () => {
  return (
    <div className={s.login}>
      <div className={s.login_inner}>
        <h1>Login</h1>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button className={s.login_btn}>Kirish</button>
        <div className={s.login_link}>
          <Link to={authRouterNames.registrationStepOne}>
            Telefon Nomer orqali tizimga kirish
          </Link>
        </div>
      </div>
    </div>
  );
};

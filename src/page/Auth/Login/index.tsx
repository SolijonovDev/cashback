import React from "react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { authRouterNames } from "../../../routers";
import s from "./login.module.scss";
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';

export const Login: FC = () => {
  return (
    <div className={s.login}>
      <div className={s.login_inner}>
        <Typography variant="h3" align="center" gutterBottom>Login</Typography>
        <div className={s.login_input_block}>
        <TextField variant="outlined"  fullWidth type="email" placeholder="email" />
        </div>
        <div className={s.login_input_block}>
        <TextField variant="outlined" fullWidth type="password" placeholder="password" />
        </div>
        <Button size="large" variant="contained" color="primary" className={s.login_btn}>Kirish</Button>
        <div className={s.login_link}>
          <Link to={authRouterNames.registrationStepOne}>
            Telefon Nomer orqali tizimga kirish
          </Link>
        </div>
      </div>
    </div>
  );
};

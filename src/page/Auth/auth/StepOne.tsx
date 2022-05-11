import React from "react";
import { FC } from "react";
import { Link, useHistory } from "react-router-dom";
import { authRouterNames } from "../../../routers";
import s from "./reg.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setPhone, setSuccessNumberSend } from "../../../store/reducers/auth";
import { useAppSelector } from "./../../../hooks/redux";
import { sendNumber } from "../../../store/actions/auth-actions";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Button, CircularProgress, Typography } from "@material-ui/core";

export const StepOne: FC = () => {
  const dispatch = useDispatch();
  const { phone, isNumberSuccessSend, isNumberLoading, numberErrorMessage } =
    useAppSelector((state) => state.auth);
  const history = useHistory();

  if (isNumberSuccessSend) {
    history.push(authRouterNames.registrationStepTwo);
    dispatch(setSuccessNumberSend(false));
  }

  const changePhone = (number: any) => {
    dispatch(setPhone(number));
  };

  const handleSend = (e: any) => {
    console.log("tel: ", phone);
    dispatch(sendNumber(phone));
  };

  return (
    <div className={s.reg}>
      <div className={s.reg_inner}>
        <h1>Tizimga kirish</h1>
        <div className={s.reg_phone_block}>
          <PhoneInput
           country={"uz"} 
           value={phone} 
           onChange={changePhone} 
           placeholder="+998 XX XXX XX XX"
           />
        </div>
        <Button color="primary" variant="contained" className={s.reg_send} onClick={handleSend}>
          {isNumberLoading ?   (<CircularProgress color="secondary" />) : <Typography>Yuborish</Typography>}
        </Button>
        <div className={s.reg_link}>
          <Link to={authRouterNames.login}>Login</Link>
        </div>
      </div>
    </div>
  );
};

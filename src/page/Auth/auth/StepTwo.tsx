import React, { FC } from "react";
import { authRouterNames } from "../../../routers";
import s from "./reg.module.scss";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkLogin } from "../../../store/actions/auth-actions";
import { useAppSelector } from "./../../../hooks/redux";
import { setCode } from "../../../store/reducers/auth";
import { Button, IconButton } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
// import IconButton from '@mui/material/IconButton';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const StepTwo: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { phone, code, isCodeLoading, codeErrorMessage } = useAppSelector(
    (state) => state.auth
  );

  const changeCode = (e: any) => {
    dispatch(setCode(e.target.value));
  };

  const handleSend = () => {
    dispatch(checkLogin({ code, phone }));
  };

  return (
    <div className={s.reg}>
      <div className={s.reg_inner}>
        <div>
          <h2>{Boolean(codeErrorMessage) && "Error"}</h2>
        </div>
        <IconButton
        onClick={() => history.push(authRouterNames.registrationStepOne)}
        >
          <ArrowBack />
        </IconButton>
        <h1>StepTwo</h1>
        <input
          placeholder="code"
          type="text"
          value={code}
          onChange={changeCode}
        />
        <Button variant="contained" color="primary" className={s.reg_send} onClick={handleSend}>
          {isCodeLoading ? "Loading" : "Yuborish"}{" "}
        </Button>
        <div className={s.reg_link}>
          <Link to={authRouterNames.login}>Login</Link>
        </div>
      </div>
    </div>
  );
};

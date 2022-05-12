import React, { FC } from "react";
import { authRouterNames } from "../../../routers";
import s from "./reg.module.scss";
import { Link, useHistory } from "react-router-dom";
import { checkLogin } from "../../../store/actions/auth-actions";
import { useAppDispatch, useAppSelector } from "./../../../hooks/redux";
import {
  setCode,
  setCodeErrorMessage,
  setCodeLoading,
} from "../../../store/reducers/auth";
import { Button, IconButton, TextField, Typography } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";

export const StepTwo: FC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(10);
  const { phone, code, isCodeLoading, codeErrorMessage } = useAppSelector(
    (state) => state.auth
  );
  React.useEffect(() => {
    dispatch(setCode(""));
    dispatch(setCodeErrorMessage(""));
    dispatch(setCodeLoading(false));
  }, []);
  React.useEffect(() => {
    let myInterval = setInterval(() => {
      if (isCodeLoading || codeErrorMessage) {
        clearInterval(myInterval);
      }
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  if (!phone) {
    history.push(authRouterNames.registrationStepOne);
  }

  const changeCode = (e: any) => {
    dispatch(setCode(e.target.value));
  };
  if (isCodeLoading) {
  }

  const handleSend = () => {
    dispatch(checkLogin({ code, phone }));
  };

  return (
    <div className={s.reg}>
      <div className={s.reg_inner}>
        <IconButton
          onClick={() => history.push(authRouterNames.registrationStepOne)}
        >
          <ArrowBack />
        </IconButton>
        <h1 className={s.reg_title}>Tasdiqlash</h1>
        <Typography gutterBottom>
          +{phone} nomerga tasdiqlash kodi yuborildi
        </Typography>

        {codeErrorMessage || isCodeLoading || (
          <Typography variant="h4" gutterBottom>
            {" "}
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </Typography>
        )}

        <div className={s.reg_error_mes}>
          <Typography>{Boolean(codeErrorMessage) && "Error"}</Typography>
        </div>
        {!(minutes === 0 && seconds === 0) ? (
          <TextField
            placeholder="code"
            type="text"
            variant="outlined"
            value={code}
            fullWidth
            onChange={changeCode}
            className={s.reg_text_block}
          />
        ) : (
          !isCodeLoading &&
          !codeErrorMessage && (
            <Typography gutterBottom>Vaqt o'tib ketti</Typography>
          )
        )}

        <Button
          variant="contained"
          color="primary"
          className={s.reg_send}
          onClick={handleSend}
          disabled={minutes === 0 && seconds === 0}
        >
          {isCodeLoading ? "Loading" : "Yuborish"}{" "}
        </Button>
        <div className={s.reg_link}>
          <Link to={authRouterNames.login}>Login</Link>
        </div>
      </div>
    </div>
  );
};

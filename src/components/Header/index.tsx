import { Button } from "@material-ui/core";
import React from "react";
import { FC } from "react";
import s from "./hed.module.scss";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { logout } from "../../store/reducers/auth";
import { InputBase } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";

export const Header: FC = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={s.header}>
      <div className="container">
        <div className={s.header_inner}>
          <Link to="/home">Logo</Link>
          <div className={s.header_search}>
            <InputBase
              placeholder="Qidirish..."
              inputProps={{ "aria-label": "qidirish..." }}
            />
            <IconButton aria-label="search">
              <SearchOutlined />
            </IconButton>
          </div>
          <Button onClick={handleLogout}>Chiqish</Button>
        </div>
      </div>
    </div>
  );
};

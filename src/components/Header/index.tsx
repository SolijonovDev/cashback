import { Button } from '@material-ui/core';
import React from 'react'
import { FC } from 'react';
import s from './hed.module.scss'
import { Link } from 'react-router-dom';

export const Header:FC=()=> {
  return (
    <div className={s.header}>
        <div className={s.header_inner}>
            <Link to="/home">Logo</Link>
            <Button>Chiqish</Button>
        </div>
    </div>
  )
}

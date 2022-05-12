import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import s from './home.module.scss'
import Api from '../../http/companys.js'
import { Item } from './Item';

interface item{
    id:number;
    name:string;
    short_description:string;
    created_at:string;
}
export const Home=()=> {
    const [data,setData]=useState<item[]>([])

    async function getCom(){
        const res=await Api.getCompanies()
        const r=await Api.getOneCompany()
        setData(res.data.items)  
    }
    useEffect(()=>{
       getCom()
    },[])
    console.log("home data",data);
    
  return (
    <div className={s.home}>
          <div className={s.items}>
          {
              data.length && data.map(v=><Item item={v} key={v.id+v.name}/>)
           }
          </div>
        </div>
  )
}

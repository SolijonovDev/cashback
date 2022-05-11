import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { getCompanies } from '../../http';
import s from './home.module.scss'

interface item{
    id:number;
    name:string;
    short_description:string;
    created_at:string;
}
export const Home=()=> {
    const [data,setData]=useState<item[]>([])

    async function getCom(){
        const res=await getCompanies()
        setData(res?.items)  
    }
    useEffect(()=>{
    //    getCom()
    },[])
    console.log("home data",data);
    
  return (
    <div className={s.home}>
          <div className={s.items}>
          {
              data.length && data.map(v=>(
                   <div className={s.item}>
                       <h1>{v.id}</h1>
                       <p>{v.name}</p>
                       <p>{v.short_description}</p>
                       <p>{v.created_at}</p>
                   </div>
               ))
           }
          </div>
        </div>
  )
}

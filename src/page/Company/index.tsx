
import { Button } from '@material-ui/core';
import { FC, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Api from '../../http/companys.js'


interface dataType{
    params:{
        company:string | undefined;
    };
    total_count:string | number | null | undefined;
}

export const Company:FC=()=>{
    const params:{id:string| undefined}=useParams()
    const [data,setData]=useState<dataType>()
    const history=useHistory()
    async function fun(){
        const res=await Api.getOneCompany(params.id)
        if(res.status===200){
            setData(res.data)
        }        
    }
    useEffect(()=>{
       fun()
    },[])
    return (
        <div>
           <h1>Company</h1>
           <h2>{data?.params?.company}</h2>
           <Button onClick={()=>history.push("/home")}>Back</Button>
        </div>
    )
}
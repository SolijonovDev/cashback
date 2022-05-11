import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { sendVerification, verifyLogin } from "../../http";



export const sendNumber=createAsyncThunk(
    "sendNumber",async (phone:string | null | undefined,thunkAPI)=>{
        debugger
        try{
            let res=await sendVerification(phone);
            return res;
        }catch(e){
             return thunkAPI.rejectWithValue("Nomer noto'g'ri kiritildi")
        }
    }
)

export const checkLogin=createAsyncThunk(
    "checkLogin",async (useData:{code:string | number;phone:string |  null | undefined},thunkAPI)=>{
        debugger
        try{
            const {code,phone}=useData;
            let res=await verifyLogin(phone,code);
            return res;
        }catch(e){
            console.log(e);
            
             return thunkAPI.rejectWithValue("Kod noto'g'ri kiritildi")
        }
    }
)
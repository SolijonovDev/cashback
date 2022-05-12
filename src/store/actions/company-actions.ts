import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../http/companys.js";

export const getCompanies = createAsyncThunk(
  "getCompanies",
  async (_, thunkAPI) => {
    try {
      let res = await Api.getCompanies();
      return res;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e?.message);
    }
  }
);

export const getOneCompany = createAsyncThunk(
  "getOneCompany",
  async (id:string | undefined, thunkAPI) => {
    try {
      let res = await Api.getOneCompany(id);
      return res;
    } catch (e:any) {
      return thunkAPI.rejectWithValue(e?.message);
    }
  }
);

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCompanies, getOneCompany } from "../actions/company-actions";

type compnayType={
    id:number;
    name:string;
}
interface IStateType {
  items: compnayType[];
  loading: boolean;
  error: boolean;
  errorMessage: string | undefined | null;
  isLoadingProducts:boolean;
  products:{
    num_items_per_page:number | string | undefined;
    page_range:number | string;
    params:{
        company:number | string;
    }
  }
}
const initialState: IStateType = {
  items: [],
  loading: false,
  error: false,
  errorMessage: "",
  isLoadingProducts:false,
  products:{
      num_items_per_page:0,
      page_range:0,
      params:{
          company:0
      }
  }
};

type payloadType = {
  data: {
    items: compnayType[];
  };
  status: number;
};
const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    setError(state: IStateType, action: PayloadAction<string>) {
      state.errorMessage = "";
      state.error=false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getCompanies.fulfilled.type,
      (state:IStateType, action: PayloadAction<payloadType>) => {
        debugger;
        if (action.payload.status === 200){
          state.items=action.payload.data.items;
        } 
        state.loading = false;
      }
    );

    builder.addCase(getCompanies.pending.type, (state:IStateType) => {
      state.loading = true;
    });

    builder.addCase(
      getCompanies.rejected.type,
      (state:IStateType, action: PayloadAction<string>) => {
        debugger;
        state.error = true;
        state.errorMessage = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(getOneCompany.fulfilled.type,(state:IStateType,action:PayloadAction<any>)=>{
      debugger
        state.products=action.payload.data;
        state.isLoadingProducts=false;
    });

    builder.addCase(getOneCompany.pending.type,(state:IStateType,action:PayloadAction<any>)=>{
      debugger
        state.isLoadingProducts=true;
    })
    builder.addCase(getOneCompany.rejected.type,(state:IStateType,action:PayloadAction<any>)=>{
      debugger
        state.isLoadingProducts=false;
    })
  },
});

export default companySlice.reducer;

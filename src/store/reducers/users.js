
// import { createSlice } from '@reduxjs/toolkit';
// // import { getUser } from '../actions/auth-actions';
// import { PayloadAction } from '@reduxjs/toolkit';

// interface IStateType{
//     users:any;
//     loading:boolean;
//     error:boolean;
// }
// const initialState:IStateType={
//     users:[],
//     loading:false,
//     error:false
// }

// const userSlice=createSlice({
//     name:"user",
//     initialState,
//     reducers:{},
//     extraReducers:(builder)=>{
//         builder.addCase(getUser.fulfilled.type,(state,action:PayloadAction<any[]>)=>{
//             state.users=action.payload;
//             state.loading=false;
//             state.error=false;
//         })

//         builder.addCase(getUser.pending.type,(state)=>{
//             state.loading=true;
//         })

//         builder.addCase(getUser.rejected.type,(state)=>{
//             state.error=true;
//             state.loading=false;
//         })
//     }
// })

// export default userSlice.reducer;
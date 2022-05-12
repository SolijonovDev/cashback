import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { checkLogin, sendNumber } from "./../actions/auth-actions";

type intialStateType = {
  isAuth: boolean;
  phone: string | null | undefined;
  code: string | number;
  isNumberSuccessSend: boolean;
  numberErrorMessage: string;
  codeErrorMessage: string;
  isNumberLoading: boolean;
  isCodeLoading: boolean;
};

const initialState: intialStateType = {
  isAuth: false,
  isNumberSuccessSend: false,
  phone: "",
  code: "",
  isNumberLoading: false,
  isCodeLoading: false,
  numberErrorMessage: "",
  codeErrorMessage: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state: intialStateType, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    setPhone(
      state: intialStateType,
      action: PayloadAction<string | undefined | null>
    ) {
      state.phone = action.payload;
    },
    setCode(state: intialStateType, action: PayloadAction<string | number>) {
      state.code = action.payload;
    },
    setCodeLoading(state: intialStateType, action: PayloadAction<boolean>) {
      state.isCodeLoading = action.payload;
    },
    setSuccessNumberSend(
      state: intialStateType,
      action: PayloadAction<boolean>
    ) {
      state.isNumberSuccessSend = action.payload;
    },
    setCodeErrorMessage(state: intialStateType, action: PayloadAction<string>) {
      state.codeErrorMessage = action.payload;
    },
    logout(state: intialStateType) {
      localStorage.setItem("token", "");
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      sendNumber.fulfilled,
      (state: intialStateType, action: PayloadAction<any>) => {
        const data = action.payload;
        if (data.status === 204) {
          state.isNumberSuccessSend = true;
        } else {
          state.isNumberSuccessSend = false;
        }
        state.isNumberLoading = false;
      }
    );

    builder.addCase(
      sendNumber.pending,
      (state: intialStateType, action: PayloadAction<any>) => {
        state.isNumberLoading = true;
      }
    );

    builder.addCase(
      sendNumber.rejected,
      (state: intialStateType, action: PayloadAction<any>) => {
        alert("Error");
        state.isNumberLoading = false;
        state.numberErrorMessage = action.payload;
      }
    );

    builder.addCase(
      checkLogin.fulfilled,
      (state: intialStateType, action: PayloadAction<any>) => {
        state.isCodeLoading = false;
        const data = action.payload;
        if (data.status === 200) {
          localStorage.setItem("token", data.data.token);
          state.isAuth = true;
        }
      }
    );

    builder.addCase(
      checkLogin.pending,
      (state: intialStateType, action: PayloadAction<any>) => {
        state.isCodeLoading = true;
      }
    );

    builder.addCase(
      checkLogin.rejected,
      (state: intialStateType, action: PayloadAction<any>) => {
        state.isCodeLoading = false;
        state.codeErrorMessage = action.payload;
      }
    );
  },
});

export const {
  logout,
  setAuth,
  setPhone,
  setCode,
  setSuccessNumberSend,
  setCodeErrorMessage,
  setCodeLoading,
} = authSlice.actions;
export default authSlice.reducer;

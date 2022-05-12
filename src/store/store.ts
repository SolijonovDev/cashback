import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  authReducer from './reducers/auth';
import companyReducer from './reducers/company'

const rootReducers=combineReducers({
    auth:authReducer,
    company:companyReducer
})



export const store=configureStore({
    reducer:rootReducers,
})


export type AppDispatch=typeof store.dispatch
export type RootState=ReturnType <typeof store.getState>



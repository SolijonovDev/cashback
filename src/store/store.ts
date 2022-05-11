import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  authReducer from './reducers/auth';

const rootReducers=combineReducers({
    auth:authReducer,
})



export const store=configureStore({
    reducer:rootReducers,
})


export type AppDispatch=typeof store.dispatch
export type RootState=ReturnType <typeof store.getState>



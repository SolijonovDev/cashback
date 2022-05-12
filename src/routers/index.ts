import { Login } from '../page/Auth/Login';
import { StepOne } from '../page/Auth/auth/StepOne';
import { StepTwo } from '../page/Auth/auth/StepTwo';
import { Company } from './../page/Company/index';
import { Home } from './../page/Home/index';

export enum authRouterNames{
    registrationStepOne="/registration/step-one",
    registrationStepTwo="/registration/step-two",
    login="/login",
    company="/company/:id"
}

export enum routerNames{
    home="/home",
    companyOne="/company/:id"
}



export const authRouters=[
    {
        id:1,
        path:authRouterNames.registrationStepOne,
        com:StepOne,
        exact:true
    },
    {
        id:2,
        path:authRouterNames.registrationStepTwo,
        com:StepTwo,
        exact:true
    },
    {
        id:3,
        path:authRouterNames.login,
        com:Login,
        exact:true
    },
    
]

export const routers=[
    {
        id:1,
        path:routerNames.home,
        com:Home,
        exact:true
    },
    {
        id:2,
        path:routerNames.companyOne,
        com:Company,
        exact:true
    }
    
]


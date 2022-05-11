import { Login } from '../page/Auth/Login';
import { StepOne } from '../page/Auth/auth/StepOne';
import { StepTwo } from '../page/Auth/auth/StepTwo';

export enum authRouterNames{
    registrationStepOne="/registration/step-one",
    registrationStepTwo="/registration/step-two",
    login="/login"
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
    }
]
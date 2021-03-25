import React from "react"
import {Switch} from "react-router-dom"
import ProvideAuth from "../../modules/auth/index"



function AppRouting({authService,stringService,RecaptchaVerifier}){
    const {AuthRoutes} = ProvideAuth()
    
    return (
        <Switch>
            <AuthRoutes authService={authService} stringService={stringService}  RecaptchaVerifier={RecaptchaVerifier}/>
        </Switch>
    )
}

export default AppRouting
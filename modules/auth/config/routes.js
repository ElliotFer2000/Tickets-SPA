import { Route, Switch } from "react-router-dom"
import React from "react"
import Login from "../pages/login"
import ConfirmPhone from "../pages/confirm-number"
import Home from "../pages/home"
function AuthRoutes({authService,stringService,RecaptchaVerifier}) {

    return (
        <Switch>
            <Route exact path="/">
                <Login authService={authService} stringService={stringService} RecaptchaVerifier={RecaptchaVerifier}/>
            </Route>
            <Route exact path="/confirmPhone">
                <ConfirmPhone authService={authService} stringService={stringService}/>
            </Route>
            <Route exact path="/home">
                <Home authService={authService}/>
            </Route>
        </Switch>
    )
}

export default AuthRoutes
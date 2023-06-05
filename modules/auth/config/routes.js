import { Route, Switch } from "react-router-dom"
import React from "react"
import Login from "../pages/login"
import ConfirmPhone from "../pages/confirm-number"
import Home from "../pages/home"
import Price from "../pages/price"
import About from "../pages/about"
import Terms from "../pages/terminos"
import Use from "../pages/use"
import NotFound from "../pages/notfound"

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
            <Route exact path="/precio">
                <Price/>
            </Route>
            <Route exact path="/acerca">
                <About />
            </Route>
            <Route exact path="/terminos">
                <Terms />
            </Route>
            <Route exact path="/uso">
                <Use />
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    )
}

export default AuthRoutes
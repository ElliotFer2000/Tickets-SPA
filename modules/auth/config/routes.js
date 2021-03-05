import { Route, Switch } from "react-router-dom"
import React from "react"
import Login from "../pages/login"
import SignUp from "../pages/sign-up"

function AuthRoutes(props) {

    return (
        <Switch>
            <Route exact path="/">
               <Login/>
            </Route>
            <Route exact path="/signUp">
                <SignUp/>
            </Route>
        </Switch>
    )
}

export default AuthRoutes
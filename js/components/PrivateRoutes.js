import { useHistory, Switch, Redirect } from "react-router-dom"
import { logIn, logOut, isLogged } from "../repository/Usuarios"
import React from "react"

function PrivateRoutes({ children, ...rest }) {
    if (isLogged) {
        return children
    } else {
        return (<Redirect to="/login"/>);
    }
}

export default PrivateRoutes;
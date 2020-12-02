import { Redirect, Switch } from "react-router-dom"
import { isLogged } from "../repository/Usuarios"
import React from "react"



function PrivateRoutes({ children, ...rest }) {


    if (isLogged) {
        return (    <Switch>
                        {children}
                   </Switch>);
    } else {
        return (<Redirect to="/login" />);
    }
}

export default PrivateRoutes;
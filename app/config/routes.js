import React from "react"
import {Switch} from "react-router-dom"
import ProvideAuth from "../../modules/auth/index"



function AppRouting(props){
    const {AuthRoutes} = ProvideAuth()

    return (
        <Switch>
            <AuthRoutes/>
        </Switch>
    )
}

export default AppRouting
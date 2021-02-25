import { Redirect, Switch } from "react-router-dom"
import React, { useContext } from "react"
import { AppContext } from './Context'


function PrivateRoutes({ children, ...rest }) {
    const context = useContext(AppContext)

    if (context) {
        return (<Switch>
                  {children}
                </Switch>);
    } else {
        return (<Redirect to="/login" />);
    }
}

export default PrivateRoutes;
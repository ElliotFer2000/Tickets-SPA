import React from "react"
import {Link} from "react-router-dom"

function HelpMessage(props) {
    return (
        <p>
            No tienes cuenta?
            <Link to="/signUp">
                <span className="login__link"> Crea una gratis</span>
            </Link>
        </p>
    )
}

export default HelpMessage
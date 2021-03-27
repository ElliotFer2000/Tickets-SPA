import React from "react"
import {Link} from "react-router-dom"

function HelpMessage(props) {
    return (
        <p>
            Al usar la aplicacion, aceptas nuestros
            <Link to="/signUp">
                <span className="login__link"> terminos y condiciones</span>
            </Link>
        </p>
    )
}

export default HelpMessage
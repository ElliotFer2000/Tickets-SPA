import React from "react"
import {Link} from "react-router-dom"
function LandingNav(props) {
    return (
        <nav className="landing-nav">
                <Link to="/uso" className="landing-nav__link">
                    ¿Como usar la app?
                </Link>
                <Link to="/precio" className="landing-nav__link">
                    Precio
                </Link>
                <Link to="/acerca" className="landing-nav__link">
                   Acerca de
                </Link>
                <Link to="/terminos" className="landing-nav__link">
                   Terminos y condiciones
                </Link>
        </nav>
    )
}

export default LandingNav
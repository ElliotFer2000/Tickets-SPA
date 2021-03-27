import React from "react"
import BackgroundHandTicket from "../components/background-hand-ticket"

function LandingFooter(props) {
    return (
        <div className="landing-footer">
            <BackgroundHandTicket alignment="center"/>
            <footer className="landing-footer__background">
                <p className="landing-footer__corporateName">Pasá</p>
                <p>Puedes contactar con Pasá por los siguientes medios: </p>
                
                <ul>
                    <li>
                        <span className="material-icons">phone </span> +505 84200478
                    </li>
                    <li>
                        <span className="material-icons">email </span> soporte.pasa@gmail.com
                    </li>
                </ul>
            </footer>
        </div>

    )
}

export default LandingFooter
import React from "react"
import BackgroundHandTicket from "../components/background-hand-ticket"

function LandingFooter(props) {
    return (
        <div className="landing-footer">
            <BackgroundHandTicket alignment="center"/>
            <footer className="landing-footer__background">
                <p className="landing-footer__corporateName">Pasá</p>
                <p>Para escribir cualquier duda acerca de la aplicacion, los siguientes medios estan disponibles: </p>
                <dl>
                    <dt>Telefono</dt>
                    <dd>+505 84200478</dd>
                    <dt>Correo Electronico</dt>
                    <dd>soporte.pasa@gmail.com</dd>
                </dl>
            </footer>
        </div>

    )
}

export default LandingFooter
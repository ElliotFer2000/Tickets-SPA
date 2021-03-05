import React from "react"
function Header({subtitle}) {
    return (
        <header>
            <h1 className="login__heading">
                Compra numeros de<br />
                loteria y <br />
                gana dinero
            </h1>
            <p className="login__subtitle">{subtitle}</p>
        </header>
    )
}

export default Header
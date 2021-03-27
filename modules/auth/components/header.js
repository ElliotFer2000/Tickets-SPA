import React from "react"
function Header({children}) {
    return (
        <header>
            <h1 className="login__heading">
                {children}
            </h1>
        </header>
    )
}

export default Header
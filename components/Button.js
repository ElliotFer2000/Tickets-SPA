import React from "react"

function Button({clickHandler,text}){
    return(
        <button className="btn-large waves-effect login__signIn" onClick={clickHandler}>{text}</button>
    )
}

export default Button

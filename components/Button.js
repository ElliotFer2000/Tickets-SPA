import React from "react"

function Button({clickHandler,text,classes}){
    
    return(
        <button className={"btn-large waves-effect " + classes} onClick={clickHandler}>{text}</button>
    )
}

export default Button

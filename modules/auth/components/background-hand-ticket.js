import React from "react"
import tickets from "url:../../../assets/img/tickets.png"

function BackgroundHandTicket(props){
    return (
        <>
            <img src={tickets} aria-hidden="true" className="login__backgroundHandTicket"/>
        </>
    );
}

export default BackgroundHandTicket
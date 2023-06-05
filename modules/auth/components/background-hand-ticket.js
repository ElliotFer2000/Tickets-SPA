import React from "react"
import tickets from "../../../assets/img/tickets.png"
import ticketGroup from "../../../assets/img/ticket-group.png"

function BackgroundHandTicket({ alignment }) {

    return (
        <>
            <div className={(alignment === "center" ? "login__backgroundHandTicket--center" : "")}>
                <img src={ticketGroup} aria-hidden="true" className="login__ticket-1"/>
                <img src={tickets} aria-hidden="true" className="login__backgroundHandTicket" />
                <img src={ticketGroup} aria-hidden="true" className="login__ticket-2"  />
            </div>
        </>
    );
}

export default BackgroundHandTicket
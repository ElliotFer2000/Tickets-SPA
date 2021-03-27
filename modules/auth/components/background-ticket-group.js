import React from "react"
import ticketGroup from "url:../../../assets/img/ticket-group.png"

function BackgroundTicketGroup(props) {
    return (
        <div className="login__ticketGroupContainer">
            <div className="login__ticketGroup">
                <img src={ticketGroup} aria-hidden="true" />
            </div>
            <div className="login__ticketGroup">
                <img src={ticketGroup} aria-hidden="true" />
            </div>
            <div className="login__ticketGroup">
                <img src={ticketGroup} aria-hidden="true" />
            </div>
        </div>
    )
}

export default BackgroundTicketGroup;
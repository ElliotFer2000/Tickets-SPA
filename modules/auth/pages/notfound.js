import React from "react"
import BackgroundTicketGroup from "../components/background-ticket-group"
import LandingNav from "../components/landing-nav"
import LandingFooter from "../components/landing-footer"

function NotFound(props) {
  return (
    <>
      <LandingNav />
        <h1 className="container important-heading">ERROR 404</h1>
        <div className="container">
           <p>Recurso no encontrado</p>
        </div>
      <LandingFooter/>

    </>
  )
}

export default NotFound;
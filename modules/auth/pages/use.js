import React from "react"
import LandingNav from "../components/landing-nav"
import LandingFooter from "../components/landing-footer"

function Use(props) {
  return (
    <>
      <LandingNav />
        <h1 className="container important-heading">Como usar la app</h1>

        <div className="container">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
      <LandingFooter/>

    </>
  )
}

export default Use;
import React from "react";
import {NavLink,Link} from "react-router-dom";


class Nav extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(<nav className="Nav">
                  <ul className="Nav__Links">
                      <li>
                         <Link to="/" className="Nav__Link">Pagina principal</Link>
                      </li>
                      <li>
                         <NavLink to="/Usuarios" className="Nav__Link" activeClassName="Nav__Link--Active">Usuarios</NavLink>
                       </li>
                      <li>
                          <NavLink to="/Sorteos" className="Nav__Link" activeClassName="Nav__Link--Active">Sorteos</NavLink>
                      </li>
                  </ul>
               </nav>);
    }
}

export default Nav;
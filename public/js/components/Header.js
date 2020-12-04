import React from "react"
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'


function Header({ sectionDesc, handleSession, ...rest }) {

     return (<AppBar>
                  <ToolBar>
                     <h1>{sectionDesc}</h1>
                     {rest.loginBtn ? rest.loginBtn() : null}
                     {rest.logOutBtn ? rest.logOutBtn() : null}
                   </ToolBar>
            </AppBar>);
}

export default Header
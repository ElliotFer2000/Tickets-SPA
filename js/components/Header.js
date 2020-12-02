import React from "react"
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'


function Header({ sectionDesc }) {
     
     return (<AppBar>
                <ToolBar>
                 <h1>{sectionDesc}</h1>
                </ToolBar>
            </AppBar>);
}

export default Header
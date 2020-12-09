import React, { useContext } from "react"
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import Box from '@material-ui/core/Box'
import { AppContext } from './Context'



function Header({ sectionDesc, handleSession, ...rest }) {
  const context = useContext(AppContext)

  return (<AppBar>
    <ToolBar>
      <Box display="flex" justifyContent="space-between" width="100%">
        <h1>{sectionDesc}</h1>
        <Box display="flex" alignItems="center">
          <Box mr={2}>
            <span> {context ? `${context.userName}` : ``}</span>
          </Box>
          {rest.loginBtn ? rest.loginBtn() : null}
          {rest.logOutBtn ? rest.logOutBtn() : null}

        </Box>
      </Box>
    </ToolBar>
  </AppBar>);
}

export default Header
import React from "react";
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { textTheme } from "./themes/Themes"
import { ThemeProvider } from '@material-ui/core/styles'


function SubmitUser(props) {

    return (<form className="usersSubmit">
        <Box m={8}>
            <ThemeProvider theme={textTheme}>
                <div className="usersSubmit__wrapper">
                    <label htmlFor="nombres">Nombres</label>
                    <input type="text" placeholder="Nombres del usuario" name="nombres" required id="nombres" />
                </div>
                <div className="usersSubmit__wrapper">
                    <label htmlFor="apellidos">Apellidos</label>
                    <input type="text" placeholder="Apellidos del usuario" name="apellidos" required id="apellidos" />
                </div>
                <div className="usersSubmit__wrapper">
                    <label htmlFor="clave">Clave de acceso</label>
                    <input type="text" placeholder="Clave de acceso" name="clave" required id="clave" />
                </div>
                <div className="usersSubmit__wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Nombre de usuario" name="username" required id="username" />
                </div>
                <Box mt={1}>
                    <Button variant="contained" color="primary">
                        Agregar
                </Button>
                </Box>
            </ThemeProvider>
        </Box>
    </form>);
}

export default SubmitUser;
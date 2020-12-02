import React from "react";
import { useHistory } from "react-router-dom"
import { logIn, logOut, isLogged } from "../repository/Usuarios"
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import { textTheme } from "./themes/Themes"
import { ThemeProvider } from '@material-ui/core/styles'

function Login(props) {
    const history = useHistory()

    async function handleLogin(event) {


        try {
            const session = await logIn()

            console.log(session)



            history.push('/Home', { session })

            //history.push('/Home',resp)

        } catch (err) {
            console.log(err)
        }

    }

    return (<section className="Auth">
        <Box p={1}>

            <h1>Acceso para usuarios</h1>
            <form>
                <Box >
                    <ThemeProvider theme={textTheme}>
                        <Box mt={1}>
                            <Box display="flex" flexDirection="column" mt={1}>
                                <TextField id="username" label="Nombre de usuario" variant="filled" />
                            </Box>

                            <Box display="flex" flexDirection="column" mt={1}>
                                <TextField id="password" label="Contraseña" variant="filled"  />
                            </Box>
                        </Box>


                        <Box mt={1} width="100%">

                            <Button variant="contained" color="primary" onClick={handleLogin}>
                                Acceder
                            </Button>

                        </Box>
                    </ThemeProvider>
                </Box>
            </form>
        </Box>
    </section>);

}

export default Login;
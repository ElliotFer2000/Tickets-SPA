import React, { useContext, useEffect, useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom'
import { logIn, logOut, isLogged } from '../repository/Usuarios'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import { textTheme } from "./themes/Themes"
import { ThemeProvider } from '@material-ui/core/styles'
import { AppContext } from './Context'

function Login({ handleSession }) {

    const context = useContext(AppContext)
    const { pathname } = useLocation()

    console.log(pathname)
    async function handleLogin(event) {
        try {
            const session = await logIn()
            handleSession(session)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (context && (pathname === '/LogOut')) {
            handleSession(null)
        }
    })

    if (context && (pathname === '/LogOut')) {
        
        return <Redirect to='/LogOut' />
    }

    if (!context && (pathname === '/login')) {
        return (<section className="Auth">
            <Box p={1}>
                <h1>Acceso para usuarios</h1>
                <form>
                    <Box>
                        <ThemeProvider theme={textTheme}>
                            <Box mt={1}>
                                <Box display="flex" flexDirection="column" mt={1}>
                                    <TextField id="username" label="Nombre de usuario" variant="filled" />
                                </Box>
                                <Box display="flex" flexDirection="column" mt={1}>
                                    <TextField id="password" label="Contraseña" variant="filled" />
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

    if (!context && (pathname === '/LogOut')) {
        return <Redirect to='/login' />
    }

    return <Redirect to='/Home' />
}

export default Login;
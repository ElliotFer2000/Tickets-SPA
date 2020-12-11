import React, { useContext, useEffect, useState } from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import {logIn} from '../repository/Usuarios'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import { textTheme } from "./themes/Themes"
import { ThemeProvider } from '@material-ui/core/styles'
import { AppContext } from './Context'
import Auth from '../models/Auth'
import CircularProgress from '@material-ui/core/CircularProgress'
import Message from './Message'


function Login({ handleSession }) {

    const context = useContext(AppContext)
    const [auth, setAuth] = React.useState('unauth');
    let authFeedBack = null
    const { pathname } = useLocation()

    console.log(pathname)
    async function handleLogin(event) {

        const email = window.email.value
        const password = window.password.value

        if (email && password) {
            setAuth('authloading')
            const session = await logIn(new Auth(email, password))
            console.log(session)
            if (session === 500) {
                setAuth('authfailed')
            } else {
                handleSession(session)
            }

        } else {
           setAuth('emptyfields')
        }
    }

    if (auth === 'authloading') {
        authFeedBack = <CircularProgress color="primary" />
    }

    if (auth === 'authfailed') {
        authFeedBack = <Message message="Email o contraseña incorrectos" />
    }

    if(auth === 'emptyfields'){
        authFeedBack = <Message message="Tiene campos vacios" />
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
                <form className="Auth__form">
                    <Box>
                        <ThemeProvider theme={textTheme}>
                            <Box mt={1}>
                                <Box display="flex" flexDirection="column" mt={1}>
                                    <TextField id="email" label="Nombre de usuario" variant="filled" required />
                                </Box>
                                <Box display="flex" flexDirection="column" mt={1}>
                                    <TextField id="password" label="Contraseña" variant="filled" type="password" required />
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
                <Box>
                   {authFeedBack}
                </Box>
            </Box>
        </section>);
    }

    if (!context && (pathname === '/LogOut')) {
        return <Redirect to='/login' />
    }

    return <Redirect to='/Home' />
}

export default Login;
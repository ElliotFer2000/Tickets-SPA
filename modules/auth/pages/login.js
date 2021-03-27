import M from 'materialize-css';
import Header from "../components/header"
import Dialog from "../../../components/Dialog"
import LandingNav from "../components/landing-nav"
import BackgroundTicketGroup from "../components/background-ticket-group"
import BackgroundHandTicket from "../components/background-hand-ticket"
import LoginForm from "../components/login-form"
import LandingFooter from "../components/landing-footer"
import { useSelector, useDispatch } from "react-redux"
import { selectAuth, actions, signInWithPhoneNumber } from "../actions/authSlice"
import React, { useEffect, useState } from "react"
import { Redirect } from "react-router-dom"
import eventsAuthService from "../config/ui-events"
import HelpMessage from '../components/help-message';



function Login({ authService, stringService, RecaptchaVerifier }) {


    const uiEventsAuthService = eventsAuthService()

    const [phoneField, setPhoneField] = useState('')
    const [nombre, setNombre] = useState('')
    const [valid, setValid] = useState(2)
    const [confirmed, setConfirmed] = useState(false)
    const [openDialog, setOpenDialog] = useState(false)
    const [formValid, setFormValid] = useState(0)
    const [modalContent, setModalContent] = useState({})
    const [disabledForm, setDisabledForm] = useState(false)
    const [previousUser, setPreviousUser] = useState(null)

    const statusAuth = useSelector(selectAuth)
    const dispatch = useDispatch()
    const { signInWithPhoneNumber } = actions

    useEffect(() => {
        document.title = "Pasá - Login"
    })

    function onChangePhone(evt) {
        const inputValue = evt.target.value
        setPhoneField(stringService.truncateString(inputValue, 8))
        setValid(stringService.testString(inputValue, /\d{8}?/))
        setFormValid(stringService.testString(inputValue, /\d{8}?/))

    }

    function onConfirmModal(evt) {
        setOpenDialog(false)
        setDisabledForm(false)
    }

    async function onSubmit(evt) {
        evt.preventDefault()
        setDisabledForm(true)
        const res = await uiEventsAuthService.onSubmitLogin(evt, "84200478", dispatch, authService, RecaptchaVerifier, formValid)

        console.log(res.code)
        switch (res.code) {
            case "auth/invalid phone format": {
                setOpenDialog(true)
                setModalContent({
                    heading: 'Formato de telefono incorrecto',
                    content: 'Escribe un numero de telefono con formato valido'
                })
                break
            }

            case "auth/network-error": {
                setOpenDialog(true)
                setModalContent({
                    heading: 'Error de Red',
                    content: 'Verifica que tengas acceso a internet'
                })
                break
            }

        }
    }


    uiEventsAuthService.onAboutToRender(authService, statusAuth).then(function (res) {
        if (res !== 2) {
            dispatch(signInWithPhoneNumber({
                status: 1,
                phoneNumber: res.phoneNumber,
                session: 0
            }));
        } else {
            dispatch(signInWithPhoneNumber({
                status: 2,
                phoneNumber: 'Unknow',
                session: 0
            }));
        }
    }).catch(function (errValue) {
        dispatch(signInWithPhoneNumber({
            status: 0,
            phoneNumber: 'Unknow',
            session: 0
        }));
    });

    if (statusAuth === 1) {
        return (<Redirect to="/home" />);
    }

    if (statusAuth === 2) {
        return (<Redirect to="/confirmPhone" />);
    }

    if (statusAuth === 3) {
        return (<p>Espere un momento...</p>);
    }

    return (
        <>
            <LandingNav />
            <section className="login">
                <div className="login__layout">
                    <Header>
                        {<>Compra  boletos  {<br />}online para  tus {<br />} eventos </>}
                    </Header>
                    <LoginForm valid={valid} onChangePhone={onChangePhone} onSubmit={onSubmit} disabledForm={disabledForm} phoneField={phoneField} />
                   
                </div>
                <Dialog heading={modalContent.heading} open={openDialog} onConfirm={onConfirmModal}>
                    <p>{modalContent.content}</p>
                </Dialog>
                
            </section>
            <LandingFooter/>
        </>
    );


}

export default Login
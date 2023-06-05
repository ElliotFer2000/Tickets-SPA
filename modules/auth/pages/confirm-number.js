import React, { useState, useEffect } from "react"
import ConfirmForm from "../components/confirm-form"
import LandingNav from "../components/landing-nav"
import LandingFooter from "../components/landing-footer"
import Header from "../components/header"
import Dialog from "../../../components/Dialog"
import { useSelector, useDispatch } from "react-redux"
import { selectAuth, actions } from "../actions/authSlice"
import { Redirect } from "react-router-dom"
import eventsAuthService from "../config/ui-events"
function ConfirmPhone({ authService, stringService }) {

    const uiEventsAuthService = eventsAuthService()

    const [confirmationCode, setConfirmationCode] = useState('')
    const [valid, setValid] = useState(2)
    const [disabledForm, setDisabledForm] = useState(false)
    const [openDialog, setOpenDialog] = useState(false)
    const [modalContent, setContentDialog] = useState({})


    const statusAuth = useSelector(selectAuth)
    const dispatch = useDispatch()
    const { signInWithPhoneNumber } = actions

    useEffect(() => {
        document.title = "Pasá - Confirm account"
    })

    const onConfirmModal = () => {
        setOpenDialog(false)
        setDisabledForm(false)
    }

    function onChangeConfirm(evt) {
        const inputValue = evt.target.value
        setConfirmationCode(stringService.truncateString(inputValue, 6))
        setValid(stringService.testString(inputValue, /\d{6}?/))
    }

    async function onSubmit(evt) {
        evt.preventDefault()
        setDisabledForm(true)
        if (valid) {
            try {
                const userCredential = await uiEventsAuthService.onSubmitConfirmPhone(valid, authService, confirmationCode)

                if (userCredential) {
                    dispatch(signInWithPhoneNumber({ status: 1, session: 'There are', phoneNumber: userCredential.user.phoneNumber }))
                }
            } catch (err) {
                switch (err.code) {
                    case "auth/invalid-verification-code": {
                        setOpenDialog(true)
                        setContentDialog({
                            heading: 'Codigo de verificacion incorrecto',
                            content: 'Asegurate de escribirlo bien, te lo hemos enviado por SMS'
                        });
                        break
                    }

                    case "auth/network-request-failed": {
                        setOpenDialog(true)
                        setContentDialog({
                            heading: 'Error de red',
                            content: 'Verifica que tengas accesso a internet'
                        });
                    }

                    default:{
                        setOpenDialog(true)
                        setContentDialog({
                            heading: 'Tiempo de espera agotado',
                            content: 'Haz el registro nuevamente'
                        });
                    }
                }
            }
        } else {
            setOpenDialog(true)
            setContentDialog({
                heading: 'Formato de codigo de verificacion incorrecto',
                content: 'El codigo solo tiene numeros y tiene 6 digitos'
            })
        }
    }

    uiEventsAuthService.onAboutToRender(authService, statusAuth).then(function (res) {

        if (res !== 2) {
            dispatch(signInWithPhoneNumber({
                status: 1,
                phoneNumber: res.phoneNumber,
                session: 0
            }))
        } else {
            dispatch(signInWithPhoneNumber({
                status: 2,
                phoneNumber: 'Unknow',
                session: 0
            }))
        }

    }).catch(function (errValue) {
        dispatch(signInWithPhoneNumber({
            status: 0,
            phoneNumber: 'Unknow',
            session: 0
        }))
    })

    if (statusAuth === 0) {
        return <Redirect to="/" />
    }

    if (statusAuth === 1) {
        return <Redirect to="/home" />
    }

    if (statusAuth === 3) {
        return <p>Espere un momento...</p>
    }

    return (
        <>
            <LandingNav />
            <section className="login">
                <div className="login__layout">
                    <Header>
                        {
                          <>Inserta codigo{<br />}  para confirmar{<br />} cuenta</>
                        }
                    </Header>
                    <ConfirmForm onChangeConfirm={onChangeConfirm} onSubmit={onSubmit} valid={valid} confirmationCode={confirmationCode} disabledForm={disabledForm} />
                </div >
                <Dialog heading={modalContent.heading} open={openDialog} onConfirm={onConfirmModal}>
                    <p>{modalContent.content}</p>
                </Dialog>
            </section >
            <LandingFooter/>
        </>
    )
}

export default ConfirmPhone
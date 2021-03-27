import React from "react"
import InputText from "../../../components/TextInput"
import Button from "../../../components/Button"
import HelpMessage from "./help-message"

function LoginForm({ onChangePhone, onSubmit, disabledForm, phoneField, valid }) {

    return (
        <form className="login__form">
            <InputText id="phone-number"
                pattern="\d{8}"
                errorMessage="Formato de numero telefonico incorrecto"
                successMessage="Campo llenado correctamente"
                helperMessage="Introduce un numero de telefono de Nicaragua"
                labelText="Telefono"
                changeHandler={onChangePhone}
                validationState={valid}
                value={phoneField}
                disabled={disabledForm} />

            <div>
                <Button clickHandler={onSubmit} text="Entrar" classes={"login__signIn " + (disabledForm ? "disabled" : "")} />
            </div>
            <HelpMessage/>
            <div id="recaptcha-container" className="login__captcha">

            </div>
        </form>
    )
}

export default LoginForm
import React,{useEffect} from "react"
import M from 'materialize-css';
import Header from "../components/header"
import HelpMessage from "../components/help-message"
import Button from "../../../components/Button"
import InputText from "../../../components/TextInput"

function Login() {
    useEffect(() => {
        document.title = "Lotery App - Login"
    })

    function phoneTextChanged(){
        
    }
    return (
        <section className="login">
            <div className="login__layout">
                <Header subtitle="Login"/>
                <form>
                    <InputText id="phone-number" 
                               pattern="\d{8}" 
                               errorMessage="Incorrect phone format for +505 area code" 
                               successMessage="The phone format is correct" 
                               helperMessage="Type a phone number of +505 area code"
                               labelText="Telefono"
                               changeHandler={(evt)=>setText(evt.target.value)}/>
                    <div>
                        <Button clickHandler={(evt) => evt.preventDefault()} text="Entrar" />
                    </div>
                    <HelpMessage />
                </form>
            </div>
        </section>
    )
}

export default Login
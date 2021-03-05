import React,{useEffect} from "react"
import Header from "../components/header"

function SignUp(props) {

    useEffect(()=>{
        document.title = "Lotery App - Registrarse"
    })
    return (
        <section>
            <Header subtitle="Crear cuenta nueva" />
            <form>
                <input type="text" />
                <input type="text" />
                <input type="password" />
                <button>Registrarse!</button>
            </form>
        </section>
    )
}

export default SignUp
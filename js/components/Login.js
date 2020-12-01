import React from "react";



function Login(props) {

    return (<section className="Auth">
        <h1 className="Auth__Heading">Acceso para usuarios</h1>
        <form>
            <div>
                <div>
                    <label htmlFor="username" htmlFor="username">Nombre de usuario</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div>
                    <label htmlFor="password" htmlFor="password">Contraseña</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div>
                    <button type="button" id="submit">Acceder</button>
                </div>
            </div>
        </form>
    </section>);

}

export default Login;
import React from "react";

function SubmitUser(props) {

    return (<form className="usersSubmit">

        <div className="usersSubmit__wrapper">
            <label htmlFor="nombres">Nombres</label>
            <input type="text" placeholder="Nombres del usuario" name="nombres" required id="nombres"/>
        </div>
        <div className="usersSubmit__wrapper">
            <label htmlFor="apellidos">Apellidos</label>
            <input type="text" placeholder="Apellidos del usuario" name="apellidos" required id="apellidos"/>
        </div>
        <div className="usersSubmit__wrapper">
            <label htmlFor="clave">Clave de acceso</label>
            <input type="text" placeholder="Clave de acceso" name="clave" required id="clave"/>
        </div>
         <div className="usersSubmit__wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Nombre de usuario" name="username" required id="username"/>
        </div>
        <div className="usersSubmit__wrapper usersSubmit__wrapper--btnSubmit">
           <button type="button">Agregar</button>
        </div>
    </form>);
}

export default SubmitUser;
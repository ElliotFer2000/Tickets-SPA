import axios from "axios";

const baseURL = "https://localhost:44324/api/Users"
let isLogged = false

async function GetUsuarios() {
    const usuarios = await axios.get(baseURL)

    return usuarios.data

}

async function PostUsuario(usuario) {

}

function logIn(usuario){
  isLogged = true
}

function logOut(){
  isLogged = false
}



export { GetUsuarios,isLogged,logIn,logOut }
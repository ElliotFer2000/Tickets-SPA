import axios from "axios";

const baseURL = "https://localhost:44324/api/Users"

async function GetUsuarios() {
    const usuarios = await axios.get(baseURL)

    return usuarios.data
    
}
export { GetUsuarios }
import axios from 'axios';

const baseURL = 'https://localhost:44324/api/Users'

let isLogged = false

async function GetUsuarios() {
  const usuarios = await axios.get(baseURL)

  return usuarios.data

}


async function logIn(auth) {

  try {
    const session = await axios.post(`${baseURL}/Login`, auth)
    return session.data
  } catch (error) {
    return 500
  }
}

function logOut() {

}



export { GetUsuarios, isLogged, logIn, logOut }
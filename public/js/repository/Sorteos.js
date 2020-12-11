import axios from "axios";

const baseURL = "https://localhost:44324/api/Draws"

async function getSorteos() {
    const draws = await axios.get(baseURL)

    return draws.data
    
}

async function postSorteo(sorteo){

    const response = await axios.post(baseURL,sorteo)

    return response
}

async function putSorteo(ganador){
    const response = await axios.put(baseURL,ganador)

    return response
}

export { getSorteos,postSorteo,putSorteo }
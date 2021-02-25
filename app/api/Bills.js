import axios from "axios";

const baseURL = "https://localhost:44324/api/Bills"


async function postBill(compra){

    const response = await axios.post(baseURL,compra)

    return response
}



export { postBill }
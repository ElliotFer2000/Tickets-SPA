
import AppRouting from "./config/routes"
import { BrowserRouter } from 'react-router-dom'
import React from "react"
import ReactDOM from "react-dom"


function renderUI(){
   
   ReactDOM.render(<BrowserRouter>
                      <AppRouting/>
                    </BrowserRouter>,
                    document.querySelector("#root"))
}

function main(){
    renderUI()
}

main()
import AppRouting from "./config/routes"
import { BrowserRouter } from 'react-router-dom'
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "./store/store"
import firebase from "firebase"
import firebaseConfig from "../config/firebase-config"
import auth from "./api/auth"
import stringUIService from "../lib/ui-string-service"



function renderUI(firebase) {
  const authService = auth(firebase)
  const stringService = stringUIService()
  const {RecaptchaVerifier} = firebase.auth
 
  ReactDOM.render(
    <Provider store={store} >
      <BrowserRouter>
        <AppRouting authService={authService} stringService={stringService} RecaptchaVerifier={RecaptchaVerifier}/>
      </BrowserRouter>
    </Provider>
    ,
    document.querySelector("#root"))
}

function initFirebase() {
  firebase.initializeApp(firebaseConfig)

  return firebase
}

function main() {
  const firebase = initFirebase()
  renderUI(firebase)
}

main()
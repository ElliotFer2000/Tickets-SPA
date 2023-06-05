import React, { useState,useEffect } from "react"
import Button from "../../../components/Button"
import {Redirect} from "react-router-dom"
import { selectPhoneNumber,selectAuth,actions} from "../actions/authSlice"
import { useSelector,useDispatch } from "react-redux"
import eventsAuthService from "../config/ui-events"
import Loading from "../../../components/Loading"

function Home({ authService }) {
    const uiEventsAuthService = eventsAuthService()
    const phoneNumber = useSelector(selectPhoneNumber)
    const statusAuth = useSelector(selectAuth)
    const dispatch = useDispatch()
    const {signInWithPhoneNumber} = actions

    useEffect(() => {
        document.title = "Pasá - Home"
    })
    uiEventsAuthService.onAboutToRender(authService,statusAuth).then(function (res) {
        if(res !== 2){
            dispatch(signInWithPhoneNumber({
                status: 1,
                phoneNumber: res.phoneNumber,
                session: 0
            }));
        }else{
            dispatch(signInWithPhoneNumber({
                status: 2,
                phoneNumber: 'Unknow',
                session: 0
            }));
        }
    }).catch(function (errValue) {
        dispatch(signInWithPhoneNumber({
            status: 0,
            phoneNumber: 'Unknow',
            session: 0
        }));
    });
    const onSignOutClicked = async ()=>{

        try{
            const res = await authService.signOut()
            console.log(res)
            dispatch(signInWithPhoneNumber({
                status: 0,
                session: 0,
                phoneNumber: 'Unknow'
            }))
        }catch(err){
            console.log(err)
        }
        
    }

    if(statusAuth===0){
        return <Redirect to="/"/>
    }
    
    return (
        <div className="full-height">
            
            
            <Button clickHandler={onSignOutClicked} text="Cerrar Sesion"/>  
            
        </div>
    )
}

export default Home
function firebaseAuthService(phoneVerifier,firebase){

    return Object.freeze({
        signInWithPhoneNumber
    })

    async function signInWithPhoneNumber(phoneNumber){
        try{
           const confirmationResult = await firebase.auth().signInWithPhoneNumber(`+505${phoneNumber}`,phoneVerifier)
           
           return confirmationResult
        }catch(e){
            console.log(e.message)
            const id = await phoneVerifier.render()
            console.log(id)
        }
        return null
    }

    async function confirm(confirmable){
        
    }
}

export default firebaseAuthService
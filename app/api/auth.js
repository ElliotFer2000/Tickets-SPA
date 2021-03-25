
function auth(firebase) {

    return Object.freeze({
        signInWithPhoneNumber,
        setPersonalName,
        setPhotoProfile,
        getCurrentUser,
        finishSignIn,
        signOut
    })

    async function signInWithPhoneNumber(phoneNumber, phoneVerifier) {
        const confirmationResult = await firebase.auth().signInWithPhoneNumber(`+505${phoneNumber}`, phoneVerifier)

        return confirmationResult
    }

    async function finishSignIn(verificationId,verificationCode){
        const credential  =  firebase.auth.PhoneAuthProvider.credential(verificationId, verificationCode)
        const userCredential = await firebase.auth().signInWithCredential(credential);

        console.log(userCredential)
       
        return userCredential
    }

    async function setPersonalName(name) {
        const currentUser = firebase.auth().currentUser

        const res = await currentUser.updateProfile({
            displayName: name,
        });

        return name
    }

    async function setPhotoProfile(url){
        const currentUser = firebase.auth().currentUser

        const res = await currentUser.updateProfile({
            photoURL: url
        })
    }

    function getCurrentUser(){
        return new Promise(function(resolve,reject){
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                  resolve(user)
                } else {
                  reject(null)
                }
            });
        })
    }

    async function signOut(){
       const res = await firebase.auth().signOut()

       return res
    }
}

export default auth
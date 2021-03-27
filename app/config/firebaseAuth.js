function initFirebaseAuth({ firebase, language, recaptchaContainer, onSolved, onExpired }) {
    firebase.auth().languageCode = language

    return new firebase.auth.RecaptchaVerifier(recaptchaContainer, {
        'size': 'normal',
        'callback': onSolved,
        'expired-callback': onExpired
    })
}

export default initFirebaseAuth
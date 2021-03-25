import { signIn, setUserName } from "../actions/authSlice"
import { actions } from "../actions/authSlice"


function eventsAuthService(firebase) {
    return Object.freeze({
        onSubmitLogin,
        onSubmitConfirmPhone,
        onAboutToRender
    })
    async function onSubmitLogin(evt, phoneNumber, dispatch, authService, RecaptchaVerifier, valid) {
        let phoneVerifier = null
        if (valid) {
            try {
                phoneVerifier  = new RecaptchaVerifier(document.querySelector("#recaptcha-container"), {
                    'size': 'normal',
                    'callback': () => console.log("Solved"),
                    'expired-callback': () => console.log("Expired")
                });

                const makeLogin = signIn({ authService, phoneNumber, phoneVerifier })
                const { signInWithPhoneNumber } = actions


                const confResultObj = await makeLogin(dispatch)
                window.confirmationResult = confResultObj
                dispatch(signInWithPhoneNumber({ status: 2, session: 0, phoneNumber: 'Unknow' }))

                return {
                    code: 'auth/success'
                };
            } catch (e) {

                if (e.message === "Unable to load external reCAPTCHA dependencies!" || e.code === "auth/network-request-failed") {
                    return {
                        code: "auth/network-error"
                    }
                }

                phoneVerifier.render()

                return{
                    code: e.code
                };
            }
        }

        return {
            code: 'auth/invalid phone format'
        };
    }

    async function onSubmitConfirmPhone(isAllValid, authService, verificationCode) {
        if (window.confirmationResult && isAllValid) {

            const userCredential = await authService.finishSignIn(window.confirmationResult.verificationId, verificationCode)

            return userCredential
        }

        return null
    }

    async function onAboutToRender(authService, statusAuth) {

        try {

            if (statusAuth !== 2) {
                const user = await authService.getCurrentUser()

                return user
            }

            return 2

        } catch (err) {

            return err
        }

    }

}

export default eventsAuthService
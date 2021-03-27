import initFirebaseAuth from "./firebaseAuth"
import auth from "../../../app/api/auth"

function getFirebaseAuth(firebase) {
  return auth(firebase);
}

export default getFirebaseAuth
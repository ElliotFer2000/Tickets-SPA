import { configureStore } from '@reduxjs/toolkit'
import {signInWithPhoneNumber} from '../../modules/auth/actions/authSlice'

const store = configureStore({
  reducer: {
    auth: signInWithPhoneNumber
  }
})

export default store
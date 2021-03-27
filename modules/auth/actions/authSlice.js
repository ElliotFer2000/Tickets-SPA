import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'auth',
  initialState: {
      status: 3,
      session: 0, //session is not being used, needs to be deleted in the next release and also needs to be deleted from the dispatch({ session: 0}) calls
      phoneNumber: 'Unknow'
  },
  reducers: {
    signInWithPhoneNumber: (state, action) => {
      state.status = action.payload.status
      state.session = action.payload.session
      state.phoneNumber = action.payload.phoneNumber
    }
  },
});

// the outside "thunk creator" function
const signIn = ({ authService, phoneNumber, phoneVerifier }) => {
  // the inside "thunk function"
  return async dispatch => {

    // make an async call in the thunk
    const confirmationResult = await authService.signInWithPhoneNumber(phoneNumber,phoneVerifier)

    return confirmationResult

  }
}

const setUserName = ({ authService, name }) => {
  return async dispatch => {
    const confirmationResult = await authService.setName(name)

    return confirmationResult
  }
}

const selectAuth = (state) =>state.auth.status
const selectSession = (state) => state.auth.session
const selectPhoneNumber = (state) => state.auth.phoneNumber

const signInWithPhoneNumber = slice.reducer
const actions = slice.actions

export { signInWithPhoneNumber,selectAuth, selectSession,selectPhoneNumber,signIn,setUserName, actions }
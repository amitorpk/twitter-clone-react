import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn : false,
    accessToken : null,
}
export const slice = createSlice({
    name : 'auth',
    initialState : initialState,
    reducers : {
        loginSuccess : (state , action) => {
            state.isLoggedIn = true
            state.accessToken = action.payload.accessToken
        }
        }
    
    })

export default slice.reducer
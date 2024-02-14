import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn : false,
}
export const slice = createSlice({
    name : 'auth',
    initialState : initialState,
    reducers : {
        loginSuccess : (state , action) => {
            state.isLoggedIn = true
        }
        }
    
    })

export default slice.reducer
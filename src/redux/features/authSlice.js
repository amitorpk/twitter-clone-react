import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    user : {
        isAuthenticated : false,
        accessToken : null,
    },
    isLoading : false
}

const authSlice = createSlice({
    name : 'authSlice',
    initialState,
    reducers : {
        setIsAuthenticated : (state,action) => {
            state.user.isAuthenticated = true
        },

        setAccessToken : (state, action)=>{
            state.user = action.payload
        }
    }
})

export const {setIsAuthenticated , setAccessToken} = authSlice.actions
export default authSlice.reducer
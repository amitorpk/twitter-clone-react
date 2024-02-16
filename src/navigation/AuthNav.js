import React, { useEffect, useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UseSelector, useDispatch } from 'react-redux'
import { slice } from '../store/features/authSlice'

const RedirectUrlGoogle = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const [go,setGo] = useState(false)
    const called = useRef(false)
    const handleRedirect = async()=>{
        if (called.current === false){
            called.current = true
            try{
                const res = await axios.get(`http://localhost:4000/auth/social_token_google${window.location.search}`)
                console.log("res",res);
                dispatch(slice.actions.loginSuccess({accessToken: res.data.data}))
                navigate('/');
                }
                catch
                {
                    console.log("not working")
                }
        }
        else{
            console.log("outside")
        }
        
    }

    useEffect(()=>{
        handleRedirect();
    },[navigate])


    console.log("redirect url called")
    console.log(window.location.search)
    return (<>please wait....</>)
}

function AuthNav() {
  return (
    <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='callback/google' element={<RedirectUrlGoogle/>}/>
    </Routes>
  )
}

export default AuthNav
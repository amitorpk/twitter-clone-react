import React, { useEffect, useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const RedirectUrlGoogle = () => {
    const navigate = useNavigate()
    // const [go,setGo] = useState(false)
    const called = useRef(false)
    const handleRedirect = async()=>{
        if (called.current === false){
            console.log("inside")
            called.current = true
            try{
                const res = await axios.get(`http://localhost:4000/auth/social_token_google${window.location.search}`)
                console.log(res);
                navigate('/home');
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
    return (<></>)
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
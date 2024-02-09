import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
import axios from 'axios'

const RedirectUrlGoogle = () => {

    const handleRedirect = async()=>{
        try{
        const res = await axios.get(`http://localhost:4000/auth/social_token_google/${window.location.search}`)
        console.log(res)
        }
        catch
        {
            console.log("not working")
        }
    }

    useEffect(()=>{
        handleRedirect();
    },[])


    console.log("redirect url called")
    console.log(window.location.search)
    return (<></>)
}

function AuthNav() {
  return (
    <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='callback/google' Component={RedirectUrlGoogle}/>
    </Routes>
  )
}

export default AuthNav
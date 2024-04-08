import React, { useEffect ,useRef, useState} from 'react'
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom'
import Login from '../components/Login'
import axios from 'axios'
import { setIsAuthenticated } from '../redux/features/authSlice'
import { useSelector ,useDispatch} from 'react-redux'

// import {  useDispatch } from '@reduxjs/toolkit'
const RedirectUrlGoogle = () => {
    // console.log("is LoggedIn", isLoggedIn)
    const called = useRef(false)
    const navigate = useNavigate()
    // const isLoggedIn = useSelector(state => state.auth)
    const dispatch = useDispatch()



    const handleRedirect = async()=>{
        try{
        const res = await axios.get(`http://localhost:4000/auth/get_access_token_google/${window.location.search}`)
        dispatch(setIsAuthenticated())
        localStorage.setItem('access_token',res.data.data.access_token)
        console.log(res)
        navigate('/')

        }
        catch
        {
            console.log("not working")
        }
    }

    useEffect(()=>{
        if (!called.current)
        {
            console.log("here")
            called.current = true
            handleRedirect();
        }
    },[])


    console.log("redirect url called")
    // console.log(window.location.search)
    return (<></>)
}

function AuthNav({isLoggedIn}) {
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    useEffect(()=>{
        if (isLoggedIn)
        {
            navigate('/')
        }
        setIsLoading(false)
    },[])
    return (
        <>
            {isLoading? null : <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='callback/google' element={<RedirectUrlGoogle/>}/>
        </Routes> }
        </>
    )
}

export default AuthNav
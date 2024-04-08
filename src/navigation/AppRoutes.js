import React, { useEffect, useState } from 'react';
// import { , Route } from "react-router-dom" 
import { BrowserRouter as Router, Route , Routes ,redirect,Navigate} from 'react-router-dom';
import Home from './Home';
import AuthNav from './AuthNav';
import {  useSelector,useDispatch } from 'react-redux';
import { setAccessToken } from '../redux/features/authSlice';
export const  AppRoutes = () => {
  // const [isLoggedIn ,setIsLoggedIn] = useState(false)
  const isLoggedIn = useSelector(state => state.auth.user.isAuthenticated)
  const dispatch = useDispatch()
  const [isLoading , setIsLoading] = useState(true)
  useEffect(()=>{
    const accessToken = localStorage.getItem('access_token')
    if (accessToken)
    {
      const data =  {
        isAuthenticated : true,
        accessToken: accessToken
      }
      dispatch(setAccessToken(data))
    }
    setIsLoading(false)

  })
  return (
    <>
    {isLoading ? null : <Routes>
        <Route path="/auth/*" element= {<AuthNav isLoggedIn={isLoggedIn}/>} />
        <Route path="/" element={<Home />} />
        
  
      </Routes>}
    </>
  )
}

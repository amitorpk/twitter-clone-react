import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UseSelector, useSelector } from 'react-redux'

function Home() {
    const state = useSelector((state) => state.auth)
    const isLoggedIn = useSelector((state) => state.auth?.isLoggedIn)
    // const [isLoggedIn ,setIsLoggedIn] = useState(false)
    const navigate = useNavigate()
    useEffect(()=>{
        if (isLoggedIn==undefined)
        {
          console.log("undefined")
        }
        if (isLoggedIn==false)
        {
            navigate('/auth/login')
        }    
    },[])
    console.log(isLoggedIn)
    console.log("auth",state)
  return (
    <>
    {isLoggedIn ? (<div>Home</div>) : <div>please login</div>}
    </>
  )
}

export default Home
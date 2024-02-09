import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const [isLoggedIn ,setIsLoggedIn] = useState(false)
    const navigate = useNavigate()
    useEffect(()=>{
        if (isLoggedIn==false)
        {
            navigate('/auth/login')
        }    
    },[])
  return (
    <div>Home</div>
  )
}

export default Home
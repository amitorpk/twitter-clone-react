import React, { useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Home() {
    // const [isLoggedIn ,setIsLoggedIn] = useState(false)
    const isLoggedIn = useSelector(state => state.auth.user.isAuthenticated)
    console.log("from home",isLoggedIn)
    const navigate = useNavigate()
    useEffect(()=>{
        if (isLoggedIn===false && isLoggedIn!==null)
        {
            navigate('/auth/login')
        }    
    },[])
  return (
    <div>Home</div>
  )
}

export default Home
import React, { useState } from 'react';
// import { , Route } from "react-router-dom" 
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Home from './Home';
import AuthNav from './AuthNav';

export const AppRoutes = () => {
  const [isLoggedIn ,setIsLoggedIn] = useState(false)
  return (
   
      <Routes>
        <Route path='/auth/*' Component={AuthNav}/>
        <Route exact path="/" Component={Home} />
        
  
      </Routes>

  )
}

import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';
import {AppRoutes} from './navigation/AppRoutes';

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  return (

  
    <AppRoutes/>

  );
}

export default App;

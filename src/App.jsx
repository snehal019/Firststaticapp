import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import {BrowserRouter,Routes,Route}  from 'react-router-dom'

import config from '../config/config'

function App() {
  console.log(config.apiUrl);
  console.log(import.meta.env.VITE_API_URL);
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route  path ="/"  element={<Login />} />
      <Route  path="dashboard" element ={<Dashboard/>}/>
     </Routes>
     </BrowserRouter>
   </>
  )
}

export default App

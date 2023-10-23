import React from 'react'
import {BrowserRouter, Link, Routes,Route} from 'react-router-dom'
import Home from '../../Pages/Home'
import Login from '../../Pages/Login/Login'
const Header = () => {
   return (
      <BrowserRouter>
         <Link to='/home'>Home</Link>
         <Link to='/login'>Login</Link>
         <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
         </Routes>
      </BrowserRouter>
   )
}

export default Header
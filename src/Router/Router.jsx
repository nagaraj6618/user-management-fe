import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login/Login'

const Router = () => {
   return (
      <BrowserRouter>
         < Routes >
            <Route path='/home' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
         </ Routes>
      </BrowserRouter>
   )
}

export default Router
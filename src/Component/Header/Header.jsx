import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
const Header = () => {
   return (
      <BrowserRouter>
         <Link to='/home'>Home</Link>
         <Link to='/login'>Login</Link>
      </BrowserRouter>
   )
}

export default Header
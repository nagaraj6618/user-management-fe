import React, { useState } from 'react'
import timeManagementImage from './../../images/timemanagement.png'
import userImage from './../../images/user.svg'
import lockImage from './../../images/lock.svg'
import {Link} from 'react-router-dom'
import './Login.css'
const Login = () => {
   const [credentials, setCredentials] = useState({
      userId: undefined,
      password: undefined
    })
    const handleChange = e => {
      setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    };

    const handleClick = async e => {
      e.preventDefault();
      console.log(credentials);
      // try {
      //   const res = await fetch(`/login`, {
      //     method: "post",
      //     headers: {
      //       "content-type": "application/json",
      //     },
      //     credentials: 'include',
      //     body: JSON.stringify(credentials),
      //   })
      //   const result = await res.json()
      //   if (!res.ok) alert(result.message)
      //   console.log(result.data)
      //   navigate('/')
      // }
      // catch (err) {
      //   dispatch({ type: 'LOGIN_FAILURE', payload: err.message })
      // }
    }
   return (
      <React.Fragment>
         <div className='login-container'>
            <div className='time-magangemet'>  
               <img alt='i' src={timeManagementImage} className='time-magangemet-image' ></img>
            </div>
            <form className='login-wrapper' onSubmit={handleClick}>
               <div className='login-rect'>
                  <p>Login</p>
               </div>
               <div className='email-container'>
                  <label htmlFor='user' className='user'>User Id</label>
                  <div className='input-container'>
                     <img src={userImage} alt='user' className='image'/>
                     <input type='text'
                     placeholder='Enter the User Id'
                     name='user'
                     className='input-box'
                     onChange={handleChange}/>
                  </div>
               </div>
               <div className='password-container'>
                  <label htmlFor='password' className='password'>Password</label>
                  <div className='input-container'>
                     <img src={lockImage} alt='lock' className='image'/>
                     <input type='text'
                     placeholder='Enter the Password'
                     name='password'
                     className='input-box'
                     onChange={handleChange}/>
                  </div>
               </div>
               <Link to='/forgotPassword' className='forgot-password'>Forgot Password?</Link>
               <button type='submit' className='login-btn'>Login</button>
            </form>
         </div>
      </React.Fragment>
   )
}

export default Login
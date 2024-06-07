import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='log-main'>
        <div className='title'>
            <h1>Sign up Now and Get New Experience <br /> from Finans!</h1>
        </div>
        <div className='inputs'>
            <input type="text" placeholder='Your Name' id='urname'/>
            <input type="text" placeholder='Your Email' id='uremail'/>
            <button id='log-btn'>Sign Up</button>
        </div>
        <div className='container'></div>
    </div>
  )
}

export default Login
import React from 'react'
import './Social.css'
import socialist from '../Assets/socialist.png'

const Social = () => {
  return (
    <div className='social-main'>
        <div className='social1'>
            <img src={socialist} alt="" />
            <h3>Certified & Transparent</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Quis <br />consequat tincidunt ullamcorper.</p>
        </div>
        <div className='social2'>
        <img src={socialist} alt="" />
            <h3>24/7 Professional Support</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Quis <br />consequat tincidunt ullamcorper.</p>
        </div>
        <div className='social3'>
        <img src={socialist} alt="" />
            <h3>30 Days Free Trial</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Quis <br />consequat tincidunt ullamcorper.</p>
        </div>
    </div>
  )
}

export default Social
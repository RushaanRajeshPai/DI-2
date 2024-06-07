import React from 'react'
import './Reviews.css'
import linesmall from '../Assets/linesmall.png'
import revname from '../Assets/revname.png'
import colon from '../Assets/colon.png'

const Reviews = () => {
  return (
    <div className='rev-main'>
        <div className='rev-left'></div>
        <div className='rev-mid'>
            <img src={colon} alt="" />
        </div>
        <div className='rev-right'>
            <h2>Read What Our Clients Have <br /> to Say About Finans</h2>
            <h1>Its an amazing <br />Financial App. You <br />guys are amazing,<br /> Thank you!</h1>
            <img src={linesmall} alt="" /> <br />
            <img src={revname} alt="" />
        </div>
    </div>
  )
}

export default Reviews
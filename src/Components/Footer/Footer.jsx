import React from 'react'
import './Footer.css'
import linebig from '../Assets/linebig.png'
import copyright from '../Assets/copyright.png'
import logow from '../Assets/logow.png'

const Footer = () => {
    return (
        <div className='f-main'>
            <div className='fcolumns'>
                <div className='fcolumn1'>
                    <img src={logow} alt="" />
                    <p>Lorem ipsum dolor sit amet <br />consectetur.</p>
                </div>
                <div className='fcolumn2'>
                    <h3>Navigation</h3>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Services</p>
                    <p>Contact Us</p>
                </div>
                <div className='fcolumn3'>
                    <h3>Quick Links</h3>
                    <p>Provacy Policy</p>
                    <p>Terms of Services</p>
                    <p>Disclaimer</p>
                    <p>FAQ</p>
                </div>
                <div className='fcolumn4'>
                    <h3>Contact Us</h3>
                    <p>Our Support and Sales team is available <br />24 /7 to answer your queries</p>
                    <p>+1 (333) 000-0000</p>
                    <p>hi.finans@gmail.com</p>
                </div>
            </div>
            <div className='fimages'>
                <img src={linebig} alt="" id='fline' />
                <img src={copyright} alt="" />
            </div>
        </div>
    )
}

export default Footer
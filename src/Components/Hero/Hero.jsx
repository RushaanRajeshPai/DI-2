import React from 'react'
import './Hero.css'
import reports from '../Assets/reports.png'
import transaction from '../Assets/transaction.png'
import balance from '../Assets/balance.png'
import balanceicons from '../Assets/balanceicons.png'
import trans from '../Assets/trans.png'
import content from '../Assets/content.png'
import budget from '../Assets/budget.png'

const Hero = () => {
    return (
        <div className='hero-main'>
            <div className='hero-title'>
                <h1 id='hero-h1'>Let Financial Technology <br /> Work For You</h1>
                <p id='hero-p1'>Lorem ipsum dolor sit amet consectetur. Quis consequat tincidunt ullamcorper <br />hendrerit quam. Fermentum euismod dictum nunc amet tempus.</p>
                <div className='hero-input'>
                    <input type="text" placeholder='Your Email' id='hero-ip' />
                    <button id='btn-herosign'>Sign Up</button>
                </div>
            </div>

            <div className='hero-boxes'>
                <div className='mob1'>
                    <div className='mob-name'>
                        <p>Hello Bastian,</p>
                        <h3 id='mob-h3'>Welcome Back!</h3>
                    </div>
                    <img src={reports} alt="" />
                    <img src={transaction} alt="" />
                </div>
                <div className='mob2'>
                <div className='mob-name'>
                        <p>Hello Bastian,</p>
                        <h3 id='mob-h3'>Welcome Back!</h3>
                    </div>
                    <img src={balance} alt="" />
                    <img src={balanceicons} alt="" />
                    <img src={trans} alt="" />
                </div>
                <div className='mob3'>
                <div className='mob-name'>
                        <p>Hello Bastian,</p>
                        <h3 id='mob-h3'>Welcome Back!</h3>
                    </div>
                    <img src={content} alt="" />
                    <img src={budget} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero
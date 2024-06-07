import React from 'react'
import './Reason.css'
import soc from '../Assets/soc.png'

const Reason = () => {
    return (
        <div className='rmain'>
            <h1 id='rh'>This Is The Reason Why You <br /> Should Use Finans</h1>
            <div className='rbox'>
                <div className='reason1'>
                    <img src={soc} alt="" />
                    <h3>Certified & Transparent</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Quis <br />consequat tincidunt ullamcorper.</p>
                </div>
                <div className='reason2'>
                    <img src={soc} alt="" />
                    <h3>24/7 Professional Support</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Quis <br />consequat tincidunt ullamcorper.</p>
                </div>
                <div className='reason3'>
                    <img src={soc} alt="" />
                    <h3>30 Days Free Trial</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Quis <br />consequat tincidunt ullamcorper.</p>
                </div>
            </div>
        </div>
    )
}

export default Reason
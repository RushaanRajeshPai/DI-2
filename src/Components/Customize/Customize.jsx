import React from 'react'
import './Customize.css'
import play from '../Assets/play.png'
import logos from '../Assets/logos.png'
const Customize = () => {
    return (
        <div className='cust-all'>
            <div className='cust-main'>
                <div className='cust-left'>
                    <h1 id='cust-h1'>Customized And <br /> Control Your Financial <br />Planning</h1>
                    <p><strong>Lorem ipsum dolor sit amet consectetur. Quis consequat <br />tincidunt ullamcorper hendrerit quam. Fermentum euismod <br />dictum nunc amet tempus.</strong></p>
                    <div className='numbers'>
                        <div className='number1'>
                            <h1>6,7M</h1>
                            <h3>Active User</h3>
                        </div>
                        <div className='number2'>
                            <h1>4,8S</h1>
                            <h3>Stars Reviews</h3>
                        </div>
                    </div>
                </div>
                <div className='cust-right'>
                    <img src={play} alt="" />
                </div>
            </div>

            <div className='cust-logos'>
                <img src={logos} alt="" />
            </div>
        </div>
    )
}

export default Customize
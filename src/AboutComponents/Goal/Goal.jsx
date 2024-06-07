import React from 'react'
import './Goal.css'
import goline from '../Assets/goline.png'
import purple from '../Assets/purple.png'
import ceo from '../Assets/ceo.png'

const Goal = () => {
    return (
        <div className='goal-main'>
            <img src={goline} alt="" id='goalimg'/>
            <div className='goal1'>
                <h1 id='gh1'>Together We <br />Are Strong</h1>
                <div className='goalminor'>
                    <p id='gp'><strong>Lorem ipsum dolor sit amet consectetur. Mattis enim <br /> leo cras ornare elementum sit facilisis et quam. Id <br />sodales diam rhoncus et consequat etiam enim.</strong></p>
                    <p id='gp1'>Lorem ipsum dolor sit amet consectetur. Vehicula aliquam neque <br /> viverra ante integer iaculis. Sem auctor non consectetur enim <br />aliquet adipiscing lacinia. Feugiat porttitor adipiscing arcu <br /> volutpat est odio vitae ut. Quam et semper faucibus nulla tortor.  <br />Amet ut massa lectus consectetur magna neque penatibus. <br /> Pretium velit accumsan lectus felis viverra semper. Sed convallis sem.</p>
                </div>
            </div>
            <div className='goal2'>
                <img src={purple} alt="" />
                <div className='goalminor2'>
                    <h2 id='gh2a'>“Our goal is to create <br /> financial software that will <br />help you perform all your <br /> financial activities in one <br /> application.”</h2>
                    <img src={ceo} alt="" />
                </div>
            </div>
            <img src={goline} alt="" id='goalimg' />
            <div className='goal3'>
                <div className='col1'>
                    <h2 id='gh2b'>6,7 M</h2>
                    <h4 id='gh4'>Active User</h4>
                    <p id='gp3'>Lorem ipsum dolor sit amet <br /> consectetur. Sagittis at.</p>
                </div>
                <div className='col2'>
                    <h2 id='gh2b'>12 +</h2>
                    <h4 id='gh4' >Years Experience</h4>
                    <p id='gp3'>Lorem ipsum dolor sit amet <br /> consectetur. Sagittis at.</p>
                </div>
                <div className='col3'>
                    <h2 id='gh2b'>260 K</h2>
                    <h4 id='gh4'>Partners Joined</h4>
                    <p id='gp3'>Lorem ipsum dolor sit amet <br /> consectetur. Sagittis at.</p>
                </div>
                <div className='col4'>
                    <h2 id='gh2b'>380 K</h2>
                    <h4 id='gh4'>Country Available</h4>
                    <p id='gp3'>Lorem ipsum dolor sit amet <br /> consectetur. Sagittis at.</p>
                </div>
            </div>
        </div>
    )
}

export default Goal
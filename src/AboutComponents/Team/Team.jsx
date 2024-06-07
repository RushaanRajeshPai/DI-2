import React from 'react'
import './Team.css'
import goline from '../Assets/goline.png'
import purp from '../Assets/purp.png'
import bigpurple from '../Assets/bigpurple.png'

const Team = () => {
    return (
        <div className='tmain'>
            <div className='tmeet'>
                <h1 id='thead'>Meet Our <br /> Amazing Team</h1>
                <p id='tpara'>Lorem ipsum dolor sit amet consectetur. Vitae sed in enim maecenas <br /> consequat sem. Massa vulputate tellus justo nunc lectus leo quis quis. <br />Ac posuere pellentesque nec tellus quam commodo consequat <br /> mattis. Massa lorem ut leo ut at sit aliquam. Id molestie adipiscing.</p>
            </div>
            <div className='tmembers'>
                <div className='tmem1'>
                    <img src={purp} alt="" />
                    <h2 id='tname'>Beverly J. Paul</h2>
                    <p id='tp'>CO-Founder</p>
                </div>
                <div className='tmem2'>
                    <img src={purp} alt="" />
                    <h2 id='tname'>Garry S. Lockie</h2>
                    <p id='tp'>Head of Finance</p>
                </div>
                <div className='tmem3'>
                    <img src={purp} alt="" />
                    <h2 id='tname'>Mistie B. Mooney</h2>
                    <p id='tp'>Head of Marketing</p>
                </div>
                <div className='tmem4'>
                    <img src={purp} alt="" />
                    <h2 id='tname'>Dora F. Gaunt</h2>
                    <p id='tp'>Head of Design</p>
                </div>
            </div>
            <img src={goline} alt="" id='goline'/>
            <div className='tquestion'>
                <div id='tq1'>
                    <h1 id='th11'>Have A Question? <br /> Our Team Is Happy <br />To Assist You.</h1>
                    <p id='tpara'>Lorem ipsum dolor sit amet consectetur. Vitae sed <br />in enim maecenas consequat sem. Massa vulputate <br /> tellus justo nunc lectus.</p>
                    <button id='tbtn'>Contact Us</button>
                </div>
                <div id='timgpurp'><img src={bigpurple} alt="" /></div>
            </div>
        </div>
    )
}

export default Team
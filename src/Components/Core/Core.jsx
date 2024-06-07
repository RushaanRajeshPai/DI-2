import React from 'react'
import './Core.css'
import ellipsea from '../Assets/ellipsea.png'
import boxa from '../Assets/boxa.png'
import boxb from '../Assets/boxb.png'
import boxd from '../Assets/boxd.png'
import boxe from '../Assets/boxe.png'
import ellipseb from '../Assets/ellipseb.png'

const Core = () => {
    return (
        <div className='core-main'>
            <img src={ellipsea} alt="" />
            <div className='core-title'>
                <h1 id='core-h1'>Our Core Features</h1>
                <p id='core-p1'>Lorem ipsum dolor sit amet consectetur. Quis consequat tincidunt <br />ullamcorper hendrerit quam.</p>
            </div>
            <div className='core-boxes'>
                <div className='row1'>
                    <div className='core-box1'>
                        <div id='boxtop'>
                            <img src={boxa} alt="" id='box-img' />
                        </div>
                        <div id='boxbottom'>
                            <h3 id='core-h3'>Financial Planner</h3>
                            <p id='core-p1'>Lorem ipsum dolor sit amet. <br />Accumsan nunc.</p>
                        </div>
                    </div>
                    <div className='core-box2'>
                        <div id='boxtop'>
                            <img src={boxb} alt="" id='box-img' />
                        </div>
                        <div id='boxbottom'>
                            <h3 id='core-h3'>Performance Reports</h3>
                            <p id='core-p1'>Lorem ipsum dolor sit amet. <br />Accumsan nunc.</p>
                        </div>
                    </div>
                    <div className='core-box3'>
                        <div id='boxtop'>
                            <img src={boxb} alt="" id='box-img' />
                        </div>
                        <div id='boxbottom'>
                            <h3 id='core-h3'>Security Audit</h3>
                            <p id='core-p1'>Lorem ipsum dolor sit amet. <br />Accumsan nunc.</p>
                        </div>
                    </div>
                </div>
                <div className='row2'>
                    <div className='core-box4'>
                        <div id='boxtop'>
                            <img src={boxd} alt="" id='box-img' />
                        </div>
                        <div id='boxbottom'>
                            <h3 id='core-h3'>Finance AI</h3>
                            <p id='core-p1'>Lorem ipsum dolor sit amet. <br />Accumsan nunc.</p>
                        </div>
                    </div>
                    <div className='core-box5'>
                        <div id='boxtop'>
                            <img src={boxe} alt="" id='box-img' />
                        </div>
                        <div id='boxbottom'>
                            <h3 id='core-h3'>Investment Coach</h3>
                            <p id='core-p1'>Lorem ipsum dolor sit amet. <br />Accumsan nunc.</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={ellipseb} alt="" id='ellipseb'/>
        </div>
    )
}

export default Core
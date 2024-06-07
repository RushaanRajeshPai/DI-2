import React from 'react'
import AboutUs from './AboutComponents/AboutUs/AboutUs'
import Goal from './AboutComponents/Goal/Goal'
import Reason from './AboutComponents/Reason/Reason'
import Team from './AboutComponents/Team/Team'

const About = () => {
  return (
    <div>
      <AboutUs />
      <Goal />
      <Reason />
      <Team />
    </div>
  )
}

export default About
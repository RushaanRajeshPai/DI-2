import React from 'react'
import Hero from './Components/Hero/Hero';
import Social from './Components/Social/Social';
import Customize from './Components/Customize/Customize';
import Core from './Components/Core/Core';
import Reviews from './Components/Reviews/Reviews';
import Login from './Components/Login/Login';

const Home = () => {
    return (
        <div>
            <Hero />
            <Social />
            <Customize />
            <Core />
            <Reviews />
            <Login />
        </div>
    )
}

export default Home
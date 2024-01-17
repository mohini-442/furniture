import React from 'react'
import Header from '../components/Header'
import Welcomeourstory from '../components/Welcomeourstory'
import Shoppingstore from '../components/Shoppingstore'
import Myfooter from '../components/Myfooter'

const About = () => {
    return (
        <>
            <div className='bg-[url(./assets/images/bgheader.png)] bg-cover md:bg-center bg-right bg-no-repeat md:min-h-[100vh] min-h-[70vh]'>
                <Header />
            </div>
            <Welcomeourstory />
            <Shoppingstore />
            <Myfooter />
        </>
    )
}

export default About
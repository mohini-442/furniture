import React from 'react'
import Header from '../components/Header'
import Latesdeal from '../components/Latestdeal'
import Festivaloffer from '../components/Festivaloffer'
import Testimonial from '../components/Testimonial'
import Myfooter from '../components/Myfooter'

const Contact = () => {
    return (
        <>
            <div className='bg-[url(./assets/images/bgheader.png)] bg-cover md:bg-center bg-right bg-no-repeat md:min-h-[100vh] min-h-[70vh]'>
                <Header />
            </div>
            <Latesdeal />
            <Festivaloffer />
            <Testimonial />
            <Myfooter />
        </>
    )
}

export default Contact
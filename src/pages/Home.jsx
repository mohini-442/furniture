import React from 'react'
import Header from '../components/Header'
import Welcomeourstory from '../components/Welcomeourstory'
import Shoppingstore from '../components/Shoppingstore'
import Ourproducts from '../components/Ourproducts'
import Testimonial from '../components/Testimonial'
import Woodensofa from '../components/Woodensofa'
import Latesdeal from '../components/Latestdeal'
import Myfooter from '../components/Myfooter'
import Loader from '../components/Loader'
import Festivaloffer from '../components/Festivaloffer'
import Backtotop from '../components/Backtotop'



import bgheader from '../assets/images/bgheader.png'

const Home = () => {
    return (
        <div className='overflow-hidden'>
            <Loader />
            <div className='bg-[url(./assets/images/bgheader.png)] bg-cover md:bg-center bg-right bg-no-repeat md:min-h-[100vh] min-h-[70vh]'>
                <Header />
            </div>
            <Welcomeourstory />
            <Shoppingstore />
            <Ourproducts />
            <Woodensofa />
            <Latesdeal />
            <Festivaloffer />
            <Testimonial />
            <Myfooter />
            <Backtotop />

        </div>
    )
}

export default Home
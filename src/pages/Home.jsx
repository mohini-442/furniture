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

const Home = () => {
    return (
        <div>
            <Loader />
            <div className='bg-[url(./assets/images/bgheader.png)] bg-cover md:bg-center bg-right bg-no-repeat md:min-h-[90vh] min-h-[70vh]'>
                <Header />
            </div>
            <Welcomeourstory />
            {/* <Shoppingstore /> */}
            <Ourproducts />
            <Woodensofa />
            <Latesdeal />
            <Festivaloffer />
            <Testimonial />
            <Myfooter />

        </div>
    )
}

export default Home
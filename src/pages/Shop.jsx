import React from 'react'
import Header from '../components/Header'
import Ourproducts from '../components/Ourproducts'
import Woodensofa from '../components/Woodensofa'
import Myfooter from '../components/Myfooter'

const Shop = () => {
    return (
        <>
            <div className='bg-[url(./assets/images/bgheader.png)] bg-cover md:bg-center bg-right bg-no-repeat md:min-h-[100vh] min-h-[70vh]'>
                <Header />
            </div>
            <Ourproducts />
            <Woodensofa />
            <Myfooter />
        </>
    )
}

export default Shop
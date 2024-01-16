import React from 'react'
import sofa from '../assets/images/sofa.png'

function Woodensofa() {
    return (
        <div className='bg-[#2D39490A] mb-24 pt-24 relative'>
            <div className="max-w-[1140px] px-3 mx-auto">
                <div className='flex flex-wrap flex-row '>
                    <div className='md:w-5/12 w-full  px-3 relative z-[1]'>
                        <div className='flex items-center gap-2 text-center justify-center lg:justify-start'>
                            <div className='h-[1px] w-[95px] bg-[#000]'></div>
                            <h2 className='text-[#BD7D41] font-poppins text-xl font-normal '>Shopping Store</h2>
                        </div>
                        <h2 className='text-[#243040] font-poppins text-[35px] font-bold max-w-[436px] pt-3 mx-auto lg:mx-0 text-center lg:text-start'>Wooden Sofa Starts From ₹1200.00</h2>
                        <div className='flex items-center justify-center lg:justify-start'>
                            <button className='bg-[#BD7D41] p-[19px_48px_19px_48px] text-white font-poppins text-xl  text-center font-semibold mt-12'>SHOP NOW</button>
                        </div>
                    </div>
                    <div className='md:w-7/12  w-full pt-12 lg:pt-0'>
                        <img src={sofa} alt="chair" className='z-[1] w-full' />
                    </div>
                </div>
            </div>
            <div className='max-w-[541px] w-full h-full max-h-[210px]  bg-[#243040] absolute bottom-[-68px] right-0 -z-10'></div>
        </div>
    )
}
export default Woodensofa
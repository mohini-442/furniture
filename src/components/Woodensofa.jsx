import React from 'react'
import sofa from '../assets/images/sofa.png'

function Woodensofa() {
    return (
        <div className='bg-[#2D39490A] mb-24 pt-24 relative'>
            <div className="max-w-[1140px] px-3 mx-auto" data-aos="fade-up"
                data-aos-duration="3000">
                <div className='flex flex-wrap flex-row '>
                    <div className='lg:w-5/12 w-full  px-3 relative z-[1]'>
                        <div className='flex items-center gap-2 text-center justify-center lg:justify-start'>
                            <div className='h-[1px] w-[95px] bg-[#000]'></div>
                            <h2 className='text-[#BD7D41] font-poppins text-xl font-normal '>Shopping Store</h2>
                        </div>
                        <h2 className='text-[#243040] font-poppins text-[35px] font-bold max-w-[436px] pt-3 mx-auto lg:mx-0 text-center lg:text-start'>Wooden Sofa Starts From ₹1200.00</h2>
                        <div className='flex items-center justify-center lg:justify-start'>
                            <button class="relative overflow-hidden font-poppins text-[20px] mx-auto lg:mx-0 mt-5 font-semibold w-[207px] h-[68px] text-[#fff] bg-[#BD7D41] shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-white before:duration-300 before:ease-out hover:text-[#BD7D41] hover:before:h-[68px] hover:before:w-[207px] hover:before:border-[2px] hover:before:border-[#BD7D41]">
                                <span class="relative z-10">SHOP NOW</span>
                            </button>
                        </div>
                    </div>
                    <div className='lg:w-7/12  w-full pt-12 lg:pt-0'>
                        <img src={sofa} alt="chair" className='z-[1] w-full' />
                    </div>
                </div>
            </div>
            <div className='max-w-[541px] w-full h-full max-h-[210px]  bg-[#243040] absolute bottom-[-68px] right-0 -z-10 '></div>
        </div>
    )
}
export default Woodensofa
import React from 'react'
import chair from '../assets/images/chair.png'


const Welcomeourstory = () => {
    return (
        <>
            <div className='max-w-[1320px] px-3 mx-auto py-5' data-aos="fade-up">
                <div className='flex flex-wrap ml-[12px] mr-[-12px] pt-8 flex-col-reverse lg:flex-row' data-aos="fade-up">
                    <div className='lg:w-2/4 px-3 relative z-[1] flex items-center justify-center mx-auto my-12 lg:my-0'>
                        <img src={chair} alt="chair" className='z-[1] w-full max-w-[456px] max-h-[498px] shadow-[3px_8px26px 0px_#0000001F] pt-12' />
                        <div className='max-w-[270px] sm:max-w-[416px] max-h-[246px] sm:max-h-[336px] w-full h-full bg-gradient1 absolute top-[2%] left-[-3%] sm:left-[2%] -z- 10'></div>
                    </div>
                    <div className='lg:w-1/2 lg:pt-16 text-center lg:text-start mx-auto lg:mx-0' data-aos="fade-up">
                        <div className='flex items-center justify-center lg:justify-start'>
                            <div className=' relative before:absolute before:top-0 before:left-0 before:bg-[#000] before:w-[75px] before:h-[1px]'></div>
                            <p className='text-[20px] font-normal font-poppins text-[#BD7D41] pl-20'>Welcome Our Story</p>
                        </div>
                        <h2 className='font-poppins text-[28px] md:text-[35px] text-[#243040] font-bold lg:max-w-[436px] leading-normal mx-auto lg:mx-0'>We create the product you tell us you wish existed.</h2>
                        <p className='font-poppins text-[16px] sm:text-[18px] text-[#4D4D4D] font-normal lg:max-w-[518px] leading-normal pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, urna at pulvinar porta, augue lorem ullamcorper orci, non rhoncus nisi neque sit amet nibh. Phasellus consectetur semper ante et mattis</p>
                        <button class="relative overflow-hidden font-poppins text-[20px] mx-auto font-semibold w-[207px] mt-5 h-[68px] text-[#fff] bg-[#BD7D41] shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-white before:duration-300 before:ease-out hover:text-[#BD7D41] hover:before:h-[68px] hover:before:w-[207px] hover:before:border-[2px] hover:before:border-[#BD7D41]">
                            <span class="relative z-10">READ MORE</span>
                        </button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Welcomeourstory
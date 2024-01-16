import React from 'react'
import chair from '../assets/images/chair.png'


const Welcomeourstory = () => {
    return (
        <>
            <div className='max-w-[1320px] px-3 mx-auto py-5'>
                <div className='flex flex-row flex-wrap ml-[12px] mr-[-12px] pt-8'>
                    <div className='lg:w-2/4 px-3 relative z-[1] flex items-center justify-center mx-auto'>
                        <img src={chair} alt="chair" className='z-[1] max-w-[456px] max-h-[498px] shadow-[3px_8px26px 0px_#0000001F]' />
                        {/* <div className='absolute w-[254px] h-[78px] bg-white flex items-center gap-4 justify-center bottom-[33px] right-[29px]'>
                                <p className='font-Poppins text-sm font-normal text-[#243040]'>Explore Video</p>
                                <div className='h-[1px] w-[66px] bg-[#000]'></div>
                                <div className='w-[45px] h-[45px] rounded-full bg-[#BD7D41] flex items-center justify-center'>
                                    <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 9.5L0.249999 18.5933L0.25 0.406733L16 9.5Z" fill="white" />
                                    </svg>
                                </div>
                            </div> */}
                        <div className='max-w-[416px] h-[336px]  bg-gradient absolute top-[-31px] left-[-27px] -z- 10'></div>
                    </div>
                    <div className='lg:w-1/2 pt-16 text-center lg:text-start mx-auto lg:mx-0'>
                        <div className='flex items-center justify-center lg:justify-start'>
                            <div className=' relative before:absolute before:top-0 before:left-0 before:bg-[#000] before:w-[75px] before:h-[1px]'></div>
                            <p className='text-[20px] font-normal font-poppins text-[#BD7D41] pl-20'>Welcome Our Story</p>
                        </div>
                        <h2 className='font-poppins text-[35px] text-[#243040] font-bold lg:max-w-[436px] leading-normal mx-auto lg:mx-0'>We create the product you tell us you wish existed.</h2>
                        <p className='font-poppins text-[18px] text-[#4D4D4D] font-normal lg:max-w-[518px] leading-normal pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, urna at pulvinar porta, augue lorem ullamcorper orci, non rhoncus nisi neque sit amet nibh. Phasellus consectetur semper ante et mattis</p>
                        <button className='font-poppins text-[20px] font-semibold text-[#fff] bg-[#BD7D41] p-[19px,48px] px-[48px] py-[19px] mt-5'>READ MORE</button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Welcomeourstory
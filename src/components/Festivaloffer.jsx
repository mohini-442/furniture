import React from 'react'

function Festivaloffer() {
    return (
        <div>
            <div className="max-w-[1320px] px-3 mx-auto pb-24">
                <div className='flex flex-row flex-wrap sm:flex-nowrap ml-[-12px] mr-[-12px] gap-5 justify-center'>
                    <div className='md:w-1/2 w-full px-3'>
                        <div className=' bg-[url(./assets/images/sofa1.png)] bg-no-repeat bg-center bg-size  h-[362 px] w-full lg:w-[64 2px]  mx-auto '>
                            <div className='flex items-center gap-2 pt-10'>
                                <div className='h-[1px] w-[88px] bg-[#000]'></div>
                                <h2 className='text-[#000000] font-poppins text-xl font-normal '>Festival Offer</h2>
                            </div>
                            <div className='lg:pl-24 pl-12 pb-16  '>
                                <p className='font-Poppins text-[35px]  font-bold text-[#BD7D41] pt-3'>Upto 40% Off</p>
                                <p className='text-[#000000] font-poppins text-lg font-normal max-w-[262px] pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <button className='bg-[#BD7D41] p-[10px_16px_10px_16px] text-white font-poppins text-xl  text-center font-medium mt-10'>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 w-full px-3'>
                        <div className=' bg-[url(./assets/images/sofa2.png)] bg-no-repeat bg-center bg-size  h-[362 px] lg:w-[642 px]  w-full '>
                            <div className='flex items-center gap-2 pt-10'>
                                <div className='h-[1px] w-[88px] bg-[#000]'></div>
                                <h2 className='text-[#000000] font-poppins text-xl font-normal '>Festival Offer</h2>
                            </div>
                            <div className='lg:pl-24 pl-12 pb-16  '>
                                <p className='font-poppins text-[35px]  font-bold text-[#BD7D41] pt-3'>Upto 40% Off</p>
                                <p className='text-[#000000] font-poppins text-lg font-normal max-w-[262px] pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <button className='bg-[#BD7D41] p-[10px_16px_10px_16px] text-white font-poppins text-xl  text-center font-medium mt-10'>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Festivaloffer
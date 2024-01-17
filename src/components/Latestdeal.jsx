import Latestimg1 from '../assets/images/latestimg1.png'
import Latestimg2 from '../assets/images/latestimg2.png'
import Latestimg3 from '../assets/images/latestimg3.png'
import Slider from "react-slick";
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const productcard = [
    {
        img: Latestimg1,
        svg: (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                    <path d="M18.3859 6.33831L12.6901 5.51709L10.1439 0.396152C10.0743 0.255944 9.95993 0.142442 9.8186 0.0734507C9.46415 -0.100141 9.03343 0.0445188 8.85621 0.396152L6.31002 5.51709L0.614191 6.33831C0.457157 6.36057 0.313583 6.43401 0.20366 6.54529C0.0707685 6.68079 -0.00246073 6.86309 6.31408e-05 7.05213C0.00258702 7.24117 0.0806575 7.42149 0.21712 7.55345L4.33813 11.5394L3.36452 17.1677C3.34169 17.2987 3.35629 17.4333 3.40668 17.5564C3.45706 17.6795 3.54121 17.7862 3.64958 17.8643C3.75795 17.9424 3.8862 17.9887 4.0198 17.9982C4.1534 18.0077 4.28699 17.9798 4.40543 17.9177L9.50004 15.2605L14.5947 17.9177C14.7337 17.9912 14.8953 18.0157 15.0501 17.989C15.4404 17.9222 15.7029 17.555 15.6356 17.1677L14.662 11.5394L18.783 7.55345C18.8951 7.4444 18.9692 7.30197 18.9916 7.14618C19.0522 6.75671 18.7785 6.39618 18.3859 6.33831Z" fill="#FFD135" />
                </svg>
            </>
        ),
    },
    {
        img: Latestimg2,
        svg: (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                    <path d="M18.3859 6.33831L12.6901 5.51709L10.1439 0.396152C10.0743 0.255944 9.95993 0.142442 9.8186 0.0734507C9.46415 -0.100141 9.03343 0.0445188 8.85621 0.396152L6.31002 5.51709L0.614191 6.33831C0.457157 6.36057 0.313583 6.43401 0.20366 6.54529C0.0707685 6.68079 -0.00246073 6.86309 6.31408e-05 7.05213C0.00258702 7.24117 0.0806575 7.42149 0.21712 7.55345L4.33813 11.5394L3.36452 17.1677C3.34169 17.2987 3.35629 17.4333 3.40668 17.5564C3.45706 17.6795 3.54121 17.7862 3.64958 17.8643C3.75795 17.9424 3.8862 17.9887 4.0198 17.9982C4.1534 18.0077 4.28699 17.9798 4.40543 17.9177L9.50004 15.2605L14.5947 17.9177C14.7337 17.9912 14.8953 18.0157 15.0501 17.989C15.4404 17.9222 15.7029 17.555 15.6356 17.1677L14.662 11.5394L18.783 7.55345C18.8951 7.4444 18.9692 7.30197 18.9916 7.14618C19.0522 6.75671 18.7785 6.39618 18.3859 6.33831Z" fill="#FFD135" />
                </svg>
            </>
        ),
    },
    {
        img: Latestimg3,
        svg: (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                    <path d="M18.3859 6.33831L12.6901 5.51709L10.1439 0.396152C10.0743 0.255944 9.95993 0.142442 9.8186 0.0734507C9.46415 -0.100141 9.03343 0.0445188 8.85621 0.396152L6.31002 5.51709L0.614191 6.33831C0.457157 6.36057 0.313583 6.43401 0.20366 6.54529C0.0707685 6.68079 -0.00246073 6.86309 6.31408e-05 7.05213C0.00258702 7.24117 0.0806575 7.42149 0.21712 7.55345L4.33813 11.5394L3.36452 17.1677C3.34169 17.2987 3.35629 17.4333 3.40668 17.5564C3.45706 17.6795 3.54121 17.7862 3.64958 17.8643C3.75795 17.9424 3.8862 17.9887 4.0198 17.9982C4.1534 18.0077 4.28699 17.9798 4.40543 17.9177L9.50004 15.2605L14.5947 17.9177C14.7337 17.9912 14.8953 18.0157 15.0501 17.989C15.4404 17.9222 15.7029 17.555 15.6356 17.1677L14.662 11.5394L18.783 7.55345C18.8951 7.4444 18.9692 7.30197 18.9916 7.14618C19.0522 6.75671 18.7785 6.39618 18.3859 6.33831Z" fill="#FFD135" />
                </svg>
            </>
        ),
    },
    {
        img: Latestimg3,
        svg: (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                    <path d="M18.3859 6.33831L12.6901 5.51709L10.1439 0.396152C10.0743 0.255944 9.95993 0.142442 9.8186 0.0734507C9.46415 -0.100141 9.03343 0.0445188 8.85621 0.396152L6.31002 5.51709L0.614191 6.33831C0.457157 6.36057 0.313583 6.43401 0.20366 6.54529C0.0707685 6.68079 -0.00246073 6.86309 6.31408e-05 7.05213C0.00258702 7.24117 0.0806575 7.42149 0.21712 7.55345L4.33813 11.5394L3.36452 17.1677C3.34169 17.2987 3.35629 17.4333 3.40668 17.5564C3.45706 17.6795 3.54121 17.7862 3.64958 17.8643C3.75795 17.9424 3.8862 17.9887 4.0198 17.9982C4.1534 18.0077 4.28699 17.9798 4.40543 17.9177L9.50004 15.2605L14.5947 17.9177C14.7337 17.9912 14.8953 18.0157 15.0501 17.989C15.4404 17.9222 15.7029 17.555 15.6356 17.1677L14.662 11.5394L18.783 7.55345C18.8951 7.4444 18.9692 7.30197 18.9916 7.14618C19.0522 6.75671 18.7785 6.39618 18.3859 6.33831Z" fill="#FFD135" />
                </svg>
            </>
        ),
    },

];
const Latesdeal = () => {
    const list = productcard.map((productcard) => (
        <div className=" lg:max-w-[422px] w-full bg-white p-[21px]  hover:shadow-[6px_13px_38px_0px_#0000001F] hover:scale-[1.02] duration-[0.5s] mt-10 mx-3 mb-12" >
            <img src={productcard.img} alt="img" className='w-full' />
            <div className='flex justify-between pt-4'>
                <p className='font-poppins text-xl font-medium text-[#000000]'>Single Sofa</p>
                <div className='flex gap-1'>
                    <span>{productcard.svg}</span>
                    <span>{productcard.svg}</span>
                    <span>{productcard.svg}</span>
                    <span>{productcard.svg}</span>
                    <span>{productcard.svg}</span>
                </div>
            </div>
            <p className='font-poppins text-lg font-normal text-[#4d4d4d] pt-2'>Lorem ipsum dolor </p>
            <div className='pt-4 flex justify-between'>
                <p className='font-poppins text-[22px] sm:text-[29px] font-semibold text-[#000000]'>₹1200.00</p>
                <button class="relative overflow-hidden font-poppins text-[16px] sm:text-[20px] font-medium w-[120px] sm:w-[159px] sm:h-[50px] text-[#fff] bg-[#BD7D41] shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-white before:duration-300 before:ease-out hover:text-[#BD7D41] hover:before:h-[50px] hover:before:w-[159px] hover:before:border-[2px] hover:before:border-[#BD7D41]">
                    <span class="relative z-10">ADD TO CART</span>
                </button>
            </div>
        </div>
    ));
    const arrowbtn = React.useRef(null);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    CenterMode: true
                }
            },
            {
                breakpoint: 1124,
                settings: {
                    slidesToShow: 2.2,
                    slidesToScroll: 1,
                    CenterMode: true
                }
            },
            {
                breakpoint: 968,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    CenterMode: true
                }
            },
            {
                breakpoint: 776,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    CenterMode: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    CenterMode: true
                }
            }
        ]
    }
    return (
        <div className='pt-20 pb-12 relative'>
            <div className="max-w-[1320px] mx-auto px-3 " data-aos="fade-up"
                data-aos-duration="3000">
                <div className='flex items-center gap-2 justify-center lg:justify-start'>
                    <div className='h-[1px] w-[95px] bg-[#000]'></div>
                    <h2 className='text-[#BD7D41] font-poppins text-xl font-normal'>Shopping Store</h2>
                </div>
                <h2 className='text-[#243040] font-poppins text-[35px] font-bold max-w-[436px] text-center lg:text-start mx-auto lg:mx-0'>Latest Deal</h2>
                <Slider ref={arrowbtn} {...settings}>
                    {list}
                </Slider>
            </div>
            <div className="flex gap-4 mt-8 justify-center xl:block">
                <button onClick={() => arrowbtn?.current?.slickPrev()} className="rounded-full w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] flex items-center justify-center shadow-[2px_7px_16px_0px_#00000014] absolute left-[1%] xl:top-[46%] top-[85%] hover:bg-[#BD7D41]" >
                    <svg width="42" height="16" viewBox="0 0 42 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292892 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM42 9H1V7H42V9Z" fill="black" />
                    </svg>
                </button>
                <button onClick={() => arrowbtn?.current?.slickNext()} className="rounded-full w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] flex items-center justify-center shadow-[2px_7px_16px_0px_#00000014] absolute right-[1%] xl:top-[46%] top-[85%] hover:bg-[#BD7D41]" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="16" viewBox="0 0 42 16" fill="none">
                        <path d="M41.7071 8.70711C42.0976 8.31658 42.0976 7.68342 41.7071 7.29289L35.3431 0.928932C34.9526 0.538408 34.3195 0.538408 33.9289 0.928932C33.5384 1.31946 33.5384 1.95262 33.9289 2.34315L39.5858 8L33.9289 13.6569C33.5384 14.0474 33.5384 14.6805 33.9289 15.0711C34.3195 15.4616 34.9526 15.4616 35.3431 15.0711L41.7071 8.70711ZM0 9H41V7H0V9Z" fill="black" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Latesdeal;
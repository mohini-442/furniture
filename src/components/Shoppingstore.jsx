import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderimg1 from "../assets/images/sliderimg1.png";
import sliderimg2 from "../assets/images/sliderimg2.png";
import sliderimg3 from "../assets/images/sliderimg3.png";

const ProductData = [
    {
        id: 1,
        ProductImg: sliderimg1,
        Product: "Single Sofa",
        Price: "₹ 1200.00",
    },
    {
        id: 2,
        ProductImg: sliderimg2,
        Product: "Single Sofa",
        Price: "₹ 1200.00",
    },
    {
        id: 3,
        ProductImg: sliderimg3,
        Product: "Single Sofa",
        Price: "₹ 1200.00",
    },
    {
        id: 4,
        ProductImg: sliderimg1,
        Product: "Single Sofa",
        Price: "₹ 1200.00",
    },
    {
        id: 5,
        ProductImg: sliderimg2,
        Product: "Single Sofa",
        Price: "₹ 1200.00",
    },
];
const Shoppingstore = () => {
    const card = ProductData.map((ProductData) => (
        <div key={ProductData.id} className="pr-[21px]">
            <div>
                <div className="max-w-[295px] max-h-[338px] w-full h-full pb-[27px]  bg-white pl-[17px] pt-[15px] pr-[21px] shadow-[2px_7px_28px_0px_#0000000D] mx-3">
                    <img src={ProductData.ProductImg} alt="img1" className="mb-[13px]" />
                    <div className="flex justify-between items-center">
                        <p className=" font-poppins text-xl leading-normal font-medium text-nowrap">
                            {ProductData.Product}
                        </p>
                        <span className="flex gap-[2px]">
                            <svg
                                width="19"
                                height="18"
                                viewBox="0 0 19 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18.3859 6.33831L12.6901 5.51709L10.1439 0.396152C10.0743 0.255944 9.95993 0.142442 9.8186 0.0734507C9.46415 -0.100141 9.03343 0.0445188 8.85621 0.396152L6.31002 5.51709L0.614191 6.33831C0.457157 6.36057 0.313583 6.43401 0.20366 6.54529C0.0707685 6.68079 -0.00246073 6.86309 6.31408e-05 7.05213C0.00258702 7.24117 0.0806575 7.42149 0.21712 7.55345L4.33813 11.5394L3.36452 17.1677C3.34169 17.2987 3.35629 17.4333 3.40668 17.5564C3.45706 17.6795 3.54121 17.7862 3.64958 17.8643C3.75795 17.9424 3.8862 17.9887 4.0198 17.9982C4.1534 18.0077 4.28699 17.9798 4.40543 17.9177L9.50004 15.2605L14.5947 17.9177C14.7337 17.9912 14.8953 18.0157 15.0501 17.989C15.4404 17.9222 15.7029 17.555 15.6356 17.1677L14.662 11.5394L18.783 7.55345C18.8951 7.4444 18.9692 7.30197 18.9916 7.14618C19.0522 6.75671 18.7785 6.39618 18.3859 6.33831Z"
                                    fill="#FFD135"
                                />
                            </svg>
                            <svg
                                width="19"
                                height="18"
                                viewBox="0 0 19 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18.3859 6.33831L12.6901 5.51709L10.1439 0.396152C10.0743 0.255944 9.95993 0.142442 9.8186 0.0734507C9.46415 -0.100141 9.03343 0.0445188 8.85621 0.396152L6.31002 5.51709L0.614191 6.33831C0.457157 6.36057 0.313583 6.43401 0.20366 6.54529C0.0707685 6.68079 -0.00246073 6.86309 6.31408e-05 7.05213C0.00258702 7.24117 0.0806575 7.42149 0.21712 7.55345L4.33813 11.5394L3.36452 17.1677C3.34169 17.2987 3.35629 17.4333 3.40668 17.5564C3.45706 17.6795 3.54121 17.7862 3.64958 17.8643C3.75795 17.9424 3.8862 17.9887 4.0198 17.9982C4.1534 18.0077 4.28699 17.9798 4.40543 17.9177L9.50004 15.2605L14.5947 17.9177C14.7337 17.9912 14.8953 18.0157 15.0501 17.989C15.4404 17.9222 15.7029 17.555 15.6356 17.1677L14.662 11.5394L18.783 7.55345C18.8951 7.4444 18.9692 7.30197 18.9916 7.14618C19.0522 6.75671 18.7785 6.39618 18.3859 6.33831Z"
                                    fill="#FFD135"
                                />
                            </svg>
                            <svg
                                width="19"
                                height="18"
                                viewBox="0 0 19 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18.3859 6.33831L12.6901 5.51709L10.1439 0.396152C10.0743 0.255944 9.95993 0.142442 9.8186 0.0734507C9.46415 -0.100141 9.03343 0.0445188 8.85621 0.396152L6.31002 5.51709L0.614191 6.33831C0.457157 6.36057 0.313583 6.43401 0.20366 6.54529C0.0707685 6.68079 -0.00246073 6.86309 6.31408e-05 7.05213C0.00258702 7.24117 0.0806575 7.42149 0.21712 7.55345L4.33813 11.5394L3.36452 17.1677C3.34169 17.2987 3.35629 17.4333 3.40668 17.5564C3.45706 17.6795 3.54121 17.7862 3.64958 17.8643C3.75795 17.9424 3.8862 17.9887 4.0198 17.9982C4.1534 18.0077 4.28699 17.9798 4.40543 17.9177L9.50004 15.2605L14.5947 17.9177C14.7337 17.9912 14.8953 18.0157 15.0501 17.989C15.4404 17.9222 15.7029 17.555 15.6356 17.1677L14.662 11.5394L18.783 7.55345C18.8951 7.4444 18.9692 7.30197 18.9916 7.14618C19.0522 6.75671 18.7785 6.39618 18.3859 6.33831Z"
                                    fill="#FFD135"
                                />
                            </svg>
                            <svg
                                width="19"
                                height="18"
                                viewBox="0 0 19 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18.3859 6.33831L12.6901 5.51709L10.1439 0.396152C10.0743 0.255944 9.95993 0.142442 9.8186 0.0734507C9.46415 -0.100141 9.03343 0.0445188 8.85621 0.396152L6.31002 5.51709L0.614191 6.33831C0.457157 6.36057 0.313583 6.43401 0.20366 6.54529C0.0707685 6.68079 -0.00246073 6.86309 6.31408e-05 7.05213C0.00258702 7.24117 0.0806575 7.42149 0.21712 7.55345L4.33813 11.5394L3.36452 17.1677C3.34169 17.2987 3.35629 17.4333 3.40668 17.5564C3.45706 17.6795 3.54121 17.7862 3.64958 17.8643C3.75795 17.9424 3.8862 17.9887 4.0198 17.9982C4.1534 18.0077 4.28699 17.9798 4.40543 17.9177L9.50004 15.2605L14.5947 17.9177C14.7337 17.9912 14.8953 18.0157 15.0501 17.989C15.4404 17.9222 15.7029 17.555 15.6356 17.1677L14.662 11.5394L18.783 7.55345C18.8951 7.4444 18.9692 7.30197 18.9916 7.14618C19.0522 6.75671 18.7785 6.39618 18.3859 6.33831Z"
                                    fill="#FFD135"
                                />
                            </svg>
                            <svg
                                width="19"
                                height="18"
                                viewBox="0 0 19 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18.3859 6.33831L12.6901 5.51709L10.1439 0.396152C10.0743 0.255944 9.95993 0.142442 9.8186 0.0734507C9.46415 -0.100141 9.03343 0.0445188 8.85621 0.396152L6.31002 5.51709L0.614191 6.33831C0.457157 6.36057 0.313583 6.43401 0.20366 6.54529C0.0707685 6.68079 -0.00246073 6.86309 6.31408e-05 7.05213C0.00258702 7.24117 0.0806575 7.42149 0.21712 7.55345L4.33813 11.5394L3.36452 17.1677C3.34169 17.2987 3.35629 17.4333 3.40668 17.5564C3.45706 17.6795 3.54121 17.7862 3.64958 17.8643C3.75795 17.9424 3.8862 17.9887 4.0198 17.9982C4.1534 18.0077 4.28699 17.9798 4.40543 17.9177L9.50004 15.2605L14.5947 17.9177C14.7337 17.9912 14.8953 18.0157 15.0501 17.989C15.4404 17.9222 15.7029 17.555 15.6356 17.1677L14.662 11.5394L18.783 7.55345C18.8951 7.4444 18.9692 7.30197 18.9916 7.14618C19.0522 6.75671 18.7785 6.39618 18.3859 6.33831Z"
                                    fill="#FFD135"
                                />
                            </svg>
                        </span>
                    </div>
                    <div className="flex gap-[6.83px] items-center">
                        <div className="flex gap-[2.87px] items-center">
                            <p className="font-poppins text-[28.68px] leading-normal teext-center font-semibold">
                                {ProductData.Price}
                            </p>
                        </div>
                        <div className="flex gap-[1.14px] items-center">
                            <p className=" text-[11.37px] font-poppins leading-normal font-normal text-center text-[#C4C4C4]">
                                {ProductData.Price}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ));
    const btn = React.useRef(null);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        centerPadding: "40px",
        slidesToShow: 3.05,
        variableWidth: true,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 2.08,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 890,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2.3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1.7,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoPlay: true,
                    autoPlaySpeed: 1000,
                },
            },
        ],
    };
    return (
        <div className="bg-[#2D39490A] pt-[40px] md:pb-[98px] relative overflow-x-clip mt-[14%]">
            <div className="max-w-[741px] max-h-[417px] h-full bg-gradient1 w-full absolute right-0 top-[47%] lg:top-[-35%] hidden lg:block"></div>
            <div className="max-w-[1320px] mx-auto px-3" data-aos="fade-up">
                <div className="flex flex-wrap flex-row -mx-3">
                    <div className="lg:w-5/12 w-full ">
                        <div>
                            <div className="flex items-center gap-[9px] justify-center lg:justify-start">
                                <div className="w-[16%] border border-black border-solid"></div>
                                <p className="text-xl text-center text-[#BD7D41] font-poppins">
                                    Shopping Store
                                </p>
                            </div>
                            <h2 className=" pt-[29px] text-[35px] font-poppins text-[#243040] text-center lg:text-start mx-auto lg:mx-0 font-bold leading-normal max-w-[436px]">
                                Buy trending furniture Products.
                            </h2>
                            <p className=" pt-[19px] text-lg font-poppins leading-normal font-normal text-[#000000B2] max-w-[422px] text-center lg:text-start mx-auto lg:mx-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                faucibus, urna at pulvinar porta
                            </p>
                            <div className="flex gap-[14px] pt-[39px] justify-center lg:justify-start mb-5">
                                <button
                                    className="w-[41px] h-[41px] rounded-[10px] bg-white flex justify-center items-center  hover:bg-[#BD7D41]"
                                    onClick={() => btn?.current?.slickPrev()}
                                >
                                    <svg
                                        width="21"
                                        height="8"
                                        viewBox="0 0 21 8"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0.646446 4.35355C0.451185 4.15829 0.451185 3.84171 0.646446 3.64645L3.82843 0.464466C4.02369 0.269204 4.34027 0.269204 4.53553 0.464466C4.7308 0.659728 4.7308 0.976311 4.53553 1.17157L1.70711 4L4.53553 6.82843C4.7308 7.02369 4.7308 7.34027 4.53553 7.53553C4.34027 7.7308 4.02369 7.7308 3.82843 7.53553L0.646446 4.35355ZM21 4.5H1V3.5H21V4.5Z"
                                            fill="black"
                                        />
                                    </svg>
                                </button>
                                <button
                                    className="w-[41px] h-[41px] rounded-[10px] bg-white flex justify-center items-center hover:bg-[#BD7D41]"
                                    onClick={() => btn?.current?.slickNext()}
                                >
                                    <svg
                                        width="21"
                                        height="8"
                                        viewBox="0 0 21 8"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5H20V3.5H0V4.5Z"
                                            fill="black"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-7/12 min-[890px]:mt-0 mt-[50px] w-full lg:absolute right-0 pt-12">
                        <Slider ref={btn} {...settings} className="lg:absolute right-0">
                            {card}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Shoppingstore;
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimg1 from "../assets/images/img1.png";
import testimg2 from "../assets/images/img2.png";
import testimg3 from "../assets/images/img3.png";
import testimg4 from "../assets/images/img4.png";
import testimg5 from "../assets/images/img5.png";
import testimg6 from "../assets/images/img6.png";
import testimg7 from "../assets/images/img7.png";

const Testimonial = () => {
    var settings = {
        centerMode: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    // centerPadding: "35px",
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    return (
        <div>
            <div className="max-w-[1341px] px-3 mx-auto pt-[55px] pb-[109px]">
                <span className="flex items-center gap-2">
                    <hr className="max-w-[96px] w-full h-[1px] bg-[#000000] border-t-[unset]" />
                    <p className="text-[#BD7D41] font-poppins text-lg sm:text-xl text-center font-normal leading-normal">
                        Customer Says
                    </p>
                </span>
                <h2 className="text-[#243040] max-w-[436px]  font-poppins text-2xl  sm:text-[35px] leading-normal font-bold pt-3 sm:pt-6">
                    Testimonial
                </h2>
                <div className="pt-[50px]">
                    <Slider
                        {...settings}
                        centerMode={true}
                        asNavFor={nav2}
                        slidesToShow={7}
                        touchMove={true}
                        arrows={false}
                        ref={(slider1) => setNav1(slider1)}
                    >
                        <div className=" !flex justify-center  items-center text-center mx-auto">
                            <img
                                src={testimg1}
                                alt="custumer"
                                className="flex w-full justify-center items-center max-w-[264px] "
                            />
                        </div>
                        <div className=" !flex justify-center  items-center text-center mx-auto">
                            <img
                                src={testimg2}
                                alt="custumer"
                                className="flex w-full justify-center items-center max-w-[164px] "
                            />
                        </div>
                        <div className=" !flex justify-center  items-center text-center mx-auto">
                            <img
                                src={testimg3}
                                alt="custumer"
                                className="flex w-full justify-center items-center max-w-[148px] "
                            />
                        </div>
                        <div className=" !flex justify-center  items-center text-center mx-auto">
                            <img
                                src={testimg4}
                                alt="custumer"
                                className="flex w-full justify-center items-center max-w-[260px] "
                            />
                        </div>
                        <div className=" !flex justify-center  items-center text-center mx-auto">
                            <img
                                src={testimg5}
                                alt="custumer"
                                className="flex w-full justify-center items-center max-w-[258px] "
                            />
                        </div>
                        <div className=" !flex justify-center  items-center text-center mx-auto">
                            <img
                                src={testimg6}
                                alt="custumer"
                                className="flex w-full justify-center items-center max-w-[193px] "
                            />
                        </div>
                        <div className=" !flex justify-center  items-center text-center mx-auto">
                            <img
                                src={testimg7}
                                alt="custumer"
                                className="flex w-full justify-center items-center max-w-[181px] "
                            />
                        </div>
                        <div className=" !flex justify-center  items-center text-center mx-auto">
                            <img
                                src={testimg5}
                                alt="custumer"
                                className="flex w-full justify-center items-center max-w-[258px] "
                            />
                        </div>
                    </Slider>
                    <Slider
                        {...settings}
                        centerMode={true}
                        asNavFor={nav1}
                        ref={(slider2) => setNav2(slider2)}
                        swipeToSlide={true}
                        fade={true}
                        arrows={false}
                        dots={false}
                    >
                        <div>
                            <div>
                                <h3 className=" text-center text-black font-semibold text-lg leading-normal font-poppins">
                                    Treepi Shoty
                                </h3>
                                <p className=" text-center text-[#4D4D4D] font-poppins text-sm font-light leading-noraml">
                                    Teacher
                                </p>
                                <p className="text-center max-w-[350px] text-black font-poppins text-sm font-light leading-normal pt-3 mx-auto">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Suspendisse feugiat nunc in leo vestibulum, at congue erat
                                    accumsan. Suspendisse potenti. Suspendisse vitae vestibulum
                                    sapien.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3 className=" text-center text-black font-semibold text-lg leading-normal font-poppins">
                                    Treepi Shoty
                                </h3>
                                <p className=" text-center text-[#4D4D4D] font-poppins text-sm font-light leading-noraml">
                                    Developer
                                </p>
                                <p className="text-center max-w-[350px] text-black font-poppins text-sm font-light leading-normal pt-3 mx-auto">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Suspendisse feugiat nunc in leo vestibulum, at congue erat
                                    accumsan. Suspendisse potenti. Suspendisse vitae vestibulum
                                    sapien.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3 className=" text-center text-black font-semibold text-lg leading-normal font-poppins">
                                    Treepi Shoty
                                </h3>
                                <p className=" text-center text-[#4D4D4D] font-poppins text-sm font-light leading-noraml">
                                    Professor
                                </p>
                                <p className="text-center max-w-[350px] text-black font-poppins text-sm font-light leading-normal pt-3 mx-auto">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Suspendisse feugiat nunc in leo vestibulum, at congue erat
                                    accumsan. Suspendisse potenti. Suspendisse vitae vestibulum
                                    sapien.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3 className=" text-center text-black font-semibold text-lg leading-normal font-poppins">
                                    Treepi Shoty
                                </h3>
                                <p className=" text-center text-[#4D4D4D] font-poppins text-sm font-light leading-noraml">
                                    Teacher
                                </p>
                                <p className="text-center max-w-[350px] text-black font-poppins text-sm font-light leading-normal pt-3 mx-auto">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Suspendisse feugiat nunc in leo vestibulum, at congue erat
                                    accumsan. Suspendisse potenti. Suspendisse vitae vestibulum
                                    sapien.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3 className=" text-center text-black font-semibold text-lg leading-normal font-poppins">
                                    Treepi Shoty
                                </h3>
                                <p className=" text-center text-[#4D4D4D] font-poppins text-sm font-light leading-noraml">
                                    Developer
                                </p>
                                <p className="text-center max-w-[350px] text-black font-poppins text-sm font-light leading-normal pt-3 mx-auto">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Suspendisse feugiat nunc in leo vestibulum, at congue erat
                                    accumsan. Suspendisse potenti. Suspendisse vitae vestibulum
                                    sapien.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3 className=" text-center text-black font-semibold text-lg leading-normal font-poppins">
                                    Treepi Shoty
                                </h3>
                                <p className=" text-center text-[#4D4D4D] font-poppins text-sm font-light leading-noraml">
                                    Professor
                                </p>
                                <p className="text-center max-w-[350px] text-black font-poppins text-sm font-light leading-normal pt-3 mx-auto">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Suspendisse feugiat nunc in leo vestibulum, at congue erat
                                    accumsan. Suspendisse potenti. Suspendisse vitae vestibulum
                                    sapien.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3 className=" text-center text-black font-semibold text-lg leading-normal font-poppins">
                                    Treepi Shoty
                                </h3>
                                <p className=" text-center text-[#4D4D4D] font-poppins text-sm font-light leading-noraml">
                                    Developer
                                </p>
                                <p className="text-center max-w-[350px] text-black font-poppins text-sm font-light leading-normal pt-3 mx-auto">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Suspendisse feugiat nunc in leo vestibulum, at congue erat
                                    accumsan. Suspendisse potenti. Suspendisse vitae vestibulum
                                    sapien.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3 className=" text-center text-black font-semibold text-lg leading-normal font-poppins">
                                    Treepi Shoty
                                </h3>
                                <p className=" text-center text-[#4D4D4D] font-poppins text-sm font-light leading-noraml">
                                    Developer
                                </p>
                                <p className="text-center max-w-[350px] text-black font-poppins text-sm font-light leading-normal pt-3 mx-auto">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Suspendisse feugiat nunc in leo vestibulum, at congue erat
                                    accumsan. Suspendisse potenti. Suspendisse vitae vestibulum
                                    sapien.
                                </p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
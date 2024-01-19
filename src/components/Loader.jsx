import React, { useEffect, useState } from "react";
import logo from '../assets/images/logo.png'

const Preloader = () => {
    const [loder, setloader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setloader(false);
        }, 3500);
    }, []);
    {
        if (loder === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "initial";
        }
    }
    return (
        <div>
            {loder ? (
                <section
                    style={{ zIndex: "999999999" }}
                    className="bg-black top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center"
                >
                    <div className="preloader flex flex-col justify-center items-center h-screen">
                        <img src={logo} alt="logo" className="animate-bounce"/>
                        <p className=" text-white font-roboto sm:text-[33px] sm:text-2xl text-xl font-bold pt-6">FURNITURE</p>
                    </div>
                </section>
            ) : (
                ""
            )}
        </div>
    )
}

export default Preloader
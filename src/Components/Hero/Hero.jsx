import React from "react";
import "./Hero.css"
import hand_icon from "../Assets/hand_icon.png"
import arrow_icon from "../Assets/arrow.png"
import hero_image from "../Assets/hero_image.png"
function Hero() {

    return(
        <div className="hero h-screen flex flex-wrap justify-evenly items-center p-[50px] bg-gradient-to-b from-[#e583f1] to-black/525  w-[98vw]">
            <div className="hero-left flex flex-col  align-center gap-[2px] p-[10px]">
                <h2 className="text-[40px] font-bold">New Arrivals Only</h2>
                <div>
                    <div className="hand-hand-icon flex items-center">
                        <p>new</p>
                        <img className="w-[150px]" src={hand_icon} alt="" />
                    </div>
                   <p>collections</p>
                    <p className="min-w-2xl">for everyone</p></div>
               
                <div className="hero-lates-btn bg-red-600 text-[22px] font-[500] flex justify-center items-center h-[70px] w-[310px] rounded-[70px]">
                    <div className="mr-6 font-bold text-blue-50">Latest Colleciton</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right flex items-center justify-center">
                <img src={hero_image} className="" alt="" />
            </div>
        </div>

    )
}
export default Hero
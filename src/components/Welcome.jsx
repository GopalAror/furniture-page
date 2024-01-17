import React, { useState } from 'react'
import img1 from "../assets/image/second-sec-img1.webp";
import Firstbtn from './Firstbtn';

const Welcome = () => {
    const [showmodal, setshowmodal] = useState(false)
    if (showmodal === true) {
        document.body.classList.add("overflow-hidden")

    } else {
        document.body.classList.remove("overflow-hidden")
    }
    return (
        <div>
            <div className="mx-auto pt-[70px] max-w-[1320px] px-3 overflow-hidden">
                <div className="flex flex-wrap pb-[120px] justify-center items-center -mx-3 flex-row">
                    <div className="w-full sm:w-8/12 lg:w-5/12 min-h-[500px] min-[400px]:min-h-[562px] px-3" data-aos="fade-right">
                        <div className="max-w-[416px] relative w-full min-h-[336px] bg-gradient-to-l from-neutral-400 via-slate-600 to-slate-950">
                            <img className='shadow-[3px_8px_26px_0px_rgba(0,0,0,0.12)] max-w-[456px] w-full absolute top-[15%] min-[500px]:left-[12%] left-0 min-h-[400px] min-[500px]:min-h-[498px]' src={img1} alt="second-sec-img1" />
                            <div className="cursor-pointer min-[500px]:right-[-12%] right-0 absolute bottom-[-35%] min-[500px]:bottom-[-63%] px-[15px] py-[16px] bg-white flex items-center" onClick={() => setshowmodal(true)}>
                                <p className='text-[#243040] text-center pr-3 font-poppins font-normal text-[14px] leading-[normal]'>Explore Video</p>
                                <div className=" h-[1px] w-[66px] bg-[#243040]"></div>
                                <span className='ml-[7px] '><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                                    <circle cx="22.5" cy="22.5" r="22.5" fill="#BD7D41" />
                                    <path d="M33 22.5L17.25 31.5933L17.25 13.4067L33 22.5Z" fill="white" />
                                </svg></span>
                            </div>
                        </div>
                        {showmodal ? (
                            <>
                                <div onClick={() => setshowmodal(false)} className='fixed z-[7] top-0 left-0 h-full min-h-screen backdrop-blur-sm w-full flex items-center justify-center bg-[rgba(2,80,102,0.67)]'>
                                    <div onClick={() => setshowmodal(true)} className='bg-white p-5 rounded-[5px] relative'>
                                        <iframe className=' max-sm:w-[300px]' width="560" height="315" src="https://www.youtube.com/embed/gffSYMAAXJ4?si=Gc68D7nSzDwOihvh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                        <div className='flex items-center justify-end mt-5'>
                                            <button onClick={() => setshowmodal(false)} className='mt-4 text-end py-3 rounded-[4px] group hover:bg-[#025066] px-8 border border-solid border-[#025066] transition-colors duration-300 ease-linear'><p className='text-[16px] font-medium group-hover:text-white text-[#025066]'>Close</p></button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : null}
                    </div>
                    <div className="w-full sm:w-8/12 lg:w-7/12 px-3 items-center flex flex-col h-full justify-center" data-aos="fade-left">
                        <div className='lg:pl-[100px]'>
                            <div className='flex items-center gap-2'>
                                <div className="h-[1px] w-[95px] bg-black"></div>
                                <p className='text-[#BD7D41] text-center font-poppins text-[20px] font-normal'>Welcome Our Story</p>
                            </div>
                            <h2 className='text-[#243040] max-w-[436px] font-poppins sm:text-[30px] text-[25px] md:text-[35px] font-bold pt-[19px]'>We create the product you tell us you wish existed.</h2>
                            <p className='text-[#4D4D4D] font-poppins text-[14px] sm:text-[18px] font-normal max-w-[596px] pt-[19px] pb-[34px] leading-[normal]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, urna at pulvinar porta, augue lorem ullamcorper orci, non rhoncus nisi neque sit amet nibh. Phasellus consectetur semper ante et mattis</p>
                            <Firstbtn first="READ MORE" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome

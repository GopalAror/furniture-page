import React from 'react'
import Firstbtn from './Firstbtn'
import sofa from "../assets/image/woodenimg.webp";

const Wooden = () => {
    return (
        <div className='bg-[#F7F7F8] relative overflow-x-clip'>
            <div className="mx-auto max-w-[1320px] px-3">
                <div className="flex flex-row flex-wrap -mx-3">
                    <div className=" w-full lg:w-5/12 px-3 lg:pt-0 pt-[50px] flex flex-col justify-center"  data-aos="fade-left">
                        <div className="flex items-center gap-[9px]">
                            <div className="w-[16%] border border-black border-solid "></div>
                            <p className="text-xl text-center text-[#BD7D41] font-poppins">
                                Shopping Store
                            </p>
                        </div>
                        <h3 className='pt-[24px] sm:text-[30px] text-[23px] md:text-[35px] pb-[50px] text-[#243040] font-poppins font-bold leading-[normal] max-w-[436px]'>Wooden Sofa Starts From ₹ 1200.00</h3>
                        <Firstbtn first="SHOP NOW" />
                    </div>
                    <div className=" w-full lg:w-7/12 pt-[60px] px-3 relative z-10"  data-aos="fade-right">
                        <img className='relative z-[2]' src={sofa} alt="sofa" />
                    </div>
                </div>
                <div className="bg-[#243040] max-w-[701px] w-full min-h-[270px] z-0 absolute right-0 bottom-[-15%]"></div>
            </div>
        </div>
    )
}
export default Wooden
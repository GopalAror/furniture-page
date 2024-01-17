import React from 'react'
import Cartbtn from "./Cartbtn";
const Festival = () => {
    return (
        <div className='max-w-[1320px] mx-auto px-3 pb-28 pt-[138px] overflow-x-clip'>
            <div className="grid md:grid-cols-2 gap-9">
                <div className='bg-[url("./assets/image/Festival1.webp")] md:bg-center h-full bg-no-repeat bg-cover w-full  pb-[71px]'  data-aos="zoom-out-right">
                    <div className='flex items-center gap-[7px]'>
                        <div className="h-[1px] w-full max-w-[95px] bg-black mt-2"></div>
                        <p className='text-black font-normal text-[14px] sm:text-xl font-poppins pb-5 pt-8'>Festival Offer</p>
                    </div>
                    <div className=' ps-[80px] sm:ps-[105px]'>
                        <h2 className='text-[#BD7D41] text-[25px] sm:text-[35px] font-bold font-poppins pb-4'>Upto 40% Off</h2>
                        <p className='max-w-[262px] text-[#3F3F3E] pt-[15px] sm:text-lg font-normal pb-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <Cartbtn second='ADD TO CART' />
                    </div>
                </div>
                <div className='bg-[url("./assets/image/Festival2.webp")] md:bg-center h-full bg-no-repeat bg-cover w-full  pb-[71px]'  data-aos="zoom-out-left">
                    <div className='flex items-center gap-[7px]'>
                        <div className="h-[1px] w-full max-w-[95px] mt-2 bg-black"></div>
                        <p className='text-black font-normal text-[14px] sm:text-xl font-poppins pb-5 pt-8'>Festival Offer</p>
                    </div>
                    <div className='  ps-[80px] sm:ps-[105px]'>
                        <h2 className='text-[#BD7D41] text-[25px] sm:text-[35px] font-bold font-poppins pb-4'>Upto 40% Off</h2>
                        <p className='max-w-[262px] text-[#3F3F3E] pt-[15px] sm:text-lg font-normal pb-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <Cartbtn second='ADD TO CART' />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Festival
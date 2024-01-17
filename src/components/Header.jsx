import React from 'react'
import Firstbtn from './Firstbtn'
const Header = () => {
    return (
        <div className=' grow'>
            <div className="mx-auto h-[70%] px-3 max-w-[1320px] flex flex-col items-center justify-center" data-aos="zoom-in">
                <h1 className='max-w-[908px] text-white text-center font-poppins sm:text-[38px] text-[30px] md:text-[48px] font-bold leading-[normal]'>Awesome Design Best Furniture For Your Interior</h1>
                <p className='text-center text-white font-poppins text-[20px] font-normal pt-[15px] pb-[31px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus </p>
                <Firstbtn first="SHOP NOW" />
            </div>
        </div>
    )
}

export default Header

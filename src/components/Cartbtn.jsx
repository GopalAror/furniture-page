import React from 'react'

const Cartbtn = (props) => {
    return (
        <div>
            <button className='after:bg-white after:absolute relative after:bottom-[0%] after:left-0 after:top-0 after:w-full after:h-0 after:hover:h-full after:hover:bottom-[100%] after:z-[-1] z-0 after:duration-300 hover:text-[#bd7d41] after:border-2 after:border-[#bd7d41] text-white text-center font-poppins text-[16px] sm:text-[20px] font-medium bg-[#bd7d41] py-[10px] px-3'>{props.second}</button>
        </div>
    )
}

export default Cartbtn

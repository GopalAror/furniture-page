import React from 'react'

const Firstbtn = (props) => {
    return (
        <div>
            <button className='text-white text-center font-poppins text-[18px] sm:text-[20px] font-semibold px-[30px] py-[12px] sm:px-[48px] sm:py-[19px] bg-[#bd7d41] after:bg-white after:absolute relative after:bottom-[0%] after:left-0 after:top-0 after:w-full after:h-0 after:hover:h-full after:hover:bottom-[100%] after:z-[-1] z-0 after:duration-300 hover:text-[#bd7d41] after:border-2 after:border-[#bd7d41]'>{props.first}</button>
        </div>
    )
}

export default Firstbtn

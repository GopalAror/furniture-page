import React from 'react'

const Preload = () => {
    return (
        <div className='bg-[#243040] h-full w-full fixed top-0 bottom-0 left-0 overflow-hidden'>
            <div className="flex items-center justify-center w-full h-full">
                <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">

                    <svg fill='none' className="w-[50px] h-[50px] animate-spin" viewBox="0 0 32 32" xmlns='http://www.w3.org/2000/svg'>
                        <path clipRule='evenodd'
                            d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'
                            fill='white' fillRule='evenodd' />
                    </svg>
                    <div className=' font-roboto text-[50px] text-white font-semibold'>Loading ...</div>
                </div>
            </div>
        </div>
    )
}

export default Preload

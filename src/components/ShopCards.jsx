import React, { useState } from 'react'
import paid from "../assets/image/icons8-paid.gif";
import Cartbtn from './Cartbtn'
import Firstbtn from './Firstbtn';
const ShopCards = (props) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
        document.body.classList.add("overflow-hidden");
    };

    const closeModal = () => {
        setModalOpen(false);
        document.body.classList.remove("overflow-hidden");
    };
    return (
        <>
            <div data-aos={props.animate} className=" min-[1100px]:w-4/12 md:w-6/12 w-full flex justify-center px-3">
                <div className="max-w-[422px] min-h-[453px] mt-[42px] px-[23px] py-[18px] duration-500 bg-white hover:shadow-[6px_13px_38px_0px_rgba(0,0,0,0.12)]">
                    <img className='w-full' src={props.image} alt="image" />
                    <div className='flex justify-between items-center'>
                        <p className='text-black pt-[19px] font-poppins text-[20px] font-medium'>{props.item}</p>
                        <img src={props.star} alt="5star" />
                    </div>
                    <p className='text-[#4D4D4D] font-poppins text-[20px] font-medium pt-[16px]'>{props.lorem}</p>
                    <div className="flex justify-between pt-[16px] items-center">
                        <p className='text-black font-poppins font-semibold text-[18px] sm:text-[28px] leading-[normal]'>{props.money}</p>
                        <span>
                            <Cartbtn second={props.btn} function={props.boo} />
                        </span>
                    </div>
                </div>
            </div>
            {/* {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-20 " onClick={closeModal}>
                    <div className="bg-white p-20 rounded flex justify-center items-center flex-col ">
                        <img src={paid} alt="gif" />
                        <p className="text-gray-800 text-[30px] font-roboto pb-[20px] font-semibold">congratulations</p>
                        <div onClick={closeModal}>
                            <Firstbtn first="continue" />
                        </div>
                    </div>
                </div>)} */}
        </>
    )
}
export default ShopCards
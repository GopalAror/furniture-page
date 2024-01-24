import React, { useState } from 'react'
import Firstbtn from './Firstbtn'
import img1 from "../assets/image/storeimg1.webp";
import img2 from "../assets/image/storeimg2.webp";
import img3 from "../assets/image/storeimg3.webp";
import img4 from "../assets/image/storeimg4.webp";
import img5 from "../assets/image/storeimg5.webp";
import img6 from "../assets/image/storeimg6.webp";
import five from "../assets/image/5star.svg";
import ShopCards from './ShopCards';

const ShopingShop = () => {
    const [data, setdata] = useState(6)
    const [save, setsave] = useState(false)
    const [second, setsecond] = useState([])
    function addToCart(p) {
        setsave(true)
        setsecond([...second, p])
        document.body.classList.add("overflow-hidden")
    }
    function remove(index) {
        const leftcart = [...second];
        leftcart.splice(index, 1);
        setsecond(leftcart);
        if (leftcart.length === 0) {
            setsave(false);
            document.body.classList.remove("overflow-hidden")
        }
    }
    function view() {
        setdata(!data)
        if (data === 6) {
            setdata(9)
        }
        else {
            setdata(6)
        }
    }
    function back() {
        setsave(false)
        document.body.classList.remove("overflow-hidden")
    }
    const cards = [
        {
            id: 1,
            sofa: img1,
            item: 'Single Sofa',
            star: five,
            text: 'Lorem ipsum dolor',
            money: '₹ 1200.00',
            cart: 'ADD TO CART',
            data: "fade-down-right",
            back: addToCart,
        },
        {
            id: 2,
            sofa: img2,
            item: 'Single Sofa',
            star: five,
            text: 'Lorem ipsum dolor',
            money: '₹ 1200.00',
            cart: 'ADD TO CART',
            data: "fade-down",
            back: addToCart,
        },
        {
            id: 3,
            sofa: img3,
            item: 'Single Sofa',
            star: five,
            text: 'Lorem ipsum dolor',
            money: '₹ 1200.00',
            cart: 'ADD TO CART',
            data: "fade-down-left",
            back: addToCart,
        },
        {
            id: 4,
            sofa: img4,
            item: 'Single Sofa',
            star: five,
            text: 'Lorem ipsum dolor',
            money: '₹ 1200.00',
            cart: 'ADD TO CART',
            data: "fade-down-right",
            back: addToCart,
        },
        {
            id: 5,
            sofa: img5,
            item: 'Single Sofa',
            star: five,
            text: 'Lorem ipsum dolor',
            money: '₹ 1200.00',
            cart: 'ADD TO CART',
            data: "fade-down",
            back: addToCart,
        },
        {
            id: 6,
            sofa: img6,
            item: 'Single Sofa',
            star: five,
            text: 'Lorem ipsum dolor',
            money: '₹ 1200.00',
            cart: 'ADD TO CART',
            data: "fade-down-left",
            back: addToCart,
        },
        {
            id: 7,
            sofa: img1,
            item: 'Single Sofa',
            star: five,
            text: 'Lorem ipsum dolor',
            money: '₹ 1200.00',
            cart: 'ADD TO CART',
            back: addToCart,
            data: "fade-down-right",
        },
        {
            id: 8,
            sofa: img2,
            item: 'Single Sofa',
            star: five,
            text: 'Lorem ipsum dolor',
            money: '₹ 1200.00',
            cart: 'ADD TO CART',
            data: "fade-down",
            back: addToCart,
        },
        {
            id: 9,
            sofa: img3,
            item: 'Single Sofa',
            star: five,
            text: 'Lorem ipsum dolor',
            money: '₹ 1200.00',
            cart: 'ADD TO CART',
            data: "fade-down-left",
            back: addToCart,
        },

    ]
    const cart = second.map((p, index) => (
        <div key={index} className=' bg-slate-400'>
            <div className='bg-white'>
                <img src={p.sofa} alt="sofa" />
                <div className='flex justify-between pt-3'>
                    <p>{p.item}</p>
                    <img src={p.star} alt="star" />
                </div>
                <div className='flex justify-between items-center py-5'>
                    <p>{p.money}</p>
                    <button className='bg-[#BD7D41] text-white rounded-full px-5 py-2 ' onClick={() => remove(index)}>Remove</button>
                </div>
            </div>
        </div>
    ))
    function empty(p) {
        setsecond([])
        setsave(false);
        document.body.classList.remove("overflow-hidden")
    }
    return (
        <div className=' overflow-x-clip'>
            <div className={` fixed  top-0  bg-[#000000a3]  w-full h-full z-30 ${save ? "right-0" : "right-[-100%]"} `}>
                <div className="   overflow-y-scroll bg-white md:w-6/12  lg:w-1/3 h-full p-3 duration-500">
                    <div className='flex justify-between'>
                        <button className='bg-[#BD7D41] text-white rounded-full px-5 py-2 mb-[20px] empty' onClick={empty}  >Clear</button>
                        <button className='bg-[#BD7D41] text-white rounded-full px-5 py-2 mb-[20px]' onClick={back}>Back</button>
                    </div>
                    {cart}
                </div>
            </div>
            <div className="max-w-[1320px] px-3 mx-auto py-[60px] lg:py-[120px]">
                <div className=" flex pb-[70px] justify-between items-center flex-wrap">
                    <div>
                        <div className="flex items-center gap-[9px]">
                            <div className="w-[16%] border border-black border-solid "></div>
                            <p className="text-xl text-center text-[#BD7D41] font-poppins">
                                Shopping Store
                            </p>
                        </div>
                        <h3 className=' pt-[19px] sm:text-[30px] text-[23px] md:text-[35px] text-[#243040] font-poppins font-bold leading-[normal]'>Our Products</h3>
                    </div>
                    <div onClick={view}>
                        <Firstbtn first='VIEW ALL PRODUCT' />
                    </div>
                </div>
                <div className="flex flex-row flex-wrap -mx-3">
                    {cards.slice(0, data).map((p) => <ShopCards key={p.id} animate={p.data} image={p.sofa} item={p.item} star={p.star} lorem={p.text} money={p.money} btn={p.cart} boo={() => p.back(p)} />)}
                </div>
            </div>
        </div>
    )
}
export default ShopingShop
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
    function view() {
        setdata(!data)
        if (data === 6) {
            setdata(9)
        }
        else {
            setdata(6)
        }
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
            data:"fade-down-right"
        },
        {
            id: 2,
            sofa: img2,
            item: 'Single Sofa',
            star: five,
            text: 'Lorem ipsum dolor',
            money: '₹ 1200.00',
            cart: 'ADD TO CART',
            data:"fade-down"
        },
        {
            id: 3,
            sofa: img3,
            item: 'Single Sofa',
            star: five,
            text: 'Lorem ipsum dolor',
            money: '₹ 1200.00',
            cart: 'ADD TO CART',
            data:"fade-down-left",
        },
        {
            id: 4,
            sofa: img4,
            item: 'Single Sofa',
            star: five,
            text: 'Lorem ipsum dolor',
            money: '₹ 1200.00',
            cart: 'ADD TO CART',
            data:"fade-down-right",
        },
        {
            id: 5,
            sofa: img5,
            item: 'Single Sofa',
            star: five,
            text: 'Lorem ipsum dolor',
            money: '₹ 1200.00',
            cart: 'ADD TO CART',
            data:"fade-down"
        },
        {
            id: 6,
            sofa: img6,
            item: 'Single Sofa',
            star: five,
            text: 'Lorem ipsum dolor',
            money: '₹ 1200.00',
            cart: 'ADD TO CART',
            data:"fade-down-left"
        },
        {
            id: 7,
            sofa: img1,
            item: 'Single Sofa',
            star: five,
            text: 'Lorem ipsum dolor',
            money: '₹ 1200.00',
            cart: 'ADD TO CART',
            data:"fade-down-right",
        },
        {
            id: 8,
            sofa: img2,
            item: 'Single Sofa',
            star: five,
            text: 'Lorem ipsum dolor',
            money: '₹ 1200.00',
            cart: 'ADD TO CART',
            data:"fade-down"
        },
        {
            id: 9,
            sofa: img3,
            item: 'Single Sofa',
            star: five,
            text: 'Lorem ipsum dolor',
            money: '₹ 1200.00',
            cart: 'ADD TO CART',
            data:"fade-down-left"
        },
    ]
    return (
        <div className=' overflow-x-clip'>
            <div className="max-w-[1320px] px-3 mx-auto py-[60px] lg:py-[120px]">
                <div className=" flex pb-[70px] justify-between items-center">
                    <div>
                        <div className="flex items-center gap-[9px]">
                            <div className="w-[16%] border border-black border-solid "></div>
                            <p className="text-xl text-center text-[#BD7D41] font-poppins">
                                Shopping Store
                            </p>
                        </div>
                        <h3 className=' pt-[19px] text-[35px] text-[#243040] font-poppins font-bold leading-[normal]'>Our Products</h3>
                    </div>
                    <div onClick={view}>
                        <Firstbtn first='VIEW ALL PRODUCT' />
                    </div>
                </div>
                <div className="flex flex-row flex-wrap -mx-3">
                    {cards.slice(0, data).map((p) => <ShopCards key={p.id} animate={p.data} image={p.sofa} item={p.item} star={p.star} lorem={p.text} money={p.money} btn={p.cart} />)}
                </div>
            </div>
        </div>
    )
}

export default ShopingShop

import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Welcome from '../components/Welcome'
import FirstSlide from '../components/FirstSlide'
import ShopingShop from '../components/ShopingShop'
import Wooden from '../components/Wooden'
import Latest from '../components/Latest'
import Festival from '../components/Festival'
import Terminal from '../components/Terminal'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

const Home = () => {
    return (
        <div>
            <div className='bg-[url(./assets/image/sec1-bg.webp)] h-screen bg-normal bg-center md:bg-100% flex flex-col bg-no-repeat'>
                <Nav />
                <Header />
            </div>
            <Welcome />
            <FirstSlide />
            <ShopingShop />
            <Wooden />
            <Latest />
            <Festival />
            <Terminal />
            <Footer />
            <BackToTop />
        </div>
    )
}

export default Home

import React from 'react'
import Nav from '../components/Nav'
import '../assets/scss/home.scss'
import SellerCard from '../components/SellerCard'
import NikeSpecial from '../components/NikeSpecial'
import IconSection from '../components/IconSection'
import ImageInsta from '../components/ImageInsta'
import Footer from '../components/Footer'

function Home() {
    return (

        <div className='sect-home'>
            <Nav />
            <div className="home">
                <div className='left-text'>
                    <div className='text-contain'>
                        <p className='head'>New Summer</p>
                        <h1>Shoes Collection</h1>
                        <p>Competently expedite alternative benefits whereas leading-edge catalysts for change. Globally leverage existing an expanded array of leadership.</p>
                        <button className='but'>Shop Now </button>
                    </div>

                </div>
                <div></div>
            </div>
            <div className="cardsec">
                <div className='card'>
                    <div className="card-body">
                        <div className='heading'>MEN COLLECTIONS</div>
                        <div className='cardButt'><button className='butn'>Explore All</button></div>
                    </div>
                </div>
                <div className='card2'>
                    <div className="card-body">
                        <div className='heading'>MEN COLLECTIONS</div>
                        <div className='cardButt'><button className='butn'>Explore All</button></div>
                    </div>
                </div>
                <div className='card3'>
                    <div className="card-body">
                        <div className='heading'>MEN COLLECTIONS</div>
                        <div className='cardButt'><button className='butn'>Explore All</button></div>
                    </div>
                </div>
            </div>

            <div className='Bestsellers-section'>
                <h1>Bestsellers Product</h1>
                <div className='but-sec'>
                    <button className='fillButt'>All</button>
                    <button className='fillButt'>Nike</button>
                    <button className='fillButt'>Adidas</button>
                    <button className='fillButt'>Puma</button>
                    <button className='fillButt'>Bata</button>
                    <button className='fillButt'>Apex</button>
                </div>
                <SellerCard />
            </div>
            <div className="cta">
                <div className='left-card'>
                    <p className='firstLine'>Adidas Shoes</p>
                    <p className='secLine'>The Summer Sale Off 50%</p>
                    <button className='cta-butt'>Shop Now</button>
                </div>
                <div className='right-card'>
                <p className='firstLine'>Nike Shoes</p>
                    <p className='secLine'>Makes Yourself Keep Sporty</p>
                    <button className='cta-butt'>Shop Now</button>
                </div>
            </div>

            <NikeSpecial />
            <IconSection />
            <ImageInsta />
            <Footer />
        </div>
    )
}

export default Home
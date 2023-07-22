import React from 'react'
import '../assets/scss/iconSection.scss'
import image1 from '../assets/img/service-1.png'
import image2 from '../assets/img/service-2.png'
import image3 from '../assets/img/service-3.png'
import image4 from '../assets/img/service-4.png'

function IconSection() {
  return (
    <div className='IconSection'>
        <div className="icondiv">
            <div className="icon-sec">
                <img src={image1} alt="" />
            </div>
            <div className="text-Section">
                <div className='head'>FREE SHIPING</div>
                <div className='title'>All orders over $150</div>
            </div>
        </div>
        <div className="icondiv">
            <div className="icon-sec">
                <img src={image2} alt="" />
            </div>
            <div className="text-Section">
                <div className='head'>QUICK PAYMENT</div>
                <div className='title'>100% secure payment</div>
            </div>
        </div>
        <div className="icondiv">
            <div className="icon-sec">
                <img src={image3} alt="" />
            </div>
            <div className="text-Section">
                <div className='head'>FREE RETURNS</div>
                <div className='title'>Money back in 30 days</div>
            </div>
        </div>
        <div className="icondiv">
            <div className="icon-sec">
                <img src={image4} alt="" />
            </div>
            <div className="text-Section">
                <div className='head'>24/7 SUPPORT</div>
                <div className='title'>Get Quick Support</div>
            </div>
        </div>
    </div>
  )
}

export default IconSection
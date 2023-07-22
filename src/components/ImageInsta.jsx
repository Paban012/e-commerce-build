import React from 'react'
import '../assets/scss/imageInsta.scss'
import image1 from '../assets/img/insta-1.jpg'
import image2 from '../assets/img/insta-2.jpg'
import image3 from '../assets/img/insta-3.jpg'
import image4 from '../assets/img/insta-4.jpg'
import image5 from '../assets/img/insta-5.jpg'
import image6 from '../assets/img/insta-6.jpg'
import image7 from '../assets/img/insta-7.jpg'
import image8 from '../assets/img/insta-8.jpg'
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

function ImageInsta() {
    return (
        <>
         <div className='main'>
            <div className="img-section">
                <img src={image1} alt="" className='soc-imag'/>
                <div className="insta-post-link"><BsInstagram className='insta-Icon' /></div>
            </div>
            <div className="img-section">
                <img src={image2} alt="" className='soc-imag'/>
                <div className="insta-post-link"><BsInstagram className='insta-Icon' /></div>
            </div>
            <div className="img-section">
                <img src={image3} alt="" className='soc-imag'/>
                <div className="insta-post-link"><BsInstagram className='insta-Icon' /></div>
            </div>
            <div className="img-section">
                <img src={image4} alt="" className='soc-imag'/>
                <div className="insta-post-link"><BsInstagram className='insta-Icon' /></div>
            </div>
            <div className="img-section">
                <img src={image5} alt="" className='soc-imag'/>
                <div className="insta-post-link"><BsInstagram className='insta-Icon' /></div>
            </div>
            <div className="img-section">
                <img src={image6} alt="" className='soc-imag'/>
                <div className="insta-post-link"><BsInstagram className='insta-Icon' /></div>
            </div>
            <div className="img-section">
                <img src={image7} alt="" className='soc-imag'/>
                <div className="insta-post-link"><BsInstagram className='insta-Icon' /></div>
            </div>
            <div className="img-section">
                <img src={image8} alt="" className='soc-imag'/>
                <div className="insta-post-link"><BsInstagram className='insta-Icon' /></div>
            </div>
        </div>
        <div className="fo">
            <div className="fo-title">
                <div className="tit"><span>F</span>ooCap</div>
            </div>
            <div className="fo-icon">
            <div className="allImc"><button>
                <BsFacebook className="ic"/></button></div>
            <div className="allImc"><button>
                <AiFillTwitterCircle className="ic"/></button></div>
            <div className="allImc"><button>
                <BsPinterest className="ic"/></button></div>
            <div className="allImc"><button>
                <AiFillLinkedin className="ic"/></button></div>
            </div>
        </div>
        </>

    )
}

export default ImageInsta
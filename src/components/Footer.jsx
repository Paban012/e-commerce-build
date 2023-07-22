import React from 'react'
import '../assets/scss/footer.scss' 
import { MdLocationOn } from "react-icons/md"; 
import { IoIosArrowForward } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { MdMail } from "react-icons/md";

function Footer() {
  return (
    <div className='footer-main'>
      <div className='divider'> 
        <span></span>
      </div>
      <div className="main-conten">
        <div className="co-first">
          <div className="footer-title">Contact Us</div>
          <div className="line"><span></span></div>
          <div className='address'>
           <MdLocationOn className='foo-Icon' />
           <div className='address-line'>2751 S Parker Rd, Aurora, CO 80014, United States</div>
          </div>
          <div className='address'>
           <IoIosCall className='foo-Icon' />
           <div className='address-line'>+91 8945632589</div>
          </div>
          <div className='address'>
           <MdMail className='foo-Icon' />
           <div className='address-line'>help.account@gmail.com</div>
          </div>

        </div>
        <div className="co">
          <div className="footer-title">My Account</div>
          <div className="line"><span></span></div>
          <div className='address-my'>
           <IoIosArrowForward className='foo-Icon' />
           <div className='address-line'>My Account</div>
          </div>
          <div className='address-my'>
           <IoIosArrowForward className='foo-Icon' />
           <div className='address-line'>View Cart</div>
          </div>
          <div className='address-my'>
           <IoIosArrowForward className='foo-Icon' />
           <div className='address-line'>Wishlist</div>
          </div>
          <div className='address-my'>
           <IoIosArrowForward className='foo-Icon' />
           <div className='address-line'>Compare</div>
          </div>
          <div className='address-my'>
           <IoIosArrowForward className='foo-Icon' />
           <div className='address-line'>New Products</div>
          </div>
          
        </div>
        <div className="co">
          <div className="footer-title">Opening Time</div>
          <div className="line"><span></span></div>
         <div className='open-time'>
           <div className='days-line'>Mon - Tue</div>
           <div className='value-line'>: 8AM - 10PM</div>
          </div>
          <div className='open-time'>
           <div className='days-line'>Wed</div>
           <div className='value-line'>: 8AM - 7PM</div>
          </div>
          <div className='open-time'>
           <div className='days-line'>Fri</div>
           <div className='value-line'>: 7AM - 12PM</div>
          </div>
          <div className='open-time'>
           <div className='days-line'>Sat</div>
           <div className='value-line'>: 9AM - 8PM</div>
          </div>
          <div className='open-time'>
           <div className='days-line'>Sun</div>
           <div className='value-line'>: Closed</div>
          </div>
        </div>
        <div className="co-last">
          <div className="footer-title">Newsletter</div>
          <div className="line"><span></span></div>
          <div className='foo-span'>Authoritatively morph 24/7 potentialities with error-free partnerships.</div>
        <div className='inp-foo'>
          <input type="text" className='input' placeholder='Email Address'/>
          <button className='in-but'>Subscribe</button>

        </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
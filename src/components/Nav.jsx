import React from 'react'
import { NavLink } from 'react-router-dom'
import { BiSearch } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import '../assets/scss/nav.scss'

function Nav() {
  return (
    <>
    <div className="nav">
        <nav>
            <div className='icon'><span>F<span>ootCap</span></span> </div>
            <div className='menu'>
            <NavLink activeclassname="active" to={"/"}>
              Home
            </NavLink>
            <NavLink activeclassname="active" to={"/about"}>
              About
            </NavLink>
            <NavLink activeclassname="active" to={"/product"}>
              Product
            </NavLink>
            <NavLink activeclassname="active" to={"/shop"}>
              Shop
            </NavLink>
            <NavLink activeclassname="active" to={"/blog"}>
              Blog
            </NavLink>
            <NavLink activeclassname="active" to={"/contact"}>
              Contact
            </NavLink>
            </div>
            <div className='right-icon'>
                <div className='right-ic'><BiSearch className='ic'/></div>
                <div className='right-ic'><CiUser className='ic'/></div>
                <div className='right-ic'><AiOutlineHeart className='ic'/></div>
                <div className='right-ic'><BsBag className='ic'/></div>
            </div>
        </nav>
    </div>
    </>
  )
}

export default Nav
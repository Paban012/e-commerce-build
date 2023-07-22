import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../assets/scss/product.scss'

function Product() {
  return (
    <>
      <Nav />
      <div className='product-container'>
        <div>
          Product
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Product
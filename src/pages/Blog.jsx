import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../assets/scss/blog.scss'

function Blog() {
  return (
    <>
      <Nav />
      <div className='blog-container'>
        <div>
          Blog
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Blog
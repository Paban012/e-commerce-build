import React from 'react'
import '../assets/scss/about.scss'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function About() {
  return (
    <>
      <Nav />
      <div className='about-container'>
        <div>
          About
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
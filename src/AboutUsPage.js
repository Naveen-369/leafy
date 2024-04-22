import React from 'react'
import Header from './HeaderComponent/Header.js';
import Footer from './FooterComponent/Footer.js';
function AboutUsPage() {
  return (
    <div>
        <Header content="Leafy" />
        <h1 style={{color:"white"}}>About us Page</h1>
        <Footer />
    </div>
  )
}

export default AboutUsPage
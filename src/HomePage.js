import React from 'react'
import Header from './HeaderComponent/Header.js';
import Footer from './FooterComponent/Footer.js';
function HomePage() {
  return (
    <div>
        <Header content="Leafy" />
        <h1 style={{color:"white"}}>HomePage</h1>
        <Footer />
    </div>
  )
}

export default HomePage
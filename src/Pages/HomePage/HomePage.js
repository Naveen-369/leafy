import React from 'react'
import Header from '../../Components/HeaderComponent/Header.js';
import Footer from '../../Components/FooterComponent/Footer.js';
import ContentForHomePage from './ContentForHomePage.js';
import './HomePageCss.css';
function HomePage() {
  return (
    <div>
        <Header content="Leafy" />
        <ContentForHomePage />
        <Footer />
    </div>
  )
}

export default HomePage
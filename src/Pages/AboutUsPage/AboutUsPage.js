import React from 'react'
import Header from '../../Components/HeaderComponent/Header.js';
import Footer from '../../Components/FooterComponent/Footer.js';
import ContentForAboutUsPage from './ContentForAboutUsPage.js'
import './AboutUsPageCss.css';
function AboutUsPage() {
  return (
    <div>
        <Header content="Leafy" />
        <h1 id="AboutUsPageH1">Welcome to Leafy.com<br />Your Source for Quality Plants and Agri-Products</h1>
        <ContentForAboutUsPage />
        <Footer />
    </div>
  )
}

export default AboutUsPage
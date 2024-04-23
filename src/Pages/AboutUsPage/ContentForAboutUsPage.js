import React from 'react'
function ContentForAboutUsPage() {
    /*Declaration of the function to chanfge the button appearance */  
  const changeButtonAppearance = () => {
    const button = document.getElementById('ExploreButton');
    if (button.innerHTML === 'Explore Now') {
      button.innerHTML = 'Explore Now  →';
    } else {
      button.innerHTML = 'Explore Now';
    }
  };
    return (
        <div>
            <section id="AboutUsStyling" style={{color:'white',maxWidth:'75%'}}>                
                <p>At Leafy.com, we are passionate about providing our customers with the highest quality plants and agricultural products to help them cultivate thriving gardens, farms, and landscapes. With years of experience in the industry, we are dedicated to offering a wide range of plant varieties and agricultural supplies to meet the diverse needs of our customers.</p>
                <h2 id='ForContent'>Our Mission</h2>
                <p>Our mission is to empower individuals and communities to connect with nature, grow their own food, and create beautiful green spaces. We believe that by offering quality plants and agricultural products, along with expert advice and support, we can inspire and enable people to cultivate healthy, sustainable lifestyles.</p>
                <h2 id='ForContent'>What We Offer</h2>
                <ul>
                    <li><strong>Wide Selection of Plants:</strong> From vibrant flowers and ornamental shrubs to fruit trees and vegetable seedlings, we offer a diverse selection of plants to suit every garden and landscape.</li>
                    <li><strong>Quality Agricultural Products:</strong> In addition to plants, we provide a range of agricultural products such as seeds, fertilizers, pesticides, gardening tools, and irrigation equipment to support successful farming and gardening practices.</li>
                    <li><strong>Expert Advice and Support:</strong> Our team of knowledgeable experts is here to assist you every step of the way. Whether you're a seasoned gardener or just starting out, we're here to answer your questions, offer guidance, and provide personalized recommendations to help you achieve your gardening goals.</li>
                </ul>
                <h2 id='ForContent'>Our Commitment to Sustainability</h2>
                <p>At Leafy.com, we are committed to sustainability and environmental stewardship. We source our plants and agricultural products from trusted suppliers who share our values and adhere to sustainable growing practices. Additionally, we strive to minimize our environmental footprint by reducing waste, conserving resources, and promoting eco-friendly gardening techniques.</p>
                <h2 id='ForContent'>Get in Touch</h2>
                <p>Thank you for choosing Leafy.com as your trusted source for plants and agricultural products. We are dedicated to providing you with exceptional service and top-quality products. If you have any questions, feedback, or inquiries, please don't hesitate to contact us. We look forward to helping you grow your green dreams!</p>
                <br/>
                <button id="ExploreButton"type='button' onClick={()=>window.location.href="/Services"} onMouseEnter={changeButtonAppearance} onMouseLeave={changeButtonAppearance} >Explore Now</button>
                <p id='Decoration'>🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀</p>

            </section>
        </div>
    )
}

export default ContentForAboutUsPage
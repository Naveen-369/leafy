import React from 'react'
import './Footer.css'
const Footer = () => {
    const ginger=()=>{
        var mail=document.getElementById('mail').value;
        if(mail.includes('@') && mail.includes('.')){
            prompt('Enter the same MailID again to get registered for the newsletter : ');
        }
        else{
            alert('Please enter a valid mailID');
        }
    }
    return (
    <div>
        <footer>
            <section className="Contact">
                <h4>Contact Us</h4>
                <p>13 Bharathi street, Gardens</p>
                <p>Ooty, TamilNadu.</p>
                <p>Mon - Fri &rarr; 09:00 - 17:00</p>
                <p>Sat - Sun &rarr; 09:30 - 13:30</p>
                <br />
                <p>165A Iconic Greens, District Six</p>
                <p>Coimbatore, TamilNadu.</p>
                <p>Mon - Fri &rarr; 09:00 - 17:00</p>
                <p>Sat &rarr; 09:30 - 13:30</p>
                <br />
                <p>+91 95889 65226</p>
            </section>
            <section className="Browse">
                <h4>Browse</h4>
                <p>Shop</p>
                <p>Blogs</p>
                <p>Plant Care</p>
                <p>FAQs</p>
                <p>Products</p>
                <p>About us</p>
        </section>
        <section className="Service">
                <h4>Services</h4>
                <p>Plants Rental Program</p>
                <p>Plant Consultants</p>
                <p>Plants Repotting</p>
                <p>TCorporate Gifiting</p>
        </section>
        <section className="Legal">
                <h4>Legal</h4>
                <p>Plant Toxicity</p>
                <p>Terms of Services</p>
                <p>Terms of use</p>
                <p>Privacy Policy</p>
                <p>Return Policy</p>
                <p>Shipping Policy</p>
        </section>
        <section className="Subscription">
            <h4>Subscription</h4>
            <p>Subscribe to our newsletter and get 10% off your first purchase</p>
            <section className="inputter">
                <input type="text" id="mail" placeholder="Enter your mailID" />
                <span className="material-symbols-outlined" onClick={()=>ginger()}>mail</span>
            </section>
            </section>
        </footer>
    </div>
    )
}

export default Footer

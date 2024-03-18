import React from 'react'
import './Header.css'
const Header = (props) => {
    return (
    <div>
        <header>
            <h1>{props.content}</h1>
            <nav>
                <h2>Home</h2>
                <h2>Services</h2>
                <h2>About Us</h2>
                <h2>Log Out</h2>
            </nav>
        </header>  
    </div>
    )
}

export default Header

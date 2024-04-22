import React from 'react'
import './Header.css'
import {Link} from "react-router-dom"
const Header = (props) => {
    return (
    <div>
        <header>
            <h1>{props.content}</h1>
            <nav>
                <ul>
                    <li><Link to='/Home'>Home</Link></li>
                    <li><Link to='/Services'>Services</Link></li>
                    <li><Link to='/About us'>About Us</Link></li>
                    <li id='vebig'style={{padding:" 6px 5px 5px 5px",marginLeft:"25px",marginTop:"0"}}><Link to="/Log Out">Log Out</Link></li>
                </ul>
            </nav>
        </header>  
    </div>
    )
}

export default Header

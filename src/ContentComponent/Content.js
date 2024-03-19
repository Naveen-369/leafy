import React from 'react'
import './Content.css'
const Content = (props) => {

    return (
        <section className='Contents'>
            <img src={props.address} alt={props.description} srcset="" />
            <h2>{props.Product_Name}</h2>
            <h3><sup>₹</sup><span style={{color:"rgb(0, 203, 0)",fontSize:"27px"}}>{props.Amount}</span></h3>
            <p>{props.Definition}</p>
        </section>
    )
}

export default Content

import React from 'react'
import './Containercontent.css'
import Content from './Content'
const Containercontent = () => {
    return (
    <div>
        <section className="Packages" style={{display:"flex",justifyContent:"space-around",marginTop:"50px"}}>
            <Content 
            address="Starter.jpg" 
            description="Starter Package" 
            Product_Name="Plantations"
            Amount="100"
            Definition="This is for little buds who are new to the field of Plantation and Nursery - easy to grow"
            />
            
            <Content 
            address="Bonsai.jpeg" 
            description="Bonsai pack" 
            Product_Name="Bonsai Plantation"
            Amount="120"
            Definition="Bonsai is an Small sized tree - Growing it is seen as a skill as it requires a lot of attention"
            />
            
            <Content 
            address="Collection.jpg" 
            description="Collector Pack" 
            Product_Name="Decoration Pottery"
            Amount="180"
            Definition="Designed for decorative purposes - Can be Colorful and sometimes contains of colorful flowers"
            />
            
            <Content 
            address="Enthusiast.jpg" 
            description="Enthu Package" 
            Product_Name="Flower Plantations"
            Amount="200"
            Definition="Contains of aroma rich flowers, seed, fertilizers and impressive colorfull Flowers"
            />
        </section>
    </div>
    )
}

export default Containercontent

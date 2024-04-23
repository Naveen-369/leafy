import React from 'react'
import './SearchBox.css'
const SearchBox = () => {
    return (
        <section className="SearchBox">
            <div>
                <input type="text" name="Items" id="Items" placeholder='Search Leafy.com' />
                <button type="button" onClick={()=>window.location.reload()}>Search</button>
            </div>
        </section>
    )
}

export default SearchBox

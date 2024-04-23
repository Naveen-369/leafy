import React from 'react'

function ContentForHomePage() {
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
        <section className='IntroBox'>
            <p style={{flex:'1'}}><br/>Build your Quality Space with Vibrant Greeneries</p>
            <img style={{flex:'1',maxWidth:'50%'}} src='HomePageBox.jpg' alt='pic of a plant'/>
        </section>
        <br/><br/>
        <section className='FeaturesBox'>
            <p className='FeaturesIntro'>Explore our Latest Features</p>
            <article>
                <section>
                    <span class="material-symbols-outlined">forest</span>
                    <p>Fresh Plants</p>
                </section>
                <section>
                    <span class="material-symbols-outlined">support_agent</span>
                    <p>Nursery Support</p>
                </section>
                <section>
                    <span class="material-symbols-outlined">psychiatry</span>
                    <p>Gardening Supplies</p>
                </section>
                <section>
                    <span class="material-symbols-outlined">home_health</span>
                    <p>Plant Care</p>
                </section>
                <section>
                    <span class="material-symbols-outlined">cut</span>
                    <p>Gardening Tools</p>
                </section>
            </article>
        </section>
        <br/><br/><br/><br/>        
        <section className='WAUWFor'>
            <p className='WAUWForIntro'>What Are You Waiting For?</p>
            <p className='WAUWForIntro'>Get Started Today</p>
            <button id="ExploreButton"type='button' onClick={()=>window.location.href="/Services"} onMouseEnter={changeButtonAppearance} onMouseLeave={changeButtonAppearance} >Explore Now</button>
        </section>
        <br/><br/><br/><br/>
    </div>
  )
}

export default ContentForHomePage
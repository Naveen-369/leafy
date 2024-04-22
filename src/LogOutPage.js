import React from 'react';
import './LoginCss.css';

function LogOutPage() {
  return (
    <div>
      <img src='LogInWp.jpg' className="background-image" alt='Wallpaper'/>
      <div className="centered-box">
        <section id="inputter">
          <label htmlFor="UserName">User Name</label>
          <input type='text' id='UserName' placeholder='Enter your User ID or Email - Address' /><br />
          <label htmlFor="Password">Password</label>
          <input type='password' id='Password' placeholder='Enter your Password' />
          <button type="button">Login</button>
        </section>
      </div>
    </div>
  )
}

export default LogOutPage;

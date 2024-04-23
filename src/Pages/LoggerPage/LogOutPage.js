import React from 'react';
import './LoginCss.css';


function LogOutPage() {
  const handleLoginClick = () => {
    const username = document.getElementById('UserName').value;
    const password = document.getElementById('Password').value;
    if (username === 'Naveen Kumar' && password === '6369629703') {
      window.location.href = "/home";
      console.log('Login Successful');
    } else {
      window.location.reload();
    }
  };
  return (
    <div>
      <img src='LogInWp.jpg' className="background-image" alt='Wallpaper'/>
      <div className="centered-box">
        <section id="inputter">
          <label htmlFor="UserName">User Name</label>
          <input type='text' id='UserName' placeholder='User ID or Email - Address' /><br />
          <label htmlFor="Password">Password</label>
          <input type='password' id='Password' placeholder='Enter your Password' />
          <button type="button" onClick={handleLoginClick}>Login</button>
        </section>
      </div>
    </div>
  )
}

export default LogOutPage;

import React from 'react';
import '../Home.css';
import logo from './img/logo.svg';
import star from './img/shooting-star.svg';
import "bootstrap-icons/font/bootstrap-icons.css";

function Home() {
    return (
    <div>
    <header id="home" className="App-header">
      <br/>
      <br/>
      <div className="center">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <br/>
      <div className="center-left">
        <img src={star} className="Star" alt="star" />
        <h2>Wish Wallet</h2>
        <button className='button1'>
          <a className="nav-link" href="/add-token">
              Add Token
          </a>
        </button>
      </div>
      <br/>
      <div class="center-left-right">
        <h4 class="first">Tokens</h4>
        <h4>Balance</h4>
      </div>
    </header>
  </div>
    );
}

export default Home;
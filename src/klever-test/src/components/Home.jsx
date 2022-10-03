import logo from './img/logo.svg';
import star from './img/shooting-star.svg';
import './Home.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from 'react';

const firstItens = () => {

  var numero = localStorage.getItem("vez");
  numero++;

  if(numero==1){

  var tkn = "KLV";
  var changed6 = "10,250.50";

  localStorage.setItem("token"+numero, tkn);
  localStorage.setItem("balanca"+numero, changed6);
  localStorage.setItem("vez", numero);

  var numero = localStorage.getItem("vez");

  var listkn = [];

  var nmb = 0;

  if(listkn.length<numero){

    while(nmb<numero){

    var tkng = localStorage.getItem("token"+nmb);

    listkn.push(tkng);

    localStorage.setItem("token_length", listkn.length);

    nmb++;
    }
  }

  numero = localStorage.getItem("vez");
  numero++;

  tkn = "DVK";
  changed6 = "50,250.71";

  localStorage.setItem("token"+numero, tkn);
  localStorage.setItem("balanca"+numero, changed6);
  localStorage.setItem("vez", numero);

  var numero = localStorage.getItem("vez");

  var listkn = [];

  var nmb = 0;

  if(listkn.length<numero){

    while(nmb<numero){

    var tkng = localStorage.getItem("token"+nmb);

    listkn.push(tkng);

    localStorage.setItem("token_length", listkn.length);

    nmb++;
    }
  }

  numero = localStorage.getItem("vez");
  numero++;

  tkn = "KFI";
  changed6 = "10";

  localStorage.setItem("token"+numero, tkn);
  localStorage.setItem("balanca"+numero, changed6);
  localStorage.setItem("vez", numero);

  var numero = localStorage.getItem("vez");

  var listkn = [];

  var nmb = 0;

  if(listkn.length<numero){

    while(nmb<numero){

    var tkng = localStorage.getItem("token"+nmb);

    listkn.push(tkng);

    localStorage.setItem("token_length", listkn.length);

    nmb++;
    }
  }
  }
}

const addItem = () => {

  var numero = localStorage.getItem("vez");
  numero++;

  var inte = 0;

  while(inte<numero){

  var token = localStorage.getItem("token"+inte);
  var bal = localStorage.getItem("balanca"+inte);

  var home = document.getElementById('home');

  var div = document.createElement('div');
  var a = document.createElement('a');
  var i = document.createElement('i');
  var h2 = document.createElement('h2');
  var h3 = document.createElement('h3');

  if(inte==1){

  div.setAttribute('class', 'first-line');

  }else if(inte==2){

  div.setAttribute('class', 'second-line');

  }else if(inte==3){

  div.setAttribute('class', 'third-line');

  }else if(inte>3){

  div.setAttribute('class', 'line');
  }

  a.setAttribute('class', 'nav-link');
  a.setAttribute('href', '/edit-token');
  a.setAttribute('onClick', `localStorage.setItem("token_num", ${inte})`);

  i.setAttribute('class', 'bi bi-pencil-square');

  h2.textContent = token;
  h3.textContent = bal;

  if(h2.textContent!==""){

  home.appendChild(div);
  div.appendChild(a);
  a.appendChild(i);
  div.appendChild(h2);
  div.appendChild(h3);
  }

  inte++;
  }
}

function Home() {

  useEffect(() => {
    firstItens();
    addItem();
  }, []);

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
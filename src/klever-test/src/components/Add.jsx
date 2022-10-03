import logo from './img/logo.svg';
import star from './img/shooting-star.svg';
import './Add.css';
import { NavLink } from "react-router-dom";

var go = false;

const save = () => {

  if(go==false){

  var numero = localStorage.getItem("vez");
  numero++;

  var listkn = [];

  var nmb = 0;

  if(listkn.length<numero){

    while(nmb<numero){

    var tkng = localStorage.getItem("token"+nmb);

    listkn.push(tkng);

    nmb++;
    }
  }

  var check = document.getElementById("nome");

  if(check.length!==3){

  var nome = document.getElementById("nome");
  var balanca = document.getElementById("balanca");

  var tkn = nome.value.toUpperCase();
  var bal = balanca.value;
  var changed1 = bal.replace('.','');
  var changed2 = changed1.replace(',','.');

  if(isPositiveFloat(changed2)==false){
    fetch(`${document.location.origin}/`)
            .then(response => {
                if (response.status === 200) {
                  alert('The balance has to be a valid number!');
                }
            }); 
    return;
  }

  if(tkn.length!==3){
    fetch(`${document.location.origin}/`)
            .then(response => {
                if (response.status === 200) {
                  alert('The token has to have 3 letters to symbol it!');
                }
            });
            
    return;
  }

  if(changed2!=='0'){
    fetch(`${document.location.origin}/`)
            .then(response => {
                if (response.status === 200) {
                  alert('The balance of the token that you are adding is only 0!');
                }
            });
            
    changed2 = 0;
  }

  var iko=0;

  while(iko<listkn.length){

  if(tkn==listkn[iko]){
    fetch(`${document.location.origin}/`)
            .then(response => {
                if (response.status === 200) {
                  alert('This token name already exist in your wallet');
                }
            });
            
    return;
  }

  iko++;
  }

  var changed3 = numberWithCommas(Number.parseFloat(changed2));
  
  var changed4 = changed3.replace('.','o');

  var changed5 = changed4.replace(',','.');

  var changed6 = changed5.replace('o', ',');

  var lnk = document.getElementById("link");
  var taked = document.createElement("a");

  taked.setAttribute('class', 'nav-link');
  taked.setAttribute('id', 'uma');
  taked.setAttribute('href', '/');
        
  lnk.appendChild(taked);

  localStorage.setItem("token"+numero, tkn);
  localStorage.setItem("balanca"+numero, changed6);
  localStorage.setItem("vez", numero);

  var vezin = localStorage.getItem("token_length");

  var value = Number(vezin)+1;

  localStorage.setItem("token_length", value);

  go = true;
  document.getElementById('uma').click();
}
}
}

function isPositiveFloat(str) {
  if (typeof str !== 'string') {
    return false;
  }

  if (!str.replace(/\s/g, '').length || str == '') {
    return false;
  }

  const num = Number(str);

  if (isFloat(num) || Number.isInteger(num) && num >= 0) {
    return true;
  }

  return false;
}

function isFloat(n) {
  return n === +n && n !== (n|0);
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Add() {
  return (
    <div>
      <header className="App-header">
        <br/>
        <br/>
        <div className="center">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <br/>
        <div className="center-left">
          <img src={star} className="Star" alt="star" />
          <h2>Wish Wallet</h2>
        </div>
        <br/>
        <div class="center-left-right">
          <h3>Add Token</h3>
          <button className='button2'>
            <NavLink className="nav-link" to="/">
                Voltar
            </NavLink>
          </button>
        </div>
        <br/>
        <div class="form1">
          <h4 class="size">Token</h4>
        </div>
        <div class="form">
          <input id="nome" type="text"></input>
        </div>
        <br/>
        <div class="form">
          <h4 class="size">Balance</h4>
        </div>
        <div class="form">
          <input id="balanca" type="text"></input>
        </div>
        <br/>
        <div class="form3">
          <button id="link" onClick={() => save()} className='button3'>
                Salvar
          </button>
        </div>
      </header>
    </div>
  );
}

export default Add;
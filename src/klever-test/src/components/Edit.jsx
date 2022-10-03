import logo from './img/logo.svg';
import star from './img/shooting-star.svg';
import './Edit.css';
import { NavLink } from "react-router-dom";
import { useEffect } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

var go = false;
var go2 = false;

const init = () => {

  var inte = localStorage.getItem("token_num");

  var nome = document.getElementById("nome");
  var balanca = document.getElementById("balanca");

  var token = localStorage.getItem("token"+inte);
  var bal = localStorage.getItem("balanca"+inte);

  nome.value = token;
  balanca.value = bal;
}

const save = () => {

  if(go==false){

  var inte = localStorage.getItem("token_num");

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

  var see = inte;

  if(see>3){

    if(changed2!=='0'){
      fetch(`${document.location.origin}/`)
              .then(response => {
                  if (response.status === 200) {
                    alert('The balance of the token that you are changing is only 0!');
                  }
              });
              
      changed2 = 0;
    }

  }else{

    fetch(`${document.location.origin}/`)
              .then(response => {
                  if (response.status === 200) {
                    alert('The balance of the token that you are trying to change, it is already corrected');
                  }
              });

              var lnk = document.getElementById("link");
              var taked = document.createElement("a");
            
              taked.setAttribute('class', 'nav-link');
              taked.setAttribute('id', 'uma');
              taked.setAttribute('href', '/');
                    
              lnk.appendChild(taked);
            
              localStorage.setItem("token"+inte, tkn);

              go = true;
              document.getElementById('uma').click();

              return;
  }

  if(tkn==localStorage.getItem("token"+inte)){

  var changed3 = numberWithCommas(Number.parseFloat(changed2));
  
  var changed4 = changed3.replace('.','o');

  var changed5 = changed4.replace(',','.');

  var changed6 = changed5.replace('o', ',');

  localStorage.setItem("balanca"+inte, changed6);

  var lnk = document.getElementById("link");
  var taked = document.createElement("a");

  taked.setAttribute('class', 'nav-link');
  taked.setAttribute('id', 'uma');
  taked.setAttribute('href', '/');
        
  lnk.appendChild(taked);

  go = true;
  document.getElementById('uma').click();

  return;
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

  localStorage.setItem("token"+inte, tkn);
  localStorage.setItem("balanca"+inte, changed6);

  go = true;
  document.getElementById('uma').click();
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

const erase = () => {

    confirmAlert({
      title: 'Deseja mesmo excluir este token?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => answer('Sim')
        },
        {
          label: 'Não',
          onClick: () => answer('Não')
        }
      ]
    });
}

const answer = (res) => {

  if(go2==false){

  var vez = localStorage.getItem("token_length");
  var inte = localStorage.getItem("token_num");

  if(vez > 1){

  if (res=='Sim') {

    alert('Token foi deletado');

      localStorage.removeItem("token"+inte);
      localStorage.removeItem("balanca"+inte);
      localStorage.setItem("token_length", vez-1);

      var lnk = document.getElementById("link2");
      var taked = document.createElement("a");
        
      taked.setAttribute('class', 'nav-link');
      taked.setAttribute('id', 'duas');
      taked.setAttribute('href', '/');
                  
      lnk.appendChild(taked);

      go2 = true;
      document.getElementById('duas').click();
  }
}else{
  alert('Token não deletado pois o numero minimo de tokens foi atingido');
}
}
}

function Edit() {

  useEffect(() => {
    init();
  }, []);

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
          <h3>Edit Token</h3>
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
        <div class="form5">
          <button id="link2" onClick={() => erase()} className='button4'>
            Remove
          </button>
          <button id="link" onClick={() => save()} className='button3'>
            Salvar
          </button>
        </div>
      </header>
    </div>
  );
}

export default Edit;
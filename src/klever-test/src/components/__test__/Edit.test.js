import logo from './img/logo.svg';
import star from './img/shooting-star.svg';
import '../Edit.css';
import { NavLink } from "react-router-dom";

function Edit() {
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
          <button id="link2" className='button4'>
            Remove
          </button>
          <button id="link" className='button3'>
            Salvar
          </button>
        </div>
      </header>
    </div>
  );
}

export default Edit;
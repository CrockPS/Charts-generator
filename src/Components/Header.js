import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (props) => {

        return (
        <>
            <nav id="menu">
                <a href="/" id="logo" className="op"> Easy Charts </a>
                <Link to="/Historico" id="login-link" className="op icon">  <p className="icon-text">Visualizar histórico <br/> de gráficos gerados</p></Link>
                <Link to="/Login" id="menu-link" className="op icon">  <p className="icon-text">Faça seu login <br/> ou cadastre-se</p></Link>
            </nav>
            <div id="space"></div>      
        </>
        )
}

export default Header;
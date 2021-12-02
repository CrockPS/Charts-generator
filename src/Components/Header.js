import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (props) => {

    function teste(){
        const jwtValue = localStorage.getItem('jwt');
        

        if (jwtValue) {
            const login = document.getElementById("logout")
            login.classList.toggle("login")
            localStorage.removeItem('jwt');
            localStorage.removeItem('userId');
            return ;
        }else if (!!jwtValue){
            const logout = document.getElementById("login")
            logout.classList.toggle("login")
        }
    }

        return (
        <>
            <nav id="menu">
                <a href="/" id="logo" className="op"> Easy Charts </a>
                <Link to="/Historico" id="login-link" className="op icon">  <p className="icon-text">Visualizar histórico <br/> de gráficos gerados</p></Link>
                <Link to="/Login" onClick={teste} id="menu-link" className="op icon">  <p className="icon-text" id="login">Faça seu login <br/> ou cadastre-se</p>
                <p className="icon-text login" id="logout">Sair da conta</p> </Link>
            </nav>
            <div id="space"></div>      
        </>
        )
}

export default Header;
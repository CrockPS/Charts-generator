import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (props) => {

    const jwtValue = localStorage.getItem('jwt');

    function logout(){
        if (jwtValue) {
            localStorage.removeItem('jwt');
            localStorage.removeItem('userId');
            return ;
        }
    }


        return (
        <>
            <nav id="menu">
                <div>
                    <a href="/" id="logo" className="op"> Easy Charts </a>
                </div>
                <div id="options">
                    <Link to="/GenerateCharts" id="login-link" className="op icon">  <p className="icon-text">Gerar gráficos</p></Link>
                    <Link to="/Historico" id="login-link" className="op icon">  <p className="icon-text">Visualizar histórico <br/> de gráficos gerados</p></Link>
                    {!jwtValue &&
                        <Link to="/Login" id="menu-link" className="op icon">  <p className="icon-text" id="login">Faça seu login <br/> ou cadastre-se</p></Link>
                    }
                    {jwtValue &&
                        <Link to="/Logout" onClick={logout} id="menu-link" className="op icon"> <p className="icon-text" id="logout">Sair da conta</p> </Link>
                    }
                </div>
            </nav>
            <div id="space"></div>      
        </>
        )
}

export default Header;
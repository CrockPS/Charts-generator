import React from 'react';
import './LoginForm.css';

const LoginForm = () => { 

        return (
        <>
            <div className="login-form">
                <h2>Já tem conta?<br/> Preencha os dados para entrar:</h2>
                <form>
                    <label>
                        <p>Digite seu email:</p>
                        <input id="input-focus" type="text" name="email" placeholder="exemplo@email.com" />
                    </label>
                    <label>
                        <p>Digite sua senha</p>
                        <input id="input-focus" type="password"/>
                    </label>
                    <div>
                        <button id="submit-button" type="submit">Entrar</button>
                    </div>
                </form>
            </div>    
        </>
        )
}

export default LoginForm;
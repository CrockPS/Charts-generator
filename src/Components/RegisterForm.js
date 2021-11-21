import React from 'react';
import './LoginForm.css';

const RegisterForm = () => {

        return (
        <>
            <div className="login-form">
                <h2>Ainda não tem conta?<br/> Preencha os dados e crie uma:</h2>
                <form>
                    <label>
                        <p>Digite seu email:</p>
                        <input id="input-focus" type="text" placeholder="exemplo@email.com"/>
                    </label>
                    <label>
                        <p>Digite sua senha</p>
                        <input id="input-focus" type="password" />
                    </label>
                    <label>
                        <p>Confirme sua senha</p>
                        <input id="input-focus" type="password" />
                    </label>
                    <div>
                        <button id="submit-button" type="submit">Criar conta</button>
                    </div>
                </form>
            </div>    
        </>
        )
}

export default RegisterForm;
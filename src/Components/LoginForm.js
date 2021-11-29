import { ErrorMessage } from "@hookform/error-message";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './LoginForm.css';

const RegisterForm = () => {

    const { handleSubmit, register, errors, watch } = useForm(); 
    //const password = useRef({});
    //password.current = watch("password", "");
    //const onSubmit = (data) => console.log({data});

    const [teste, setTeste] = useState([]);

    const onSubmit = (data) => {
        //console.log(data);
        fetch('https://graphics-login-api.herokuapp.com/api/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            
            body: JSON.stringify(data)
        })
        .then((r)=>r.json())
        .then(
            (r)=>{
                setTeste(r)
                console.log(r)
            }
        )
        .catch(function(r){ console.log(r) })
    }

        return (
        <>
            <div className="login-form">
                <h2>Já tem conta?<br/> Preencha os dados para entrar:</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        <p>Digite seu email:</p>
                        <input className="input-focus" type="text" name="email" placeholder="nome@email.com"
                        {...register('email', { required: true})}/>
                    </label>
                    <label>
                        <p>Digite sua senha</p>
                        <input className="input-focus" type="password" name="password"
                        {...register('password', { required: true})}/>
                    </label>
                    
                    <div>
                        <button id="submit-button" type="submit">Entrar</button>
                    </div>
                </form>
            </div>    
        </>
        )
}

export default RegisterForm;
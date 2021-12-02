import { ErrorMessage } from "@hookform/error-message";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import Api from "./Api.js"
import './LoginForm.css';
//console.log({data});
const RegisterForm = () => {

    const { handleSubmit, register, errors, watch } = useForm(); 
    //const password = useRef({});
    //password.current = watch("password", "");
    //const onSubmit = (data) => console.log({data});

    const onSubmit = (data) => {
        console.log(data);
        fetch('https://graphics-login-api.herokuapp.com/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            
            body: JSON.stringify(data)
        })
        .then(function(res){ console.log(res) })
        .catch(function(res){ console.log(res) })

        alert("Usuário cadastrado com sucesso, por favor faça login!");
    }

        return (
        <>
            <div className="login-form">
                <h2>Ainda não tem conta?<br/> Preencha os dados e crie uma:</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        <p>Digite seu email:</p>
                        <input className="input-focus" type="text" name="login" placeholder="nome@email.com"
                        {...register('login', { required: "Email obrigatório!", pattern: 
                        {value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: "Digite um email válido!"} })}/>
                    </label>
                    {errors?.email && <ErrorMessage message={errors.email.message}/>}
                    <label>
                        <p>Digite sua senha</p>
                        <input className="input-focus" type="password" name="password"
                        {...register('password', { required: "A senha deve ter minimo seis caracteres!", minLength: 6 })}/>
                    </label>
                    {errors?.password && <ErrorMessage message={errors.password.message}/>}
                    
                    <div>
                        <button id="submit-button-register" type="submit">Criar conta</button>
                    </div>
                </form>
            </div>    
        </>
        )
}

export default RegisterForm;

/* CONFIRMAR SENHA
                    <label>
                        <p>Confirme sua senha</p>
                        <input id="input-focus" type="password" name="password_repeat" 
                        {...register('password_repeat', {required: "Deve ser igual a senha que você já digitou!" , 
                        validate: value =>value === password.current})}/>
                    </label>
                    {errors?.password_repeat && <ErrorMessage message={errors.password_repeat.message}/>}
 */

 /*const onSubmit = (data) => {
        fetch('https://graphics-login-api.herokuapp.com/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));

    const onSubmit = (data) => {
        fetch('https://graphics-login-api.herokuapp.com/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => {console.log(response);})
        .then(data => this.setState({ postId: data.id }));
    }
    } 
    
    const onSubmit = (data) => {
        console.log(data);
        fetch('https://graphics-login-api.herokuapp.com/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(function(res){ console.log(res) })
        .catch(function(res){ console.log(res) })
    }

    const onSubmit = (data) => {
        fetch('https://graphics-login-api.herokuapp.com/api/users', {
            method: 'users',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(function(res){ return res.json(); })
        //.then(data => this.setState({ postId: data.id }));
        .then(function(data){
            alert(JSON.stringify(data));
            console.warn(data);
        })
        .catch(err => console.log(err));
    }
    */
import { ErrorMessage } from "@hookform/error-message";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import './LoginForm.css';

const RegisterForm = () => {

    const { handleSubmit, register, errors, watch } = useForm(); 
    const onSubmit = (data) => console.log({data});
    const password = useRef({});
    password.current = watch("password", "");

        return (
        <>
            <div className="login-form">
                <h2>Ainda não tem conta?<br/> Preencha os dados e crie uma:</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        <p>Digite seu email:</p>
                        <input id="input-focus" type="text" name="email" placeholder="exemplo@email.com"
                        {...register('email', { required: "Email obrigatório!", pattern: 
                        {value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: "Digite um email válido!"} })}/>
                    </label>
                    {errors?.email && <ErrorMessage message={errors.email.message}/>}
                    <label>
                        <p>Digite sua senha</p>
                        <input id="input-focus" type="password" name="password"
                        {...register('password', { required: "A senha deve ter minimo seis caracteres!", minLength: 6 })}/>
                    </label>
                    {errors?.password && <ErrorMessage message={errors.password.message}/>}
                    <label>
                        <p>Confirme sua senha</p>
                        <input id="input-focus" type="password" name="password_repeat" 
                        {...register('password_repeat', {required: "Deve ser igual a senha que você já digitou!" , 
                        validate: value =>value === password.current})}/>
                    </label>
                    {errors?.password_repeat && <ErrorMessage message={errors.password_repeat.message}/>}
                    <div>
                        <button id="submit-button" type="submit">Criar conta</button>
                    </div>
                </form>
            </div>    
        </>
        )
}

export default RegisterForm;
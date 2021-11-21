import React from "react";
import Header from "../Header";
import LoginForm from "../LoginForm";
import RegisterForm from "../RegisterForm";
import '../LoginPage.css';

const Login = () => {
    return(
        <>
            <Header />
            <div id="login-page">
                <div> 
                    <LoginForm />
                </div>
                <div>
                    <RegisterForm />
                </div>
            </div>
        </>
    )
}

export default Login;
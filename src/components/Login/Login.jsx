import React, { useState } from "react";

import "../../assets/LoginStyle.css";

const Login = () => {
    
    return (
        <>
        <div className="bodyLogin">

            <form className="my-form" onSubmit="">
                <div className="login-welcome-row">
                    <a href="#" title="Logo">
                        <img src="/src/assets/logo.png" alt="Logo" className="logo" />
                    </a>
                    <h1>Welcome back &#x1F44F;</h1>
                    <p>Please enter your details!</p>
                </div>
                <div className="input__wrapper">
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="input__field"
                        placeholder="Your Username"
                        value=""
                        required
                    />
                    <label htmlFor="username" className="input__label">Username:</label>
                </div>
                <div className="input__wrapper">
                    <input
                        id="password"
                        type="password"
                        className="input__field"
                        placeholder="Your Password"
                        title="Minimum 6 characters at least 1 Alphabet and 1 Number"
                        pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                        value=""
                        required
                    />
                    <label htmlFor="password" className="input__label">Password</label>
                </div>
                <button type="submit" className="my-form__button">
                    Login
                </button>
            </form>
            </div>
        </>
    );
};

export default Login;

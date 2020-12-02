import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthApi from "./AuthApi";
import Cookies from 'js-cookie';

function Login() {
    const Auth= React.useContext(AuthApi)
    const handleOnClick=()=>{
        Auth.setAuth(true)
        Cookies.set("user", "loginTrue")
    }
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const onChange = (event) => {
        if (event.target.name === "username") {
            setUsername(event.target.value);
        } else {
            setPassword(event.target.value);
        }
    };

    function verifica(e) {
        e.preventDefault();
        console.log(username, password);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <form className="box" noValidate onSubmit={verifica}>
                            <h1>Login</h1>
                            <p className="text-place">
                                {" "}
                                Please enter your login and password!
                            </p>
                            <input
                                value={username}
                                type="text"
                                placeholder="Username"
                                name="username"
                                onChange={onChange}
                            />
                            <input
                                value={password}
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={onChange}
                            />
                            <button onClick={handleOnClick}>Login</button>
                            <input type="submit" />
                            <Link to="/home">Home</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

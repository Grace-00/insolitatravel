import React from "react";
import { useState } from "react";
import AuthApi from "./AuthApi";
import Cookies from "js-cookie";

function Login() {
    let [avviso, setAvviso] = useState("");
    const Auth = React.useContext(AuthApi);
    const handleOnClick = () => {
        if (username && password !== "") {
            Auth.setAuth(true);
            Cookies.set("user", "loginTrue");
        } else {
            setAvviso("Nome Utente o Password Mancanti");
        }
    };
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
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first"></div>

                <form className="box" noValidate onSubmit={verifica}>
                    <input
                        type="text"
                        value={username}
                        id="login"
                        className="fadeIn second"
                        name="username" //login
                        placeholder="Username"
                        onChange={onChange}
                    />
                    <input
                        type="password"
                        value={password}
                        id="password"
                        className="fadeIn third"
                        name="password" //login
                        placeholder="Password"
                        onChange={onChange}
                    />
                    {/* <input
                        type="submit"
                        className="fadeIn fourth"
                        value="Log In"
                    /> */}
                    <button className="submitBtn" onClick={handleOnClick}>
                        Login
                    </button>
                </form>

                <div id="formFooter">
                    <span className="underlineHover">{avviso}</span>
                </div>
            </div>
        </div>
    );
}

export default Login;

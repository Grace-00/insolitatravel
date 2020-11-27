import { useState } from 'react';
import React from "react";

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onChange = (event) => {
    setUsername(event.target.username);
    setPassword(event.target.password);
  };

  const verifica = (e)=> {
    console.log( username, password);
  }

  return (

    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <form className="box">
              <h1>Login</h1>
              <p className="text-place"> Please enter your login and password!</p>
              <input valueUsername={username} type="text" placeholder="Username" onChange={onChange} />
              <input valuePassword={password} type="password" placeholder="Password" onChange={onChange} />
              <input type="submit" name="" value="Login" href="#" onSubmit={verifica}/>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Login;
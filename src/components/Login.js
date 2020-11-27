import { useState } from 'react';

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onChange = (event) => {
    if (event.target.name === "username")
    {
        setUsername(event.target.value);
    }
    else
    {
      setPassword(event.target.value);
    }
  };

  function verifica (e) {
    e.preventDefault();
    console.log( username, password);
  }

  return (

    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <form className="box" noValidate onSubmit={verifica}>
              <h1>Login</h1>
              <p className="text-place"> Please enter your login and password!</p>
              <input value={username} type="text" placeholder="Username" name="username" onChange={onChange} />
              <input value={password} type="password" placeholder="Password" name="password" onChange={onChange} />
              <input type="submit"/>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Login;
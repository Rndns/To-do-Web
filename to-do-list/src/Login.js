import React, { useState } from 'react'

function Login() {
  const [id, setId] = useState();
  const inputId = (e) => {
    setId(e.target.value)
  };
  const [password, setPassword] = useState();
  const inputPassword = (e) => {
    setPassword(e.target.value)
  };

  // const input
  
  return (
    <div>
      <div>{id}{password}</div>
      <input onChange = {inputId} type='text' placeholder='id'></input>
      <input onChange = {inputPassword} type='password' placeholder='password'></input>
      <button>LOGIN</button>
      <button>SIGN IN</button>

    </div>
  )
}

export default Login





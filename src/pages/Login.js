import React from 'react'


const Login = () => {
  return (
    <div className = "formContainer">
    <div className = "formWrapper">
      <span className = "logo">Chat Application</span>
      <span className = "title">Log in</span>
      <form>
        <input type="email" placeholder="email"></input>
        <input type="password" placeholder="password"></input>
        <button>Sign in</button>
      </form>
      <p>You don't have an account? Register</p>

    </div>
  </div>
  )
}

export default Login;
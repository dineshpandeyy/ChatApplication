import React from 'react'


const Register = () => {
  return (
    <div className = "formContainer">
    <div className = "formWrapper">
      <span className = "logo">Chat Application</span>
      <span className = "title">Register</span>
      <form>
        <input type="text" placeholder="display name"></input>
        <input type="email" placeholder="email"></input>
        <input type="password" placeholder="password"></input>
        <input type="file"></input>
        <button>Sign up</button>
      </form>
      <p>You do have an account? Login</p>

    </div>
  </div>
  )
}

export default Register
import React, { useState } from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleLogin({
      username,
      password
    })
    setUsername('')
    setPassword('')
  }
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          username:
          <input
            type='text'
            id='username'
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          password:
          <input
            type='password'
            id='password'
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button id='login-button' type='submit'>
          login
        </button>
      </form>
    </div>
  )
}

LoginForm.prototypes = {
  handleLogin: PropTypes.func.isRequired
}

export default LoginForm

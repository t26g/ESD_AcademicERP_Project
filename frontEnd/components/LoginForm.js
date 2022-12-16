import React, { useState } from 'react'

const LoginForm = ({ startLogin }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (event) => {

    event.preventDefault()

    const credentials = {
      email, password
    }

    startLogin(credentials)

    setEmail('')
    setPassword('')
  }

  return (

    <form className="rounded p-4 p-sm-3" onSubmit={handleLogin} id='login-form' >
      <section className="vh-80 gradient-custom"></section><br />

      <div className="row d-flex justify-content-center align-items-center h-200">
        <div className="col-8 col-md-6 col-lg-5 col-xl-3">
          <div className="card bg-light text-dark regular-shadow" style={{ borderRadius: "3rem" }}>
            <div className="card-body p-5 text-center">
              <div className="mb-md-5 mt-md-4 pb-5">
                <label className="form-label" htmlFor="form2Example1"><h4>Email</h4></label>
                <br />
                <div className="form-outline form-white mb-4">
                  <input type='email' placeholder='Email' value={email} onChange={event => setEmail(event.target.value)} id='email' required />
                </div>
                <div className="form-outline form-white mb-4">
                  <br />
                  <label className="form-label" htmlFor="form2Example2"><h4>Password</h4></label>
                  <br />
                  <input type='password' placeholder='Password' value={password} onChange={event => setPassword(event.target.value)} id='password' required />

                </div>
                <br />

                <button className="btn btn-outline-success btn-lg px-5" type='submit' id='login-submit'>LOGIN</button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </form>
  )

}

export default LoginForm
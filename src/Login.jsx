
import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className='flex justify-center my-10'>
      <div className="card bg-base-300 w-96 shadow-sm ">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <p>Email ID: {email}</p>
          <label className="floating-label">
            <input 
            type="text" 
            value={email}
             className="input input-md" 
             onChange={(e) => setEmail(e.target.value)}
             />
             
          </label>
          <p>Password: {password}</p>
          <label className="floating-label">
            <input type="text"
            value={password} 
             className="input input-md"
             onChange={(e) => setPassword(e.target.value)}
              />

          </label>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
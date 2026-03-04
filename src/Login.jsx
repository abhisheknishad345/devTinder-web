
import React, { useState } from 'react'
import axios from 'axios';

const Login = () => {
  const [emailId, setEmail] = useState('manipal@gmail.com')
  const [password, setPassword] = useState('Manipal@123')

  const handleLogin = async() => {
    // Handle login logic here
    try{ 

      const res = await axios.post('http://localhost:5700/login', 
        { emailId, password },
        {withCredentials:true}
      )

    } catch(err){
        console.error('There was an error logging in!', err);
      };

  }

  return (
    <div className='flex justify-center my-10'>
      <div className="card bg-base-300 w-96 shadow-sm ">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <p>Email ID:</p>
          <label className="floating-label">
            <input 
            type="text" 
            value={emailId}
             className="input input-md" 
             onChange={(e) => setEmail(e.target.value)}
             />
             
          </label>
          <p>Password:</p>
          <label className="floating-label">
            <input type="text"
            value={password} 
             className="input input-md"
             onChange={(e) => setPassword(e.target.value)}
              />

          </label>

          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
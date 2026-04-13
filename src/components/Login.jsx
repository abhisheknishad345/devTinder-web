
import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { useNavigate, useLocation } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';


const Login = () => {
  const [emailId, setEmail] = useState('@gmail.com')
  const [password, setPassword] = useState('@123')
  const [error, setError] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async () => {
    // Handle login logic here
    try {

      const res = await axios.post(BASE_URL + '/login',
        { emailId, password },
        { withCredentials: true }
      )
      // console.log(res.data)
      dispatch(addUser(res.data.data)) // add data to store
      toast.success("Login Successful!")
      return navigate("/feed")

    } catch (err) {
      setError(err.response?.data || "Error: Invalid credentials. Please try again.")
      if (err.response.data) {

        toast.error("Invalid emailId OR password")

      }

    };

  }

  return (
    <>
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
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleLogin();
                  }
                }}
              />

            </label>

            <p className='text-red-500 text-[16px]'>{error}</p>

            <div className="card-actions justify-center mt-3 flex gap-15">
              <button className="btn btn-primary text-[18px]" onClick={handleLogin}>Login</button>
              <button className='btn btn-secondary text-[18px] ' onClick={() => navigate("/signup")}>Signup</button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Login
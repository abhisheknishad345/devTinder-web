/*
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

        toast.error( <p className='text-black'>Invalid emailId OR password</p>)

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

export default Login;
*/

import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [emailId, setEmail] = useState("@gmail.com");
  const [password, setPassword] = useState("@123");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        { emailId, password },
        { withCredentials: true }
      );

      dispatch(addUser(res.data.data));
      toast.success("Login Successful!");
      return navigate("/feed");

    } catch (err) {
      setError(err.response?.data || "Error: Invalid credentials. Please try again.");
      if (err.response?.data) {
        toast.error(<p className="text-black">Invalid emailId OR password</p>);
      }
    }
  };

  return (
    <>
      {/* Container: 
          - min-h-[calc(100vh-64px)] adjusts for a standard navbar height
          - px-4 for mobile breathing room
      */}
      <div className="min-h-[90vh] flex justify-center items-center px-4 py-10 lg:py-20">
        
        {/* Card: 
            - w-full for mobile
            - max-w-sm for small devices, md:max-w-md for larger screens
            - Shadow and border for depth
        */}
        <div className="w-full max-w-sm md:max-w-md bg-base-300 rounded-2xl shadow-xl border border-white/5 p-6 md:p-10">
          
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 tracking-tight">
            Welcome Back
          </h2>

          <div className="space-y-6">
            
            {/* Email Field */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Email ID</span>
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                value={emailId}
                className="input input-bordered w-full focus:input-primary transition-all"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Field */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                type="text"
                value={password}
                className="input input-bordered w-full focus:input-primary transition-all"
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              />
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-error text-xs md:text-sm italic animate-pulse">
                {error}
              </p>
            )}

            {/* responsiveness done using ai  */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                className="btn btn-primary flex-1 text-base md:text-lg"
                onClick={handleLogin}
              >
                Login
              </button>

              <button
                className="btn btn-outline btn-secondary flex-1 text-base md:text-lg"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </button>
            </div>

          </div>
        </div>
      </div>

      <ToastContainer position="bottom-right" />
    </>
  );
};

export default Login;
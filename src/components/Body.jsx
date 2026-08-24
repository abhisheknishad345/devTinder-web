
import { Outlet, useNavigate,useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import axios from 'axios';
import api from "../utils/axios";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { toast } from "react-toastify";


const Body = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userData = useSelector((store) => store.user)

  
  const fetchUser = async () => {
    if (userData) return;
    try {

      const res = await api.get("/profile/view" , { withCredentials: true })
      dispatch(addUser(res.data))

    } catch (err) {
     
      if (err.response?.status === 401 || 400) {
        console.log("Login/Signup Krle Lodu !!");
        toast.info("Login/Signup to explore !!")
        navigate("/")
      }
      

    }

  }

  useEffect(() => {

   fetchUser()

  }, [])


  return (
    <div className="body min-h-screen flex flex-col">
     {userData && <NavBar/>}

      <Outlet />

    </div>
  );
};

export default Body;

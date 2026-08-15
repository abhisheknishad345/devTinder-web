
import { Outlet, useNavigate,useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import DevFooter from "./DevFooter";
import axios from 'axios';
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Body = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userData = useSelector((store) => store.user)

  
  const fetchUser = async () => {
    if (userData) return;
    try {

      const res = await axios.get(BASE_URL + "/profile/view" , { withCredentials: true })
      dispatch(addUser(res.data))

    } catch (err) {
     
      if (err.response?.status === 401) {
        console.log(err?.response?.data);
        navigate("/")
      }
      

    }

  }

  useEffect(() => {

   fetchUser()

  }, [])


  return (
    <div className="body min-h-screen flex flex-col">
      <NavBar/>

      <Outlet />

    </div>
  );
};

export default Body;

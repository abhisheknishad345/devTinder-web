
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from 'axios';
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Body = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userData = useSelector((store)=>store.user)

  const fetchUser = async() =>{
    if(userData) return;
    try {

    const res = await axios.get(BASE_URL + "/profile/view", {withCredentials:true})
   dispatch(addUser(res.data))
   
    } catch (err) {
      // console.error(err)
      if(err.status === 401){
      navigate("/login")
      
      }
      
    }
    
  }


  useEffect( () =>{
    
      fetchUser()

  }, [])
  
  return (
    <div className="body"> 

      <NavBar/>
      <Outlet />
      <Footer/>

  
    </div>
  )
}                      

export default Body;

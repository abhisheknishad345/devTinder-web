
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Home from "./Home";
import DevFooter from "./DevFooter";
import DevTinderHomePage from "./DevTinderHomePage";
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
      // console.error(err)
      if (err.response?.status === 401) {
        console.log(err?.response?.data);
        navigate("/login")
      }
      // console.error('Error:', err);

    }

  }

  useEffect(() => {

    fetchUser()

  }, [])

  return (
    <div className="body max-h-full max-w-full min-w-full">

      <NavBar />
      <Outlet />
      {/* <DevFooter /> */}
      {/* <Footer /> */}
      <Home/>
      {/* <DevTinderHomePage/> */}


    </div>
  )
}

export default Body;

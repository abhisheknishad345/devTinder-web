import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";

const NavBar = () => {

    const user = useSelector((state) => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = async () => {
        // Implement logout functionality here
        // For example, you might want to clear the user session or token 
        try {
             await axios.post(BASE_URL + "/logout", {}, { withCredentials: true })
            dispatch(removeUser())
           return navigate("/login")


        } catch (err) {
            console.error("Logout error:", err)

        }




    }

    // console.log(user);

    return (

        <div className="navbar bg-green-700 shadow-sm">
            <div className="flex-1">
                {user &&
                    <Link to="/feed" className="btn btn-ghost text-xl">🚀 DevTinder</Link>
                }
            </div>
            <div className="flex">
                <a className="btn btn-ghost text-xl">Home</a>
            </div>
            <div className="flex">
                <a className="btn btn-ghost text-xl">Login</a>
            </div>
            {user && (<div className="flex gap-2">
                <p className="my-3 text-xl">Welcome {user.Fname}</p>
                <div className="dropdown dropdown-end mx-5">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="User image"
                                // src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                src={user.profileurl} />
                        </div>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <Link to="/profile" className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a onClick={handleLogout}>Logout</a></li>
                    </ul>
                </div>
            </div>)}

        </div>

    );

}

export default NavBar;
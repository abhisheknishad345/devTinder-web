import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import api from "../utils/axios";
import { removeUser } from "../utils/userSlice";

const NavBar = () => {
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await api.post(
        "/logout",
        {},
        { withCredentials: true }
      );

      dispatch(removeUser());

      return navigate("/");
    } catch (err) {
      console.error("Logout error:", err);

      if (err.status === 400 || err.status === 401) {
        dispatch(removeUser());
        return navigate("/auth");
      }
    }
  };

  return (
    <div
      className="
        navbar
        bg-[#020617]/85
        backdrop-blur-xl
        border-b
        border-white/10
        px-3
        sm:px-5
        sticky
        top-0
        z-50
        min-h-[72px]
      "
    >
      {/* ================= LOGO ================= */}
      <div className="flex-1">
        {user && (
          <Link
            to="/feed"
            className="
              text-xl
              font-semibold
              no-underline
               border p-2 rounded-xl
            "
          >
            <span className="text-cyan-400">Feed</span>
            
          </Link>
        )}
      </div>

      {/* ================= CENTER NAVIGATION ================= */}
      {user && (
        <div className="hidden md:flex items-center gap-2">
          <Link
            to="/feed"
            className=" border
              rounded-xl
              px-5
              py-2.5
              text-sm
              font-semibold
              text-slate-300
              transition
              duration-300
              hover:bg-cyan-400/10
              hover:text-cyan-300
            "
          >
            Discover
          </Link>

          <Link
            to="/connections"
            className=" border
              rounded-xl
              px-5
              py-2.5
              text-sm
              font-semibold
              text-slate-300
              transition
              duration-300
              hover:bg-cyan-400/10
              hover:text-cyan-300
            "
          >
            Connections
          </Link>
        </div>
      )}

      {/*  RIGHT SIDE  */}
      {user && (
        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-3">
          <button
            onClick={() => navigate("/feed")}
            className="
              hidden
              lg:block
              rounded-xl
              border
              border-cyan-400/30
              bg-cyan-400/5
              px-4
              py-2.5
              text-sm
              font-semibold
              text-cyan-300
              transition cursor-pointer
              hover:bg-cyan-400/10
            "
          >
            Go to Feed
          </button>

          {/* User profile dropdown */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="
                btn
                btn-ghost
                btn-circle
                avatar
                border
                border-white/10
                bg-white/5
                hover:bg-white/10
              "
            >
              <div
                className="
                  w-10
                  sm:w-11
                  rounded-full
                  overflow-hidden
                "
              >
                <img
                  alt="User"
                  src={user.profileurl}
                  className="object-cover"
                />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="
                menu
                menu-sm
                dropdown-content
                mt-3
                z-100
                p-3
                shadow-2xl
                bg-gray-900
                border
                border-white/10
                rounded-2xl
                w-52
                text-white
              "
            >
              <li className="mb-2">
                <p className="text-cyan-400 font-bold text-sm">
                  {user.Fname} {user.Lname}
                </p>
              </li>

              <li>
                <Link
                  to="/profile/view"
                  className="rounded-xl hover:bg-white/10"
                >
                  Profile
                </Link>
              </li>

               <li>
                <Link
                  to="/postfeed"
                  className="rounded-xl hover:bg-white/10"
                >
                  Others Post
                </Link>
              </li>

              <li>
                <Link
                  to="/mypost"
                  className="rounded-xl hover:bg-white/10"
                >
                  My Post
                </Link>
              </li>

              <li>
                <Link
                  to="/connections"
                  className="rounded-xl hover:bg-white/10"
                >
                  Connections
                </Link>
              </li>

              <li>
                <Link
                  to="/request"
                  className="rounded-xl hover:bg-white/10"
                >
                  Requests
                </Link>
              </li>

              <li>
                <button
                  onClick={handleLogout}
                  className="
                    rounded-xl
                    text-red-500
                    hover:bg-red-500/20
                    font-semibold
                  "
                >
                  Logout
                </button>
              </li>

              <li>
                <Link
                  to="/user/delete"
                  className="
                    rounded-xl
                    text-red-500
                    hover:bg-red-500/20
                    font-semibold
                  "
                >
                  Delete Account
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;

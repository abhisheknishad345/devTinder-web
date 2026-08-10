
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addConnection } from "../utils/connectionSlice";
import Chat from "./Chat"
import { Link } from "react-router-dom";

const Connections = () => {
  const connection = useSelector((store) => store.connection);

  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const res = await axios.get(
        BASE_URL + "/user/connections",
        { withCredentials: true }
      );

      dispatch(addConnection(res?.data?.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connection) return null;

  if (connection.length === 0) {
    return (
      <h2 className="text-center font-semibold text-xl mt-5">
        No Connection Found
      </h2>
    );
  }

  return (
    <div className="px-4 py-4 mb-20">

      <h1 className="
        text-center
        text-2xl
        md:text-3xl
        font-bold
        mb-6
      ">
        Total Connections
      </h1>

      <div className="flex flex-col gap-5 items-center">

        {connection.map((connection) => {
          const {
            Fname,
            Lname,
            age,
            gender,
            about,
            profileurl,
            _id,
          } = connection;

          return (
            <div
              key={_id}
              className="
                w-full
                sm:w-[90%]
                md:w-[80%]
                lg:w-[65%]
                xl:w-[55%]
                bg-base-300
                rounded-2xl
                shadow-lg
                p-4
                flex
                flex-col
                sm:flex-row
                items-center
                gap-4
              "
            >

              {/* Profile Image */}
              <div className="shrink-0">
                <img
                  className="
                    w-24
                    h-24
                    sm:w-28
                    sm:h-28
                    rounded-full
                    border-2
                    border-white
                    object-cover
                    flex
                  "
                  src={profileurl}
                  alt="Profile"
                />
              </div>

              {/* User Details */}
              <div className="
                flex-1
                text-center
                sm:text-left
              ">

                <h2 className="text-xl font-bold">
                  {Fname + " " + Lname}
                </h2>

                {age && gender && (
                  <p className="text-gray-400 mt-1">
                    {age + ", " + gender}
                  </p>
                )}

                <p className="
                  mt-2
                  text-sm
                  sm:text-base
                  wrap-break-words
                ">
                  {about}
                </p>
                
              </div>
              <Link to={"/chat/" + _id}>
               <button className="cursor-pointer p-3 rounded-xl bg-yellow-500 text-black mt-2 text-[18px] font-bold m-5"> Chat </button>
                </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Connections;
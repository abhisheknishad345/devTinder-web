
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import api from "../utils/axios";
import ShimmerCard from "./ShimmerCard";
import UserCard from "./userCard";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

const Feed = () => {
  const feed = useSelector((state) => state.feed);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getFeedData = async () => {
    if (feed && feed.length > 0) return;

    try {
      const res = await api.get(
        "/feed",
        {
          withCredentials: true,
        }
      );

      const cleanFeed = res?.data?.data;

      dispatch(addFeed(cleanFeed));
      toast.success("Login successful!");

    } catch (err) {
      console.log("Error fetching feed data:", err?.response?.data);

      navigate("/auth");
    }
  };

  useEffect(() => {
    getFeedData();
  }, []);


   if (feed.length === 0) {
    return (
      <p
        className="
          text-xl
          font-semibold
          text-center
          mt-6
          px-4
        "
      >
        No new users found!
      </p>
    );
  }

  if (feed.length == 0) {
    return (
      <div className="px-4 py-6">

        <h2
          className="
            text-2xl
            md:text-3xl
            font-bold
            text-center
            mb-8
          "
        >
          Feed is Loading...
        </h2>
      </div>
    );
  }


  return (
    <div
      className="
        h-full
        px-4
       
      "
    >
      <h2
        className="
          text-xl
          md:text-3xl
          font-semibold
          text-center
          mb-2
          text-yellow-500
        "
      >
        Suggested Feed
      </h2>

      <div
        className="
          flex
          justify-center
          items-center
          
        "
      >
        {feed.length > 0 && (
          <UserCard newUser={feed[0]} />
        )}
      </div>
      <ToastContainer 
      position="top-center"
      autoClose={1500}
      theme="dark"
      />
    </div>
  );
};

export default Feed;
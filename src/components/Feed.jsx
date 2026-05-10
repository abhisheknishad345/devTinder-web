/*
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import ShimmerCard from './ShimmerCard';
import UserCard from './userCard';
import { useNavigate } from 'react-router-dom';

const Feed = () => {
  const feed = useSelector((state) => state.feed);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getFeedData = async () => {
    if (feed && feed.length > 0) return;

    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });

      const cleanFeed = res?.data?.data;

      dispatch(addFeed(cleanFeed));

    } catch (err) {
      console.error("Error fetching feed data:", err);
      navigate("/login");
    }
  };

  useEffect(() => {
    getFeedData();
  }, []);

  if (!feed) {
    return (
      <>
        <h2 className="text-xl mt-2 text-center">Feed is Loading...</h2>
        <div className="grid grid-cols-3 items-center mb-10 px-10">
            <ShimmerCard key={i} />
        </div>
      </>
    );
  }

  if (feed.length == 0) return <p className='text-xl font-semibold flex justify-center mt-2'>No new users found!</p>

  return (
    feed && (
      <div>
        <h2 className="text-xl mt-2 text-center">Suggested Feed page for you!!</h2>
        <div className="flex flex-col justify-center items-center mb-20 mt-5">

          {
            feed.length > 0 && (
              <UserCard newUser={feed[0]} />
            )
          }
        </div>
      </div>
    )
  );
};

export default Feed;
*/
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import ShimmerCard from "./ShimmerCard";
import UserCard from "./userCard";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const feed = useSelector((state) => state.feed);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getFeedData = async () => {
    if (feed && feed.length > 0) return;

    try {
      const res = await axios.get(
        BASE_URL + "/feed",
        {
          withCredentials: true,
        }
      );

      const cleanFeed = res?.data?.data;

      dispatch(addFeed(cleanFeed));

    } catch (err) {
      console.error("Error fetching feed data:", err);

      navigate("/login");
    }
  };

  useEffect(() => {
    getFeedData();
  }, []);

  if (!feed) {
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

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
            max-w-7xl
            mx-auto
          "
        >
          {[...Array(3)].map((_, i) => (
            <ShimmerCard key={i} />
          ))}
        </div>
      </div>
    );
  }

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

  return (
    <div
      className="
        min-h-screen
        px-4
        py-6
      "
    >
      <h2
        className="
          text-2xl
          md:text-3xl
          font-bold
          text-center
          mb-8
        "
      >
        Suggested Feed For You
      </h2>

      <div
        className="
          flex
          justify-center
          items-center
          pb-20
        "
      >
        {feed.length > 0 && (
          <UserCard newUser={feed[0]} />
        )}
      </div>
    </div>
  );
};

export default Feed;
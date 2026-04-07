
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import UserCard from './userCard';
import { useNavigate } from 'react-router-dom';

const Feed = () => {
  const feed = useSelector((state) => state.feed);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getFeedData = async () => {
    if (Array.isArray(feed) && feed.length > 0) return;

    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });

      const cleanFeed = res?.data?.data;

      console.log("Feed API", cleanFeed);

      dispatch(addFeed(cleanFeed)); // ✅ FIXED

    } catch (err) {
      console.error("Error fetching feed data:", err);
      navigate("/login");
    }
  };

  useEffect(() => {
    getFeedData();
  }, []);

  // if (!Array.isArray(feed)) {
  //   return <h2 className="text-center text-xl">Feed is Loading...</h2>;
  // }

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl mt-2">Suggested Feed page for you!!</h2>

      {/* {feed.map((user) => (
        <UserCard key={user._id} feedUser={user} />
      ))} */}
    <UserCard feedUser={feed} />
      {/* {feed.length === 0 && <p>No new users found!</p>} */}
    </div>
  );
};

export default Feed
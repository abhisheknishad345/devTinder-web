
/*
import axios from "axios";
import { BASE_URL } from '../utils/constants';
import { useDispatch } from "react-redux";
import { removeFeed } from '../utils/feedSlice'

const UserCard = ({ newUser }) => {
    const {
        _id,
        Fname,
        Lname,
        age,
        gender,
        profileurl,
        about,
        skills
    } = newUser;

    const disptach = useDispatch()
    const handleFeed = async(status, userId)=>{
        try {
            await axios.post(BASE_URL + "/request/send/" + status + "/" + userId, {}, {withCredentials:true})
        disptach(removeFeed(userId))
            
        } catch (err) {
            console.error(err)
            
        }

    }

    return (
        <div className="card bg-base-200 w-90 shadow-sm my-2 mb-5">

            <figure>
                <img
                    className="w-50 h-50 object-cover border-2 border-white rounded-full mt-2"
                    src={profileurl || null}
                    alt="profile"
                />
            </figure>

            <div className="card-body">

               
                <h2 className="card-title">
                    {Fname ? `${Fname} ${Lname || ""}` : "User Name"}
                </h2>

               
                <p>
                    {age ? `${age} ${gender || ""}` : "Age not available"}
                </p>

               
                <p>
                    {Array.isArray(skills)
                        ? skills.join(", ")
                        : "Skills not available"}
                </p>

               
                <p>{about || "About not available"}</p>

                <div className="card-actions justify-center mt-3 flex gap-15">
                    <button className="btn btn-primary text-[18px]" onClick={()=>handleFeed("ignored", _id)}>Ignore</button>
                    <button className='btn btn-secondary text-[18px]' onClick={()=>handleFeed("interested", _id)}>Interested</button>
                </div>

            </div>
        </div>
    );
};

export default UserCard;

*/

import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";

const UserCard = ({ newUser }) => {
  const {
    _id,
    Fname,
    Lname,
    age,
    gender,
    profileurl,
    about,
    skills,
  } = newUser;

  const dispatch = useDispatch();

  const handleFeed = async (status, userId) => {
    try {
      await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );

      dispatch(removeFeed(userId));

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className="
        w-full
        max-w-sm
        sm:max-w-md
        bg-base-200
        rounded-3xl
        shadow-xl
        my-4
        overflow-hidden
        border
        border-white/10
      "
    >
      <div className="flex justify-center pt-6 px-4">
        <img
          className="
            w-28
            h-28
            sm:w-36
            sm:h-36
            object-cover
            border-4
            border-white
            rounded-full
            shadow-lg
          "
          src={profileurl || null}
          alt="profile"
        />
      </div>

      <div className="card-body px-5 sm:px-6 pb-6">
        
        <h2
          className="
            text-2xl
            font-bold
            text-center
            wrap-break-words
          "
        >
          {Fname ? `${Fname} ${Lname || ""}` : "User Name"}
        </h2>

        <p
          className="
            text-center
            text-gray-400
            mt-1
          "
        >
          {age ? `${age} ${gender || ""}` : "Age not available"}
        </p>

        <p
          className="
            text-center
            text-sm
            sm:text-base
            wrap-break-words
            mt-3
          "
        >
          {Array.isArray(skills)
            ? skills.join(", ")
            : "Skills not available"}
        </p>

        <p
          className="
            text-center
            text-sm
            sm:text-base
            wrap-break-words
            mt-3
            text-gray-300
          "
        >
          {about || "About not available"}
        </p>

        <div
          className="
            flex
            flex-col
            sm:flex-row
            justify-center
            gap-4
            mt-6
          "
        >
          <button
            className="
              btn
              btn-primary
              w-full
              sm:w-auto
              text-base
              sm:text-lg
            "
            onClick={() => handleFeed("ignored", _id)}
          >
            Ignore
          </button>

          <button
            className="
              btn
              btn-secondary
              w-full
              sm:w-auto
              text-base
              sm:text-lg
            "
            onClick={() => handleFeed("interested", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
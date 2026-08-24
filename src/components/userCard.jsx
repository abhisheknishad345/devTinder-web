
import axios from "axios";
import api from "../utils/axios";
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
      await api.post(
        "/request/send/" + status + "/" + userId,
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
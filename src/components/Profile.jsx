
import { useState } from "react";
import UserCard from "./userCard";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Profile = ({ newUser }) => {
  const [Fname, setFname] = useState(newUser.Fname);
  const [Lname, setLname] = useState(newUser.Lname);
  const [password, setPassword] = useState(newUser.password);
  const [gender, setGender] = useState(newUser.gender);
  const [profileurl, setProfileurl] = useState(newUser.profileurl);
  const [age, setAge] = useState(newUser.age);
  const [skills, setSkills] = useState(newUser.skills);
  const [about, setAbout] = useState(newUser.about);

  const [error, setError] = useState("");
  const [settoast, setShowToast] = useState(false);

  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const saveProfile = async () => {
    try {
      setError("");

      const res = await axios.put(
        BASE_URL + "/profile/update",
        { Fname, Lname, gender, profileurl, age, skills, about },
        { withCredentials: true }
      );

      dispatch(addUser(res?.data?.data));

      toast.success(
        <p className="text-black">{res?.data?.message}</p>
      );

      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);

    } catch (err) {
      const errorMessage =
        err.response?.data ||
        "Something went wrong. Please try again.";

      setError(errorMessage);
      toast.warning(<p className="text-black"> {errorMessage} </p> );
    }
  };

  if (!newUser)
    return (
      <h2 className="p-2 m-2 text-2xl font-bold text-center text-red-400">
        Please login ⚠️
      </h2>
    );

  return (
    <>
      <div
        className="
          w-full
          min-h-screen
          flex
          flex-col
          xl:flex-row
          justify-center
          items-center
          xl:items-start
          gap-8
          px-4
          py-6
          mb-20
        "
      >
        <div
          className="
            w-full
            max-w-md
          "
        >
          <fieldset
            className="
              fieldset
              bg-base-300
              border-base-300
              rounded-2xl
              border
              p-5
              shadow-lg
              w-full
            "
          >
            <h2 className="text-2xl font-bold text-center mb-4">
              Edit Profile
            </h2>

            <label className="label">First Name:</label>

            <input
              type="text"
              className="input input-bordered w-full"
              name="Fname"
              placeholder="First Name"
              value={Fname}
              onChange={(e) => setFname(e.target.value)}
              required
            />

            <label className="label mt-2">Last Name:</label>

            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Last Name"
              name="Lname"
              value={Lname}
              onChange={(e) => setLname(e.target.value)}
              required
            />

            <label className="label mt-2">Gender:</label>

            <input
              type="text"
              name="gender"
              value={gender}
              placeholder="Gender"
              className="input input-bordered w-full"
              onChange={(e) => setGender(e.target.value)}
            />

            <label className="label mt-2">Age:</label>

            <input
              type="number"
              className="input input-bordered w-full"
              placeholder="Age"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />

            <label className="label mt-2">Profile URL:</label>

            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Profile URL"
              name="profileurl"
              value={profileurl}
              onChange={(e) => setProfileurl(e.target.value)}
              required
            />

            <label className="label mt-2">Skills:</label>

            <textarea
              name="skills"
              className="textarea textarea-bordered w-full"
              placeholder="Skills"
              value={skills}
              onChange={(e) =>
                setSkills(e.target.value.split(","))
              }
            ></textarea>

            <label className="label mt-2">About:</label>

            <textarea
              name="about"
              className="textarea textarea-bordered w-full"
              placeholder="About you"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            ></textarea>

            <p className="text-red-500 text-sm mt-2">
              {error}
            </p>

            <button
              className="
                btn
                bg-green-500
                text-black
                text-lg
                font-semibold
                w-full
                sm:w-1/2
                mx-auto
                mt-5
              "
              onClick={saveProfile}
            >
              Update Profile
            </button>
          </fieldset>
        </div>

        <div
          className="
            w-full
            flex
            justify-center
            xl:w-auto
          "
        >
          <UserCard
            newUser={{
              Fname,
              Lname,
              gender,
              profileurl,
              age,
              skills,
              about,
            }}
          />
        </div>
      </div>
      <ToastContainer/>
    </>
  );
};

export default Profile;


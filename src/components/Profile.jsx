
import { useState } from "react";
import UserCard from "./userCard";
import { useDispatch, useSelector } from "react-redux";
import{ BASE_URL} from "../utils/constants";
import {addUser} from "../utils/userSlice"
import axios from "axios";

const Profile = ({ newUser }) => {
  // console.log("Current user", newUser);

  const [Fname, setFname] = useState(newUser.Fname || "");
  // console.log(newUser?.Fname || "No Fname");
  const [Lname, setLname] = useState(newUser.Lname);
  // const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState(newUser.password);
  const [gender, setGender] = useState(newUser.gender);
  const [profileurl, setProfileurl] = useState(newUser.profileurl);
  const [age, setAge] = useState(newUser.age);
  const [skills, setSkills] = useState(newUser.skills);
  const [about, setAbout] = useState(newUser.about);
  const [error, setError] = useState("")
  const user = useSelector((store) => store.user)
  const dispatch = useDispatch()
  
  const saveProfile = async() =>{
    // console.log("Data", user);
    try {
      setError("")
      const res = await axios.patch( BASE_URL + "/profile/update", 
        { Fname, Lname, gender,profileurl, age, skills, about }, 
        {withCredentials: true})

      console.log("Response:", res?.data?.message);
      dispatch(addUser(res?.data?.data))
      alert(res?.data?.message)
      
    } catch (err) {
      const errorMessage = err.response?.data || "Something went wrong. Please try again.";
      setError(errorMessage);
      alert(errorMessage)
      
    }
  }

  if (!newUser) return <h2 className="p-1 m-2 text-2xl font-bold text-center text-red-400">Please login ⚠️</h2>;

  return (

    <div className="mb-20 my-3 flex object-cover justify-center items-start gap-10">

      <div className='flex flex-col justify-center items-center my-2 gap-5 min-h-screen'>

        <fieldset className="fieldset  bg-base-300 border-base-300 rounded-box min-h-screen w-[350px] border p-4 pb-10">
          <h2 className='flex justify-center text-2xl'>Edit Profile</h2>

          <label className="label ">First Name:</label>
          <input type="text"
            className="input input-md"
            name="Fname"
            placeholder="First Name"
            value={Fname}
            onChange={(e) => setFname(e.target.value)}
            required />

          <label className="label">Last Name:</label>
          <input type="text" className="input" placeholder="Last Name"
            name="Lname"
            value={Lname}
            onChange={(e) => setLname(e.target.value)}
            required />

          <label className="label">Gender:</label>
          <label className="flex items-center gap-5">

            <input type="text" name="gender" value={gender} placeholder="Gender" className="input"
            onChange={(e) => setGender(e.target.value)} />

            {/* <input type="radio" name="gender" value="Male" className="radio" placeholder="Gender"
              onChange={(e) => setGender(e.target.value)}
              required />
            Male

            <input type="radio" name="gender" value="Female" className="radio" placeholder="Gender"
              onChange={(e) => setGender(e.target.value)}
              required />
            Female */}

          </label>


          <label className="label">Age:</label>
          <input type="number" className="input" placeholder="Age"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required />


          <label className="label">Password:</label>
          <input type="text" className="input" placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required />



          <label className="label">ProfileURL:</label>
          <input type="text" className="input" placeholder="Profile URL"
            name="profileurl"
            value={profileurl}
            onChange={(e) => setProfileurl(e.target.value)}
            required />


          <label className="label">Skills:</label>
          <textarea name="skills" id="" className="textarea" placeholder="Skills"
            value={skills}
            onChange={(e) =>
              // setSkills(e.target.value)
              setSkills(e.target.value.split(","))
            }

          ></textarea>

          <label className="label">About:</label>
          <textarea name="about" id="" className="textarea" placeholder="About you"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          >
          </textarea>
            <p className="text-red-500 text-[16px]">{error}</p>
          <button className="btn bg-white  text-[20px] font-semibold text-black w-1/2 mx-auto my-2"
           onClick={saveProfile}
          >Save Profile</button>

        </fieldset>

      </div>

      <UserCard newUser={{ Fname, Lname, gender,profileurl, age, skills, about }} />
    </div>

  )
};

export default Profile;
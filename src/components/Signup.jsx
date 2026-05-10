import { useNavigate } from "react-router-dom";
import { BASE_URL, profileUrl } from "../utils/constants";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    Fname: "",
    Lname: "",
    emailId: "@gmail.com",
    password: "@123",
    gender: "",
    age: "",
    profileurl: profileUrl,
    skills: ["HTML", "CSS", "JavaScript"],
    about: "This is default about user",
  });

  const [passError, setPassErrors] = useState({});
  const [age, setAge] = useState({});
  const [email, setEmail] = useState({});
  const [gender, setGender] = useState({});
  const [profile, setProfile] = useState({});

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setPassErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setAge((prev) => ({
      ...prev,
      [name]: "",
    }));

    setEmail((prev) => ({
      ...prev,
      [name]: "",
    }));

    setGender((prev) => ({
      ...prev,
      [name]: "",
    }));

    setProfile((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSignup = async () => {
    const {
      Fname,
      Lname,
      emailId,
      password,
      age,
      gender,
      profileurl,
    } = formData;

    if (!profileurl || profileurl.length <= 9) {
      setProfile({
        profileurl: "Invalid profile URL",
      });
    }

    if (!Fname.trim() || !Lname.trim()) {
      toast.warning(
        <p className="text-red-500">
          Please fill Firstname & Lastname
        </p>
      );

      return;
    }

    if (!gender) {
      setGender({
        gender: "Please select a gender",
      });
    }

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setPassErrors({
        password:
          "Password must be 6+ characters, include 1 uppercase, 1 number, 1 special character",
      });

      return;
    }

    if (!Number(age)) {
      setAge({
        age: "Age required",
      });

      return;

    } else if (Number(age) < 18) {
      setAge({
        age: "Age should be 18+",
      });

      return;
    }

   if (!/^\S+@\S+\.\S+$/.test(emailId)) {
  setEmail({
    emailId: "Invalid email format",
  });

  return;
}

    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { ...formData },
        { withCredentials: true }
      );

      alert("Signup Successful! 🚀🚀");

      dispatch(addUser(res?.data?.data));

      navigate("/profile/view");

    } catch (err) {
      setError(err.response?.data || "Something went wrong");

      if (err?.response?.data?.error) {
        toast.warning(
          <p className="text-red-500">
            {err?.response?.data?.error}
          </p>
        );
      }
    }
  };

  return (
    <>
      <div
        className="
          min-h-screen
          flex
          justify-center
          items-center
          px-4
          py-8
        "
      >
        <div
          className="
            w-full
            max-w-md
            bg-base-300
            rounded-3xl
            shadow-2xl
            border
            border-white/10
            p-5
            sm:p-7
          "
        >
          <p
            className="
              text-center
              text-lg
              sm:text-xl
              mb-5
            "
          >
            New User? Signup Here!
          </p>

          <h2
            className="
              text-3xl
              font-bold
              text-center
              mb-6
            "
          >
            Signup
          </h2>

          <div className="space-y-4">
            
            <div>
              <label className="label">First Name:</label>

              <input
                type="text"
                className="input input-bordered w-full"
                name="Fname"
                placeholder="First Name"
                value={formData.Fname}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="label">Last Name:</label>

              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Last Name"
                name="Lname"
                value={formData.Lname}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="label">Email Id:</label>

              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="Email"
                value={formData.emailId}
                name="emailId"
                onChange={handleChange}
                required
              />

              {email.emailId && (
                <p className="text-red-500 text-sm mt-1">
                  {email.emailId}
                </p>
              )}
            </div>

            <div>
              <label className="label">Password:</label>

              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Password"
                value={formData.password}
                name="password"
                onChange={handleChange}
                required
              />

              {passError.password && (
                <p className="text-red-500 text-sm mt-1">
                  {passError.password}
                </p>
              )}
            </div>

            <div>
              <label className="label">Gender:</label>

              <div
                className="
                  flex
                  flex-wrap
                  gap-6
                  mt-2
                "
              >
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    className="radio"
                    onChange={handleChange}
                  />
                  Male
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    className="radio"
                    onChange={handleChange}
                  />
                  Female
                </label>
              </div>

              {gender.gender && (
                <p className="text-red-500 text-sm mt-1">
                  {gender.gender}
                </p>
              )}
            </div>

            <div>
              <label className="label">Age:</label>

              <input
                type="number"
                className="input input-bordered w-full"
                placeholder="Age"
                value={formData.age}
                name="age"
                onChange={handleChange}
                required
              />

              {age.age && (
                <p className="text-red-500 text-sm mt-1">
                  {age.age}
                </p>
              )}
            </div>

            <button
              className="
                btn
                bg-white
                text-black
                text-lg
                w-full
                mt-4
              "
              onClick={handleSignup}
            >
              Signup
            </button>

            <div className="text-center pt-3">
              <p className="text-sm sm:text-base">
                Existing User?
              </p>

              <button
                className="
                  btn
                  bg-green-500
                  text-black
                  w-full
                  mt-3
                  text-base
                  sm:text-lg
                "
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">
                {error}
              </p>
            )}
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default Signup;

import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
    const navigate = useNavigate()
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        Fname: "Rohan",
        Lname: "Das",
        emailId: "rohandas@gmail.com",
        password: "Rohan@123",
        gender: "",
        age: "25",
        profileurl: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym95fGVufDB8fDB8fHww",
        skills: ["HTML", "CSS", "JavaScript"],
        about: ""
    })


    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSignup = async () => {
        const { Fname, Lname, emailId, password, age, gender } = formData;

        // ✅ VALIDATION FIRST
        if (!Fname || !Lname || !emailId || !password || !gender) {
            alert("Please fill all required fields!");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters");
            return;
        }

        if (age < 18) {
            alert("You must be at least 18 years old");
            return;
        }

        try {
            const res = await axios.post(
                BASE_URL + "/signup",
                { ...formData },
                { withCredentials: true }
            );


            console.log("Signup successful:", res?.data);
            alert( res?.data + " 🎉" || "Signup successful 🎉");
            navigate("/login");

        } catch (err) {
            setError(err.response?.data || "Email already exists. Please use other emailid.");
            console.log(err?.response?.data || "Signup failed ❌");
            alert(err?.response?.data?.error || "Signup failed ❌");
        }
    };






    return (


        <div className='flex flex-col justify-center items-center my-2 gap-5 min-h-screen'>
            <p className='text-xl'>Are you new here?</p>

            <fieldset className="fieldset  bg-base-300 border-base-300 rounded-box min-h-screen w-[350px] border p-4 pb-20">
                <h2 className='flex justify-center text-2xl'>Signup</h2>

                <label className="label ">First Name:</label>
                <input type="text"
                    className="input"
                    name="Fname"
                    placeholder="First Name"
                    value={formData.Fname}
                    onChange={handleChange}
                    required />

                <label className="label">Last Name:</label>
                <input type="text" className="input" placeholder="Last Name"
                    name="Lname"
                    value={formData.Lname}
                    onChange={handleChange}
                    required />

                <label className="label">Email Id:</label>
                <input type="email" className="input" placeholder="Email"
                    value={formData.emailId}
                    name="emailId"
                    onChange={handleChange}
                    required />
                    {/* <p className="text-red-500">{error}</p> */}

                <label className="label">Password:</label>
                <input type="text" className="input" placeholder="Password"
                    value={formData.password}
                    name="password"
                    onChange={handleChange}
                    required />

                <label className="label">Gender:</label>
                <label className="flex items-center gap-5">

                    <input type="radio" name="gender" value="Male" className="radio" placeholder="Gender"
                        onChange={handleChange}
                        required />
                    Male

                    <input type="radio" name="gender" value="Female" className="radio" placeholder="Gender"
                        onChange={handleChange}
                        required />
                    Female
                </label>

                <label className="label">ProfileURL:</label>
                <input type="text" className="input" placeholder="Profile URL"
                    value={formData.profileurl}
                    name="profileurl"
                    onChange={handleChange}
                    required />


                <label className="label">Age:</label>
                <input type="number" className="input" placeholder="Age"
                    value={formData.age}
                    name="age"
                    onChange={handleChange}
                    required />

                <label className="label">Skills:</label>
                <textarea name="skills" id="" className="textarea" placeholder="Skills"
                    value={formData.skills.join(", ")}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            skills: e.target.value.split(",")
                        })
                    }

                ></textarea>

                <label className="label">About:</label>
                <textarea name="about" id="" className="textarea" placeholder="About you"
                    value={formData.about}
                    onChange={handleChange}></textarea>

                <button className="btn bg-white  text-xl text-black"
                    onClick={handleSignup}
                >Signup</button>
                <p className="text-[16px]">Already have an account?</p>
                <button className='btn bg-green-500 text-[18px] text-black' onClick={() => navigate("/login")}> Login</button>

            </fieldset>

        </div>


    );
}


export default Signup
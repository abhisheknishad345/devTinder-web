import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";
import { toast } from "react-toastify";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Signup = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    Fname: "",
    Lname: "",
    emailId: "",
    password: "",
    confirmPassword: "",
    age: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const newErrors = {};

    // First Name
    if (!formData.Fname.trim()) {
      newErrors.Fname = "First name is required";
    }

    // Last Name
    if (!formData.Lname.trim()) {
      newErrors.Lname = "Last name is required";
    }

    // Email
    if (!formData.emailId.trim()) {
      newErrors.emailId = "Email is required";
    } else if (
      !/^\S+@\S+\.\S+$/.test(formData.emailId)
    ) {
      newErrors.emailId = "Enter a valid email";
    }

    // Password
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (
      !/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "8+ characters with uppercase, number and special character";
    }

    // Confirm Password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword =
        "Please confirm your password";
    } else if (
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword =
        "Passwords do not match";
    }

    // Age
    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (Number(formData.age) < 18) {
      newErrors.age = "Age must be 18 or above";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    try {
      setLoading(true);

      // confirmPassword backend ko nahi bhejna
      const signupData = {
        Fname: formData.Fname.trim(),
        Lname: formData.Lname.trim(),
        emailId: formData.emailId.trim(),
        password: formData.password,
        age: Number(formData.age),
      };

      const res = await axios.post(
        `${BASE_URL}/signup`,
        signupData,
        {
          withCredentials: true,
        }
      );

      dispatch(addUser(res.data.data));

      toast.success("Account created successfully!");

      navigate("/feed");
    } catch (err) {
      const message =
        err.response?.data?.message ||
        "Unable to create account";

      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSignup} className="space-y-5">

      {/* First + Last Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

        {/* First Name */}
        <div>
          <label
            htmlFor="Fname"
            className="block mb-2 text-sm font-medium text-gray-300"
          >
            First Name
          </label>

          <input
            id="Fname"
            name="Fname"
            type="text"
            value={formData.Fname}
            onChange={handleChange}
            placeholder="First name"
            autoComplete="given-name"
            className={`w-full h-12 px-4 rounded-lg bg-[#0b1017] border ${
              errors.Fname
                ? "border-red-500"
                : "border-[#273140]"
            } text-white placeholder:text-gray-600 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/10 transition`}
          />

          {errors.Fname && (
            <p className="mt-1 text-xs text-red-400">
              {errors.Fname}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label
            htmlFor="Lname"
            className="block mb-2 text-sm font-medium text-gray-300"
          >
            Last Name
          </label>

          <input
            id="Lname"
            name="Lname"
            type="text"
            value={formData.Lname}
            onChange={handleChange}
            placeholder="Last name"
            autoComplete="family-name"
            className={`w-full h-12 px-4 rounded-lg bg-[#0b1017] border ${
              errors.Lname
                ? "border-red-500"
                : "border-[#273140]"
            } text-white placeholder:text-gray-600 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/10 transition`}
          />

          {errors.Lname && (
            <p className="mt-1 text-xs text-red-400">
              {errors.Lname}
            </p>
          )}
        </div>

      </div>

      {/* Email */}
      <div>

        <label
          htmlFor="signup-email"
          className="block mb-2 text-sm font-medium text-gray-300"
        >
          Email
        </label>

        <input
          id="signup-email"
          name="emailId"
          type="email"
          value={formData.emailId}
          onChange={handleChange}
          placeholder="xyz@example.com"
          autoComplete="email"
          className={`w-full h-12 px-4 rounded-lg bg-[#0b1017] border ${
            errors.emailId
              ? "border-red-500"
              : "border-[#273140]"
          } text-white placeholder:text-gray-600 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/10 transition`}
        />

        {errors.emailId && (
          <p className="mt-1 text-xs text-red-400">
            {errors.emailId}
          </p>
        )}

      </div>

      {/* Password */}
      <div>

        <label
          htmlFor="signup-password"
          className="block mb-2 text-sm font-medium text-gray-300"
        >
          Password
        </label>

        <div className="relative">

          <input
            id="signup-password"
            name="password"
            type={
              showPassword ? "text" : "password"
            }
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
            autoComplete="new-password"
            className={`w-full h-12 px-4 pr-12 rounded-lg bg-[#0b1017] border ${
              errors.password
                ? "border-red-500"
                : "border-[#273140]"
            } text-white placeholder:text-gray-600 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/10 transition`}
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword((prev) => !prev)
            }
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
          >
            {showPassword ? (
              <FiEyeOff size={19} />
            ) : (
              <FiEye size={19} />
            )}
          </button>

        </div>

        {errors.password && (
          <p className="mt-1 text-xs text-red-400">
            {errors.password}
          </p>
        )}

      </div>

      {/* Confirm Password */}
      <div>

        <label
          htmlFor="confirmPassword"
          className="block mb-2 text-sm font-medium text-gray-300"
        >
          Confirm Password
        </label>

        <div className="relative">

          <input
            id="confirmPassword"
            name="confirmPassword"
            type={
              showConfirmPassword
                ? "text"
                : "password"
            }
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            autoComplete="new-password"
            className={`w-full h-12 px-4 pr-12 rounded-lg bg-[#0b1017] border ${
              errors.confirmPassword
                ? "border-red-500"
                : "border-[#273140]"
            } text-white placeholder:text-gray-600 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/10 transition`}
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(
                (prev) => !prev
              )
            }
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
          >
            {showConfirmPassword ? (
              <FiEyeOff size={19} />
            ) : (
              <FiEye size={19} />
            )}
          </button>

        </div>

        {errors.confirmPassword && (
          <p className="mt-1 text-xs text-red-400">
            {errors.confirmPassword}
          </p>
        )}

      </div>

      {/* Age */}
      <div>

        <label
          htmlFor="age"
          className="block mb-2 text-sm font-medium text-gray-300"
        >
          Age
        </label>

        <input
          id="age"
          name="age"
          type="number"
          min="18"
          max="100"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter your age"
          className={`w-full h-12 px-4 rounded-lg bg-[#0b1017] border ${
            errors.age
              ? "border-red-500"
              : "border-[#273140]"
          } text-white placeholder:text-gray-600 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/10 transition`}
        />

        {errors.age && (
          <p className="mt-1 text-xs text-red-400">
            {errors.age}
          </p>
        )}

      </div>

      {/* Signup Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full h-12 rounded-lg bg-blue-400 hover:bg-sky-400 disabled:opacity-60 disabled:cursor-not-allowed text-[#06101d] font-bold transition-all"
      >
        {loading
          ? "Creating account..."
          : "Create Account"}
      </button>

      {/* Login */}
      <div className="text-center text-sm text-gray-400">

        Already have an account?

        <button
          type="button"
          onClick={onLogin}
          className="ml-1 text-blue-400 hover:text-sky-400 font-semibold hover:underline"
        >
          Login
        </button>

      </div>

    </form>
  );
};

export default Signup;

import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";
import { toast } from "react-toastify";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = ({ onSignup }) => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!emailId.trim()) {
      newErrors.emailId = "Email is required";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    try {
      setLoading(true);

      const res = await axios.post(
        `${BASE_URL}/login`,
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );

      dispatch(addUser(res.data.data));

      toast.success("Login successful!");

      navigate("/feed");
    } catch (err) {
      const message =
        err.response?.data?.message ||
        err.response?.data ||
        "Invalid email or password";

      toast.error(
        typeof message === "string"
          ? message
          : "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-5">

      {/* Email */}
      <div>
        <label
          htmlFor="login-email"
          className="block mb-2 text-sm font-medium text-gray-300"
        >
          Email
        </label>

        <input
          id="login-email"
          type="email"
          value={emailId}
          onChange={(e) => {
            setEmailId(e.target.value);
            setErrors((prev) => ({
              ...prev,
              emailId: "",
            }));
          }}
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
          htmlFor="login-password"
          className="block mb-2 text-sm font-medium text-gray-300"
        >
          Password
        </label>

        <div className="relative">

          <input
            id="login-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors((prev) => ({
                ...prev,
                password: "",
              }));
            }}
            placeholder="Enter your password"
            autoComplete="current-password"
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

      {/* Login Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full h-12 rounded-lg bg-blue-400 hover:bg-sky-400 disabled:opacity-60 disabled:cursor-not-allowed text-[#06101d] font-bold transition-all"
      >
        {loading ? "Logging in..." : "Login"}
      </button>

      {/* Signup */}
      <div className="text-center text-sm text-gray-400">
        Don't have an account?

        <button
          type="button"
          onClick={onSignup}
          className="ml-1 text-blue-400 hover:text-sky-400 font-semibold hover:underline"
        >
          Sign up
        </button>
      </div>

    </form>
  );
};

export default Login;
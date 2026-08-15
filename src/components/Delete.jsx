import axios from 'axios';
import { useState } from 'react';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { BASE_URL } from "../utils/constants.js"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice"; // Action to clear state
import { toast, ToastContainer } from "react-toastify";

const Delete = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const handleDeleteAccount = async (e) => {
        e.preventDefault();


        const newErrors = {};
        if (!password) {
            newErrors.password = "Password is required";
        }
        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;
        //Confirmation check
        const confirmDelete = window.confirm(
            "Are you sure you want to delete your account? This action cannot be undone!"
        );

        if (!confirmDelete) return;

        try {
            const res = await axios.delete(
                BASE_URL + "/user/delete",
                {
                    data: { password },
                    withCredentials: true
                }

            )

            toast.success(res.data.message || "Account Deleted!");
            dispatch(removeUser());
            navigate("/");

        } catch (err) {
            toast.error(err?.response?.data?.message || "Failed to delete account");

        }
    }

    return (
        <>
            <main className="min-h-[calc(100vh-64px)] bg-[#070a0f] text-white flex items-center justify-center px-4 py-8">

                <div
                    className="w-full max-w-md
        sm:max-w-lg bg-[#10151e]
        border border-red-500/20 rounded-2xl shadow-xl
        p-5 sm:p-7 md:p-8
        
      "
                >

                    {/* Heading */}
                    <div className="mb-6">
                        <h2 className="
          text-xl
          sm:text-2xl
          md:text-3xl
          font-bold
          text-red-500
          leading-tight
        ">
                            Delete Your Account
                        </h2>

                        <p className="
          mt-3
          text-sm
          sm:text-base
          text-gray-400
          leading-relaxed
        ">
                            Once your account is deleted, it cannot be recovered.
                            Your profile and account data will be permanently removed.
                        </p>
                    </div>

                    {/* Password */}
                    <div>

                        <label
                            htmlFor="login-password"
                            className="block mb-2 text-sm sm:text-base font-medium text-gray-300"
                        >
                            Confirm password
                        </label>

                        <div className="relative w-full">

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
                                className={`
              w-full
              h-12
              sm:h-13
              px-4
              pr-12
              rounded-lg
              bg-[#0b1017]
              border
              ${errors.password
                                        ? "border-red-500"
                                        : "border-[#273140]"
                                    }
              text-white
              placeholder:text-gray-600
              outline-none
              focus:border-red-400
              focus:ring-2
              focus:ring-red-400/10
              transition
            `}
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword((prev) => !prev)
                                }
                                className="
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              text-gray-400
              hover:text-white
              cursor-pointer
              p-1
            "
                            >
                                {showPassword ? (
                                    <FiEyeOff size={19} />
                                ) : (
                                    <FiEye size={19} />
                                )}
                            </button>

                        </div>

                        {errors.password && (
                            <p className="mt-2 text-xs sm:text-sm text-red-400">
                                {errors.password}
                            </p>
                        )}

                    </div>

                    {/* Delete Button */}
                    <button
                        type="button"
                        onClick={handleDeleteAccount}
                        className="w-full
          mt-6
          h-12
          rounded-lg
          bg-red-600
          hover:bg-red-700
          text-white
          font-bold
          transition
          cursor-pointer
        "
                    >
                        Delete My Account
                    </button>

                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="w-full
          mt-6
          h-12
          rounded-lg
          bg-green-600
          hover:bg-green-700
          text-white
          font-bold
          transition
          cursor-pointer
        "
                    >
                        Cancel
                    </button>

                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    theme="dark"
                />

            </main>

        </>

    )
}

export default Delete
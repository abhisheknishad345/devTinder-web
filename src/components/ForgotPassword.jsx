import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/axios";
import { toast, ToastContainer } from "react-toastify";

const ForgotPassword = () => {
  const [emailId, setEmailId] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    if (!emailId.trim()) {
      toast.error("Email is required");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/forgot-password", {
        emailId: emailId.trim(),
      });

      toast.success(
        res.data?.message || "OTP sent to your email"
      );

      setTimeout(() => {
        navigate("/reset-password", {
          state: {
            emailId: emailId.trim(),
          },
        });
      }, 800);

    } catch (err) {
      const message =
        err.response?.data?.message ||
        "Unable to send reset OTP";

      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#070b11] px-4 py-6">
      
      {/* Desktop pe fixed card width (420px), Mobile pe full width automatically */}
      <div className="w-full max-w-[520px] bg-[#0e1622] rounded-xl border border-[#1e293b] p-5 sm:p-7 shadow-xl">
        
        <form onSubmit={handleForgotPassword} className="space-y-5">
          {/* Header */}
          <div className="text-center mb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Forgot Password?
            </h2>

            <p className="mt-1 text-xs sm:text-sm text-gray-400 leading-relaxed">
              Enter your registered email and we'll send you an OTP to reset your password.
            </p>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="forgot-email"
              className="block mb-1.5 text-xs sm:text-sm font-medium text-gray-300"
            >
              Email Address
            </label>

            <input
              id="forgot-email"
              type="email"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              placeholder="xyz@gmail.com"
              autoComplete="email"
              className="w-full h-10 sm:h-11 px-3.5 rounded-lg bg-[#070b11] border border-[#273140] text-white placeholder:text-gray-600 outline-none focus:border-blue-500 transition text-md"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-10 sm:h-11 rounded-lg bg-blue-600 hover:bg-blue-500 active:scale-[0.98] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition"
          >
            {loading ? "Sending OTP..." : "Send Reset OTP"}
          </button>

          {/* Back to Login */}
          <div className="text-center text-xs sm:text-sm text-gray-400">
            Remember your password?
            <button
              type="button"
              onClick={() => navigate("/auth")}
              className="ml-1 text-blue-400 hover:text-blue-300 font-medium hover:underline cursor-pointer"
            >
              Login
            </button>
          </div>

          <ToastContainer
            autoClose={1500}
            theme="dark"
            position="top-right"
          />
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
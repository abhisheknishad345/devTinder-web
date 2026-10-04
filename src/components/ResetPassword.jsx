import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../utils/axios";
import { FiEye, FiEyeOff } from "react-icons/fi";

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [emailId, setEmailId] = useState(
    location.state?.emailId || ""
  );

  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(120);

  const [errors, setErrors] = useState({
    emailId: "",
    otp: "",
    newPassword: "",
    confirmPassword: "",
    general: "",
  });

  // Countdown
  useEffect(() => {
    if (resendCooldown <= 0) return;

    const timer = setInterval(() => {
      setResendCooldown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [resendCooldown]);

  const clearError = (field) => {
    setErrors((prev) => ({
      ...prev,
      [field]: "",
      general: "",
    }));
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    const newErrors = {
      emailId: "",
      otp: "",
      newPassword: "",
      confirmPassword: "",
      general: "",
    };

    let hasError = false;

    if (!emailId.trim()) {
      newErrors.emailId = "Email is required";
      hasError = true;
    }

    if (!otp.trim()) {
      newErrors.otp = "OTP is required";
      hasError = true;
    } else if (otp.length !== 6) {
      newErrors.otp = "OTP must be 6 digits";
      hasError = true;
    }

    if (!newPassword) {
      newErrors.newPassword = "New password is required";
      hasError = true;
    } else if (
      !/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(newPassword)
    ) {
      newErrors.newPassword =
        "Password must include 1 uppercase, 1 lowercase, 1 number and a special character";
      hasError = true;
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
      hasError = true;
    } else if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) return;

    try {
      setLoading(true);

      await api.post("/reset-password", {
        emailId: emailId.trim(),
        otp: otp.trim(),
        newPassword,
      });

      // Password reset successful
      navigate("/auth", {
        state: {
          message: "Password reset successfully. Please login.",
        },
      });
    } catch (err) {
      const message =
        err.response?.data?.message ||
        "Unable to reset password";

      setErrors((prev) => ({
        ...prev,
        general: message,
      }));
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!emailId.trim()) {
      setErrors((prev) => ({
        ...prev,
        emailId: "Email is required",
      }));
      return;
    }

    if (resendCooldown > 0) return;

    try {
      setResending(true);

      await api.post("/forgot-password", {
        emailId: emailId.trim(),
      });

      setOtp("");
      setResendCooldown(120);

      setErrors((prev) => ({
        ...prev,
        otp: "",
        general: "",
      }));
    } catch (err) {
      const message =
        err.response?.data?.message ||
        "Unable to resend OTP";

      setErrors((prev) => ({
        ...prev,
        general: message,
      }));
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#070b11] px-4 py-6">

      <div className="w-full max-w-[420px] bg-[#0e1622] rounded-xl border border-[#1e293b] p-5 sm:p-7 shadow-xl">

        <form onSubmit={handleResetPassword} className="space-y-4">

          {/* Header */}
          <div className="text-center mb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Reset Password
            </h2>

            <p className="mt-1 text-xs sm:text-sm text-gray-400">
              Enter the OTP and create your new password.
            </p>
          </div>

          {/* General Error */}
          {errors.general && (
            <p className="text-center text-red-400 text-sm">
              {errors.general}
            </p>
          )}

          {/* Email */}
          <div>
            <label className="block mb-1 text-xs sm:text-sm font-medium text-gray-300">
              Email Address
            </label>

            <input
              type="email"
              value={emailId}
              onChange={(e) => {
                setEmailId(e.target.value);
                clearError("emailId");
              }}
              placeholder="xyz@gmail.com"
              className={`w-full h-10 sm:h-11 px-3.5 rounded-lg bg-[#070b11] border ${
                errors.emailId
                  ? "border-red-500"
                  : "border-[#273140]"
              } text-white placeholder:text-gray-600 outline-none focus:border-blue-500 transition text-sm`}
              required
            />

            {errors.emailId && (
              <p className="mt-1 text-xs text-red-400">
                {errors.emailId}
              </p>
            )}
          </div>

          {/* OTP */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs sm:text-sm font-medium text-gray-300">
                OTP
              </label>

              <span className="text-[14px] text-gray-400">
                6 digits
              </span>
            </div>

            <input
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={6}
              value={otp}
              onChange={(e) => {
                const value = e.target.value;

                if (/^\d*$/.test(value)) {
                  setOtp(value);
                  clearError("otp");
                }
              }}
              placeholder="0 0 0 0 0 0"
              className={`w-full h-10 sm:h-11 px-3.5 rounded-lg bg-[#070b11] border ${
                errors.otp
                  ? "border-red-500"
                  : "border-[#273140]"
              } text-white placeholder:text-gray-600 outline-none focus:border-blue-500 transition text-center text-sm ${
                otp ? "tracking-[0.3em] font-semibold" : "tracking-normal"
              }`}
              required
            />

            {errors.otp && (
              <p className="mt-1 text-xs text-red-400">
                {errors.otp}
              </p>
            )}
          </div>

          {/* New Password */}
          <div>
            <label className="block mb-1 text-xs sm:text-sm font-medium text-gray-300">
              New Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                  clearError("newPassword");
                }}
                placeholder="Create a new password"
                autoComplete="new-password"
                className={`w-full h-10 sm:h-11 px-3.5 pr-10 rounded-lg bg-[#070b11] border ${
                  errors.newPassword
                    ? "border-red-500"
                    : "border-[#273140]"
                } text-white placeholder:text-gray-600 outline-none focus:border-blue-500 transition text-sm`}
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword((prev) => !prev)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white cursor-pointer"
              >
                {showPassword ? (
                  <FiEyeOff size={18} />
                ) : (
                  <FiEye size={18} />
                )}
              </button>
            </div>

            {errors.newPassword && (
              <p className="mt-1 text-xs text-red-400">
                {errors.newPassword}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 text-xs sm:text-sm font-medium text-gray-300">
              Confirm Password
            </label>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  clearError("confirmPassword");
                }}
                placeholder="Confirm new password"
                autoComplete="new-password"
                className={`w-full h-10 sm:h-11 px-3.5 pr-10 rounded-lg bg-[#070b11] border ${
                  errors.confirmPassword
                    ? "border-red-500"
                    : "border-[#273140]"
                } text-white placeholder:text-gray-600 outline-none focus:border-blue-500 transition text-sm`}
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword((prev) => !prev)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white cursor-pointer"
              >
                {showConfirmPassword ? (
                  <FiEyeOff size={18} />
                ) : (
                  <FiEye size={18} />
                )}
              </button>
            </div>

            {errors.confirmPassword && (
              <p className="mt-1 text-xs text-red-400">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-10 sm:h-11 mt-2 rounded-lg bg-blue-600 hover:bg-blue-500 active:scale-[0.98] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-md transition"
          >
            {loading ? "Resetting Password..." : "Reset Password"}
          </button>

          {/* Resend OTP */}
          <div className="text-center text-xs sm:text-sm text-gray-400 pt-1">

            {resendCooldown > 0 ? (
              <span>
                Resend OTP available in{" "}
                <span className="text-blue-400 font-semibold">
                  {Math.floor(resendCooldown / 60)}:
                  {String(resendCooldown % 60).padStart(2, "0")}
                </span>
              </span>
            ) : (
              <>
                Didn't receive the OTP?

                <button
                  type="button"
                  onClick={handleResend}
                  disabled={resending}
                  className="ml-1 text-blue-400 hover:text-blue-300 font-medium hover:underline cursor-pointer disabled:opacity-50"
                >
                  {resending ? "Sending..." : "Resend OTP"}
                </button>
              </>
            )}

          </div>

        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
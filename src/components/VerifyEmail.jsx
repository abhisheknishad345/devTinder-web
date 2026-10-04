import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import api from "../utils/axios";
import { addUser } from "../utils/userSlice";
import { toast, ToastContainer } from "react-toastify";

const VerifyEmail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [emailId, setEmailId] = useState(
        location.state?.emailId || ""
    );

    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [resending, setResending] = useState(false);
    const [resendCooldown, setResendCooldown] = useState(0);
    // verify
    const handleVerify = async (e) => {
        e.preventDefault();

        if (!emailId.trim()) {
            toast.error("Email is required");
            return;
        }

        if (!otp.trim()) {
            toast.error("OTP is required");
            return;
        }

        if (otp.length !== 6) {
            toast.error("OTP must be 6 digits");
            return;
        }

        try {
            setLoading(true);

            const res = await api.post(
                "/verify-email",
                {
                    emailId: emailId.trim(),
                    otp: otp.trim(),
                },
                {
                    withCredentials: true,
                }
            );
            console.log(res.data.data);
            dispatch(addUser(res.data.data));

            toast.success("Email verified successfully!");

            setTimeout(() => {
                navigate("/profile/view");
            }, 1000);

        } catch (err) {
            const message =
                err.response?.data?.message ||
                "Unable to verify email";

            toast.error(message);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        if (resendCooldown <= 0) return;

        const timer = setInterval(() => {
            setResendCooldown((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [resendCooldown]);
    // Fn-2 resend
    const handleResend = async () => {
        if (!emailId.trim()) {
            toast.error("Email is required");
            return;
        }

        try {
            setResending(true);

            const res = await api.post(
                "/resend-otp",
                {
                    emailId: emailId.trim(),
                }
            );

            toast.success(
                res.data?.message || "OTP sent successfully"
            );

            // Start 120 second cooldown
            setResendCooldown(120);

        } catch (err) {
            const message =
                err.response?.data?.message ||
                "Unable to resend OTP";

            toast.error(message);
        } finally {
            setResending(false);
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#070b11] px-4 py-6">

            {/* Desktop pe fixed card width, Mobile pe full width automatically */}
            <div className="w-full max-w-[420px] bg-[#0e1622] rounded-xl border border-[#1e293b] p-5 sm:p-7 shadow-xl">

                <form onSubmit={handleVerify} className="space-y-5">
                    {/* Heading */}
                    <div className="text-center mb-4">
                        <h2 className="text-xl sm:text-2xl font-bold text-white">
                            Verify Your Email
                        </h2>

                        <p className="mt-1 text-md sm:text-sm text-gray-400">
                            Enter the 6-digit OTP sent to your email
                            or click 'Resend OTP' to get OTP
                        </p>
                            
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="verify-email"
                            className="block mb-1.5 text-md sm:text-sm font-medium text-gray-300"
                        >
                            Email
                        </label>

                        <input
                            id="verify-email"
                            type="email"
                            value={emailId}
                            onChange={(e) => setEmailId(e.target.value)}
                            placeholder="xyz@gmail.com"
                            className="w-full h-10 sm:h-11 px-3.5 rounded-lg bg-[#070b11] border border-[#273140] text-white placeholder:text-gray-600 outline-none focus:border-blue-500 transition text-sm"
                        />
                    </div>

                    {/* OTP */}
                    <div>
                        <label
                            htmlFor="otp"
                            className="block mb-1.5 text-md sm:text-sm font-medium text-gray-300"
                        >
                            OTP
                        </label>

                        <input
                            id="otp"
                            type="text"
                            inputMode="numeric"
                            maxLength={6}
                            value={otp}
                            onChange={(e) => {
                                const value = e.target.value;

                                if (/^\d*$/.test(value)) {
                                    setOtp(value);
                                }
                            }}
                            placeholder="Enter 6-digit OTP"
                            className={`w-full h-10 sm:h-11 px-3.5 rounded-lg bg-[#070b11] border border-[#273140] text-white placeholder:text-gray-600 outline-none focus:border-blue-500 transition text-center text-sm ${otp ? "tracking-[0.3em] font-semibold" : "tracking-normal"
                                }`}
                        />
                    </div>

                    {/* Verify */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full h-10 sm:h-11 rounded-lg bg-blue-600 hover:bg-blue-500 active:scale-[0.98] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-md transition"
                    >
                        {loading ? "Verifying..." : "Verify Email"}
                    </button>

                    {/* Resend */}
                    <div className="text-center text-xs sm:text-sm text-gray-400">
                        <span>Didn't receive the OTP?</span>

                        {resendCooldown > 0 ? (
                            <p className="mt-2 text-gray-500">
                                Resend OTP available in{" "}
                                <span className="text-blue-400 font-semibold">
                                    {Math.floor(resendCooldown / 60)}:
                                    {String(resendCooldown % 60).padStart(2, "0")}
                                </span>
                            </p>
                        ) : (
                            <button
                                type="button"
                                onClick={handleResend}
                                disabled={resending}
                                className="
        ml-1
        text-blue-400
        hover:text-sky-400
        font-semibold
        hover:underline cursor-pointer
        disabled:opacity-50
        disabled:cursor-not-allowed
      "
                            >
                                {resending ? "Sending..." : "Resend OTP"}
                            </button>
                        )}
                    </div>

                    <ToastContainer autoClose={1500} theme="dark" />
                </form>
            </div>
        </div>
    );
};

export default VerifyEmail;
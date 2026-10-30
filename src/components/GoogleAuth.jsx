
import { GoogleLogin } from "@react-oauth/google";
import api from "../utils/axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useState } from "react";


const GoogleAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [error, setError] = useState("");

  const handleGoogleSuccess = async (credentialResponse) => {
    setError("");

    try {
      const res = await api.post(
        "/auth/google",
        {
          credential: credentialResponse.credential,
        },
        {
          withCredentials: true,
        }
      );

      console.log("Response",res);
     
      dispatch(addUser(res?.data?.user))

      // Navigate to your feed page here
      navigate("/feed", { replace: true });
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Google authentication failed. Please try again.";

      setError(message);
    }
  };

  return (
    <div>

      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={() => console.log("Google Login Failed")}
      />

      {error && (
        <p className="mt-3 text-md text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default GoogleAuth;
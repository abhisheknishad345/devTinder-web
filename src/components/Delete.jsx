import axios from 'axios';
import{ BASE_URL} from "../utils/constants.js"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice"; // Action to clear state
import { toast } from "react-toastify";

const Delete = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDeleteAccount = async () => {
        //Confirmation check
        const confirmDelete = window.confirm(
            "Are you sure you want to delete your account? This action cannot be undone!"
        );

        if (!confirmDelete) return;

    try {
        const res = await axios.delete(
            BASE_URL + "/user/delete",
            { withCredentials: true }
        )

        toast.success(res.data.message || "Account Deleted!");
        dispatch(removeUser());
        navigate("/signup");

    } catch (err) {
        toast.error(err?.response?.data?.message || "Failed to delete account");

    }
}

    return (
        <div className="p-4">
            <h2 className='mb-2 text-2xl text-red-500'>Once account is deleted it cannot undo</h2>
            <button
                className="btn  text-red-400 font-bold bg-zinc-50"
                onClick={handleDeleteAccount}
            >
                Delete My Account
            </button>
        </div>
    )
}

export default Delete
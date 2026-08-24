
import axios from "axios";
import api from "../utils/axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addRequest, removeRequest } from "../utils/requestSlice";

const Requestpage = () => {
    const dispatch = useDispatch();
    const request = useSelector((store) => store.request);

    const reviewRequest = async (status, _id) => {
        try {
            await api.post(
                "/request/review/" + status + "/" + _id,
                {},
                { withCredentials: true }
            );

            dispatch(removeRequest(_id));
        } catch (err) {
            console.error(err);
        }
    };

    const fetchRequest = async () => {
        try {
            const res = await api.get(
                "/user/requests/received",
                { withCredentials: true }
            );

            dispatch(addRequest(res?.data?.data));
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchRequest();
    }, []);

    if (!request) return null;

    if (request.length === 0) {
        return (
            <h1 className="text-center text-xl font-semibold mt-5 mb-5">
                No Request Found
            </h1>
        );
    }

    return (
        <div className="px-4 py-4">
            <h2 className="text-center font-bold text-2xl mb-6">
                Total Requests
            </h2>

            <div className="flex flex-col gap-5 items-center">
                {request.map((requests) => {
                    const {
                        _id,
                        Fname,
                        Lname,
                        age,
                        gender,
                        profileurl,
                        about,
                    } = requests.fromUserId;

                    return (
                        <div
                            key={_id}
                            className="
                w-full
                sm:w-[90%]
                md:w-[80%]
                lg:w-[65%]
                xl:w-[55%]
                bg-base-300
                rounded-2xl
                shadow-lg
                p-4
                flex
                flex-col
                sm:flex-row
                items-center
                gap-4
              "
                        >

                            {/* Profile Image */}
                            <div className="shrink-0">
                                <img
                                    className="
                    w-24
                    h-24
                    sm:w-28
                    sm:h-28
                    rounded-full
                    border-2
                    border-white
                    object-cover
                  "
                                    src={profileurl}
                                    alt="Profile"
                                />
                            </div>

                            {/* User Info */}
                            <div className="flex-1 text-center sm:text-left">
                                <h2 className="text-xl font-bold">
                                    {Fname + " " + Lname}
                                </h2>

                                {age && gender && (
                                    <p className="text-gray-400 mt-1">
                                        {age + ", " + gender}
                                    </p>
                                )}

                                <p className="mt-2 text-sm sm:text-base wrap-break-words">
                                    {about}
                                </p>
                            </div>

                            {/* Buttons */}
                            <div
                                className="
                  flex
                  sm:flex-col
                  gap-3
                  w-full
                  sm:w-auto
                "
                            >
                                <button
                                    className="
                    btn
                    btn-primary
                    flex-1
                    sm:w-28
                  "
                                    onClick={() =>
                                        reviewRequest("rejected", requests._id)
                                    }
                                >
                                    Reject
                                </button>

                                <button
                                    className="
                    btn
                    btn-secondary
                    flex-1
                    sm:w-28
                  "
                                    onClick={() =>
                                        reviewRequest("accepted", requests._id)
                                    }
                                >
                                    Accept
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Requestpage;
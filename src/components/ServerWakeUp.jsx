
import { useEffect, useState } from "react";
import api from "../utils/axios";

const ServerWakeUp = ({ children }) => {
    const [status, setStatus] = useState("waking");
    const [attempt, setAttempt] = useState(0);

    const MAX_ATTEMPTS = 3;

    const checkServer = async () => {
        try {
            setStatus("waking");

            await api.get("/health", {
                timeout: 60000,
            });

            setStatus("ready");
        } catch (error) {
            console.log("Server wake-up failed:", error);

            if (attempt < MAX_ATTEMPTS - 1) {
                setAttempt((prev) => prev + 1);
            } else {
                setStatus("failed");
            }
        }
    };

    useEffect(() => {
        checkServer();
    }, [attempt]);

    if (status === "waking") {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
                <div className="loading loading-spinner loading-lg"></div>

                <h1 className="text-2xl font-bold mt-6">
                    DevTinder
                </h1>

                <p className="text-gray-500 mt-2 font-medium">
                    Server is waking up...
                </p>

                <p className=" text-gray-400 mt-1 font-medium font-mono">
                    This may take a few seconds
                </p>
            </div>
        );
    }

    if (status === "failed") {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
                <h1 className="text-2xl font-bold">
                    DevTinder
                </h1>

                <p className="text-red-500 mt-4">
                    Unable to connect to the server.
                </p>

                <button
                    onClick={() => {
                        setAttempt(0);
                        setStatus("waking");
                    }}
                    className="btn btn-primary mt-5"
                >
                    Try Again
                </button>
            </div>
        );
    }

    return children;
};

export default ServerWakeUp;
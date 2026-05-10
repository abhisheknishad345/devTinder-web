import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";

function DataComponent() {
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((res) => console.log(res.data))
      .catch((err) => {
        if (err.response?.status === 404) {
          setError("Requested resource was not found.");
        } else {
          setError("Unable to fetch data. Please try again later.");
        }
      });
  }, []);

  return (
    <div className="flex items-center justify-center px-4 py-6">
      {error && (
        <div
          className="
            w-full 
            max-w-md 
            rounded-xl 
            border 
            border-red-300 
            bg-red-100 
            px-4 
            py-3 
            text-center 
            shadow-md
          "
        >
          <h2
            className="
              text-sm 
              sm:text-base 
              md:text-lg 
              font-semibold 
              text-red-700
            "
          >
            {error}
          </h2>
        </div>
      )}
    </div>
  );
}

export default DataComponent;
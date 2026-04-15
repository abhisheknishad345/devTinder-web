import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";

function DataComponent() {
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get(BASE_URL)
      .then((res) => console.log(res.data))
      .catch((err) => {
        if (err.response?.status === 404) {
         setError("Page/API not found!!")
        } else {
          setError("Something went wrong");
        }
      });
  }, []);

  return <h2 className="text-xl font-bold px-5 bg-gray-200 text-black mt-1 text-center">{error}</h2>;
}

export default DataComponent
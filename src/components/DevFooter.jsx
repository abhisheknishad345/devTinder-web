
/****** *******/

import React from "react";
import { useLocation } from "react-router-dom";

const DevFooter = () => {
  const location = useLocation();

  return (
    <footer
      className="
        bg-black
        border-t
        border-white/10
        text-white
        mt-2
      "
    >

      {/* Your existing footer code */}
       <div
        className="
          max-w-7xl
          mx-auto
          px-5
          py-10
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-10
        "
      >
        
        <div>
          <h2
            className="
              text-3xl
              font-bold
              text-pink-500
            "
          >
            DevTinder
          </h2>

          <p
            className="
              text-gray-400
              mt-4
              leading-relaxed
              text-sm
              sm:text-base
            "
          >
            DevTinder helps developers connect,
            collaborate, and build amazing
            projects together from anywhere in
            the world.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white transition duration-300 cursor-pointer">
              Home
            </li>

            <li className="hover:text-white transition duration-300 cursor-pointer">
              Feed
            </li>

            <li className="hover:text-white transition duration-300 cursor-pointer">
              Connections
            </li>

            <li className="hover:text-white transition duration-300 cursor-pointer">
              Requests
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Resources
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white transition duration-300 cursor-pointer">
              Privacy Policy
            </li>

            <li className="hover:text-white transition duration-300 cursor-pointer">
              Terms & Conditions
            </li>

            <li className="hover:text-white transition duration-300 cursor-pointer">
              Developer Community
            </li>

            <li className="hover:text-white transition duration-300 cursor-pointer">
              Support
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Connect With Us
          </h3>

          <p className="text-gray-400 text-sm sm:text-base">
            Follow DevTinder on social media and
            stay updated with developer trends.
          </p>

          <div className="flex gap-4 mt-5">
            
            <button
              className="
                w-11
                h-11
                rounded-full
                bg-white/10
                hover:bg-pink-500
                transition
                duration-300
                flex
                items-center
                justify-center
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </button>

            <button
              className="
                w-11
                h-11
                rounded-full
                bg-white/10
                hover:bg-pink-500
                transition
                duration-300
                flex
                items-center
                justify-center
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </button>

            <button
              className="
                w-11
                h-11
                rounded-full
                bg-white/10
                hover:bg-pink-500
                transition
                duration-300
                flex
                items-center
                justify-center
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className="
          border-t
          border-white/10
          py-5
          px-4
          text-center
          text-gray-400
          text-sm
        "
      >
        © {new Date().getFullYear()} DevTinder.
        All rights reserved.
      </div>
    </footer>
  );
};

export default DevFooter;
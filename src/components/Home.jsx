
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import DevFooter from "./DevFooter";
import DevStats from "./DevStats";

const Home = () => {
  const navigate = useNavigate();
  // Get user from store
  const user = useSelector((store) => store.user);
  const isLoggedIn = !!user;

  return (

     <div className="min-h-screen flex flex-col bg-base-200">

      {/* Navbar */}
       {!isLoggedIn && ( 
      <div className="navbar bg-base-100 px-4 md:px-8 shadow-md sticky top-0 z-5">
        
        <div className="flex-1">
         
          <button
            className="btn btn-ghost text-xl md:text-2xl font-bold italic text-primary"
            onClick={() => navigate("/")}
          >
            DevTinder
          </button>
       
        </div>

        {/* Hide Login & Signup after login */}
      
          <div className="flex-none gap-2 ">
            
            <button
              className="btn btn-ghost border-white btn-sm md:btn-md mx-2"
              onClick={() => navigate("/auth")}
            >
              Login
            </button>

            <button
              className="btn btn-primary btn-sm md:btn-md"
              onClick={() => navigate("/auth")}
            >
              Sign Up
            </button>

          </div>
      </div>
        )}

      {/* Hero Section */}
      <div className="hero grow bg-linear-to-b from-base-300 to-base-100 px-4">
        <div className="hero-content text-center">
          
          <div className="max-w-2xl">

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Where <span className="text-primary">Code</span> Meets its
              <span className="text-secondary"> Match.</span>
            </h1>

            <p className="py-6 text-base md:text-xl opacity-80 leading-relaxed">
              Stop scrolling alone. Connect with developers who share your stack,
              your passion, and your debugging nightmares. Swipe right on your next
              coding partner or co-founder.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">

              {!isLoggedIn ? (
                <>
                  <button
                    className="btn btn-primary btn-lg px-10 text-lg shadow-lg hover:scale-105 transition-transform"
                    onClick={() => navigate("/auth")}
                  >
                    Get Started
                  </button>

                  <button
                    className="btn btn-outline btn-lg px-10 text-lg hover:scale-105 transition-transform"
                    onClick={() => navigate("/auth")}
                  >
                   Let's Connect
                  </button>
                 
                </>
              ) : (
                <button
                  className="btn btn-primary btn-lg px-10 text-lg shadow-lg hover:scale-105 transition-transform"
                  onClick={() => navigate("/feed")}
                >
                  Go To Feed
                </button>
              )}

            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 md:py-20 bg-base-100 px-6">

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="card bg-base-200 shadow-sm p-6 text-center border border-white/5">
            <h3 className="text-xl font-bold mb-2 text-secondary">
              Discover
            </h3>

            <p className="text-sm opacity-70">
              Find developers based on skills, interests, and location.
            </p>
          </div>

          <div className="card bg-base-200 shadow-sm p-6 text-center border border-white/5">
            <h3 className="text-xl font-bold mb-2 text-secondary">
              Connect
            </h3>

            <p className="text-sm opacity-70">
              Match with peers for pair programming or networking.
            </p>
          </div>

          <div className="card bg-base-200 shadow-sm p-6 text-center border border-white/5">
            <h3 className="text-xl font-bold mb-2 text-secondary">
              Build
            </h3>

            <p className="text-sm opacity-70">
              Turn connections into projects and career opportunities.
            </p>
          </div>

        </div>
      </div>
      <DevStats/>
    { !isLoggedIn && <DevFooter/>}
    </div>
    
  );
};

export default Home;
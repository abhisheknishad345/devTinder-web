
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { ToastContainer } from "react-toastify";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="min-h-screen bg-[#070a0f] text-white flex items-center justify-center px-4 py-8">

      {/* Background*/}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

        <div className="absolute top-[-150px] left-[-150px] w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-3xl" />

        <div className="absolute bottom-[-150px] right-[-150px] w-[350px] h-[350px] bg-cyan-400/10 rounded-full blur-3xl" />

      </div>

      {/* Auth Card */}
      <section className="relative z-10 w-full max-w-md sm:max-w-lg">

        <div className="bg-[#10151e] border border-[#273140] rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10">

          {/* Brand */}
          <div className="text-center mb-8">

            <div className="mx-auto mb-4 w-14 h-14 rounded-full border-2 border-blue-400 text-blue-400 flex items-center justify-center font-bold">
              DT
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              DevTinder
            </h1>

            <p className="mt-2 text-sm text-gray-400">
              Connect with developers
            </p>

          </div>

          {/* Heading */}
          <div className="mb-7">

            <h2 className="text-2xl sm:text-3xl font-bold">
              {isLogin
                ? "Welcome back"
                : "Create your account"}
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              {isLogin
                ? "Login to continue to DevTinder"
                : "Join the developer community"}
            </p>

          </div>

          {/* Login / Signup */}
          {isLogin ? (
            <Login
              onSignup={() => setIsLogin(false)}
            />
          ) : (
            <Signup
              onLogin={() => setIsLogin(true)}
            />
          )}

        </div>

      </section>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="dark"
      />

    </main>
  );
};

export default Auth;
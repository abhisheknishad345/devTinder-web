
// Home page
export default function DevTinderHomePage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-black via-gray-900 to-gray-950 text-white overflow-hidden">
      <nav className="w-full sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-pink-500 flex items-center justify-center text-xl font-bold shadow-lg shadow-pink-500/30">
              D
            </div>

            <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
              DevTinder
            </h1>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-gray-300 font-medium">
            <a href="#" className="hover:text-white transition duration-300">
              Home
            </a>

            <a href="#" className="hover:text-white transition duration-300">
              Features
            </a>

            <a href="#" className="hover:text-white transition duration-300">
              Developers
            </a>

            <a href="#" className="hover:text-white transition duration-300">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden sm:block px-5 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition duration-300">
              Login
            </button>

            <button className="hidden md:block px-5 py-2 rounded-xl bg-pink-500 hover:bg-pink-600 transition duration-300 shadow-lg shadow-pink-500/30">
              Get Started
            </button>

            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar border border-white/10 bg-white/5"
              >
                <div className="w-10 rounded-full overflow-hidden">
                  <img
                    alt="User"
                    src="https://i.pravatar.cc/150?img=12"
                  />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-1 p-3 shadow-2xl bg-gray-900 border border-white/10 rounded-2xl w-56 text-white"
              >
                <li className="mb-2 px-2">
                  <p className="font-semibold text-pink-400">
                    Welcome John
                  </p>
                </li>

                <li>
                  <a className="rounded-xl hover:bg-white/10">
                    Profile
                  </a>
                </li>

                <li>
                  <a className="rounded-xl hover:bg-white/10">
                    Connections
                  </a>
                </li>

                <li>
                  <a className="rounded-xl hover:bg-white/10">
                    Requests
                  </a>
                </li>

                <li>
                  <a className="rounded-xl hover:bg-red-500/20 text-red-400">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative max-w-7xl mx-auto px-5 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-300 text-sm mb-6">
            🚀 Connect with developers worldwide
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
            Match.
            <span className="text-pink-500"> Collaborate.</span>
            <br />
            Build Amazing Apps.
          </h1>

          <p className="text-gray-400 text-lg sm:text-xl mt-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            DevTinder helps developers discover teammates, coding partners,
            startup collaborators, and tech communities — all in one place.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-10">
            <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-pink-500 hover:bg-pink-600 text-lg font-semibold transition duration-300 shadow-xl shadow-pink-500/30">
              Start Matching
            </button>

            <button className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 text-lg font-semibold transition duration-300">
              Explore Developers
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 text-center">
            <div>
              <h2 className="text-3xl font-bold">10K+</h2>
              <p className="text-gray-400">Developers</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">5K+</h2>
              <p className="text-gray-400">Matches</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">21+</h2>
              <p className="text-gray-400">Countries</p>
            </div>
          </div>
        </div>

        <div className="flex-1 relative flex justify-center items-center w-full">
          <div className="absolute w-72 h-72 bg-pink-500/20 blur-3xl rounded-full"></div>

          <div className="relative w-full max-w-md">
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
              <div className="flex items-center gap-4">
                <img
                  src="https://i.pravatar.cc/300?img=12"
                  alt="Developer"
                  className="w-24 h-24 rounded-2xl object-cover"
                />

                <div>
                  <h2 className="text-2xl font-bold">John</h2>
                  <p className="text-pink-300">Frontend Developer</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
                  React
                </span>
                <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
                  Node.js
                </span>
                <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
                  Tailwind CSS
                </span>
                <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
                  MongoDB
                </span>
              </div>

              <p className="text-gray-300 mt-6 leading-relaxed">
                Passionate about building scalable web applications and
                collaborating with amazing developers.
              </p>

              <div className="mt-8 flex gap-4">
                <button className="flex-1 py-3 rounded-2xl bg-red-500/90 hover:bg-red-600 transition duration-300 font-semibold">
                  Ignore
                </button>

                <button className="flex-1 py-3 rounded-2xl bg-green-500 hover:bg-green-600 transition duration-300 font-semibold">
                  Interested
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 transition duration-300">
            <div className="text-5xl mb-5">💻</div>
            <h2 className="text-2xl font-bold mb-3">
              Find Coding Partners
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Connect with developers who match your skills and interests.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 transition duration-300">
            <div className="text-5xl mb-5">🚀</div>
            <h2 className="text-2xl font-bold mb-3">
              Build Startup Teams
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Discover talented developers for your next startup idea.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 transition duration-300">
            <div className="text-5xl mb-5">🌎</div>
            <h2 className="text-2xl font-bold mb-3">
              Global Developer Network
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Meet developers from around the world and collaborate remotely.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

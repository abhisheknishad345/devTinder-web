import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";

const profileCard = [
  {
    name: "John Doe",
    role: "MERN Developer",
    skills: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1603575448878-868a20723f5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",

  },
  {
    
    name: "Helena Dee",
    role: "Frontend Developer",
    skills: ["React", "TypeScript", "UI/UX"],
    image: "https://plus.unsplash.com/premium_photo-1663127037157-5710981bc7b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",

  }
]

const featuredDevelopers = [
  {
    name: "Oliver Smith",
    role: "Full Stack Developer",
    skills: ["React", "Node.js", "MongoDB"],
    image: "https://i.pravatar.cc/500?img=12",
  },
  {
    name: "Sophia Martinez",
    role: "Frontend Developer",
    skills: ["React", "TypeScript", "UI/UX"],
    image: "https://i.pravatar.cc/500?img=47",
  },
  {
    name: "Lucas Johnson",
    role: "Backend Developer",
    skills: ["Node.js", "Express", "PostgreSQL"],
    image: "https://i.pravatar.cc/500?img=11",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const isLoggedIn = !!user;


  return (
    <div className="min-h-screen bg-black text-neutral-200">
      {/* GUEST NAVBAR */}
      {!isLoggedIn && (
        <nav className="sticky top-0 z-50 border-b border-neutral-500 bg-neutral-950">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
            <button
              onClick={() => navigate("/")}
              className="cursor-pointer italic text-2xl font-bold  text-green-500"
            >
              DevTinder
            </button>

            <div className="hidden items-center gap-8 md:flex">
              <a href="#why" className="text-md font-mono text-neutral-400 transition hover:text-white">
                Why DevTinder
              </a>
              <a href="#developers" className="text-md font-mono text-neutral-400 transition hover:text-white">
                Developers
              </a>
              <a href="#how" className="text-md font-mono text-neutral-400 transition hover:text-white">
                How It Works
              </a>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => navigate("/auth")}
                className="hidden cursor-pointer rounded-lg border-2 border-white px-4 py-2.5 text-sm font-semibold text-neutral-200 transition hover:bg-neutral-900 sm:block"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/auth")}
                className="cursor-pointer rounded-lg bg-neutral-200  px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-gray-400"
              >
                Get Started
              </button>
            </div>
          </div>
        </nav>
      )}

      {/* HERO */}
      <section>
        <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-12 px-5 py-10 lg:grid-cols-2 lg:px-8">
          <div>  

            <h1 className="mb-2 text-gray-300 text-[18px] animate-bounce font-mono font-semibold"> For Better Experience, Switch Your Device to Dark Mode</h1>

            <div className="mb-7 inline-flex items-center italic font-mono rounded-full border-2 border-teal-700 px-4 py-2 text-sm text-blue-400">
              Built for Developers
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.1] text-green-600 sm:text-6xl lg:text-7xl">
              Find Your
              <span className="block">Perfect Dev</span>
              Match.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400 ">
              Meet developers who share your stack, interests and ambitions.
              Build meaningful connections, find teammates and turn ideas into
              real projects.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                onClick={() => navigate(isLoggedIn ? "/feed" : "/auth")}
                className="cursor-pointer rounded-lg bg-white px-7 py-4 font-semibold text-neutral-950 transition hover:bg-neutral-300"
              >
                {isLoggedIn ? "Discover Developers" : "Find Developers"}
              </button>

              <a
                href="#how"
                className="rounded-lg border-2 border-sky-700 px-7 py-4 font-semibold text-white transition hover:bg-neutral-900"
              >
                How It Works
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-8">
              <div>
                <p className="text-2xl font-bold">1.2K+</p>
                <p className="mt-1 text-sm text-neutral-500">Developers</p>
              </div>
              <div>
                <p className="text-2xl font-bold">580+</p>
                <p className="mt-1 text-sm text-neutral-500">Connections</p>
              </div>
              <div>
                <p className="text-2xl font-bold">320+</p>
                <p className="mt-1 text-sm text-neutral-500">Projects</p>
              </div>
            </div>
          </div>

          {/* Hero visual */}
          <div className="mx-auto w-full max-w-[560px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profileCard.slice(0, 2).map((developer) => (
                <div
                  key={developer.name}
                  className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 p-3"
                >
                  <img
                    src={developer.image}
                    alt={developer.name}
                    className="h-56 w-full rounded-xl object-cover"
                  />
                  <div className="px-2 pb-2 pt-4">
                    <h3 className="text-lg font-bold">{developer.name}</h3>
                    <p className="text-sm text-neutral-400">{developer.role}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {developer.skills.slice(0, 2).map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-neutral-700 px-3 py-1 text-xs font-medium text-neutral-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* WHY DEVTINDER */}
      <section id="why" className="border-t border-neutral-800 px-5 py-15 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500">Why DevTinder</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              Networking, but built for developers.
            </h2>
            <p className="mt-5 leading-7 text-neutral-400">
              Skip random networking. Discover people based on what you build,
              what you know and what you want to create next.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["01", "Meaningful Connections", "Find developers based on skills, interests and goals instead of random profiles."],
              ["02", "Build Together", "Find teammates for side projects, hackathons, startups and open-source work."],
              ["03", "Grow Your Network", "Meet developers from different stacks, backgrounds and communities."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-2xl border border-neutral-800 bg-neutral-900 p-7 transition hover:border-neutral-600"
              >
                <span className="text-sm font-semibold text-neutral-500">{number}</span>
                <h3 className="mt-8 text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-neutral-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED DEVELOPERS */}
      <section id="developers" className="border-t border-neutral-800 px-5 py-15 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500">Featured Developers</p>
              <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Meet your next teammate.</h2>
            </div>
            <button
              onClick={() => navigate(isLoggedIn ? "/feed" : "/auth")}
              className="cursor-pointer font-semibold text-neutral-300 underline underline-offset-4 transition hover:text-white"
            >
              Explore Developers
            </button>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featuredDevelopers.map((developer) => (
              <div
                key={developer.name}
                className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 transition hover:border-neutral-600"
              >
                <img
                  src={developer.image}
                  alt={developer.name}
                  className="h-72 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-semibold">{developer.name}</h3>
                  <p className="mt-1 text-sm text-neutral-400">{developer.role}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {developer.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-neutral-700 px-3 py-1 text-xs font-medium text-neutral-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => navigate(isLoggedIn ? "/feed" : "/auth")}
                    className="mt-6 w-full italic cursor-pointer rounded-lg border border-neutral-700 py-3 font-semibold transition hover:bg-neutral-800"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIND YOUR MATCH */}
      <section className="border-t border-neutral-800 px-5 py-15 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500">Find Your Match</p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Your skills deserve the right people.
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-neutral-400">
              Discover developers who complement your skill set. Whether you
              need a frontend partner, backend expert or someone into AI/ML,
              DevTinder helps you find them.
            </p>

            <button
              onClick={() => navigate(isLoggedIn ? "/feed" : "/auth")}
              className="mt-8 cursor-pointer font-mono rounded-lg bg-green-500 px-7 py-4 font-bold text-neutral-950 transition hover:bg-neutral-200"
            >
              Start Discovering
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {["React", "Node.js", "MongoDB", "Python", "Java", "Next.js", "TypeScript", "AI / ML"].map(
              (skill) => (
                <div
                  key={skill}
                  className="rounded-xl border-2 border-white bg-neutral-900 p-6 text-xl text-center font-semibold transition hover:border-green-400"
                >
                  {skill}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="border-t border-neutral-800 px-5 py-15 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500">How It Works</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Three steps. One great connection.</h2>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {[
              ["01", "Create Your Profile", "Showcase your skills, experience, interests and the kind of projects you want to build."],
              ["02", "Discover Developers", "Browse people who match your technology stack, interests and collaboration goals."],
              ["03", "Connect & Collaborate", "Send a connection request, start a conversation and build something together."],
            ].map(([number, title, text]) => (
              <div key={number} className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8">
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-neutral-700 font-semibold text-white">
                  {number}
                </div>
                <h3 className="mt-7 text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-neutral-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY STATS */}
      <section className="px-5 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl border border-neutral-800 bg-neutral-900 p-10 md:p-14">
          <div className="grid gap-10 md:grid-cols-4">
            {[
              ["1,240+", "Developers"],
              ["580+", "Connections"],
              ["320+", "Projects"],
              ["75%", "Active Users"],
            ].map(([value, label]) => (
              <div key={label} className="text-center">
                <p className="text-4xl font-bold text-white">{value}</p>
                <p className="mt-2 text-sm text-neutral-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN CTA */}
      {!isLoggedIn && (
        <section className="px-5 pb-24 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-2xl border border-neutral-800 bg-neutral-900 px-7 py-20 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500">Join DevTinder</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">
              Ready to find your dev tribe?
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-7 text-neutral-400">
              Create your profile and start connecting with developers who
              are building, learning and growing just like you.
            </p>

            <button
              onClick={() => navigate("/auth")}
              className="mt-8 cursor-pointer font-mono rounded-lg bg-green-500 px-8 py-4 font-bold text-neutral-950 transition hover:bg-neutral-200"
            >
              Join DevTinder
            </button>
          </div>
        </section>
      )}

      {/* SIMPLE FOOTER */}
      {!isLoggedIn && (
        <footer className="border-t border-neutral-400 px-5 py-8 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
            <button onClick={() => navigate("/")} className="cursor-pointer font-mono text-md text-green-600 font-bold">
              Abhishek Nishad
            </button>
           
            <p className="text-md ">Connect. Collaborate. Grow.</p>
            <p className="text-md ">© 2026 DevTinder</p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Home;

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const featuredDevelopers = [
  {
    name: "Arjun Verma",
    role: "Full Stack Developer",
    skills: ["React", "Node.js", "MongoDB"],
    image: "https://i.pravatar.cc/500?img=12",
  },
  {
    name: "Priya Singh",
    role: "Frontend Developer",
    skills: ["React", "TypeScript", "UI/UX"],
    image: "https://i.pravatar.cc/500?img=47",
  },
  {
    name: "Rahul Sharma",
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
    <div className="min-h-screen bg-[#020617] text-white">
      {/*  GUEST NAVBAR  */}
      {!isLoggedIn && (
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#020617]/85 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
            <button
              onClick={() => navigate("/")}
              className="text-2xl font-extrabold tracking-tight cursor-pointer"
            >
              <span className="text-cyan-400">Dev</span>Tinder
            </button>

            <div className="hidden items-center gap-8 md:flex">
              <a href="#why" className="text-sm text-slate-300 transition hover:text-cyan-400">
                Why DevTinder
              </a>
              <a href="#developers" className="text-sm text-slate-300 transition hover:text-cyan-400">
                Developers
              </a>
              <a href="#how" className="text-sm text-slate-300 transition hover:text-cyan-400">
                How It Works
              </a>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => navigate("/auth")}
                className="hidden rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:bg-white/5 sm:block cursor-pointer border"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/auth")}
                className="rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-300 cursor-pointer"
              >
                Get Started
              </button>
            </div>
          </div>
        </nav>
      )}

      {/*  HERO  */}
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute right-[-150px] top-40 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
              Built for Developers
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Find Your
              <span className="block bg-linear-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Perfect Dev
              </span>
              Match.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              Meet developers who share your stack, interests and ambitions.
              Build meaningful connections, find teammates and turn ideas into
              real projects.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                onClick={() => navigate(isLoggedIn ? "/feed" : "/auth")}
                className="rounded-xl bg-cyan-400 px-7 py-4 font-bold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-cyan-300 cursor-pointer"
              >
                {isLoggedIn ? "Discover Developers" : "Find Developers"}
              </button>

              <a
                href="#how"
                className="rounded-xl border border-white/10 bg-white/4 px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-white/8"
              >
                How It Works
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-8">
              <div>
                <p className="text-2xl font-black">1.2K+</p>
                <p className="mt-1 text-sm text-slate-500">Developers</p>
              </div>
              <div>
                <p className="text-2xl font-black">580+</p>
                <p className="mt-1 text-sm text-slate-500">Connections</p>
              </div>
              <div>
                <p className="text-2xl font-black">320+</p>
                <p className="mt-1 text-sm text-slate-500">Projects</p>
              </div>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto h-[500px] w-full max-w-[560px]">
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="absolute left-2 top-16 w-[290px] rotate-[-7deg] overflow-hidden rounded-[28px] border border-white/10 bg-slate-900 p-3 shadow-2xl shadow-black/50">
              <img
                src={featuredDevelopers[0].image}
                alt={featuredDevelopers[0].name}
                className="h-64 w-full rounded-2xl object-cover grayscale-15"
              />
              <div className="px-2 pb-2 pt-4">
                <h3 className="text-xl font-extrabold">{featuredDevelopers[0].name}</h3>
                <p className="text-sm text-slate-400">{featuredDevelopers[0].role}</p>
                <div className="mt-3 flex gap-2">
                  {featuredDevelopers[0].skills.slice(0, 2).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute right-1 top-36 w-[290px] rotate-[7deg] overflow-hidden rounded-[28px] border border-white/10 bg-slate-900 p-3 shadow-2xl shadow-black/50">
              <img
                src={featuredDevelopers[1].image}
                alt={featuredDevelopers[1].name}
                className="h-64 w-full rounded-2xl object-cover"
              />
              <div className="px-2 pb-2 pt-4">
                <h3 className="text-xl font-extrabold">{featuredDevelopers[1].name}</h3>
                <p className="text-sm text-slate-400">{featuredDevelopers[1].role}</p>
                <div className="mt-3 flex gap-2">
                  {featuredDevelopers[1].skills.slice(0, 2).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-purple-400/10 px-3 py-1 text-xs font-semibold text-purple-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-2xl border border-white/10 bg-slate-900/90 px-5 py-3 shadow-xl backdrop-blur-xl">
              <p className="text-xs text-slate-500">Find developers who</p>
              <p className="font-bold text-cyan-300">match your skills & goals ✨</p>
            </div>
          </div>
        </div>
      </section>

      {/*  WHY DEVTINDER  */}
      <section id="why" className="border-t border-white/5 bg-white/1.5 px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">Why DevTinder</p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              Networking, but built for developers.
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
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
                className="group rounded-3xl border border-white/10 bg-slate-900/60 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
              >
                <span className="text-sm font-black text-cyan-400">{number}</span>
                <h3 className="mt-8 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{text}</p>
                <div className="mt-7 h-1 w-10 rounded-full bg-cyan-400 transition-all group-hover:w-20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  FEATURED DEVELOPERS  */}
      <section id="developers" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">Featured Developers</p>
              <h2 className="mt-3 text-4xl font-black sm:text-5xl">Meet your next teammate.</h2>
            </div>
            <button
              onClick={() => navigate(isLoggedIn ? "/feed" : "/auth")}
              className="font-semibold text-cyan-400 transition hover:text-cyan-300 cursor-pointer"
            >
              Explore developers
            </button>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featuredDevelopers.map((developer) => (
              <div
                key={developer.name}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
              >
                <div className="overflow-hidden">
                  <img
                    src={developer.image}
                    alt={developer.name}
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold">{developer.name}</h3>
                  <p className="mt-1 text-sm text-slate-400">{developer.role}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {developer.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-cyan-400/10 bg-cyan-400/5 px-3 py-1 text-xs font-semibold text-cyan-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => navigate(isLoggedIn ? "/feed" : "/auth")}
                    className="mt-6 w-full rounded-xl border border-white/10 py-3 font-semibold transition hover:bg-white/5 cursor-pointer"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  FIND YOUR MATCH  */}
      <section className="border-y border-white/5 bg-white/1.5 px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">Find Your Match</p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Your skills deserve the right people.
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-slate-400">
              Discover developers who complement your skill set. Whether you
              need a frontend partner, backend expert or someone into AI/ML,
              DevTinder helps you find them.
            </p>

            <button
              onClick={() => navigate(isLoggedIn ? "/feed" : "/auth")}
              className="mt-8 rounded-xl bg-cyan-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-cyan-300 cursor-pointer"
            >
              Start Discovering
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {["React", "Node.js", "MongoDB", "Python", "Java", "Next.js", "TypeScript", "AI / ML"].map(
              (skill) => (
                <div
                  key={skill}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 text-center font-bold transition hover:border-cyan-400/30 hover:bg-cyan-400/5"
                >
                  {skill}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/*  HOW IT WORKS  */}
      <section id="how" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">How It Works</p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">Three steps. One great connection.</h2>
          </div>

          <div className="relative mt-16 grid gap-10 md:grid-cols-3">
            {[
              ["01", "Create Your Profile", "Showcase your skills, experience, interests and the kind of projects you want to build."],
              ["02", "Discover Developers", "Browse people who match your technology stack, interests and collaboration goals."],
              ["03", "Connect & Collaborate", "Send a connection request, start a conversation and build something together."],
            ].map(([number, title, text]) => (
              <div key={number} className="relative rounded-3xl border border-white/10 bg-slate-900/60 p-8">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-cyan-400 font-black text-slate-950">
                  {number}
                </div>
                <h3 className="mt-7 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* *****COMMUNITY STATS*****  */}
      <section className="px-5 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-4xl border border-cyan-400/10 bg-linear-to-br from-cyan-400/10 via-slate-900 to-blue-500/10 p-10 md:p-14">
          <div className="grid gap-10 md:grid-cols-4">
            {[
              ["1,240+", "Developers"],
              ["580+", "Connections"],
              ["320+", "Projects"],
              ["75%", "Active Users"],
            ].map(([value, label]) => (
              <div key={label} className="text-center">
                <p className="text-4xl font-black text-white">{value}</p>
                <p className="mt-2 text-sm text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  JOIN CTA */}
      {!isLoggedIn && (
        <section className="px-5 pb-24 lg:px-8">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-4xl border border-cyan-400/20 bg-linear-to-br from-cyan-400/10 to-blue-500/10 px-7 py-20 text-center">
            <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">Join DevTinder</p>
              <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black sm:text-5xl">
                Ready to find your dev tribe?
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
                Create your profile and start connecting with developers who
                are building, learning and growing just like you.
              </p>

              <button
                onClick={() => navigate("/auth")}
                className="mt-8 rounded-xl bg-cyan-400 px-8 py-4 font-bold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-cyan-300 cursor-pointer"
              >
                Join DevTinder
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ***SIMPLE FOOTER*** */}
      {!isLoggedIn && (
        <footer className="border-t border-white/10 px-5 py-8 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
            <button onClick={() => navigate("/")} className="text-xl font-extrabold cursor-pointer">
              <span className="text-cyan-400">Dev</span>Tinder
            </button>
            <p className="text-sm text-slate-500">
              Connect. Collaborate. Grow.
            </p>
            <p className="text-sm text-slate-600">© 2026 DevTinder</p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Home;
const data = {
  name: "Shiva",
  role: "CSE (Data Science) Student",
  tagline: "I build useful things with code and data.",
  intro:
    " B.Tech CSE (Data Science) student interested in data science, web development and problem solving. Looking for internships and projects.",
  college: "Galgotia College of Engineering And Technology, Greater Noida",
  resume: "/resume.pdf",
  photo:"/photo.jpg",
  phone:"+91 7275941775",

  links: {
    github: "https://github.com/shivapal460",
    linkedin: "https://linkedin.com/in/shivapal232",
    leetcode: "https://leetcode.com/shivapal123/",
    email: "mailto:shiva272205@gmail.com",
  },
  skills: [
    { title: "Languages", items: "C++, Python, JavaScript" },
    { title: "Web", items: "HTML, CSS, React, Tailwind" },
    { title: "Tools", items: "Git, GitHub, VS Code" },
  ],
  projects: [
    
  ],
};

const sections = ["About", "Skills", "Projects", "Contact"];

function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="mb-8 text-3xl font-bold text-white">{title}</h2>
      {children}
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      {/* Navbar */}
      <nav className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-bold text-white">
            {data.name}
          </a>
          <div className="hidden gap-6 text-sm sm:flex">
            {sections.map((s) => (
              <a key={s} href={`#${s.toLowerCase()}`} className="hover:text-white">
                {s}
              </a>
            ))}
          </div>
        </div>
      </nav>
            {/* Hero */}
      <header
        id="home"
        className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-10 px-6 py-24 md:flex-row md:justify-between"
      >
        <div>
          <p className="mb-3 text-sm text-indigo-400">{data.role}</p>
          <h1 className="text-4xl font-extrabold text-white sm:text-6xl">
            {data.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg">{data.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white hover:bg-indigo-500"
            >
              View Projects
            </a>
            <a
              href={data.resume}
              download
              className="rounded-lg border border-slate-700 px-5 py-3 font-medium text-white hover:bg-slate-900"
            >
              Download Resume
            </a>
          </div>
        </div>
        <img
          src={data.photo}
          alt={data.name}
          className="h-48 w-48 rounded-full border-4 border-indigo-500 object-cover sm:h-64 sm:w-64"
        />
      </header>
      {/* About */}
      <Section id="about" title="About">
        <p className="max-w-3xl text-lg">
          I am a B.Tech CSE (Data Science) student at {data.college }. I enjoy
          solving DSA problems, building projects, and learning how data can
          solve real-world problems.
        </p>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="grid gap-4 sm:grid-cols-2">
          {data.skills.map((s) => (
            <div key={s.title} className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <h3 className="font-semibold text-white">{s.title}</h3>
              <p className="mt-1">{s.items}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="grid gap-6 md:grid-cols-2">
          {data.projects.map((p) => (
            <div key={p.title} className="rounded-xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-slate-800 px-3 py-1 text-xs">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-4 text-sm">
                <a href={p.github} target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline">
                  GitHub
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <p className="mb-6 max-w-2xl text-lg">
          Open to internships, projects and hackathons. The easiest way to
          reach me is through email or LinkedIn.
        </p>
        <div className="flex flex-wrap gap-4">
          {[
            ["Email", data.links.email],
            ["LinkedIn", data.links.linkedin],
            ["GitHub", data.links.github],
            ["LeetCode", data.links.leetcode],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-700 px-5 py-3 text-white hover:bg-slate-900"
            >
              {label}
            </a>
          ))}
        </div>
      </Section>

      <footer className="border-t border-slate-800 py-6 text-center text-sm">
        © {new Date().getFullYear()} {data.name}
      </footer>
    </div>
  );
}
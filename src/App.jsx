
import { useState } from "react";

const data = {
  name: "Shiva Pal",
  initials: "SP",
  role: "Data Science Student • Developer • Problem Solver",
  college: "Galgotia College of Engineering And Technology, Greater Noida",
  resume: "/resume.pdf",
  photo: "/photo.jpg",
  phone: "+91 7275941775",
  email: "shiva272205@gmail.com",
  links: {
    github: "https://github.com/shivapal460",
    linkedin: "https://linkedin.com/in/shivapal232",
    leetcode: "https://leetcode.com/shivapal123/",
  },
  stats: [
    ["Data Science", "Focus"],
    ["C++", "DSA"],
    ["Python", "Learning"],
    ["2029", "Graduation"],
  ],
  skills: [
    { title: "Languages", items: ["C++", "C", "Python (basic)"] },
    { title: "Problem Solving", items: ["Data Structures", "Algorithms"] },
    { title: "Web Basics", items: ["HTML", "CSS"] },
    { title: "Tools", items: ["Git", "GitHub", "VS Code"] },
  ],
  projects: [
    
  ],
};

const sections = ["Home", "About", "Skills", "Projects", "Contact"];

const icons = {
  github:
    "M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z",
  linkedin:
    "M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z",
};

const pageStyle = {
  backgroundColor: "#070712",
  backgroundImage:
    "radial-gradient(circle at 15% 10%, rgba(99,102,241,0.18), transparent 40%), radial-gradient(circle at 85% 30%, rgba(34,211,238,0.12), transparent 40%)",
  fontFamily: "'Space Grotesk', system-ui, sans-serif",
};

function IconLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition hover:-translate-y-1 hover:border-indigo-400/60 hover:text-white"
    >
      {children}
    </a>
  );
}

function Svg({ d }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d={d} />
    </svg>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16">
      <h2 className="mb-10 text-3xl font-bold text-white sm:text-4xl">
        {title}
        <span className="mt-3 block h-1 w-16 rounded bg-gradient-to-r from-indigo-500 to-cyan-400" />
      </h2>
      {children}
    </section>
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:border-indigo-400/50 ${className}`}
    >
      {children}
    </div>
  );
}

function Avatar() {
  return (
    <div className="rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 p-1.5 shadow-[0_0_60px_rgba(99,102,241,0.4)]">
      <div className="rounded-full bg-slate-950 p-1.5">
        {data.photo ? (
          <img
            src={data.photo}
            alt={data.name}
            className="h-44 w-44 rounded-full object-cover sm:h-52 sm:w-52"
          />
        ) : (
          <div className="flex h-44 w-44 items-center justify-center rounded-full bg-slate-900 text-6xl font-bold text-indigo-300 sm:h-52 sm:w-52">
            {data.initials}
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="min-h-screen text-slate-300 selection:bg-indigo-500/40"
      style={pageStyle}
    >
      {/* Navbar */}
      <nav className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 p-[2px]">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
                {data.initials}
              </span>
            </span>
            <span className="text-lg font-bold text-white">{data.name}</span>
          </a>

          <div className="hidden gap-8 text-sm md:flex">
            {sections.map((s) => (
              <a
                key={s}
                href={`#${s.toLowerCase()}`}
                className="transition hover:text-white"
              >
                {s}
              </a>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-white md:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {open && (
          <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-slate-950/95 px-6 py-3 md:hidden">
            {sections.map((s) => (
              <a
                key={s}
                href={`#${s.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block py-3 text-slate-300 hover:text-white"
              >
                {s}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <header
        id="home"
        className="mx-auto grid max-w-5xl items-center gap-14 px-6 py-16 md:grid-cols-2 md:py-24"
      >
        <div className="fade-up text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Open to Internship Opportunities
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white sm:text-6xl">
            I build{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
              useful
            </span>{" "}
            things with code and data.
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            I'm {data.name} — a B.Tech CSE (Data Science) student exploring
            Machine Learning, Python, C++, DSA and web development.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <a
              href="#projects"
              className="rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-7 py-4 text-center font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:-translate-y-0.5"
            >
              ↓ Explore My Work
            </a>
            <a
              href={data.resume}
              download
              className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-center font-semibold text-white transition hover:bg-white/10"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex justify-center gap-3 md:justify-start">
            <IconLink href={data.links.github} label="GitHub">
              <Svg d={icons.github} />
            </IconLink>
            <IconLink href={data.links.linkedin} label="LinkedIn">
              <Svg d={icons.linkedin} />
            </IconLink>
            <IconLink href={data.links.leetcode} label="LeetCode">
              <span className="text-sm font-bold">LC</span>
            </IconLink>
            <IconLink href={`mailto:${data.email}`} label="Email">
              <span className="text-lg">✉</span>
            </IconLink>
          </div>
        </div>

        {/* Profile card */}
        <div className="fade-up relative">
          <span className="float absolute -left-2 top-6 hidden rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-indigo-300 sm:block">
            {"</>"}
          </span>
          <span className="float-slow absolute -right-2 top-24 hidden rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-300 sm:block">
            C++
          </span>
          <span className="float absolute -left-4 bottom-24 hidden rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-300 sm:block">
            DSA
          </span>
          <span className="float-slow absolute -right-4 bottom-8 hidden rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-indigo-300 sm:block">
            ML
          </span>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur">
            <div className="flex justify-center">
              <Avatar />
            </div>
            <h2 className="mt-6 text-3xl font-bold text-white">{data.name}</h2>
            <p className="mt-2 text-sm text-slate-400">{data.role}</p>
            <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-sm font-medium text-green-300">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Available for opportunities
            </span>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {data.stats.map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-slate-950/50 p-4"
                >
                  <p className="text-xl font-bold text-white">{value}</p>
                  <p className="mt-1 text-xs text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* About */}
      <Section id="about" title="About Me">
        <p className="max-w-3xl text-lg leading-relaxed text-slate-400">
          I am a B.Tech CSE (Data Science) student at {data.college}. I enjoy
          solving DSA problems, building projects, and learning how data can
          solve real-world problems. I am looking for internships where I can
          learn and contribute.
        </p>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="grid gap-5 sm:grid-cols-2">
          {data.skills.map((s) => (
            <Card key={s.title}>
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <span
                    key={i}
                    className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-sm text-indigo-200"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="grid gap-6 md:grid-cols-2">
          {data.projects.map((p) => (
            <Card key={p.title} className="flex flex-col hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 flex-1 text-slate-400">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-5 text-sm font-medium">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-300 hover:underline"
                  >
                    GitHub →
                  </a>
                )}
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-300 hover:underline"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-500">More projects coming soon.</p>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Get In Touch">
        <p className="mb-8 max-w-2xl text-lg text-slate-400">
          I'm open to internships, projects and hackathons. The quickest way to
          reach me is by email or LinkedIn.
        </p>
        <div className="grid gap-5 sm:grid-cols-2">
          {[
            ["✉️ Email", data.email, `mailto:${data.email}`],
            ["📞 Phone", data.phone, `tel:${data.phone.replace(/\s/g, "")}`],
            ["💼 LinkedIn", "Connect with me", data.links.linkedin],
            ["💻 GitHub", "See my code", data.links.github],
          ].map(([label, text, href]) => (
            <a key={label} href={href} target="_blank" rel="noreferrer">
              <Card>
                <p className="font-semibold text-white">{label}</p>
                <p className="mt-1 text-sm text-slate-400">{text}</p>
              </Card>
            </a>
          ))}
        </div>
      </Section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {data.name}. Built with React and Tailwind.
      </footer>
    </div>
  );
}
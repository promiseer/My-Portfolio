import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  SiAmazonaws,
  SiDigitalocean,
  SiDocker,
  SiExpress,
  SiGit,
  SiGooglecloud,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPostgresql,
  SiPython,
  SiReact,
} from "react-icons/si";
import experience from "./experience";
import ThemeToggle from "./ThemeToggle";

const pins = [
    {
    href: "/projects",
    kicker: "Projects",
    title: "My Projects",
    text: "Things I've shipped — open source and otherwise.",
    go: "See projects →",
    pin: "var(--pin4)",
  },
  {
    href: "/certifications",
    kicker: "Certifications",
    title: "My Certifications",
    text: "Credentials I've earned — courses and exams worth keeping on the desk.",
    go: "Show credentials →",
    pin: "var(--pin1)",
  },
  {
    href: "/prompts",
    kicker: "Prompts",
    title: "My Prompts",
    text: "Copy-paste AI prompts organized by use case, tested in real work.",
    go: "Browse prompts →",
    pin: "var(--pin2)",
  },
  {
    href: "/ritual",
    kicker: "Ritual",
    title: "My Ritual",
    text: "Weekly notes — what I'm building, thinking, and learning in public.",
    go: "Read the ritual →",
    pin: "var(--pin3)",
  }
];

const tools = [
  { name: "Node.js", icon: SiNodedotjs },
  { name: "ExpressJS", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: SiDocker },
  { name: "Python", icon: SiPython },
  { name: "MySQL", icon: SiMysql },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Npm", icon: SiNpm },
  { name: "Git", icon: SiGit },
  { name: "AWS", icon: SiAmazonaws },
  { name: "Digital Ocean", icon: SiDigitalocean },
  { name: "Google Cloud Platform", icon: SiGooglecloud },
];

function PinCard({ card, hidden }) {
  const body = (
    <>
      <i className="pin" style={{ background: card.pin }} />
      <span className="kicker">{card.kicker}</span>
      <h3>{card.title}</h3>
      <p>{card.text}</p>
      <span className="go">{card.go}</span>
    </>
  );

  if (card.external) {
    return (
      <a className="card pin-card" href={card.href} target="_blank" rel="noreferrer" hidden={hidden}>
        {body}
      </a>
    );
  }

  if (card.href.startsWith("#") || card.href.startsWith("mailto:")) {
    return (
      <a className="card pin-card" href={card.href} hidden={hidden}>
        {body}
      </a>
    );
  }

  return (
    <Link className="card pin-card" to={card.href} hidden={hidden}>
      {body}
    </Link>
  );
}

export default function Home() {
  const [query, setQuery] = useState("");
  const searchRef = useRef(null);
  const needle = query.trim().toLowerCase();
  const visibleCount = pins.filter((card) => !needle || `${card.kicker} ${card.title} ${card.text}`.toLowerCase().includes(needle)).length;

  useEffect(() => {
    const focusSearch = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", focusSearch);
    return () => window.removeEventListener("keydown", focusSearch);
  }, []);

  return (
    <>
      <div className="topbar">
        <label className="search">
          <svg className="search-icon" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="6.5" />
            <path d="M16 16.5 20 20.5" />
          </svg>
          <input
            ref={searchRef}
            id="q"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="search"
            placeholder="Search projects, notes & more..."
            aria-label="Search"
          />
          <span className="keys">
            <kbd>⌘</kbd> <kbd>K</kbd>
          </span>
        </label>
        <ThemeToggle />
      </div>
      <main className="wrap">
        <p className="note hand">still figuring it out — writing it down anyway</p>

        <section className="hero">
          <div className="card intro">
            <span className="tape" />
            <p className="name">Parmeshwar</p>
            <h1>
              Developer, <em>building in public.</em>
            </h1>
            <p className="lede">
              This is my desk on the internet — the things I'm making, the notes I keep, and what I'm learning along the way.
            </p>
            <div className="chips">
              <span className="chip">Shipping a project</span>
              <span className="chip">Writing weekly notes</span>
              <span className="chip">Learning in public</span>
            </div>
          </div>

          <figure className="card polaroid">
            <span className="tape" />
            <div className="photo">
              <img src="/profile.png" alt="Parmeshwar" />
            </div>
            <p className="hand">that's me — parmeshwar</p>
          </figure>
        </section>

        <h2 className="label hand">— pinned to the board —</h2>
        <div className="board" id="board">
          {pins.map((card) => (
            <PinCard
              key={card.title}
              card={card}
              hidden={Boolean(needle) && !`${card.kicker} ${card.title} ${card.text}`.toLowerCase().includes(needle)}
            />
          ))}
        </div>
        <p className={visibleCount ? "empty" : "empty on"}>Nothing matches that search. Try a different word.</p>

        <section id="about">
          <h2 className="label hand">— a note about me —</h2>
          <div className="card sheet">
            <span className="tape" style={{ top: "-18px", left: "18%", width: "110px", height: "32px", transform: "rotate(-3deg)" }} />
            <p>
               Senior Full-Stack Ai Engineer with 5+ years of hands-on experience designing and building scalable web and
mobile applications. Proven expertise in backend development using Python, Node.js, and Go, and growing proficiency in
frontend technologies like React and Next.js. Skilled in designing RESTful and GraphQL APIs, integrating with modern
DevOps pipelines (K8s,Docker, CI/CD, AWS), and deploying cloud-native solutions. Experienced in collaborating
cross-functionally, owning features end-to-end, and contributing to system architecture. Passionate about clean code, high
performance, and mentoring junior developers. I thrive in fast-paced environments, delivering high-quality software that meets business objectives and user needs.
            </p>
            <p>
              In my free time, I love to go for treks and spend some time with nature. I am dedicated to staying up to date with the latest technologies and trends, and I am always looking for new challenges and opportunities to expand my skills.
            </p>
          </div>
        </section>

        <section id="experience">
          <h2 className="label hand">— where I've worked —</h2>
          <div className="jobs">
            {experience.map((job) => (
              <article className="card job" key={job.company}>
                <i className="pin" style={{ background: job.pin }} />
                <header className="job-head">
                  <div>
                    <h3>{job.company}</h3>
                    <p className="role">{job.role}</p>
                  </div>
                  <p className="when hand">{job.dates}</p>
                </header>
                {job.projects.map((project) => (
                  <div className="post" key={project.name}>
                    <h4>{project.name}</h4>
                    <ul>
                      {project.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </article>
            ))}
          </div>
        </section>

        <section id="skills">
          <h2 className="label hand">— the toolbox —</h2>
          <div className="card sheet">
            <p>I've worked with these technologies in the web development world, with a current focus towards Web3 and blockchain.</p>
            <div className="tools">
              {tools.map((tool) => (
                <span className="tool" key={tool.name}>
                  <tool.icon aria-hidden="true" />
                  {tool.name}
                </span>
              ))}
            </div>
            <a className="more" href="/resume.pdf">
              View resume →
            </a>
          </div>
        </section>

        <footer className="hand" id="contact">
          <a href="https://github.com/promiseer" target="_blank" rel="noreferrer">
            github
          </a>
          ·
          <a href="https://www.linkedin.com/in/promiser" target="_blank" rel="noreferrer">
            linkedin
          </a>
          ·
          <a href="mailto:rathodparmeshwar4321@gmail.com">email</a>
          ·
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            view resume
          </a>
        </footer>
      </main>
    </>
  );
}

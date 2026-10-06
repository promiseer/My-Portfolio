import { Link } from "react-router-dom";
import { projects } from "./constants/constants";
import ThemeToggle from "./ThemeToggle";

export default function AllProjects() {
  return (
    <>
      <header className="pagebar">
        <Link className="back hand" to="/">
          ← back to the desk
        </Link>
        <ThemeToggle />
      </header>
      <main className="wrap projects-wrap">
        <h1 className="label hand">— things I've built —</h1>
        <div className="shelf">
          {projects.map((project) => (
            <article className="card work" key={project.id}>
              <div className="shot">
                {project.image ? <img src={`/${project.image}`} alt="" /> : <span>work in progress</span>}
              </div>
              <div className="work-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}

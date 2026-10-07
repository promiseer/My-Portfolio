import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "./constants/constants";
import ThemeToggle from "./ThemeToggle";

const pins = ["var(--pin1)", "var(--pin2)", "var(--pin3)", "var(--pin4)"];

function shotSrc(path) {
  return path.startsWith("/") ? path : `/${path}`;
}

function shotsOf(project) {
  const listed = (project.images || []).filter((shot) => shot.original);
  if (listed.length) return listed;
  if (project.image) return [{ original: project.image, originalAlt: project.title }];
  return [];
}

function ShotDesk({ project, onClose }) {
  const shots = shotsOf(project);
  const [index, setIndex] = useState(0);
  const shot = shots[index];

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") setIndex((current) => (current + 1) % shots.length);
      if (event.key === "ArrowLeft") setIndex((current) => (current - 1 + shots.length) % shots.length);
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose, shots.length]);

  return (
    <div className="shot-desk" role="dialog" aria-modal="true" aria-label={`${project.title} screenshots`}>
      <button className="shot-backdrop" type="button" aria-label="Close screenshots" onClick={onClose} />
      <div className="shot-sheet">
        <button className="shot-close hand" type="button" onClick={onClose}>
          close
        </button>
        <p className="kicker">{project.title}</p>
        <figure className="card shot-frame">
          <img src={shotSrc(shot.original)} alt={shot.originalAlt || project.title} />
          <figcaption className="hand">
            {index + 1} of {shots.length}
          </figcaption>
        </figure>
        {shots.length > 1 && (
          <div className="shot-nav">
            <button type="button" onClick={() => setIndex((current) => (current - 1 + shots.length) % shots.length)}>
              ← previous
            </button>
            <button type="button" onClick={() => setIndex((current) => (current + 1) % shots.length)}>
              next →
            </button>
          </div>
        )}
        <div className="shot-strip">
          {shots.map((item, itemIndex) => (
            <button
              type="button"
              key={item.original}
              className={itemIndex === index ? "on" : ""}
              onClick={() => setIndex(itemIndex)}
              aria-label={`Screenshot ${itemIndex + 1}`}
            >
              <img src={shotSrc(item.original)} alt="" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AllProjects() {
  const [open, setOpen] = useState(null);

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
        <p className="shelf-note hand">pinned up, newest first</p>
        <div className="shelf">
          {projects.map((project, index) => {
            const shots = shotsOf(project);
            return (
              <article className="card piece" key={project.id}>
                <i className="pin" style={{ background: pins[index % pins.length] }} />
                <p className="kicker">{project.mainType}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {shots.length > 0 && (
                  <button className="see-shots" type="button" onClick={() => setOpen(project)}>
                    <span className="thumbs" aria-hidden="true">
                      {shots.slice(0, 3).map((shot) => (
                        <img key={shot.original} src={shotSrc(shot.original)} alt="" />
                      ))}
                    </span>
                    <span className="go">
                      See {shots.length === 1 ? "the shot" : `all ${shots.length} shots`} →
                    </span>
                  </button>
                )}
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {project.liveUrl ? (
                  <a className="go" href={project.liveUrl} target="_blank" rel="noreferrer">
                    Live Url →
                  </a>
                ) : (
                  <span className="filed hand">still on my machine</span>
                )}
              </article>
            );
          })}
        </div>
      </main>
      {open && <ShotDesk project={open} onClose={() => setOpen(null)} />}
    </>
  );
}

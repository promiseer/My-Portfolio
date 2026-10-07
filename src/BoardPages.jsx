import { Link } from "react-router-dom";
import certifications from "./constants/certifications.json";
import ThemeToggle from "./ThemeToggle";

function NotePage({ id, title, pin, children }) {
  return (
    <>
      <header className="pagebar">
        <Link className="back hand" to="/">
          ← back to the desk
        </Link>
        <ThemeToggle />
      </header>
      <main className="wrap projects-wrap">
        <section id={id}>
          <h1 className="label hand">{title}</h1>
          <div className="card sheet">
            <i className="pin" style={{ background: pin }} />
            {children}
          </div>
        </section>
      </main>
    </>
  );
}

export function CertificationsPage() {
  return (
    <NotePage id="certifications" title="— my certifications —" pin="var(--pin1)">
      <p>Credentials I've earned along the way — courses and exams worth pinning to the desk.</p>
      <ul className="vault-list">
        {certifications.map((cert) => (
          <li key={cert.id}>
            <strong>{cert.title}</strong>
            <span className="cert-meta">{cert.issuer}</span>
            <p className="cert-copy">— {cert.description}</p>
            <a
              className="cert-link"
              href={cert.credentialUrl}
              target="_blank"
              rel="noreferrer"
            >
              Show credentials →
            </a>
          </li>
        ))}
      </ul>
    </NotePage>
  );
}

export function PromptsPage() {
  return (
    <NotePage id="prompts" title="— prompts I reuse —" pin="var(--pin2)">
      <p>Short prompts I paste in when the task is familiar. Written for real work, not for a demo.</p>
      <article className="prompt">
        <h3>Review an API</h3>
        <pre>Review this API as if it is about to take production traffic. Call out slow paths, missing validation, unclear errors, and anything that would break a retry. Suggest the smallest fix first.</pre>
      </article>
      <article className="prompt">
        <h3>Turn a messy note into tasks</h3>
        <pre>Here is a rough note from a meeting. Split it into tasks a backend engineer can ship this week. Mark what is unknown, what needs a product decision, and what can start now.</pre>
      </article>
      <article className="prompt">
        <h3>Extract a document</h3>
        <pre>Extract the fields from this document. Return structured data, flag anything low-confidence, and do not invent values that are not on the page.</pre>
      </article>
    </NotePage>
  );
}

export function RitualPage() {
  return (
    <NotePage id="ritual" title="— the ritual —" pin="var(--pin3)">
      <p>Short notes from the week. The longer write-ups live on the blog.</p>
      <article className="desk-note">
        <h3>Documents should not need a second pair of eyes</h3>
        <p>At wysbryx I have been pulling fields out of messy legal paperwork. The useful part is not the model. It is knowing which line to trust, and which one to send back.</p>
      </article>
      <article className="desk-note">
        <h3>Payments have to agree with each other</h3>
        <p>At Schbang, gateways, webhooks, and settlement were the work. If two systems disagree by a rupee, the rest of the feature does not matter.</p>
      </article>
      <article className="desk-note">
        <h3>Ship on a Tuesday, not on a Sunday</h3>
        <p>CI, logs, and a boring deploy beat a clever one. I would rather know it failed in a minute than discover it from a user.</p>
      </article>
      <a className="more" href="https://blog.parmeshwar.me/" target="_blank" rel="noreferrer">Read the blog →</a>
    </NotePage>
  );
}

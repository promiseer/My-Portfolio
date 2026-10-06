import { Link } from "react-router-dom";
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

export function VaultPage() {
  return (
    <NotePage id="vault" title="— the vault —" pin="var(--pin1)">
      <p>References I keep coming back to. Not a reading list — the pages I actually open while building.</p>
      <ul className="vault-list">
        <li><strong>Node.js and Express</strong> — how I shape APIs, middleware, and error handling.</li>
        <li><strong>PostgreSQL</strong> — indexes, transactions, and the queries that get slow in production.</li>
        <li><strong>Redis</strong> — caching and pub/sub when the primary server should not do all the work.</li>
        <li><strong>Docker</strong> — images that behave the same on my machine and on the server.</li>
        <li><strong>Stripe and webhooks</strong> — payments, retries, and making two systems agree.</li>
        <li><strong>AWS</strong> — deploys, logs, and the checks I want before something pages me.</li>
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

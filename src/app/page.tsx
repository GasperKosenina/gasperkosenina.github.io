import {
  identity,
  links,
  projects,
  experience,
  education,
} from "./content";
import PrintButton from "./print-button";

/** `id` is what the parent <section> points its aria-labelledby at. */
function Head({ id, label }: { id: string; label: string }) {
  return (
    <div className="cv-shead">
      <h2 id={id} className="cv-label">
        {label}
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Outside <main> so it maps to the banner landmark, not role=generic. */}
      <header className="cv-masthead">
        <div className="cv-top">
          <span className="cv-label cv-dim">{identity.eyebrow}</span>
          <nav className="cv-links">
            {links
              .filter(([, href]) => href)
              .map(([label, href]) => {
                // Not on the mailto: — target="_blank" there just leaves a
                // dead blank tab behind once the mail client takes over.
                const external = href.startsWith("http");
                return (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                  >
                    {label}
                  </a>
                );
              })}
            <PrintButton />
          </nav>
        </div>

        {/* An English-voiced screen reader mangles the carons without this. */}
        <h1 lang="sl">{identity.name}</h1>

        <p className="cv-lede">{identity.intro}</p>
      </header>

      <main>
        <div className="cv-body">
          <section aria-labelledby="s-work">
            <Head id="s-work" label="Selected Work" />
            <div className="cv-rows">
              {projects.map((p, i) => (
                <article key={p.name} className="cv-project">
                  <span className="cv-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="cv-line">
                      <h3>
                        <a href={p.url} target="_blank" rel="noreferrer">
                          {p.name}
                        </a>
                      </h3>
                    </div>
                    <p>{p.desc}</p>
                    <div className="cv-stack">{p.stack}</div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <div className="cv-col">
            <section aria-labelledby="s-experience">
              <Head id="s-experience" label="Experience" />
              <div className="cv-rows">
                {experience.map((e) => (
                  <article key={e.role + e.period} className="cv-entry">
                    <div className="cv-line">
                      <h3>{e.role}</h3>
                      <span className="cv-period">{e.period}</span>
                    </div>
                    <p>
                      {e.url ? (
                        <a href={e.url} target="_blank" rel="noreferrer">
                          {e.org}
                        </a>
                      ) : (
                        e.org
                      )}
                      {e.note ? `, ${e.note}` : ""}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section aria-labelledby="s-education">
              <Head id="s-education" label="Education" />
              <div className="cv-edu">
                {education.map((e) => (
                  <div key={e.title} className="cv-line">
                    <div>
                      <h3>{e.title}</h3>
                      {e.org && <div className="cv-org">{e.org}</div>}
                    </div>
                    <span className="cv-period">{e.period}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

import { site, wa, audiences, projects, plans, carePlan, steps, stack } from "@/site.config";

const quote = wa("Hello Emmanuel, I’d like a website quote.");

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="wrap bar">
          <a className="brand" href="#top">Emmy<i>Web</i>Studio</a>
          <nav aria-label="Main">
            <a href="#for">Who we build for</a>
            <a href="#work">Work</a>
            <a href="#prices">Prices</a>
            <a href="#process">Process</a>
            <a className="btn" href={quote} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <h1>Websites that bring you students, guests and buyers.</h1>
              <p className="lead">
                I’m Emmanuel, a full-stack developer in Abuja. I build fast, mobile-friendly websites and management systems for schools, churches, hotels, real estate firms and cooperatives, then host and maintain them so you can focus on your work.
              </p>
              <div className="cta">
                <a className="btn" href={quote} target="_blank" rel="noopener noreferrer">Get a free quote</a>
                <a className="btn alt" href="#work">See live projects</a>
              </div>
            </div>
            <div className="mock" aria-hidden="true">
              <div className="top"><b /><b /><b /><span className="url">yourbusiness.com.ng</span></div>
              <div className="page">
                <div className="sk h" />
                <div className="sk w" />
                <div className="sk m" />
                <div className="tiles"><span /><span /><span /></div>
                <div className="price-tag">Websites from ₦150,000</div>
              </div>
            </div>
          </div>
        </section>

        <section className="for" id="for">
          <div className="wrap">
            <h2>Built for organisations that need to be found and trusted</h2>
            <p className="lead">Each type of site has its own pages and tools. You get the ones your visitors actually use.</p>
            <ul>
              {audiences.map((a) => (
                <li key={a.title}><strong>{a.title}</strong><span>{a.text}</span></li>
              ))}
            </ul>
          </div>
        </section>

        <section id="work">
          <div className="wrap">
            <h2>Projects you can open and try</h2>
            <p className="lead">These are live. Click through them on your phone to see how they feel.</p>
            <div className="work-list">
              {projects.map((p) => (
                <div className="work" key={p.title}>
                  <div><h3>{p.title}</h3><p>{p.text}</p></div>
                  <a className="btn alt" href={p.url} target="_blank" rel="noopener noreferrer">View live site</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="prices" style={{ paddingTop: 24 }}>
          <div className="wrap">
            <h2>Clear prices, no surprises</h2>
            <p className="lead">Every quote is fixed after we agree on the pages and features. Final prices depend on what you need.</p>
            <div className="plans">
              {plans.map((p) => (
                <div className={`plan${p.featured ? " main" : ""}`} key={p.name}>
                  <h3>{p.name}</h3>
                  <div className="amt">{p.price}</div>
                  <small>{p.note}</small>
                  <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
                  <a className={`btn${p.featured ? "" : " alt"}`} href={wa(`Hello, I’m interested in the ${p.name} package.`)} target="_blank" rel="noopener noreferrer">{p.cta}</a>
                </div>
              ))}
            </div>
            <div className="care">
              <div><h3>Care plan from {carePlan.price} a month</h3><p>{carePlan.text}</p></div>
              <a className="btn" href={wa("Hello, please tell me about your care plan.")} target="_blank" rel="noopener noreferrer">Ask about care plans</a>
            </div>
          </div>
        </section>

        <section id="process">
          <div className="wrap">
            <h2>How a project works</h2>
            <ol className="steps">
              {steps.map((s) => (
                <li key={s.title}><h3>{s.title}</h3><p>{s.text}</p></li>
              ))}
            </ol>
            <div className="pay"><p><strong>Payment:</strong> 50% to start, 30% at the preview, 20% before handover. You will need to send your logo, photos and text early so we stay on schedule.</p></div>
          </div>
        </section>

        <section>
          <div className="wrap about">
            <div>
              <h2>Your developer</h2>
              <p>I’m {site.owner}, a full-stack web developer based in Abuja. I spent four years teaching web development before building websites and business systems full-time, so I explain things plainly and don’t hide behind jargon.</p>
              <p>I’m currently completing an M.Sc. in Computer Engineering at Ahmadu Bello University, Zaria.</p>
            </div>
            <div>
              <h3 style={{ marginBottom: 12 }}>What I build with</h3>
              <div className="stack">{stack.map((s) => <span key={s}>{s}</span>)}</div>
            </div>
          </div>
        </section>

        <section id="contact" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="contact">
              <h2>Ready for a website that works as hard as you do?</h2>
              <p>Send a message describing your business. I’ll reply with questions and a quote, usually within a day.</p>
              <div className="cta">
                <a className="btn sun" href={quote} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
                <a className="btn alt" href={`mailto:${site.email}?subject=Website%20quote`}>Send an email</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <span>© {site.year} {site.name}, {site.city}</span>
          <span>
            <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a> ·{" "}
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </span>
        </div>
      </footer>
    </>
  );
}

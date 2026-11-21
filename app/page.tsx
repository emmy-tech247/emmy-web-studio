
import {
  site,
  wa,
  audiences,
  projects,
  plans,
  carePlan,
  steps,
  stack,
} from "@/site.config";

const quote = wa("Hello Emmanuel, I’d like a website quote.");

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="wrap bar">
          <a className="brand" href="#top" aria-label="EmmyWebStudio home">
            <img
              src="/images/emmy-web-studio-logo.png"
              alt="EmmyWebStudio - Design, Develop, Grow"
              className="brand-logo"
            />
          </a>

          <nav aria-label="Main">
            <a href="#about">About Us</a>
            <a href="#for">Industries</a>
            <a href="#work">Portfolio</a>
            <a href="#prices">Prices</a>
            <a href="#process">Process</a>
            <a className="btn" href={quote} target="_blank" rel="noopener noreferrer">
              Let's Talk <span>↗</span>
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-content">
              <span className="eyebrow">
                <span className="live-dot" />
                CREATIVE DIGITAL SOLUTIONS AGENCY
              </span>

              <h1>
                We Build Digital Experiences That{" "}
                <span>Grow Your Business.</span>
              </h1>

              <p className="lead">
                Websites that bring you students, guests, customers
                and business opportunities.
              </p>

              <p>
                We are a professional web development and digital
                solutions company providing modern websites, custom
                management systems and reliable technology solutions
                for organisations across Nigeria.
              </p>

              <p>
                We help schools, churches, hotels, real estate firms,
                cooperatives and growing businesses establish a
                strong online presence, reach more people, streamline
                operations and build customer trust.
              </p>

              <div className="cta">
                <a className="btn" href={quote} target="_blank" rel="noopener noreferrer">
                  Get a Free Quote <span>↗</span>
                </a>

                <a className="btn alt" href="#work">
                  Explore Our Projects <span>→</span>
                </a>
              </div>

              <div className="hero-trust">
                <div className="trust-icon">✦</div>
                <div>
                  <strong>Built for Business Growth</strong>
                  <small>Design · Development · Digital Support</small>
                </div>
              </div>
            </div>

            <div className="mock">
              <div className="mock-glow" />
              <div className="mock-window">
                <div className="top">
                  <div className="browser-dots">
                    <b />
                    <b />
                    <b />
                  </div>
                  <span className="url">yourbusiness.com.ng</span>
                  <span className="secure">● Secure</span>
                </div>

                <div className="page">
                  <div className="preview-nav">
                    <strong>YOUR BRAND.</strong>
                    <span>Home　 About　 Services</span>
                  </div>

                  <div className="preview-content">
                    <span className="preview-label">WELCOME TO THE FUTURE</span>
                    <h3>Make Your Business Stand Out.</h3>
                    <p>Beautiful websites. Powerful solutions.</p>
                    <span className="preview-button">Explore More →</span>
                  </div>

                  <div className="tiles">
                    <span><b>01</b><small>Modern Design</small></span>
                    <span><b>02</b><small>Smart Systems</small></span>
                    <span><b>03</b><small>Business Growth</small></span>
                  </div>
                </div>
              </div>

              <div className="floating-card">
                <span>✦</span>
                <div>
                  <strong>Premium Web Design</strong>
                  <small>Designed to impress.</small>
                </div>
              </div>

              <div className="floating-price">
                <small>START YOUR PROJECT</small>
                <strong>₦150,000+</strong>
              </div>
            </div>
          </div>

          <div className="hero-bottom">
            <div className="wrap hero-stats">
              <div><strong>01</strong><span>Creative Design</span></div>
              <div><strong>02</strong><span>Custom Development</span></div>
              <div><strong>03</strong><span>Business Automation</span></div>
              <div><strong>04</strong><span>Ongoing Support</span></div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="about-section">
          <div className="wrap about">
            <div>
              <span className="eyebrow">GET TO KNOW US</span>
              <h2>
                Your Technology Partner for{" "}
                <span>Digital Growth.</span>
              </h2>

              <p>
                We are a digital solutions and web development company
                focused on helping organisations leverage technology
                to improve their operations, visibility and customer
                experience.
              </p>

              <p>
                Our expertise covers website design and development,
                custom web applications, database-driven management
                systems and ongoing technical support.
              </p>

              <p>
                With a strong foundation in software development
                and technology education, we prioritise quality,
                usability, performance and clear communication
                throughout every project.
              </p>

              <p>
                Our goal is simple: to deliver digital solutions
                that solve real business problems and create lasting
                value for our clients.
              </p>

              <a className="btn" href={quote} target="_blank" rel="noopener noreferrer">
                Work With Us <span>↗</span>
              </a>
            </div>

            <div className="tech-card">
              <span className="eyebrow">POWERED BY MODERN TECHNOLOGY</span>
              <h3>Our Technology Stack</h3>

              <p>
                We work with modern, reliable technologies to deliver
                secure, scalable and high-performance digital products.
              </p>

              <div className="stack">
                {stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>

              <div className="tech-footer">
                <span>✦</span>
                Technology built around your business needs.
              </div>
            </div>
          </div>
        </section>


        {/* INDUSTRIES */}
        <section className="for" id="for">
          <div className="wrap">
            <div className="section-heading">
              <span className="eyebrow">WHO WE WORK WITH</span>
              <h2>
                Digital Solutions Designed Around{" "}
                <span>Your Organisation.</span>
              </h2>

              <p className="lead">
                Every industry has unique goals and operational needs.
                We develop professional websites and custom management
                systems tailored to your organisation. Our solutions
                combine modern design, powerful functionality and
                user-friendly features to help you reach your audience,
                streamline daily operations and improve efficiency.
              </p>
            </div>

            <h2 className="subheading">Industries We Serve</h2>

            <ul className="audience-list">
              {audiences.map((a, index) => (
                <li key={a.title}>
                  <span className="industry-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <strong>{a.title}</strong>
                  <span>{a.text}</span>

                  <ul>
                    {(a.features ?? []).map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="work" className="work-section">
          <div className="wrap">
            <div className="section-heading">
              <span className="eyebrow">OUR PORTFOLIO</span>
              <h2>
                Ideas Transformed Into{" "}
                <span>Digital Experiences.</span>
              </h2>
              <p className="lead">
                Real projects. Practical solutions. Modern technology.
                Explore some of the websites and management systems
                our team has developed.
              </p>
            </div>

            <div className="work-list">
              {projects.map((p, index) => (
                <div className="work" key={p.title}>
                  <div className="project-number">
                    PROJECT {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>

                  <a className="btn alt" href={p.url} target="_blank" rel="noopener noreferrer">
                    View Live Project <span>↗</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="prices" className="pricing-section">
          <div className="wrap">
            <div className="section-heading">
              <span className="eyebrow">INVEST IN YOUR GROWTH</span>
              <h2>
                Transparent Pricing.{" "}
                <span>Exceptional Value.</span>
              </h2>
              <p className="lead">
                Flexible development packages designed for businesses
                and organisations at every stage. Every project receives
                a defined scope, agreed timeline and transparent pricing.
              </p>
            </div>

            <div className="plans">
              {plans.map((p) => (
                <div className={`plan${p.featured ? " main" : ""}`} key={p.name}>
                  {p.featured && <span className="popular">MOST POPULAR</span>}
                  <h3>{p.name}</h3>
                  <div className="amt">{p.price}</div>
                  <small>{p.note}</small>

                  <ul>
                    {(p.features ?? []).map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>

                  <a
                    className={`btn${p.featured ? "" : " alt"}`}
                    href={wa(`Hello Emmanuel, I’m interested in the ${p.name} package. Please provide more information.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {p.cta} <span>↗</span>
                  </a>
                </div>
              ))}
            </div>

            {/* HOSTING AND MAINTENANCE */}
            <div className="care">
              <div>
                <span className="eyebrow">ONGOING WEBSITE SUPPORT</span>
                <h3>Keep Your Website Running at Its Best.</h3>

                <div className="amt">
                  Care Plans Starting from {carePlan.price} per Month
                </div>

                <p>{carePlan.text}</p>

                <h4>Our maintenance services include:</h4>

                <ul>
                  {(carePlan.features ?? []).map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <a className="btn" href={wa("Hello Emmanuel, please tell me about your website hosting and maintenance plans.")} target="_blank" rel="noopener noreferrer">
                Explore Care Plans <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="process-section">
          <div className="wrap">
            <div className="section-heading">
              <span className="eyebrow">HOW WE WORK</span>
              <h2>
                From Your Idea to{" "}
                <span>Launch and Beyond.</span>
              </h2>
              <p className="lead">
                A structured and transparent approach to delivering
                quality digital solutions.
              </p>
            </div>

            <ol className="steps">
              {steps.map((s, index) => (
                <li key={s.title}>
                  <span className="step-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>

            <div className="pay">
              <span className="eyebrow">SIMPLE AND TRANSPARENT</span>
              <h3>Our Payment Structure</h3>

              <div className="payment-stages">
                <div><strong>50%</strong><span>Initial payment to commence development</span></div>
                <div><strong>30%</strong><span>Upon presentation of working preview</span></div>
                <div><strong>20%</strong><span>Before final project handover</span></div>
              </div>

              <p>
                Clients are expected to provide relevant branding
                materials, images and content within the agreed
                project timeline.
              </p>
            </div>
          </div>
        </section>

        
        {/* CONTACT */}
        <section id="contact" className="contact-section">
          <div className="wrap">
            <div className="contact">
              <span className="eyebrow">LET'S CREATE SOMETHING AMAZING</span>
              <h2>
                Your Next Big Idea{" "}
                <span>Starts Here.</span>
              </h2>

              <p>
                Ready to take your organisation online or improve
                your existing digital operations?
              </p>

              <p>
                Partner with us to build a professional website
                or custom management system that supports your
                organisation's growth.
              </p>

              <div className="cta">
                <a className="btn sun" href={quote} target="_blank" rel="noopener noreferrer">
                  Request a Free Quote <span>↗</span>
                </a>

                <a className="btn alt" href={wa("Hello Emmanuel, I would like to chat with your team.")} target="_blank" rel="noopener noreferrer">
                  Chat With Our Team
                </a>

                <a className="btn alt" href={`mailto:${site.email}?subject=Website%20Quote`}>
                  Send Us an Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <span>© {site.year} {site.name}, {site.city}</span>

          <span>
            <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            {" · "}
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </span>

          <p>Professional Service. Reliable Technology. Results That Matter.</p>
        </div>
      </footer>
    </>
  );
}

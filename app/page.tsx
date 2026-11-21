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
          <a className="brand" href="#top">
            Emmy<i>Web</i>Studio
          </a>

          <nav aria-label="Main">
            <a href="#about">About Us</a>
            <a href="#for">Industries</a>
            <a href="#work">Our Work</a>
            <a href="#prices">Prices</a>
            <a href="#process">Process</a>
            <a
              className="btn"
              href={quote}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* HERO SECTION */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <h1>Digital Solutions That Help Businesses Grow</h1>

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

              <p>
                From website design and development to hosting,
                maintenance and ongoing technical support, we provide
                everything your organisation needs to succeed online.
              </p>

              <div className="cta">
                <a
                  className="btn"
                  href={quote}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get a Free Quote
                </a>

                <a className="btn alt" href="#work">
                  Explore Our Projects
                </a>
              </div>
            </div>

            <div className="mock" aria-hidden="true">
              <div className="top">
                <b />
                <b />
                <b />
                <span className="url">yourbusiness.com.ng</span>
              </div>

              <div className="page">
                <div className="sk h" />
                <div className="sk w" />
                <div className="sk m" />

                <div className="tiles">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="price-tag">
                  Professional Websites Starting from ₦150,000
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="for" id="for">
          <div className="wrap">
            <h2>Digital Solutions Designed Around Your Organisation</h2>

            <p
              className="lead"
              style={{ width: "100%", maxWidth: "none" }}
            >
              Every industry has unique goals and operational needs. We develop
              professional websites and custom management systems tailored to
              your organisation. Our solutions combine modern design, powerful
              functionality and user-friendly features to help you reach your
              audience, showcase your services, streamline daily operations
              and improve efficiency. Whether you manage a school, church,
              hotel, real estate company or cooperative, we deliver reliable
              digital solutions that strengthen your online presence and
              support business growth.
            </p>

            <h2>Industries We Serve</h2>

            <ul className="audience-list">
              {audiences.map((a) => (
                <li key={a.title}>
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
        <section id="work">
          <div className="wrap">
            <h2>Our Projects and Solutions</h2>

            <p className="lead">
              Real projects. Practical solutions. Modern technology.
              Explore some of the websites and management systems
              our team has developed.
            </p>

            <div className="work-list">
              {projects.map((p) => (
                <div className="work" key={p.title}>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>

                  <a
                    className="btn alt"
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Project
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="prices" style={{ paddingTop: 24 }}>
          <div className="wrap">
            <h2>Transparent Pricing. Professional Delivery.</h2>

            <p className="lead">
              We offer flexible development packages to suit
              different organisational needs. Every project
              receives a clearly defined scope, agreed timeline
              and transparent pricing before development begins.
            </p>

            <div className="plans">
              {plans.map((p) => (
                <div
                  className={`plan${p.featured ? " main" : ""}`}
                  key={p.name}
                >
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
                    href={wa(
                      `Hello Emmanuel, I’m interested in the ${p.name} package. Please provide more information.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {p.cta}
                  </a>
                </div>
              ))}
            </div>

            {/* HOSTING AND MAINTENANCE */}
            <div className="care">
              <div>
                <h3>Website Hosting and Maintenance</h3>

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

              <a
                className="btn"
                href={wa(
                  "Hello Emmanuel, please tell me about your website hosting and maintenance plans."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ask About Care Plans
              </a>
            </div>
          </div>
        </section>

        {/* DEVELOPMENT PROCESS */}
        <section id="process">
          <div className="wrap">
            <h2>Our Development Process</h2>

            <p className="lead">
              A structured approach to delivering quality digital
              solutions.
            </p>

            <ol className="steps">
              {steps.map((s, index) => (
                <li key={s.title}>
                  <h3>
                    {String(index + 1).padStart(2, "0")}. {s.title}
                  </h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>

            <div className="pay">
              <h3>Our Payment Structure</h3>

              <p>
                <strong>50%</strong> initial payment to commence
                development.
              </p>

              <p>
                <strong>30%</strong> payment upon presentation
                of the working preview.
              </p>

              <p>
                <strong>20%</strong> final payment before project
                handover.
              </p>

              <p>
                Clients are expected to provide relevant branding
                materials, images and content within the agreed
                project timeline.
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about">
          <div className="wrap about">
            <div>
              <h2>About Our Company</h2>

              <h3>Your Technology Partner for Digital Growth</h3>

              <p>
                We are a digital solutions and web development
                company focused on helping organisations leverage
                technology to improve their operations, visibility
                and customer experience.
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
                that solve real business problems and create
                lasting value for our clients. Our team is committed
                to delivering professional and reliable digital
                solutions.
              </p>
            </div>

            <div>
              <h3 style={{ marginBottom: 12 }}>
                Our Technology Stack
              </h3>

              <p>
                We work with modern, reliable technologies to
                deliver secure, scalable and high-performance
                digital products.
              </p>

              <div className="stack">
                {stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="contact">
              <h2>Let's Build Something Great Together</h2>

              <p>
                Ready to take your organisation online or improve
                your existing digital operations?
              </p>

              <p>
                Partner with us to build a professional website
                or custom management system that supports your
                organisation's growth.
              </p>

              <p>
                Whether you need a business website, school portal,
                hotel booking platform, real estate website or
                cooperative management system, our team is ready
                to help.
              </p>

              <div className="cta">
                <a
                  className="btn sun"
                  href={quote}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request a Free Quote
                </a>

                <a
                  className="btn alt"
                  href={wa(
                    "Hello Emmanuel, I would like to chat with your team."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat With Our Team on WhatsApp
                </a>

                <a
                  className="btn alt"
                  href={`mailto:${site.email}?subject=Website%20Quote`}
                >
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
          <span>
            © {site.year} {site.name}, {site.city}
          </span>

          <span>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            {" · "}
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </span>

          <p>
            Professional Service. Reliable Technology. Results That Matter.
          </p>
        </div>
      </footer>
    </>
  );
}

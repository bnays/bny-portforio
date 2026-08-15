import Image from "next/image";
import Rail from "@/components/Rail";
import Motion from "@/components/Motion";
import Loader from "@/components/Loader";
import Cursor from "@/components/Cursor";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.shell}>
      <Loader />
      <Motion />
      <Cursor />
      <Rail />

      <main className={styles.main}>
        {/* Hero */}
        <section className={`${styles.section} ${styles.hero}`} id="top">
          <p className={styles.status} data-hero-in>Shipping since 2017 · open to Frontend / Full-stack roles in Sydney</p>
          <h1 className={styles.heroTitle} data-hero-in>
            Full-stack engineer, <em>building things people actually use.</em>
          </h1>
          <p className={styles.heroLede} data-hero-in>
            I design and ship production web systems — from enterprise booking platforms used by Nordic
            travel teams to my own AI-driven warehouse system. Currently pairing 6+ years of engineering
            with graduate research into agentic AI for software development.
          </p>
          <div className={styles.heroStack} data-hero-in>
            {["React", "Next.js", "TypeScript", "Node.js", "Python", "AWS"].map((t) => (
              <span key={t} className={styles.tag}>
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Work */}
        <section className={styles.section} id="work">
          <p className={styles.kicker} data-reveal>01 — Selected work</p>
          <h2 className={styles.h2}>Three systems, three problems</h2>
          <p className={styles.sectionLede}>
            A booking platform for enterprise event planners, a warehouse system with its own forecasting
            engine, and a competitive-intelligence product — spanning UI craft, data-heavy interfaces, and
            applied ML.
          </p>

          <div className={styles.cases}>
            {/* Case 1: getstarted.eventlogic.se */}
            <article className={styles.case} data-reveal>
              {/* <div className={styles.caseMedia}>
                <Image
                  src="/images/eventlogic-find-suppliers.webp"
                  alt="Find Suppliers screen from getstarted.eventlogic.se, showing a filterable venue list synced with an interactive map"
                  fill
                  sizes="(max-width: 900px) 100vw, 700px"
                />
              </div> */}
              <div className={styles.caseBody}>
                <div className={styles.caseHead}>
                  <h3 className={styles.caseTitle}>Event Logic — booking flow</h3>
                  <span className={styles.caseRole}>Built end-to-end</span>
                </div>
                <p className={styles.caseDesc}>
                  Designed and built the venue &amp; hotel discovery experience for Event Logic&rsquo;s
                  meeting-planning platform, used by procurement and travel managers at organisations like
                  ICA, Swedavia and Scania. Faceted search, a list synced to a clustered map, and a
                  multi-step booking flow across day conferences, hotel stays and complex bookings.
                </p>
                <div className={styles.caseFooter}>
                  <div className={styles.caseStack}>
                    {["React", "TypeScript", "Map clustering", "Design system"].map((t) => (
                      <span key={t} className={styles.tag}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    className={styles.caseLink}
                    href="https://getstarted.eventlogic.se"
                    target="_blank"
                    rel="noreferrer"
                  >
                    getstarted.eventlogic.se ↗
                  </a>
                </div>
              </div>
            </article>

            {/* Case 2: app.eventlogic.se */}
            <article className={styles.case} data-reveal>
              {/* <div className={styles.caseMedia}>
                <Image
                  src="/images/eventlogic-home.webp"
                  alt="Find venues and hotels landing screen from Event Logic's app, with a day conference search panel"
                  fill
                  sizes="(max-width: 900px) 100vw, 700px"
                />
              </div> */}
              <div className={styles.caseBody}>
                <div className={styles.caseHead}>
                  <h3 className={styles.caseTitle}>Event Logic — core platform</h3>
                  <span className={styles.caseRole}>Led a 13-person team</span>
                </div>
                <p className={styles.caseDesc}>
                  Contributed to the main event-management platform where planners manage compliance,
                  invoicing and reporting for thousands of meetings a year. Led a 13-person engineering
                  team through the full development lifecycle over three years, setting code review and
                  delivery standards.
                </p>
                <div className={styles.caseFooter}>
                  <div className={styles.caseStack}>
                    {["React", "TypeScript", "Team leadership", "Enterprise SaaS"].map((t) => (
                      <span key={t} className={styles.tag}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <a className={styles.caseLink} href="https://app.eventlogic.se" target="_blank" rel="noreferrer">
                    app.eventlogic.se ↗
                  </a>
                </div>
              </div>
            </article>

            {/* Case 3: Logix — compact, no media */}
            <article className={`${styles.case} ${styles.caseCompact}`} data-reveal>
              <div className={styles.caseBody}>
                <div className={styles.caseHead}>
                  <h3 className={styles.caseTitle}>Logix — AI-driven WMS</h3>
                  <span className={styles.caseRole}>Personal project</span>
                </div>
                <p className={styles.caseDesc}>
                  A warehouse management system built solo: Next.js and Node/Express frontend and API,
                  atomic MySQL transactions, JWT auth, and a Python RandomForestRegressor trained on
                  historical sales data for demand forecasting. Also the ongoing testbed for my graduate
                  research comparing GPT-4o, Gemini and Claude on real code-generation tasks.
                </p>
                <div className={styles.caseFooter}>
                  <div className={styles.caseStack}>
                    {["Next.js", "Node.js", "Python", "MySQL", "ML forecasting"].map((t) => (
                      <span key={t} className={styles.tag}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    className={styles.caseLink}
                    href="https://ai-inventory-management-system.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live demo ↗
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Experience */}
        <section className={styles.section} id="experience">
          <p className={styles.kicker} data-reveal>02 — Experience</p>
          <h2 className={styles.h2}>Six years, three teams</h2>
          <p className={styles.sectionLede}>
            From clinical management systems in Kathmandu to leading a 13-person engineering team on an
            enterprise SaaS platform in Sweden.
          </p>

          <div className={styles.expList}>
            <article className={styles.expItem} data-reveal>
              <div className={styles.expMeta}>
                <span className={styles.expDates}>Sep 2021 — Oct 2024</span>
                <span className={styles.expCompany}>Event Logic</span>
              </div>
              <div className={styles.expBody}>
                <h3 className={styles.expRole}>Software Engineer</h3>
                <ul className={styles.expPoints}>
                  <li>Led a team of 13 engineers through the full development lifecycle, setting code review and delivery standards.</li>
                  <li>Built and deployed a high-performance onboarding application supporting a significant increase in customer volume.</li>
                  <li>Migrated a legacy AngularJS application to a modern component-based Angular architecture, improving load performance and cutting reported bugs.</li>
                  <li>Partnered with product owners to translate business goals into technical roadmaps, consistently delivering on schedule.</li>
                </ul>
                <div className={styles.expStack}>
                  {["React", "Next.js", "TypeScript", "AWS", "Docker", "Material UI", "Framer Motion"].map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            </article>

            <article className={styles.expItem} data-reveal>
              <div className={styles.expMeta}>
                <span className={styles.expDates}>Apr 2019 — Aug 2021</span>
                <span className={styles.expCompany}>GrowByData Services</span>
              </div>
              <div className={styles.expBody}>
                <h3 className={styles.expRole}>Front-End Engineer</h3>
                <ul className={styles.expPoints}>
                  <li>Built a dynamic reporting framework for the Business Insights SaaS product, serving thousands of clients.</li>
                  <li>Redesigned the UI for the Competitive Price Intelligence product, increasing Net Promoter Score by 40%.</li>
                  <li>Delivered scalable dashboards for thousands of eCommerce clients, improving mobile responsiveness and reporting accuracy.</li>
                </ul>
                <div className={styles.expStack}>
                  {["React", "PHP / Laravel", "Python / Flask", "jQuery", "Highcharts"].map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            </article>

            <article className={styles.expItem} data-reveal>
              <div className={styles.expMeta}>
                <span className={styles.expDates}>Aug 2017 — Apr 2019</span>
                <span className={styles.expCompany}>Mavorion Systems</span>
              </div>
              <div className={styles.expBody}>
                <h3 className={styles.expRole}>Software Engineer</h3>
                <ul className={styles.expPoints}>
                  <li>Designed and built clinical and hospital management SPAs used by government hospitals and private clinics.</li>
                  <li>Built Mero Report, a blogging platform for user-generated content, from concept through deployment.</li>
                </ul>
                <div className={styles.expStack}>
                  {["Vue.js", "Laravel", "Bootstrap", "PHP", "amCharts"].map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Research */}
        <section className={styles.section} id="research">
          <p className={styles.kicker} data-reveal>03 — Research</p>
          <h2 className={styles.h2}>Applied AI, grounded in real code</h2>
          <p className={styles.sectionLede}>
            My MSc research at Victoria University benchmarks large language models against my own
            production codebase, rather than synthetic problems — so the results reflect how these tools
            actually perform on real engineering work.
          </p>
          <div className={styles.researchGrid}>
            <div className={styles.researchItem} data-reveal>
              <p className={styles.researchLabel}>Research Project 1</p>
              <h3 className={styles.researchTitle}>LLM code-generation benchmark</h3>
              <p className={styles.researchDesc}>
                Comparative evaluation of GPT-4o, Gemini 1.5 Pro and Claude 3.5 Sonnet on real
                engineering tasks, benchmarked against the Logix WMS codebase as ground truth.
              </p>
            </div>
            <div className={styles.researchItem} data-reveal>
              <p className={styles.researchLabel}>Research Project 2</p>
              <h3 className={styles.researchTitle}>Agentic self-correction</h3>
              <p className={styles.researchDesc}>
                Extending the comparison with agentic workflows — evaluating whether iterative,
                self-correcting agents close the gap between generated and production-ready code.
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section className={styles.section} id="about">
          <p className={styles.kicker} data-reveal>04 — About</p>
          <h2 className={styles.h2}>Currently</h2>
          <div className={styles.aboutText} data-reveal>
            <p>
              I&rsquo;m a full-stack engineer based in <strong>Sydney</strong>, with 6+ years building
              production web systems — most recently as a Software Engineer leading a 13-person
              engineering team on Event Logic&rsquo;s meeting &amp; conference platform in Sweden.
            </p>
            <p>
              I&rsquo;m completing a <strong>Master of Information Technology at Victoria University</strong>,
              finishing December 2026, where my research sits at the intersection of software engineering
              and applied AI. Day to day I work in the{" "}
              <strong>React / Next.js / TypeScript / Node.js</strong> ecosystem, with Python and AWS for
              anything ML or infrastructure-shaped.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className={`${styles.section} ${styles.contact}`} id="contact">
          <p className={styles.kicker} data-reveal>05 — Contact</p>
          <h2 className={styles.h2}>Get in touch</h2>
          <div className={styles.contactRow} data-reveal>
            <div className={styles.contactLinks}>
              <a href="mailto:bnaysm@gmail.com">bnaysm@gmail.com</a>
              <a href="https://github.com/bnays" target="_blank" rel="noreferrer">
                github.com/bnays
              </a>
              <a href="https://www.linkedin.com/in/binaya-maharjan/" target="_blank" rel="noreferrer">
                linkedin.com/in/binaya-maharjan
              </a>
            </div>
            <p className={styles.copy}>Sydney, Australia — © 2026</p>
          </div>
        </section>
      </main>
    </div>
  );
}

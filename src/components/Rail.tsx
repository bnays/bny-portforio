import styles from "./Rail.module.css";
import ThemeToggle from "./ThemeToggle";

const NAV = [
  { id: "01", label: "Work", href: "#work" },
  { id: "02", label: "Experience", href: "#experience" },
  { id: "03", label: "Research", href: "#research" },
  { id: "04", label: "About", href: "#about" },
  { id: "05", label: "Contact", href: "#contact" },
];

const LOG = [
  { year: "2017", desc: "Started at Mavorion Systems, Kathmandu" },
  { year: "2019", desc: "Business Insights @ GrowByData" },
  { year: "2021", desc: "Senior Eng / Team Lead @ Threadcode–Event Logic, Sweden" },
  { year: "2025", desc: "MSc IT @ Victoria University, Sydney" },
  { year: "2026", desc: "Researching agentic AI for code generation" },
];

export default function Rail() {
  return (
    <>
      <aside className={styles.rail}>
        <div className={styles.top}>
          <div className={styles.id}>
            <p className={styles.name}>Binaya Maharjan</p>
            <p className={styles.role}>Full-stack Engineer — Sydney</p>
          </div>
          <nav className={styles.nav}>
            {NAV.map((item) => (
              <a key={item.id} href={item.href} className={styles.navLink}>
                <span className={styles.navIndex}>{item.id}</span>
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className={styles.log}>
          <p className={styles.logHeading}>Build log</p>
          {LOG.map((entry) => (
            <div key={entry.year} className={styles.logEntry}>
              <span className={styles.logYear}>{entry.year}</span>
              <span className={styles.logDesc}>{entry.desc}</span>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomLinks}>
            <a href="https://github.com/bnays" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/binaya-maharjan/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="mailto:bnaysm@gmail.com">Email</a>
          </div>
          <ThemeToggle />
        </div>
      </aside>

      <div className={styles.mobileBar}>
        <span className={styles.name}>Binaya Maharjan</span>
        <div className={styles.mobileRight}>
          <nav className={styles.navMobile}>
            {NAV.map((item) => (
              <a key={item.id} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}

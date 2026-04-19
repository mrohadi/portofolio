import styles from "./Services.module.css";

const services = [
  {
    icon: "⬡",
    name: "Back-End Development",
    desc: "Scalable APIs, microservices, and server-side logic using .NET, Java, Node.js or PHP. From greenfield builds to legacy modernisation.",
  },
  {
    icon: "◻",
    name: "Front-End Development",
    desc: "Clean, performant interfaces with React or Blazor. Translating designs into production-ready UI with attention to detail.",
  },
  {
    icon: "△",
    name: "API Design & Integration",
    desc: "RESTful API design, third-party integrations, payment gateways, government APIs, and Host-to-Host connectivity for financial systems.",
  },
  {
    icon: "◈",
    name: "Database Architecture",
    desc: "Schema design, query optimisation, and migration for PostgreSQL, MSSQL and MongoDB across transactional and analytical workloads.",
  },
  {
    icon: "⊕",
    name: "DevOps & Deployment",
    desc: "CI/CD pipeline setup, automated deployments, and Linux server configuration — getting your app to production reliably.",
  },
  {
    icon: "◎",
    name: "Legacy Modernisation",
    desc: "Porting and refactoring old codebases to modern stacks. Proven track record migrating financial systems with zero downtime goals.",
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className="section-label reveal">Services</div>
      <h2 className={`section-title reveal ${styles.title}`}>What I can do for you</h2>
      <p className={`section-subtitle reveal ${styles.subtitle}`}>
        Whether you need a full back-end system or a polished front-end, I can take it from spec to
        production.
      </p>
      <div className={styles.grid}>
        {services.map((s, i) => (
          <div
            key={s.name}
            className={`${styles.card} reveal${i % 3 === 1 ? " reveal-delay-1" : i % 3 === 2 ? " reveal-delay-2" : ""}`}
          >
            <span className={styles.icon}>{s.icon}</span>
            <div className={styles.name}>{s.name}</div>
            <p className={styles.desc}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

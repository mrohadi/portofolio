import styles from "./Skills.module.css";

const categories = [
  {
    title: "Back-End",
    pills: [
      { label: ".NET / C#", featured: true },
      { label: "Java", featured: true },
      { label: "Node.js", featured: true },
      { label: "PHP", featured: false },
      { label: "REST API", featured: false },
      { label: "Delphi / Pascal", featured: false },
    ],
  },
  {
    title: "Front-End",
    pills: [
      { label: "React", featured: true },
      { label: "Blazor", featured: false },
      { label: "HTML / CSS / JS", featured: false },
    ],
  },
  {
    title: "Database & DevOps",
    pills: [
      { label: "PostgreSQL", featured: true },
      { label: "MSSQL", featured: true },
      { label: "MongoDB", featured: false },
      { label: "CI/CD", featured: false },
      { label: "Automated Deployment", featured: false },
      { label: "IIS Server", featured: false },
    ],
  },
  {
    title: "Soft Skills",
    pills: [
      { label: "Clear Communicator", featured: false },
      { label: "Detail Oriented", featured: false },
      { label: "Fast Learner", featured: false },
      { label: "Multi-tasking", featured: false },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.layout}>
        <div>
          <div className="section-label reveal">Skills</div>
          <h2 className="section-title reveal">Tech I work with</h2>
          <p className="section-subtitle reveal">
            From databases to deployments — a pragmatic stack shaped by 5+ years in the field.
          </p>
        </div>
        <div className={`${styles.categories} reveal`}>
          {categories.map((cat) => (
            <div key={cat.title}>
              <div className={styles.catTitle}>{cat.title}</div>
              <div className={styles.pills}>
                {cat.pills.map((p) => (
                  <span
                    key={p.label}
                    className={`${styles.pill} ${p.featured ? styles.featured : ""}`}
                  >
                    {p.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

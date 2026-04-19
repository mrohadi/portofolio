import styles from "./Experience.module.css";

const roles = [
  {
    date: "Dec 2023 — Present",
    company: "Telkomsel",
    role: "Software Engineer",
    desc: "Working on software solutions at Indonesia's largest telecommunications company, contributing to scalable services and internal tools.",
    tags: ["Telco", "Back-End"],
  },
  {
    date: "Jun 2022 — Nov 2023",
    company: "PT. Bank Pan Indonesia (Panin Bank)",
    role: "Software Engineer",
    desc: "Maintained e-Statement application for customer statement generation. Ported Duta Dukcapil API service from .NET Framework to .NET Core for Linux compatibility.",
    tags: ["Delphi/Pascal", ".NET Core", "Banking"],
  },
  {
    date: "Apr 2022 — May 2022",
    company: "PT. BFI Finance Indonesia",
    role: "Backend Engineer",
    desc: "Maintained legacy services and developed omnichannel solutions to accommodate evolving business requirements in consumer finance.",
    tags: ["Legacy Systems", "Omnichannel", "Finance"],
  },
  {
    date: "Jan 2022 — Apr 2022",
    company: "PT. Code Development Indonesia",
    role: "Software Engineer",
    desc: "Maintained Host-to-Host service for PT. Axa-Mandiri Indonesia, enabling insurance policy payments using the Microsoft ecosystem.",
    tags: [".NET Framework", "MSSQL", "IIS", "Insurance"],
  },
  {
    date: "Jan 2021 — Dec 2021",
    company: "PT. Swadharma Duta Data",
    role: "Software Engineer",
    desc: "Developed web applications using ASP.NET Core (C#), MS SQL Server and Blazor for a major Indonesian bank. Maintained ECMS billing tools for credit card management built on Java.",
    tags: ["ASP.NET Core", "Blazor", "Java", "Banking"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className="section-label reveal">Experience</div>
      <h2 className="section-title reveal">Where I&apos;ve worked</h2>
      <div className={styles.list}>
        {roles.map((r) => (
          <div key={r.company} className={`${styles.item} reveal`}>
            <div className={styles.date}>{r.date}</div>
            <div>
              <div className={styles.company}>{r.company}</div>
              <div className={styles.role}>{r.role}</div>
              <p className={styles.desc}>{r.desc}</p>
              <div className={styles.tags}>
                {r.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import styles from "./Projects.module.css";

const projects = [
  {
    num: "01",
    name: "e-Statement Platform",
    desc: "Customer statement generation system for Panin Bank — handling thousands of requests with high reliability and PDF output.",
    stack: ["Delphi", "Pascal", "Banking"],
  },
  {
    num: "02",
    name: "Dukcapil API Migration",
    desc: "Porting a legacy government identity API service from .NET Framework to .NET Core to support Linux deployment and modern CI/CD pipelines.",
    stack: [".NET Core", "Linux", "API"],
  },
  {
    num: "03",
    name: "Insurance Payment H2H",
    desc: "Host-to-Host integration for Axa-Mandiri enabling seamless insurance policy payments via Microsoft tech stack.",
    stack: [".NET", "MSSQL", "IIS"],
  },
  {
    num: "04",
    name: "ECMS Billing Tool",
    desc: "Enterprise Credit Management System for credit card billing — maintained and extended for a leading Indonesian bank.",
    stack: ["Java", "MSSQL", "Fintech"],
  },
  {
    num: "05",
    name: "Omnichannel Service",
    desc: "Developed and maintained omnichannel communication platform for BFI Finance to unify customer touchpoints across multiple channels.",
    stack: ["Back-End", "API", "Finance"],
  },
  {
    num: "06",
    name: "Bank Web Application",
    desc: "Full-stack web application built with ASP.NET Core, Blazor and MS SQL Server for an Indonesian bank's internal operations.",
    stack: ["Blazor", "ASP.NET Core", "MSSQL"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="section-label reveal">Projects</div>
      <h2 className="section-title reveal">Selected work</h2>
      <p className="section-subtitle reveal">
        A snapshot of things I&apos;ve built — from banking infrastructure to internal tools.
      </p>
      <div className={styles.grid}>
        {projects.map((p, i) => (
          <div
            key={p.num}
            className={`${styles.card} reveal${i % 3 === 1 ? " reveal-delay-1" : i % 3 === 2 ? " reveal-delay-2" : ""}`}
          >
            <div className={styles.num}>{p.num}</div>
            <div className={styles.arrow}>→</div>
            <div className={styles.name}>{p.name}</div>
            <p className={styles.desc}>{p.desc}</p>
            <div className={styles.stack}>
              {p.stack.map((s) => (
                <span key={s} className={styles.stackTag}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

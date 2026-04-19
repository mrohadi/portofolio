import styles from "./Ticker.module.css";

const items = [
  ".NET", "Java", "Node.js", "React", "Blazor", "PostgreSQL",
  "MongoDB", "MSSQL", "CI/CD", "API Design", "Back-End", "Front-End", "PHP", "Fintech",
];

export default function Ticker() {
  const doubled = [...items, ...items];

  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            <span className={styles.dot}>●</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

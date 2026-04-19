import styles from "./Testimonials.module.css";

const testimonials = [
  {
    text: "Rohadi delivered a complex API integration ahead of schedule. His communication was clear throughout, and the code quality was excellent — well-structured and easy to maintain.",
    author: "Upwork Client",
    role: "Fintech Project",
  },
  {
    text: "Working with Rohadi was a smooth experience. He understood the requirements quickly, asked the right questions, and delivered exactly what we needed.",
    author: "Upwork Client",
    role: "Back-End Development",
  },
  {
    text: "Highly skilled engineer who is also great to work with. He tackled a legacy migration that scared our previous contractors and got it done cleanly.",
    author: "Upwork Client",
    role: "Legacy Migration",
  },
  {
    text: "Detail-oriented and proactive. Rohadi flagged potential issues before they became problems — exactly the kind of engineer you want on your project.",
    author: "Upwork Client",
    role: "Full-Stack Project",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className="section-label reveal">Testimonials</div>
      <h2 className="section-title reveal">Kind words</h2>
      <p className="section-subtitle reveal">
        What clients and colleagues say about working together.
      </p>
      <div className={styles.grid}>
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`${styles.card} reveal${i === 1 ? " reveal-delay-1" : i === 2 ? " reveal-delay-2" : i === 3 ? " reveal-delay-3" : ""}`}
          >
            <div className={styles.quote}>&ldquo;</div>
            <p className={styles.text}>{t.text}</p>
            <div className={styles.author}>{t.author}</div>
            <div className={styles.role}>{t.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

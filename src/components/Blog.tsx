import styles from "./Blog.module.css";

const posts = [
  {
    tag: "Architecture",
    title: "Why I Migrate Legacy .NET Services to Linux",
    meta: "Coming soon · 5 min read",
  },
  {
    tag: "Back-End",
    title: "Designing Robust REST APIs for Banking Systems",
    meta: "Coming soon · 7 min read",
  },
  {
    tag: "Career",
    title: "From Mechanical Engineering to Software: My Journey",
    meta: "Coming soon · 4 min read",
  },
];

export default function Blog() {
  return (
    <section id="blog" className={styles.blog}>
      <div className="section-label reveal">Writing</div>
      <h2 className="section-title reveal">From the blog</h2>
      <p className="section-subtitle reveal">
        Thoughts on engineering, architecture, and the craft of building software. Coming soon.
      </p>
      <div className={styles.grid}>
        {posts.map((p, i) => (
          <div
            key={p.title}
            className={`${styles.card} reveal${i === 1 ? " reveal-delay-1" : i === 2 ? " reveal-delay-2" : ""}`}
          >
            <div className={styles.imgPlaceholder}>
              <div className={styles.imgPattern} />
              <span className={styles.imgLabel}>[ article hero image ]</span>
            </div>
            <div className={styles.tag}>{p.tag}</div>
            <div className={styles.title}>{p.title}</div>
            <div className={styles.meta}>{p.meta}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

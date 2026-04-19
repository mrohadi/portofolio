import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.left}>
        <div className={styles.eyebrow}>Available for freelance</div>
        <h1 className={styles.name}>
          Muhammad<br />
          <em>Rohadi</em>
        </h1>
        <p className={styles.tagline}>
          Software engineer &amp; occasional designer — I build scalable
          back-end systems and clean front-end experiences.
        </p>
        <div className={styles.actions}>
          <a href="#projects" className="btn-primary">View My Work →</a>
          <a href="#contact" className="btn-secondary">Let&apos;s Talk</a>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.photoWrap}>
          <Image
            src="/photo.jpg"
            alt="Muhammad Rohadi"
            width={440}
            height={587}
            className={styles.photo}
            priority
            loading="eager"
          />
        </div>
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <div className={styles.statNum}>5<span>+</span></div>
            <div className={styles.statLabel}>Years Experience</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>10<span>+</span></div>
            <div className={styles.statLabel}>Projects Delivered</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>5<span>★</span></div>
            <div className={styles.statLabel}>Upwork Rating</div>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        Scroll
      </div>
    </section>
  );
}

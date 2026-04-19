import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.grid}>
        <div className={styles.text}>
          <div className="section-label reveal">About</div>
          <h2 className={`section-title reveal`}>
            Building things that{" "}
            <em className={styles.accent}>matter</em>
          </h2>
          <p className="reveal reveal-delay-1">
            I&apos;m <strong>Muhammad Rohadi</strong>, a software engineer based in Indonesia
            with a background in <strong>Mechanical Engineering</strong> from Andalas University.
            What started as curiosity about how things work mechanically turned into a deep passion
            for building software.
          </p>
          <p className="reveal reveal-delay-1">
            Over <strong>5+ years</strong>, I&apos;ve worked across fintech, banking, and insurance
            sectors — shipping everything from payment APIs to enterprise banking platforms. I&apos;m
            equally comfortable deep in back-end logic as I am crafting a polished user interface.
          </p>
          <p className="reveal reveal-delay-2">
            Beyond code, I bring a <strong>fast-learning, multi-tasking mindset</strong> and strong
            communication skills — making collaboration with clients smooth and results-driven.
          </p>
          <div className={`${styles.links} reveal reveal-delay-2`}>
            <a href="https://github.com/mrohadi" target="_blank" rel="noopener noreferrer" className="chip">
              ↗ GitHub
            </a>
            <a href="https://www.upwork.com/freelancers/~01d34badbd54583f65" target="_blank" rel="noopener noreferrer" className="chip">
              ↗ Upwork
            </a>
          </div>
        </div>

        <div className={`${styles.imgWrap} reveal`}>
          <div className={styles.imgBg} />
          <Image
            src="/photo.jpg"
            alt="Muhammad Rohadi"
            width={480}
            height={600}
            className={styles.img}
          />
          <div className={styles.badge}>
            <div className={styles.badgeLabel}>Education</div>
            <div className={styles.badgeName}>Andalas University</div>
            <div className={styles.badgeMajor}>Mechanical Engineering</div>
          </div>
        </div>
      </div>
    </section>
  );
}

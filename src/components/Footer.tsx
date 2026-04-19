import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        MR<span>.</span>
      </div>
      <div className={styles.links}>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#services">Services</a>
        <a href="https://github.com/mrohadi" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.upwork.com/freelancers/~01d34badbd54583f65" target="_blank" rel="noopener noreferrer">Upwork</a>
      </div>
      <div className={styles.copy}>
        © {new Date().getFullYear()} Muhammad Rohadi. All rights reserved.
      </div>
    </footer>
  );
}

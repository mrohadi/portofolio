"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.layout}>
        <div className={styles.left}>
          <div className="section-label reveal">Contact</div>
          <h2 className={`section-title reveal ${styles.bigTitle}`}>
            Let&apos;s build<br />
            <em className={styles.accent}>something</em><br />
            great.
          </h2>
          <div className={`${styles.info} reveal`}>
            <div className={styles.row}>
              <div className={styles.icon}>↗</div>
              <div>
                <div className={styles.label}>Upwork</div>
                <div className={styles.value}>
                  <a href="https://www.upwork.com/freelancers/~01d34badbd54583f65" target="_blank" rel="noopener noreferrer">
                    View Profile →
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.icon}>↗</div>
              <div>
                <div className={styles.label}>GitHub</div>
                <div className={styles.value}>
                  <a href="https://github.com/mrohadi" target="_blank" rel="noopener noreferrer">
                    github.com/mrohadi →
                  </a>
                </div>
              </div>
            </div>
            <div className={`${styles.row} ${styles.rowLast}`}>
              <div className={styles.icon}>◎</div>
              <div>
                <div className={styles.label}>Location</div>
                <div className={styles.value}>Indonesia · Available Remote</div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.formWrap} reveal`}>
          {submitted && (
            <div className={styles.success}>
              Message sent! I&apos;ll get back to you soon.
            </div>
          )}
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.group}>
                <label>Name</label>
                <input type="text" placeholder="Your name" required />
              </div>
              <div className={styles.group}>
                <label>Email</label>
                <input type="email" placeholder="your@email.com" required />
              </div>
            </div>
            <div className={styles.group}>
              <label>Service</label>
              <select>
                <option value="">Select a service…</option>
                <option>Back-End Development</option>
                <option>Front-End Development</option>
                <option>API Design &amp; Integration</option>
                <option>Database Architecture</option>
                <option>DevOps &amp; Deployment</option>
                <option>Legacy Modernisation</option>
              </select>
            </div>
            <div className={styles.group}>
              <label>Message</label>
              <textarea placeholder="Tell me about your project…" required />
            </div>
            <button type="submit" className={styles.submit}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

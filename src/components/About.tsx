import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.grid}>
        <div className={styles.text}>
          <div className="section-label reveal">About</div>
          <h2 className={`section-title reveal`}>
            Building things that <em className={styles.accent}>matter</em>
          </h2>
          <p className="reveal reveal-delay-1">
            I&apos;m <strong>Muhammad Rohadi</strong>, a software engineer based
            in Indonesia with a background in{" "}
            <strong>Mechanical Engineering</strong> from Andalas University.
            What started as curiosity about how things work mechanically turned
            into a deep passion for building software.
          </p>
          <p className="reveal reveal-delay-1">
            Over <strong>5+ years</strong>, I&apos;ve worked across fintech,
            banking, insurance, and telco sectors — shipping everything from
            payment APIs to enterprise banking platforms. I&apos;m equally
            comfortable deep in back-end logic as I am crafting a polished user
            interface.
          </p>
          <p className="reveal reveal-delay-2">
            Beyond code, I bring a{" "}
            <strong>fast-learning, multi-tasking mindset</strong> and strong
            communication skills — making collaboration with clients smooth and
            results-driven.
          </p>
          <div className={`${styles.links} reveal reveal-delay-2`}>
            <a
              href="https://github.com/mrohadi"
              target="_blank"
              rel="noopener noreferrer"
              className="chip"
            >
              ↗ GitHub
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01d34badbd54583f65"
              target="_blank"
              rel="noopener noreferrer"
              className="chip"
            >
              ↗ Upwork
            </a>
          </div>
        </div>

        <div className={`${styles.imgWrap} reveal`}>
          <div className={styles.imgBg} />
          <svg
            viewBox="0 0 480 600"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.img}
            role="img"
            aria-label="Abstract software engineering illustration"
          >
            <defs>
              <pattern id="aboutDots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="0" cy="0" r="0.8" fill="#252535" />
                <circle cx="40" cy="0" r="0.8" fill="#252535" />
                <circle cx="0" cy="40" r="0.8" fill="#252535" />
                <circle cx="40" cy="40" r="0.8" fill="#252535" />
              </pattern>
              <filter id="aboutGlow" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background */}
            <rect width="480" height="600" fill="#16161d" />

            {/* Dot grid */}
            <rect width="480" height="600" fill="url(#aboutDots)" />

            {/* Base circuit grid */}
            <g stroke="#1e1e2e" strokeWidth="0.75" fill="none">
              <line x1="0" y1="120" x2="480" y2="120" />
              <line x1="0" y1="240" x2="480" y2="240" />
              <line x1="0" y1="360" x2="480" y2="360" />
              <line x1="0" y1="480" x2="480" y2="480" />
              <line x1="80" y1="0" x2="80" y2="600" />
              <line x1="160" y1="0" x2="160" y2="600" />
              <line x1="240" y1="0" x2="240" y2="600" />
              <line x1="320" y1="0" x2="320" y2="600" />
              <line x1="400" y1="0" x2="400" y2="600" />
            </g>

            {/* Secondary traces */}
            <g stroke="#272736" strokeWidth="1.5" fill="none">
              <path d="M 40 60 H 160 V 80 H 280" />
              <path d="M 440 180 H 360 V 200 H 240" />
              <path d="M 40 420 H 120 V 440 H 280 V 460" />
              <path d="M 380 500 H 440 V 540" />
            </g>

            {/* Main amber data-flow path */}
            <path
              d="M 80 0 V 120 H 240 V 240 H 160 V 360 H 320 V 480 H 400 V 600"
              stroke="#c97a2a"
              strokeWidth="2"
              fill="none"
              opacity="0.7"
              filter="url(#aboutGlow)"
            />

            {/* Amber branch paths */}
            <g stroke="#c97a2a" strokeWidth="1.5" fill="none" opacity="0.28">
              <path d="M 240 120 H 400 V 180" />
              <path d="M 160 240 H 40 V 300" />
              <path d="M 160 360 H 80 V 420" />
              <path d="M 320 480 H 200" />
            </g>

            {/* Gray intersection nodes */}
            <g fill="#2a2a3c">
              <circle cx="80"  cy="120" r="3" /><circle cx="160" cy="120" r="3" />
              <circle cx="240" cy="120" r="3" /><circle cx="320" cy="120" r="3" />
              <circle cx="400" cy="120" r="3" /><circle cx="80"  cy="240" r="3" />
              <circle cx="160" cy="240" r="3" /><circle cx="240" cy="240" r="3" />
              <circle cx="320" cy="240" r="3" /><circle cx="400" cy="240" r="3" />
              <circle cx="80"  cy="360" r="3" /><circle cx="160" cy="360" r="3" />
              <circle cx="240" cy="360" r="3" /><circle cx="320" cy="360" r="3" />
              <circle cx="400" cy="360" r="3" /><circle cx="80"  cy="480" r="3" />
              <circle cx="160" cy="480" r="3" /><circle cx="240" cy="480" r="3" />
              <circle cx="320" cy="480" r="3" /><circle cx="400" cy="480" r="3" />
            </g>

            {/* Active amber nodes on flow path */}
            <g fill="#c97a2a" filter="url(#aboutGlow)">
              <circle cx="80"  cy="120" r="4.5" />
              <circle cx="240" cy="120" r="4.5" />
              <circle cx="240" cy="240" r="4.5" />
              <circle cx="160" cy="240" r="4.5" />
              <circle cx="160" cy="360" r="4.5" />
              <circle cx="320" cy="360" r="4.5" />
              <circle cx="320" cy="480" r="4.5" />
              <circle cx="400" cy="480" r="4.5" />
            </g>

            {/* Central focal rings */}
            <g filter="url(#aboutGlow)">
              <circle cx="240" cy="300" r="18" fill="none" stroke="#c97a2a" strokeWidth="1" opacity="0.25" />
              <circle cx="240" cy="300" r="10" fill="none" stroke="#c97a2a" strokeWidth="1.5" opacity="0.45" />
              <circle cx="240" cy="300" r="3.5" fill="#c97a2a" opacity="0.85" />
            </g>

            {/* Corner bracket decorations */}
            <g stroke="#c97a2a" strokeWidth="1.5" fill="none" opacity="0.3">
              <path d="M 28 28 H 52 V 52" />
              <path d="M 452 28 H 428 V 52" />
              <path d="M 28 572 H 52 V 548" />
              <path d="M 452 572 H 428 V 548" />
            </g>

            {/* Code symbols */}
            <text x="318" y="76"  fontFamily="monospace" fontSize="26" fill="#c97a2a" opacity="0.2">{"{ }"}</text>
            <text x="28"  y="214" fontFamily="monospace" fontSize="20" fill="#c97a2a" opacity="0.18">{"</>"}</text>
            <text x="338" y="444" fontFamily="monospace" fontSize="15" fill="#c97a2a" opacity="0.18">{"fn() =>"}</text>
            <text x="42"  y="538" fontFamily="monospace" fontSize="13" fill="#c97a2a" opacity="0.18">{"git commit"}</text>
            <text x="348" y="556" fontFamily="monospace" fontSize="11" fill="#c97a2a" opacity="0.15">{"0x1A4F"}</text>
            <text x="90"  y="308" fontFamily="monospace" fontSize="11" fill="#c97a2a" opacity="0.18">{"// build"}</text>
            <text x="258" y="418" fontFamily="monospace" fontSize="10" fill="#c97a2a" opacity="0.15">{"deploy"}</text>

            {/* Terminal progress lines */}
            <g fill="#c97a2a" opacity="0.18">
              <rect x="28" y="50" width="44" height="1.5" />
              <rect x="28" y="56" width="64" height="1.5" />
              <rect x="28" y="62" width="36" height="1.5" />
            </g>

            {/* Small indicator squares */}
            <g fill="none" stroke="#c97a2a" strokeWidth="1" opacity="0.3">
              <rect x="76"  y="356" width="8" height="8" />
              <rect x="396" y="116" width="8" height="8" />
              <rect x="316" y="476" width="8" height="8" />
            </g>
          </svg>
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

import styles from '../Styles/Hero.module.css'; // ✅ FIXED PATH

import geetha from "../assets/geethasye.jpeg"

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}></div>

      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>GEETHA SYE</h1>
          <p className={styles.subtitle}>Dance Choreographer</p>

          <p className={styles.description}>
            Renowned and well-known choreographer in Indian film industry with over 20+ years of experience.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>20+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
          </div>

          <div className={styles.buttons}>
            <button className={`${styles.btn} ${styles.btnPrimary}`}>
              View Portfolio
            </button>
            <button className={`${styles.btn} ${styles.btnSecondary}`}>
              Get in Touch
            </button>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.imageBorder}></div>

          <img
            src={geetha}
            alt="Geetha Sye"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

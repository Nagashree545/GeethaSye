import styles from '../Styles/Footer.module.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.content}>

          {/* ABOUT */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Geetha Sye</h3>
            <p
              style={{
                color: '#b0b0b0',
                fontSize: '0.9rem',
                lineHeight: '1.6',
              }}
            >
              Award-winning dance choreographer with 20+ years of experience in Indian cinema. Passionate about innovative choreography and artistic excellence.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Quick Links</h3>
            <a href="#about" className={styles.link}>About</a>
            <a href="#awards" className={styles.link}>Awards</a>
            <a href="#works" className={styles.link}>Works</a>
            <a href="#contact" className={styles.link}>Contact</a>
          </div>

          {/* CONTACT */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Connect</h3>
            <a href="mailto:geetha.sye@email.com" className={styles.link}>
              Email
            </a>
            <a href="tel:+919876543210" className={styles.link}>
              Phone
            </a>
            <a href="#" className={styles.link}>Instagram</a>
            <a href="#" className={styles.link}>Facebook</a>
          </div>

          {/* BADGES */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Recognition</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span className={styles.badge}>Chitara Awards 2025</span>
              <span className={styles.badge}>kfi Recognized</span>
              <span className={styles.badge}>35+ Films</span>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Geetha Sye. All rights reserved.
          </p>

          <div className={styles.links}>
            <a href="#" className={styles.link} style={{ fontSize: '0.85rem' }}>
              Privacy Policy
            </a>
            <a href="#" className={styles.link} style={{ fontSize: '0.85rem' }}>
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

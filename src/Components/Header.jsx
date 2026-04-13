import styles from '../Styles/Header.module.css';

export const Header = ({ onContactClick }) => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        <div className={styles.logo}>
          GEETHA <span className={styles.logoHighlight}>SYE</span>
        </div>

        <nav>
          <ul className={styles.nav}>
            <li>
              <button
                className={styles.navLink}
                onClick={() => scrollToSection('about')}
              >
                About
              </button>
            </li>
            <li>
              <button
                className={styles.navLink}
                onClick={() => scrollToSection('awards')}
              >
                Awards
              </button>
            </li>
            <li>
              <button
                className={styles.navLink}
                onClick={() => scrollToSection('works')}
              >
                Works
              </button>
            </li>
            <li>
              <button
                className={styles.navLink}
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        <button className={styles.mobileMenuBtn}>☰</button>
      </div>
    </header>
  );
};

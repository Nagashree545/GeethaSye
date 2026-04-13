import styles from '../Styles/About.module.css';

export const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>

        <div className={styles.content}>
          
          {/* LEFT SIDE */}
          <div className={styles.bioContent}>
            <p className={styles.bioText}>
              Geetha Sye is a renowned and well-known choreographer in the Indian film industry. With over 20+ years of experience, she has worked in 35+ films and contributed to their artistic value.
            </p>

            <p className={styles.bioText}>
              She is also the Star Suvarna - Sye to Dance reality show winner and the only female dance choreographer in the entire KFL. Her innovative choreography makes her stand out.
            </p>

            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <div className={styles.highlightTitle}>Experience</div>
                <div className={styles.highlightValue}>20+ Years Industry Experience</div>
              </div>

              <div className={styles.highlight}>
                <div className={styles.highlightTitle}>Film </div>
                <div className={styles.highlightValue}>35+ choreography </div>
              </div>

              <div className={styles.highlight}>
                <div className={styles.highlightTitle}>Awards</div>
                <div className={styles.highlightValue}>Multiple</div>
              </div>

              <div className={styles.highlight}>
                <div className={styles.highlightTitle}>Specialization</div>
                <div className={styles.highlightValue}>Dance Direction</div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className={styles.achievements}>
            <h3 className={styles.heading}>Key Achievements</h3>

            <div className={styles.achievement}>
              <span className={styles.achievementBadge}>RECOGNITION</span>
              <div className={styles.achievementTitle}>
                Star Suvarna - Sye to Dance Reality Show Winner
              </div>
              <div className={styles.achievementDesc}>
                Recognized as a talented choreographer through this prestigious platform
              </div>
            </div>

            <div className={styles.achievement}>
              <span className={styles.achievementBadge}>INDUSTRY</span>
              <div className={styles.achievementTitle}>
                Only Female Dance Choreographer in KFL
              </div>
              <div className={styles.achievementDesc}>
                Unique position as the sole female choreographer in KFL
              </div>
            </div>

            <div className={styles.achievement}>
              <span className={styles.achievementBadge}>EXPERTISE</span>
              <div className={styles.achievementTitle}>
                Innovative Dance Direction
              </div>
              <div className={styles.achievementDesc}>
                Known for fresh and creative choreography styles
              </div>
            </div>

            <div className={styles.achievement}>
              <span className={styles.achievementBadge}>PORTFOLIO</span>
              <div className={styles.achievementTitle}>
                35+ Feature Films
              </div>
              <div className={styles.achievementDesc}>
                Extensive work across Indian cinema
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

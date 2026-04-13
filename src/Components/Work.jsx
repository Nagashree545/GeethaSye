import styles from '../Styles/Work.module.css';
import img1 from "../assets/image.png";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/imag3.avif";
import img4 from "../assets/image4.jpg"

// ✅ Plain JS array (fixed)
const films = [
  {
    id: 1,
    title: 'Kousalya Supraja Rama',
    director: 'Shashank',
    year: 2023,
    role: 'Dance Choreography',
    image: img1, // ✅ correct (NO quotes)
  },
  {
    id: 2,
    title: 'Manada Kadalu',
    director: 'Yogaraj Bhat',
    year: 2025,
    role: 'Lead Choreographer',
    image: img2, // you can change later
  },
  {
    id: 3,
    title: 'TalaWarPete',
    director: 'Lakshman ',
    year: 2023,
    role: 'Lead Choreographer',
    image: img3,
  },
  {
    id: 4,
    title: 'Dear Sathya',
    director: 'Shivaganesh',
    year: 2023,
    role: 'Choreography Design',
    image: img4,
  },
  
];

// ✅ JSX Component
export const Works = () => {
  return (
    <section id="works" className={styles.works}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Major Works</h2>
        <p className={styles.subtitle}>
          Featured Films and Creative Projects
        </p>

        <div className={styles.grid}>
          {films.map((film) => (
            <div key={film.id} className={styles.card}>

              <div className={styles.cardImage}>
                <img
                  src={film.image}
                  alt={film.title}
                  className={styles.image}
                />
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{film.title}</h3>

                <div className={styles.cardMeta}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Director</span>
                    <span className={styles.metaValue}>
                      {film.director}
                    </span>
                  </div>

                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Year</span>
                    <span className={styles.metaValue}>
                      {film.year}
                    </span>
                  </div>
                </div>

                <p className={styles.cardDescription}>
                  {film.role}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

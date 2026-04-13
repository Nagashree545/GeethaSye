import styles from '../Styles/Award.module.css';

// ✅ Plain JavaScript array (no types)
const awards = [
  {
    id: 1,
    name: 'Chitara Musical Awards',
    year: 2025,
    category: 'Promising Choreographer',
    achievement:
      'Awarded for outstanding contribution to dance choreography in Indian cinema',
  },
  {
    id: 2,
    name: 'Star Suvarna - Sye to Dance',
    year: 2016,
    category: 'Reality Show Winner',
    achievement:
      'Winner of prestigious dance reality show showcasing exceptional talent',
  },
  {
    id: 3,
    name: 'kfi Recognition',
    year: 2022,
    category: 'Female Choreographer Excellence',
    achievement:
      'Only female dance choreographer recognized in the entire kfi',
  },
  {
    id: 4,
    name: 'Film Industry Excellence',
    year: 2021,
    category: 'Artistic Contribution',
    achievement:
      'Recognition for artistic value and innovative choreography across 30+ films',
  },
  {
    id: 5,
    name: 'Dance Direction Innovation',
    year: 2020,
    category: 'Creative Excellence',
    achievement:
      'Acknowledged for bringing fresh and innovative perspectives',
  },
  {
    id: 6,
    name: 'Industry Milestone',
    year: 2019,
    category: 'Career Achievement',
    achievement:
      'Completed 35+ feature films as lead choreographer',
  },
];

// ✅ JSX Component
export const AwardsTable = () => {
  return (
    <section id="awards" className={styles.awardsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Awards & Recognition</h2>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Award Name</th>
                <th>Year</th>
                <th>Category</th>
                <th>Achievement</th>
              </tr>
            </thead>

            <tbody>
              {awards.map((award) => (
                <tr key={award.id}>
                  <td className={styles.awardName}>{award.name}</td>
                  <td className={styles.year}>{award.year}</td>
                  <td>
                    <span className={styles.category}>
                      {award.category}
                    </span>
                  </td>
                  <td className={styles.achievement}>
                    {award.achievement}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </section>
  );
};

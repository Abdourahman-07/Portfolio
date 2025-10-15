import { skills } from "../../../data/skills";
import styles from "./page.module.css";

export default function Formations() {
  return (
    <div className={styles.sections}>
      <div className={styles.section}>
        <div className={styles.title}>
          <h2>Mon cursus</h2>
        </div>
        <div className={styles.content}>
          <p className={styles.formationsText}>
            Formation OpenClassrooms “Intégrateur web” 2024-2025, elle avait
            pour objectif l’enseignement par la pratique du développement web
            front-end avec les technologies de base du web et le framework
            React.
          </p>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.title}>
          <h2>Mes compétences</h2>
        </div>
        <div className={styles.content}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Catégorie</th>
                <th>Compétences</th>
              </tr>
            </thead>
            <tbody>
              {skills.map((skill, index) => (
                <tr key={index}>
                  <td>{skill.language}</td>
                  <td>{skill.level}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

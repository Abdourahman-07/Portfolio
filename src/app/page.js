import Link from "next/link";
import { skills } from "../../data/skills";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.homeBox}>
      <div className={styles.presentation}>
        Intégrateur web passionné, je conçois des interfaces modernes et
        performantes, avec une expertise affirmée dans l’univers JavaScript.
      </div>
      <div className={styles.linksBox}>
        <div className={`${styles.link} ${styles.linkLeft}`}>
          <Link href="/formation">
            <div>
              <h2>Parcours et Compétences</h2>
            </div>
          </Link>
        </div>
        <div className={`${styles.link} ${styles.linkRight}`}>
          <Link href="/projects">
            <div>
              <h2>Mes réalisations</h2>
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.skillsBox}>
        {skills.map((skill, index) => (
          <h2 key={index} className={styles.skill}>
            {skill.language}
          </h2>
        ))}
      </div>
    </div>
  );
}

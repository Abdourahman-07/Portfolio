import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>Mail : abdourahman.laloue@outlook.fr</div>
      <div>Téléphone : 06 82 59 59 78</div>
      <div>
        <a
          href="https://www.linkedin.com/in/abdourahman-laloue/"
          target="_blank"
        >
          Profil LinkedIn
        </a>
      </div>
    </footer>
  );
}

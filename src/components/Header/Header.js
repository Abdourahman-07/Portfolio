"use client";
import Button from "../Button/Button";
import styles from "./Header.module.css";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <video autoPlay loop muted playsInline className={styles.backgroundVideo}>
        <source src="background-video.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>
      <div className={styles.linksBox}>
        <Link href="/" className={styles.link}>
          Accueil
        </Link>
        <Link href="/formation" className={styles.link}>
          Parcours et compétences
        </Link>
        <Link href="/projects" className={styles.link}>
          Mes réalisations
        </Link>
      </div>
      <div className={styles.presentation}>
        <div>
          <Image
            className={styles.imageBox}
            src="/photo-profil-zoom.png"
            alt="Logo personnel du développeur"
            width={100}
            height={100}
          />
        </div>
        <div className={styles.titleBox}>
          <h1>Abdourahman Laloue, Développeur web front-end</h1>
        </div>
      </div>
      <div className={styles.contactBox}>
        <Link href="/contact">
          <Button radius="all" title="Me contacter" />
        </Link>
      </div>
    </header>
  );
}

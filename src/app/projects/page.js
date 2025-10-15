"use client";
import "../globals.css";
import Image from "next/image";
import Button from "../../components/Button/Button";
import { projects } from "../../../data/projects";
import { useState } from "react";
import styles from "./page.module.css";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <div
        className={`${styles.projectsContainer} ${
          selectedProject ? styles.containerReduced : ""
        }`}
      >
        {projects.map((project, index) => (
          <div className={styles.projectCard} key={index}>
            <div className={styles.projectLogo}>
              <Image
                src={project.firstImage}
                alt="Logo du projet"
                width={120}
                height={60}
              />
            </div>
            <div className={styles.resume}>
              <p>{project.resume}</p>
            </div>
            <Button
              radius="bottom"
              title="Détails"
              onClick={() => handleProjectClick(project)}
            />
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className={styles.modal}>
          <i
            className={`fa-solid fa-xmark ${styles.closeModal}`}
            onClick={handleCloseModal}
          ></i>
          <div className={styles.modalLogo}>
            <Image
              src={selectedProject.firstImage}
              alt="Logo du projet"
              width={600}
              height={400}
            />
          </div>
          <h2>{selectedProject.name}</h2>
          <div className={styles.sectionShort}>
            <div className={styles.languages}>
              {selectedProject.languages.map((language, index) => (
                <p key={index}>{language}</p>
              ))}
            </div>
            <div className={styles.modalResume}>
              <p>{selectedProject.resume}</p>
            </div>
          </div>

          <div className={styles.modalDescription}>
            <p>{selectedProject.slides[0].description}</p>
          </div>
          <Button
            radius="bottom"
            title="lien du projet"
            width="big"
            link={selectedProject.link}
          />
        </div>
      )}
    </>
  );
}

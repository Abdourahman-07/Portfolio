"use client";
import styles from "./page.module.css";
import Button from "../../components/Button/Button";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sanitizeInput = (input) => {
    return input
      .replace(/[<>]/g, "")
      .replace(/[&]/g, "et")
      .replace(/['"]/g, "")
      .trim();
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email === "" || regex.test(email);
  };

  const handleSubmit = () => {
    if (formData.name.length < 2) {
      alert("Le nom doit contenir au moins 2 caractères");
      return;
    }

    if (!validateEmail(formData.email)) {
      alert("Format d'email invalide");
      return;
    }

    if (formData.message.length < 10) {
      alert("Le message doit contenir au moins 10 caractères");
      return;
    }

    const mailtoLink = `mailto:abdourahman.laloue@outlook.fr?subject=Message de ${encodeURIComponent(
      sanitizeInput(formData.name)
    )}&body=${encodeURIComponent(
      sanitizeInput(formData.message)
    )}%0D%0A%0D%0AEmail de contact : ${encodeURIComponent(
      sanitizeInput(formData.email)
    )}`;

    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className={styles.contact}>
      <div className={styles.inputName}>
        <p>Prénom & Nom</p>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          minLength={2}
          required
        />
      </div>
      <div className={styles.inputMail}>
        <p>Adresse mail (facultatif)</p>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
        />
      </div>
      <div className={styles.inputText}>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          minLength={10}
          required
        ></textarea>
      </div>
      <Button radius="all" title="Envoyer" onClick={handleSubmit} />
    </div>
  );
}

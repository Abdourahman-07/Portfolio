import styles from "./Button.module.css";

export default function Button({ title, onClick, radius, width, link }) {
  const getBorderRadiusClass = () => {
    switch (radius) {
      case "bottom":
        return styles.radiusBottom;
      case "all":
        return styles.radiusAll;
      default:
        return "";
    }
  };

  const getWidth = () => {
    switch (width) {
      case "big":
        return styles.widthBig;
      default:
        return "";
    }
  };

  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${styles.button} ${getBorderRadiusClass()} ${getWidth()}`}
    >
      {title}
    </button>
  );
}

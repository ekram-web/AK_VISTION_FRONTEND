import React from "react";
import styles from "./CookieBanner.module.css";

const CookieBanner = () => {
  const [visible, setVisible] = React.useState(true);
  if (!visible) return null;

  return (
    <div className={styles.banner}>
      <div className="container" style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div className={styles.text}>
          <strong>Cookies Preferences</strong> We use cookies to improve your experience. 
          See our <a href="#">cookie policy</a> for more.
        </div>
        <div className={styles.actions}>
          <button className={styles.secondary} onClick={() => setVisible(false)}>Manage cookies</button>
          <button className={styles.primary} onClick={() => setVisible(false)}>Accept All</button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;



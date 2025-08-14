import React from "react";
import styles from "./Newsroom.module.css";

const NewsCard = ({ tag, date, title, category }) => (
  <a href="#" className={styles.card}>
    <div className={styles.meta}>
      <span className={styles.tag}>{tag}</span>
      <span className={styles.date}>{date}</span>
    </div>
    <h3 className={styles.title}>{title}</h3>
    <div className={styles.category}>{category}</div>
  </a>
);

const Newsroom = () => {
  const items = [
    {
      tag: "Blog",
      date: "June 30, 2025",
      title:
        "Putting video on the podium: Improving sporting safety and competitiveness",
      category: "Sports · Cameras",
    },
    {
      tag: "Blog",
      date: "June 26, 2025",
      title:
        "Bringing invisible science to life: caring initiative for children",
      category: "CSR",
    },
    {
      tag: "Latest News",
      date: "July 01, 2025",
      title: "New DeepinViewX bullet cameras powered by large-scale AI models",
      category: "Products",
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Newsroom</h2>
          <a href="#" className={styles.viewMore}>
            View more
          </a>
        </div>
        <div className={styles.grid}>
          {items.map((n, i) => (
            <NewsCard key={i} {...n} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Newsroom;



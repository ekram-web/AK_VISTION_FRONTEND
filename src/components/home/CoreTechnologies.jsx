import React from "react";
import styles from "./CoreTechnologies.module.css";

const TechCard = ({ title, description, image }) => (
  <div className={styles.card}>
    <div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
    <div className={styles.content}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
      <a href="#" className={styles.link}>
        Learn More →
      </a>
    </div>
  </div>
);

const CoreTechnologies = () => {
  const cards = [
    {
      title: "Guanlan Large-Scale AI Models",
      description:
        "A suite of large AI models enabling advanced perception and multimodal fusion.",
      image:
        "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "See Clearer Technology",
      description:
        "Optical designs and algorithms for HD imagery and superior night vision.",
      image:
        "https://images.unsplash.com/photo-1530031665785-69e9c0d39180?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "EaseEngine",
      description:
        "Serverless management and intuitive experiences for flexible deployments.",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  const cardsRef = React.useRef([]);
  React.useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(styles.inView);
          }
        });
      },
      { threshold: 0.15 }
    );
    cardsRef.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Core Technologies</h2>
          <a href="#" className={styles.viewMore}>
            View more
          </a>
        </div>
        <div className={styles.grid}>
          {cards.map((c, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className={styles.appear}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <TechCard title={c.title} description={c.description} image={c.image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTechnologies;



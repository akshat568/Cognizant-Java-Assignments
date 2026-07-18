import React from "react";
function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.title}>Cognizant Academy</h1>
        <h2 style={styles.subtitle}>Trainer Management System</h2>
        <p style={styles.description}>Welcome to the Cognizant Academy Trainer Portal. Browse our expert trainers and their areas of expertise.</p>
        <div style={styles.stats}>
          <div style={styles.statCard}><span style={styles.statNum}>5</span><span style={styles.statLabel}>Expert Trainers</span></div>
          <div style={styles.statCard}><span style={styles.statNum}>5+</span><span style={styles.statLabel}>Technologies</span></div>
          <div style={styles.statCard}><span style={styles.statNum}>20+</span><span style={styles.statLabel}>Skills Covered</span></div>
        </div>
      </div>
    </div>
  );
}
const styles = {
  container: { padding: "40px 20px" },
  hero: { maxWidth: "700px", margin: "0 auto", textAlign: "center", backgroundColor: "#fff", borderRadius: "16px", padding: "50px 40px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" },
  title: { color: "#2c3e50", fontSize: "2.5rem", marginBottom: "10px" },
  subtitle: { color: "#3498db", fontSize: "1.4rem", marginBottom: "20px", fontWeight: "400" },
  description: { color: "#7f8c8d", lineHeight: "1.8", marginBottom: "30px" },
  stats: { display: "flex", justifyContent: "center", gap: "25px", flexWrap: "wrap" },
  statCard: { backgroundColor: "#f0f4f8", borderRadius: "10px", padding: "20px 30px", display: "flex", flexDirection: "column", alignItems: "center" },
  statNum: { fontSize: "2rem", fontWeight: "bold", color: "#2980b9" },
  statLabel: { fontSize: "0.85rem", color: "#7f8c8d", marginTop: "5px" },
};
export default Home;

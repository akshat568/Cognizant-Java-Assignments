import React from "react";
import { useParams, Link } from "react-router-dom";
import TrainersMock from "../TrainersMock";
function TrainerDetail() {
  const { id } = useParams();
  const trainer = TrainersMock.find(t => t.trainerId === parseInt(id));
  if (!trainer) return <div style={{ padding: "20px" }}><h2>Trainer not found.</h2><Link to="/trainers">Back</Link></div>;
  return (
    <div style={styles.container}>
      <Link to="/trainers" style={styles.back}>Back to Trainers List</Link>
      <div style={styles.card}>
        <h2 style={styles.name}>{trainer.name}</h2>
        <table style={styles.table}>
          <tbody>
            <tr><td style={styles.label}>Trainer ID</td><td style={styles.value}>{trainer.trainerId}</td></tr>
            <tr><td style={styles.label}>Email</td><td style={styles.value}>{trainer.email}</td></tr>
            <tr><td style={styles.label}>Phone</td><td style={styles.value}>{trainer.phone}</td></tr>
            <tr><td style={styles.label}>Technology</td><td style={styles.value}>{trainer.technology}</td></tr>
            <tr><td style={styles.label}>Skills</td><td style={styles.value}><div style={styles.skillsContainer}>{trainer.skills.map((s,i)=><span key={i} style={styles.badge}>{s}</span>)}</div></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
const styles = {
  container: { padding: "20px" },
  back: { color: "#2980b9", textDecoration: "none", fontWeight: "bold", display: "inline-block", marginBottom: "20px" },
  card: { backgroundColor: "#fff", borderRadius: "12px", padding: "30px", boxShadow: "0 4px 16px rgba(0,0,0,0.1)", maxWidth: "600px" },
  name: { color: "#2c3e50", marginBottom: "20px", fontSize: "1.8rem", borderBottom: "3px solid #3498db", paddingBottom: "10px" },
  table: { width: "100%", borderCollapse: "collapse" },
  label: { padding: "10px 15px 10px 0", fontWeight: "600", color: "#2c3e50", width: "140px", verticalAlign: "top" },
  value: { padding: "10px 0", color: "#555" },
  skillsContainer: { display: "flex", flexWrap: "wrap", gap: "8px" },
  badge: { backgroundColor: "#2980b9", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "0.85rem" },
};
export default TrainerDetail;

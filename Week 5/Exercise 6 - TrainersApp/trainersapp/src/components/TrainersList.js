import React from "react";
import { Link } from "react-router-dom";
import TrainersMock from "../TrainersMock";
function TrainersList() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Trainers List</h2>
      <table style={styles.table}>
        <thead>
          <tr style={styles.headerRow}>
            <th style={styles.th}>T-ID</th><th style={styles.th}>Name</th><th style={styles.th}>Phone</th><th style={styles.th}>Email</th><th style={styles.th}>Stream</th><th style={styles.th}>Skills</th>
          </tr>
        </thead>
        <tbody>
          {TrainersMock.map(t => (
            <tr key={t.trainerId} style={styles.row}>
              <td style={styles.td}>{t.trainerId}</td>
              <td style={styles.td}><Link to={`/trainers/${t.trainerId}`} style={styles.link}>{t.name}</Link></td>
              <td style={styles.td}>{t.phone}</td>
              <td style={styles.td}>{t.email}</td>
              <td style={styles.td}>{t.technology}</td>
              <td style={styles.td}>{t.skills.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
const styles = {
  container: { padding: "20px" },
  heading: { color: "#2c3e50", marginBottom: "20px" },
  table: { width: "100%", borderCollapse: "collapse", backgroundColor: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", borderRadius: "8px", overflow: "hidden" },
  headerRow: { backgroundColor: "#2c3e50", color: "#fff" },
  th: { padding: "12px 15px", textAlign: "left" },
  row: { borderBottom: "1px solid #ecf0f1" },
  td: { padding: "10px 15px", color: "#555" },
  link: { color: "#2980b9", textDecoration: "none", fontWeight: "bold" },
};
export default TrainersList;

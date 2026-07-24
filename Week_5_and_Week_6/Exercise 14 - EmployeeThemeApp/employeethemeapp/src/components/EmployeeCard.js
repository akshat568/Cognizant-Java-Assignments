import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";
const themeStyles = {
  light: { card: { backgroundColor: "#ffffff", border: "1px solid #ddd", color: "#2c3e50" }, btn: { backgroundColor: "#3498db", color: "#fff" } },
  dark:  { card: { backgroundColor: "#2c3e50", border: "1px solid #1a252f", color: "#ecf0f1" }, btn: { backgroundColor: "#e74c3c", color: "#fff" } },
};
function EmployeeCard({ employee }) {
  const theme = useContext(ThemeContext);
  const t = themeStyles[theme] || themeStyles.light;
  return (
    <div style={{ ...styles.card, ...t.card }}>
      <div style={styles.avatar}>{employee.name.charAt(0)}</div>
      <h3 style={styles.name}>{employee.name}</h3>
      <p style={styles.role}>{employee.role}</p>
      <p style={styles.dept}>{employee.department}</p>
      <button style={{ ...styles.btn, ...t.btn }} className={`btn-${theme}`}>View Profile</button>
    </div>
  );
}
const styles = {
  card: { borderRadius: "12px", padding: "25px 20px", textAlign: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", transition: "all 0.3s ease" },
  avatar: { width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "#3498db", color: "#fff", fontSize: "1.8rem", fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 15px" },
  name: { margin: "0 0 5px", fontSize: "1.1rem" },
  role: { margin: "0 0 5px", opacity: 0.7, fontSize: "0.9rem" },
  dept: { margin: "0 0 15px", opacity: 0.7, fontSize: "0.85rem" },
  btn: { padding: "8px 20px", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "600", fontSize: "0.9rem" },
};
export default EmployeeCard;

import React from "react";
import EmployeeCard from "./EmployeeCard";
const employees = [
  { id: 1, name: "Rahul Sharma", role: "Software Engineer", department: "Technology" },
  { id: 2, name: "Priya Patel", role: "Product Manager", department: "Product" },
  { id: 3, name: "Arun Kumar", role: "UX Designer", department: "Design" },
  { id: 4, name: "Sneha Gupta", role: "QA Engineer", department: "Quality" },
];
function EmployeesList() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Employee List</h2>
      <div style={styles.grid}>{employees.map(emp => <EmployeeCard key={emp.id} employee={emp} />)}</div>
    </div>
  );
}
const styles = {
  container: { padding: "20px" },
  heading: { textAlign: "center", marginBottom: "25px", color: "inherit" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px" },
};
export default EmployeesList;

import React, { Component } from "react";
import "./App.css";
class ComplaintRegister extends Component {
  constructor(props) {
    super(props);
    this.state = { employeeName: "", complaint: "", submitted: false, referenceNumber: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) { this.setState({ [e.target.name]: e.target.value }); }
  handleSubmit(e) {
    e.preventDefault();
    const refNum = "REF-" + Date.now().toString().slice(-6);
    this.setState({ submitted: true, referenceNumber: refNum });
    alert("Complaint submitted!\nReference Number: " + refNum + "\nPlease use this for follow-ups.");
  }
  render() {
    const { employeeName, complaint, submitted, referenceNumber } = this.state;
    return (
      <div style={styles.page}>
        <div style={styles.card}>
          <h1 style={styles.title}>Ticket Raising App</h1>
          <p style={styles.subtitle}>Register your complaint and get a reference number</p>
          {submitted && <div style={styles.successBanner}>Complaint Submitted! Reference: <strong>{referenceNumber}</strong></div>}
          <form onSubmit={this.handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Employee Name</label>
              <input type="text" name="employeeName" value={employeeName} onChange={this.handleChange} placeholder="Enter your name" required style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Complaint</label>
              <textarea name="complaint" value={complaint} onChange={this.handleChange} placeholder="Describe your complaint..." required rows={5} style={styles.textarea} />
            </div>
            <button type="submit" style={styles.submitBtn}>Submit Complaint</button>
          </form>
        </div>
      </div>
    );
  }
}
const styles = {
  page: { fontFamily: "Segoe UI, sans-serif", backgroundColor: "#f0f4f8", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" },
  card: { backgroundColor: "#fff", borderRadius: "16px", padding: "40px", width: "100%", maxWidth: "520px", boxShadow: "0 8px 30px rgba(0,0,0,0.12)" },
  title: { textAlign: "center", color: "#2c3e50", marginBottom: "8px" },
  subtitle: { textAlign: "center", color: "#7f8c8d", marginBottom: "25px", fontSize: "0.95rem" },
  successBanner: { backgroundColor: "#d5f5e3", color: "#1e8449", padding: "12px 16px", borderRadius: "8px", marginBottom: "20px", textAlign: "center" },
  form: { display: "flex", flexDirection: "column", gap: "18px" },
  formGroup: { display: "flex", flexDirection: "column", gap: "6px" },
  label: { fontWeight: "600", color: "#2c3e50", fontSize: "0.95rem" },
  input: { padding: "12px 14px", border: "1.5px solid #ddd", borderRadius: "8px", fontSize: "1rem", outline: "none" },
  textarea: { padding: "12px 14px", border: "1.5px solid #ddd", borderRadius: "8px", fontSize: "1rem", resize: "vertical", outline: "none" },
  submitBtn: { padding: "14px", backgroundColor: "#2980b9", color: "#fff", border: "none", borderRadius: "10px", fontSize: "1.05rem", cursor: "pointer", fontWeight: "bold" },
};
function App() { return <ComplaintRegister />; }
export default App;

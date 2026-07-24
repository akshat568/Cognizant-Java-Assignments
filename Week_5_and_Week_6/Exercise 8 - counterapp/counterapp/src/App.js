import React, { Component } from "react";
import "./App.css";

class CountPeople extends Component {
  constructor(props) {
    super(props);
    this.state = { entrycount: 0, exitcount: 0 };
    this.UpdateEntry = this.UpdateEntry.bind(this);
    this.UpdateExit = this.UpdateExit.bind(this);
  }
  UpdateEntry() { this.setState(prev => ({ entrycount: prev.entrycount + 1 })); }
  UpdateExit() { this.setState(prev => ({ exitcount: prev.exitcount + 1 })); }
  render() {
    const { entrycount, exitcount } = this.state;
    const inside = Math.max(0, entrycount - exitcount);
    return (
      <div style={styles.page}>
        <h1 style={styles.title}>Mall People Counter</h1>
        <p style={styles.subtitle}>Track people entering and exiting the mall</p>
        <div style={styles.countersRow}>
          <div style={{ ...styles.counterCard, borderTop: "4px solid #27ae60" }}>
            <p style={styles.counterLabel}>People Entered</p>
            <p style={{ ...styles.counterValue, color: "#27ae60" }}>{entrycount}</p>
          </div>
          <div style={{ ...styles.counterCard, borderTop: "4px solid #e74c3c" }}>
            <p style={styles.counterLabel}>People Exited</p>
            <p style={{ ...styles.counterValue, color: "#e74c3c" }}>{exitcount}</p>
          </div>
          <div style={{ ...styles.counterCard, borderTop: "4px solid #2980b9" }}>
            <p style={styles.counterLabel}>Currently Inside</p>
            <p style={{ ...styles.counterValue, color: "#2980b9" }}>{inside}</p>
          </div>
        </div>
        <div style={styles.buttonsRow}>
          <button style={{ ...styles.btn, backgroundColor: "#27ae60" }} onClick={this.UpdateEntry}>Login (Enter Mall)</button>
          <button style={{ ...styles.btn, backgroundColor: "#e74c3c" }} onClick={this.UpdateExit}>Exit Mall</button>
        </div>
        <div style={styles.logBox}>
          <p>Number of people who entered the mall: <strong>{entrycount}</strong></p>
          <p>Number of people who exited the mall: <strong>{exitcount}</strong></p>
        </div>
      </div>
    );
  }
}

const styles = {
  page: { fontFamily: "Segoe UI, sans-serif", maxWidth: "750px", margin: "0 auto", padding: "30px 20px", backgroundColor: "#f5f7fa", minHeight: "100vh" },
  title: { textAlign: "center", color: "#2c3e50", fontSize: "2rem", marginBottom: "5px" },
  subtitle: { textAlign: "center", color: "#7f8c8d", marginBottom: "30px" },
  countersRow: { display: "flex", gap: "20px", marginBottom: "30px", justifyContent: "center", flexWrap: "wrap" },
  counterCard: { backgroundColor: "#fff", borderRadius: "12px", padding: "25px 35px", textAlign: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.08)", flex: "1", minWidth: "160px" },
  counterLabel: { color: "#7f8c8d", fontSize: "0.95rem", marginBottom: "10px", fontWeight: "600" },
  counterValue: { fontSize: "3rem", fontWeight: "bold", margin: 0 },
  buttonsRow: { display: "flex", gap: "20px", justifyContent: "center", marginBottom: "25px" },
  btn: { padding: "14px 32px", color: "#fff", border: "none", borderRadius: "10px", fontSize: "1.05rem", cursor: "pointer", fontWeight: "bold" },
  logBox: { backgroundColor: "#fff", borderRadius: "10px", padding: "20px 25px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", lineHeight: "2", color: "#555" },
};

function App() { return <CountPeople />; }
export default App;

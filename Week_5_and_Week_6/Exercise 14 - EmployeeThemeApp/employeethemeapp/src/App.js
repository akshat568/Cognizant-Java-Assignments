import React, { Component } from "react";
import ThemeContext from "./ThemeContext";
import EmployeesList from "./components/EmployeesList";
import "./App.css";
class App extends Component {
  constructor(props) { super(props); this.state = { theme: "light" }; this.toggleTheme = this.toggleTheme.bind(this); }
  toggleTheme() { this.setState(prev => ({ theme: prev.theme === "light" ? "dark" : "light" })); }
  render() {
    const { theme } = this.state;
    const isDark = theme === "dark";
    return (
      <ThemeContext.Provider value={theme}>
        <div style={{ ...styles.app, backgroundColor: isDark ? "#1a252f" : "#f0f4f8", color: isDark ? "#ecf0f1" : "#2c3e50" }}>
          <header style={styles.header}>
            <h1 style={styles.title}>Employee Management App</h1>
            <div style={styles.themeControl}>
              <span style={{ color: "#ecf0f1", marginRight: "12px" }}>Theme: <strong>{theme.toUpperCase()}</strong></span>
              <button style={{ ...styles.toggleBtn, backgroundColor: isDark ? "#f39c12" : "#8e44ad" }} onClick={this.toggleTheme}>
                {isDark ? "Switch to Light" : "Switch to Dark"}
              </button>
            </div>
          </header>
          <div style={{ padding: "12px 30px", textAlign: "center", backgroundColor: isDark ? "#2c3e50" : "#eaf4fb", fontSize: "0.95rem" }}>
            Using React Context API - theme shared via ThemeContext, not props!
          </div>
          <EmployeesList />
        </div>
      </ThemeContext.Provider>
    );
  }
}
const styles = {
  app: { fontFamily: "Segoe UI, sans-serif", minHeight: "100vh", transition: "all 0.3s" },
  header: { backgroundColor: "#2c3e50", padding: "15px 30px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" },
  title: { color: "#fff", margin: 0, fontSize: "1.5rem" },
  themeControl: { display: "flex", alignItems: "center" },
  toggleBtn: { padding: "9px 20px", border: "none", borderRadius: "8px", color: "#fff", fontSize: "0.95rem", cursor: "pointer", fontWeight: "bold" },
};
export default App;

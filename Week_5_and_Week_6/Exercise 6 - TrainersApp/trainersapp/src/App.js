import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import TrainersList from "./components/TrainersList";
import TrainerDetail from "./components/TrainerDetail";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div style={styles.app}>
        <nav style={styles.nav}>
          <span style={styles.brand}>Cognizant TrainersApp</span>
          <div style={styles.navLinks}>
            <Link to="/" style={styles.navLink}>Home</Link>
            <Link to="/trainers" style={styles.navLink}>Trainers</Link>
          </div>
        </nav>
        <div style={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trainers" element={<TrainersList />} />
            <Route path="/trainers/:id" element={<TrainerDetail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

const styles = {
  app: { fontFamily: "Segoe UI, sans-serif", minHeight: "100vh", backgroundColor: "#f0f4f8" },
  nav: { backgroundColor: "#2c3e50", color: "#fff", padding: "15px 30px", display: "flex", justifyContent: "space-between", alignItems: "center" },
  brand: { fontSize: "1.3rem", fontWeight: "bold" },
  navLinks: { display: "flex", gap: "25px" },
  navLink: { color: "#ecf0f1", textDecoration: "none", fontSize: "1rem", fontWeight: "500", padding: "6px 14px", borderRadius: "6px" },
  content: { maxWidth: "1100px", margin: "0 auto", padding: "20px" },
};

export default App;

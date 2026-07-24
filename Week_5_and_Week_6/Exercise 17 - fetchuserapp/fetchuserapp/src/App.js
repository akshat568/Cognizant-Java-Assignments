import React, { Component } from "react";
import "./App.css";
class Getuser extends Component {
  constructor(props) { super(props); this.state = { user: null, loading: true, error: null }; }
  async componentDidMount() {
    try {
      const response = await fetch("https://api.randomuser.me/");
      const data = await response.json();
      const result = data.results[0];
      this.setState({
        user: {
          title: result.name.title, firstname: result.name.first, lastname: result.name.last,
          email: result.email, phone: result.phone,
          location: `${result.location.city}, ${result.location.country}`,
          picture: result.picture.large, gender: result.gender, age: result.dob.age,
        },
        loading: false,
      });
    } catch (err) { this.setState({ error: "Failed to fetch user data. Please try again.", loading: false }); }
  }
  render() {
    const { user, loading, error } = this.state;
    return (
      <div style={styles.page}>
        <h1 style={styles.title}>Fetch User App</h1>
        <p style={styles.subtitle}>User details from https://api.randomuser.me/</p>
        {loading && <div style={styles.loadingBox}><p>Fetching user data...</p></div>}
        {error && <div style={styles.errorBox}>{error}</div>}
        {user && (
          <div style={styles.card}>
            <img src={user.picture} alt={user.firstname} style={styles.avatar} />
            <h2 style={styles.name}>{user.title}. {user.firstname} {user.lastname}</h2>
            <div style={styles.details}>
              <div style={styles.detailRow}><span style={styles.detailLabel}>Email</span><span>{user.email}</span></div>
              <div style={styles.detailRow}><span style={styles.detailLabel}>Phone</span><span>{user.phone}</span></div>
              <div style={styles.detailRow}><span style={styles.detailLabel}>Location</span><span>{user.location}</span></div>
              <div style={styles.detailRow}><span style={styles.detailLabel}>Age</span><span>{user.age} years</span></div>
              <div style={styles.detailRow}><span style={styles.detailLabel}>Gender</span><span style={{ textTransform: "capitalize" }}>{user.gender}</span></div>
            </div>
            <button style={styles.refreshBtn} onClick={() => { this.setState({ loading: true, user: null }); this.componentDidMount(); }}>Fetch Another User</button>
          </div>
        )}
      </div>
    );
  }
}
const styles = {
  page: { fontFamily: "Segoe UI, sans-serif", backgroundColor: "#f0f4f8", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", padding: "30px 20px" },
  title: { color: "#2c3e50", fontSize: "2rem", marginBottom: "5px" },
  subtitle: { color: "#7f8c8d", marginBottom: "30px", fontSize: "0.95rem" },
  loadingBox: { textAlign: "center", padding: "40px", color: "#7f8c8d" },
  errorBox: { backgroundColor: "#fdecea", color: "#c0392b", padding: "15px 25px", borderRadius: "10px" },
  card: { backgroundColor: "#fff", borderRadius: "16px", padding: "35px", maxWidth: "420px", width: "100%", boxShadow: "0 8px 30px rgba(0,0,0,0.12)", textAlign: "center" },
  avatar: { width: "120px", height: "120px", borderRadius: "50%", border: "4px solid #3498db", marginBottom: "15px" },
  name: { color: "#2c3e50", fontSize: "1.6rem", marginBottom: "20px" },
  details: { textAlign: "left", marginBottom: "25px" },
  detailRow: { display: "flex", justifyContent: "space-between", padding: "9px 0", borderBottom: "1px solid #ecf0f1", fontSize: "0.95rem", color: "#555" },
  detailLabel: { fontWeight: "600", color: "#2c3e50", minWidth: "100px" },
  refreshBtn: { padding: "12px 28px", backgroundColor: "#27ae60", color: "#fff", border: "none", borderRadius: "10px", fontSize: "1rem", cursor: "pointer", fontWeight: "bold" },
};
function App() { return <Getuser />; }
export default App;

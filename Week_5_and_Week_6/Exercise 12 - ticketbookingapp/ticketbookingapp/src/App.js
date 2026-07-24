import React, { Component } from "react";
import "./App.css";

class GuestPage extends Component {
  render() {
    const flights = [
      { id: 1, from: "Delhi (DEL)", to: "Mumbai (BOM)", date: "2026-08-10", time: "06:30", airline: "IndiGo", price: 3500 },
      { id: 2, from: "Mumbai (BOM)", to: "Bangalore (BLR)", date: "2026-08-12", time: "09:00", airline: "Air India", price: 4200 },
      { id: 3, from: "Bangalore (BLR)", to: "Chennai (MAA)", date: "2026-08-15", time: "11:45", airline: "SpiceJet", price: 2800 },
      { id: 4, from: "Chennai (MAA)", to: "Kolkata (CCU)", date: "2026-08-18", time: "14:20", airline: "Vistara", price: 5100 },
    ];
    return (
      <div style={styles.container}>
        <div style={styles.guestBanner}>
          <h2>Available Flights</h2>
          <p style={{ color: "#e74c3c" }}>Please Login to book tickets.</p>
        </div>
        <div style={styles.flightGrid}>
          {flights.map(f => (
            <div key={f.id} style={styles.flightCard}>
              <h3>{f.from} to {f.to}</h3>
              <p>Date: {f.date} | Time: {f.time}</p>
              <p>Airline: <strong>{f.airline}</strong></p>
              <p>Price: <strong style={{ color: "#27ae60" }}>Rs.{f.price}</strong></p>
              <button style={styles.disabledBtn} disabled>Book Ticket (Login Required)</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

class UserPage extends Component {
  constructor(props) { super(props); this.state = { booked: false }; }
  render() {
    return (
      <div style={styles.container}>
        <div style={{ ...styles.guestBanner, backgroundColor: "#d5f5e3" }}>
          <h2>Welcome, {this.props.username}!</h2>
          <p>You are logged in. You can book tickets.</p>
        </div>
        {this.state.booked ? (
          <div style={{ backgroundColor: "#d5f5e3", color: "#1e8449", padding: "20px", borderRadius: "10px", fontWeight: "bold" }}>
            Ticket Booked! Delhi to Mumbai on 2026-08-10
          </div>
        ) : (
          <div style={styles.flightCard}>
            <h3>Delhi (DEL) to Mumbai (BOM)</h3>
            <p>Date: 2026-08-10 | Time: 06:30 | IndiGo</p>
            <p>Price: <strong style={{ color: "#27ae60" }}>Rs.3,500</strong></p>
            <button style={styles.bookBtn} onClick={() => this.setState({ booked: true })}>Book Now</button>
          </div>
        )}
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false, username: "Harsh" };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogin() { this.setState({ isLoggedIn: true }); }
  handleLogout() { this.setState({ isLoggedIn: false }); }
  render() {
    const { isLoggedIn, username } = this.state;
    return (
      <div style={styles.app}>
        <header style={styles.header}>
          <h1 style={{ margin: 0 }}>Ticket Booking App</h1>
          {isLoggedIn
            ? <button style={{ ...styles.authBtn, backgroundColor: "#e74c3c" }} onClick={this.handleLogout}>Logout</button>
            : <button style={{ ...styles.authBtn, backgroundColor: "#27ae60" }} onClick={this.handleLogin}>Login</button>}
        </header>
        <div style={{ padding: "10px 20px", textAlign: "center", backgroundColor: isLoggedIn ? "#d5f5e3" : "#fdecea", color: isLoggedIn ? "#1e8449" : "#c0392b", fontWeight: "bold" }}>
          {isLoggedIn ? "Logged In as " + username : "Not Logged In - Viewing as Guest"}
        </div>
        {isLoggedIn ? <UserPage username={username} /> : <GuestPage />}
      </div>
    );
  }
}

const styles = {
  app: { fontFamily: "Segoe UI, sans-serif", minHeight: "100vh", backgroundColor: "#f0f4f8" },
  header: { backgroundColor: "#2c3e50", color: "#fff", padding: "15px 30px", display: "flex", justifyContent: "space-between", alignItems: "center" },
  authBtn: { padding: "10px 22px", color: "#fff", border: "none", borderRadius: "6px", fontSize: "1rem", cursor: "pointer", fontWeight: "bold" },
  container: { padding: "20px 30px" },
  guestBanner: { backgroundColor: "#fff", padding: "20px", borderRadius: "10px", marginBottom: "20px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" },
  flightGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" },
  flightCard: { backgroundColor: "#fff", padding: "18px", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", lineHeight: 1.7, maxWidth: "400px" },
  disabledBtn: { width: "100%", padding: "9px", marginTop: "10px", backgroundColor: "#bdc3c7", color: "#7f8c8d", border: "none", borderRadius: "6px", cursor: "not-allowed" },
  bookBtn: { marginTop: "15px", padding: "12px 28px", backgroundColor: "#2980b9", color: "#fff", border: "none", borderRadius: "8px", fontSize: "1rem", cursor: "pointer" },
};

export default App;

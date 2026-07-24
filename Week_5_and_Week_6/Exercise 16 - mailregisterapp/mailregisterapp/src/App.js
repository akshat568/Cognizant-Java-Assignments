import React, { Component } from "react";
import "./App.css";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", password: "", errors: {}, submitted: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      const errors = { ...this.state.errors };
      if (name === "name") errors.name = value.length < 5 ? "Name must have at least 5 characters." : "";
      if (name === "email") errors.email = (!value.includes("@") || !value.includes(".")) ? "Email must contain @ and ." : "";
      if (name === "password") errors.password = value.length < 8 ? "Password must have at least 8 characters." : "";
      this.setState({ errors });
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const { name, email, password } = this.state;
    const errors = {};
    if (name.length < 5) errors.name = "Name must have at least 5 characters.";
    if (!email.includes("@") || !email.includes(".")) errors.email = "Email must contain @ and .";
    if (password.length < 8) errors.password = "Password must have at least 8 characters.";
    if (Object.values(errors).some(e => e)) { this.setState({ errors }); }
    else { this.setState({ submitted: true, errors: {} }); }
  }
  render() {
    const { name, email, password, errors, submitted } = this.state;
    if (submitted) {
      return (
        <div style={styles.page}>
          <div style={styles.card}>
            <div style={{ textAlign: "center", padding: "20px" }}>
              <h2>Registration Successful!</h2>
              <p>Welcome, <strong>{name}</strong>! Your account has been created.</p>
              <button style={styles.btn} onClick={() => this.setState({ submitted: false, name: "", email: "", password: "" })}>Register Another</button>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div style={styles.page}>
        <div style={styles.card}>
          <h1 style={styles.title}>Mail Register App</h1>
          <p style={styles.subtitle}>Create your account</p>
          <form onSubmit={this.handleSubmit} style={styles.form} noValidate>
            <div style={styles.formGroup}>
              <label style={styles.label}>Full Name</label>
              <input type="text" name="name" value={name} onChange={this.handleChange} placeholder="At least 5 characters" style={{ ...styles.input, borderColor: errors.name ? "#e74c3c" : "#ddd" }} />
              {errors.name && <span style={styles.error}>{errors.name}</span>}
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Email Address</label>
              <input type="email" name="email" value={email} onChange={this.handleChange} placeholder="Must contain @ and ." style={{ ...styles.input, borderColor: errors.email ? "#e74c3c" : "#ddd" }} />
              {errors.email && <span style={styles.error}>{errors.email}</span>}
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Password</label>
              <input type="password" name="password" value={password} onChange={this.handleChange} placeholder="At least 8 characters" style={{ ...styles.input, borderColor: errors.password ? "#e74c3c" : "#ddd" }} />
              {errors.password && <span style={styles.error}>{errors.password}</span>}
            </div>
            <div style={styles.rulesBox}>
              <p style={{ margin: "0 0 6px", fontWeight: "600", color: "#7f8c8d" }}>Validation Rules:</p>
              <p style={{ margin: "3px 0", color: name.length >= 5 ? "#27ae60" : "#e74c3c" }}>{name.length >= 5 ? "Name OK" : "Name needs 5+ chars"}</p>
              <p style={{ margin: "3px 0", color: (email.includes("@") && email.includes(".")) ? "#27ae60" : "#e74c3c" }}>{(email.includes("@") && email.includes(".")) ? "Email OK" : "Email needs @ and ."}</p>
              <p style={{ margin: "3px 0", color: password.length >= 8 ? "#27ae60" : "#e74c3c" }}>{password.length >= 8 ? "Password OK" : "Password needs 8+ chars"}</p>
            </div>
            <button type="submit" style={styles.btn}>Register</button>
          </form>
        </div>
      </div>
    );
  }
}
const styles = {
  page: { fontFamily: "Segoe UI, sans-serif", backgroundColor: "#f0f4f8", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" },
  card: { backgroundColor: "#fff", borderRadius: "16px", padding: "40px", width: "100%", maxWidth: "480px", boxShadow: "0 8px 30px rgba(0,0,0,0.12)" },
  title: { textAlign: "center", color: "#2c3e50", marginBottom: "5px" },
  subtitle: { textAlign: "center", color: "#7f8c8d", marginBottom: "25px" },
  form: { display: "flex", flexDirection: "column", gap: "16px" },
  formGroup: { display: "flex", flexDirection: "column", gap: "5px" },
  label: { fontWeight: "600", color: "#2c3e50", fontSize: "0.95rem" },
  input: { padding: "12px 14px", border: "1.5px solid", borderRadius: "8px", fontSize: "1rem", outline: "none" },
  error: { color: "#e74c3c", fontSize: "0.85rem" },
  rulesBox: { backgroundColor: "#f8f9fa", padding: "14px", borderRadius: "8px", fontSize: "0.9rem" },
  btn: { padding: "14px", backgroundColor: "#2980b9", color: "#fff", border: "none", borderRadius: "10px", fontSize: "1.05rem", cursor: "pointer", fontWeight: "bold" },
};
function App() { return <Register />; }
export default App;

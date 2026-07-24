import React, { Component } from "react";
import "./App.css";

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = { rupees: "", euros: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const euroRate = 0.011;
    const converted = (parseFloat(this.state.rupees) * euroRate).toFixed(2);
    this.setState({ euros: converted });
  }
  render() {
    return (
      <div style={styles.section}>
        <h3>Currency Convertor (INR to EUR)</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="number" placeholder="Enter amount in Rupees" value={this.state.rupees}
            onChange={e => this.setState({ rupees: e.target.value })} style={styles.input} />
          <button type="submit" style={styles.btn}>Convert</button>
        </form>
        {this.state.euros && <p style={styles.result}>Rs.{this.state.rupees} = <strong>EUR {this.state.euros}</strong></p>}
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, message: "" };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.handleWelcome = this.handleWelcome.bind(this);
    this.handleOnPress = this.handleOnPress.bind(this);
  }
  increment() { this.setState(prev => ({ counter: prev.counter + 1 })); }
  sayHello() { this.setState({ message: "Hello! Counter incremented. Have a great day!" }); }
  decrement() { this.setState(prev => ({ counter: prev.counter - 1 })); }
  handleWelcome(greeting) { this.setState({ message: `${greeting}! Welcome to React Event Examples App!` }); }
  handleOnPress(e) { alert("I was clicked"); }
  render() {
    return (
      <div style={styles.page}>
        <h1 style={styles.title}>React Event Examples App</h1>
        <div style={styles.section}>
          <h3>Counter</h3>
          <p style={styles.counter}>{this.state.counter}</p>
          <button style={styles.btn} onClick={this.decrement}>Decrement</button>
          <button style={{ ...styles.btn, backgroundColor: "#27ae60" }}
            onClick={() => { this.increment(); this.sayHello(); }}>
            Increment + Say Hello
          </button>
        </div>
        {this.state.message && <div style={styles.messageBox}>{this.state.message}</div>}
        <div style={styles.section}>
          <h3>Say Welcome</h3>
          <button style={{ ...styles.btn, backgroundColor: "#8e44ad" }}
            onClick={() => this.handleWelcome("welcome")}>Say Welcome</button>
        </div>
        <div style={styles.section}>
          <h3>Synthetic Event (OnPress)</h3>
          <button style={{ ...styles.btn, backgroundColor: "#e67e22" }}
            onClick={this.handleOnPress}>Click Me (I was clicked)</button>
        </div>
        <CurrencyConvertor />
      </div>
    );
  }
}

const styles = {
  page: { maxWidth: "700px", margin: "0 auto", padding: "20px", fontFamily: "Segoe UI, sans-serif", backgroundColor: "#f5f7fa", minHeight: "100vh" },
  title: { textAlign: "center", color: "#2c3e50", marginBottom: "25px" },
  section: { backgroundColor: "#fff", padding: "20px", borderRadius: "10px", marginBottom: "20px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" },
  counter: { fontSize: "3rem", fontWeight: "bold", textAlign: "center", color: "#2980b9", margin: "10px 0" },
  btn: { padding: "10px 20px", margin: "5px", backgroundColor: "#2980b9", color: "#fff", border: "none", borderRadius: "6px", fontSize: "1rem", cursor: "pointer" },
  messageBox: { backgroundColor: "#dff0d8", color: "#3c763d", padding: "12px 18px", borderRadius: "8px", marginBottom: "15px", fontWeight: "bold" },
  input: { padding: "10px", width: "220px", borderRadius: "6px", border: "1px solid #ccc", fontSize: "1rem", marginRight: "10px" },
  result: { marginTop: "10px", fontSize: "1.1rem", color: "#27ae60" },
};

export default App;

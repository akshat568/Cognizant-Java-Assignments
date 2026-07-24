import React, { Component } from "react";
import "./App.css";

class Cart {
  constructor(itemname, price) {
    this.itemname = itemname;
    this.price = price;
  }
}

class OnlineShopping extends Component {
  constructor(props) {
    super(props);
    this.cartItems = [
      new Cart("Wireless Headphones", 2999),
      new Cart("Mechanical Keyboard", 4599),
      new Cart("USB-C Hub", 1499),
      new Cart("Webcam HD 1080p", 3299),
      new Cart("Laptop Stand", 1299),
    ];
  }
  render() {
    const total = this.cartItems.reduce((sum, item) => sum + item.price, 0);
    return (
      <div style={styles.page}>
        <h1 style={styles.title}>Online Shopping Cart</h1>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.headerRow}>
                <th style={styles.th}>#</th>
                <th style={styles.th}>Item Name</th>
                <th style={styles.th}>Price (Rs.)</th>
              </tr>
            </thead>
            <tbody>
              {this.cartItems.map((item, index) => (
                <tr key={index} style={styles.row}>
                  <td style={styles.td}>{index + 1}</td>
                  <td style={styles.td}>{item.itemname}</td>
                  <td style={styles.td}>Rs.{item.price.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr style={styles.totalRow}>
                <td colSpan="2" style={{ ...styles.td, fontWeight: "bold", textAlign: "right" }}>Total:</td>
                <td style={{ ...styles.td, fontWeight: "bold", color: "#27ae60", fontSize: "1.1rem" }}>Rs.{total.toLocaleString()}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div style={styles.summary}>
          <p><strong>{this.cartItems.length}</strong> items in your cart</p>
          <button style={styles.checkoutBtn}>Proceed to Checkout</button>
        </div>
      </div>
    );
  }
}

const styles = {
  page: { fontFamily: "Segoe UI, sans-serif", maxWidth: "700px", margin: "40px auto", padding: "20px", backgroundColor: "#f5f7fa" },
  title: { textAlign: "center", color: "#2c3e50", marginBottom: "30px", fontSize: "2rem" },
  tableContainer: { backgroundColor: "#fff", borderRadius: "12px", boxShadow: "0 4px 16px rgba(0,0,0,0.1)", overflow: "hidden", marginBottom: "20px" },
  table: { width: "100%", borderCollapse: "collapse" },
  headerRow: { backgroundColor: "#2c3e50", color: "#fff" },
  th: { padding: "14px 18px", textAlign: "left", fontWeight: "600" },
  row: { borderBottom: "1px solid #ecf0f1" },
  td: { padding: "12px 18px", color: "#555" },
  totalRow: { backgroundColor: "#f8f9fa", borderTop: "2px solid #2c3e50" },
  summary: { display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#fff", padding: "15px 20px", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" },
  checkoutBtn: { padding: "12px 28px", backgroundColor: "#27ae60", color: "#fff", border: "none", borderRadius: "8px", fontSize: "1rem", cursor: "pointer", fontWeight: "bold" },
};

function App() { return <OnlineShopping />; }
export default App;

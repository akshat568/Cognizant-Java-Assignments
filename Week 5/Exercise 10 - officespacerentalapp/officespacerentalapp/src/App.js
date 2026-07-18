import React from "react";

const officeImageUrl = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80";

const featuredOffice = {
  name: "Prime Business Hub",
  rent: 55000,
  address: "42 MG Road, Bengaluru, Karnataka - 560001",
};

const officeList = [
  { id: 1, name: "Tech Park Suite A", rent: 45000, address: "Whitefield, Bengaluru" },
  { id: 2, name: "Corporate Tower B", rent: 75000, address: "BKC, Mumbai" },
  { id: 3, name: "Smart Office Complex", rent: 62000, address: "Cyber City, Gurugram" },
  { id: 4, name: "Creative Co-Work Space", rent: 30000, address: "Koregaon Park, Pune" },
  { id: 5, name: "Executive Centre Plaza", rent: 90000, address: "Connaught Place, New Delhi" },
];

function App() {
  return (
    <div style={styles.page}>
      <h1 style={styles.mainHeading}>Office Space Rental App</h1>
      <img src={officeImageUrl} alt="Office Space" style={styles.officeImage} />
      <div style={styles.featuredCard}>
        <h2 style={styles.subHeading}>Featured Office</h2>
        <p><strong>Name:</strong> {featuredOffice.name}</p>
        <p><strong>Rent:</strong>{" "}
          <span style={{ color: featuredOffice.rent < 60000 ? "red" : "green", fontWeight: "bold" }}>
            Rs.{featuredOffice.rent.toLocaleString()} / month
          </span>
        </p>
        <p><strong>Address:</strong> {featuredOffice.address}</p>
      </div>
      <h2 style={styles.subHeading}>Available Office Spaces</h2>
      <div style={styles.grid}>
        {officeList.map(office => (
          <div key={office.id} style={styles.card}>
            <h3 style={styles.cardTitle}>{office.name}</h3>
            <p style={styles.cardAddress}>{office.address}</p>
            <p>Rent:{" "}
              <strong style={{ color: office.rent < 60000 ? "red" : "green" }}>
                Rs.{office.rent.toLocaleString()} / month
              </strong>
            </p>
            <p style={styles.rentNote}>{office.rent < 60000 ? "Below 60000 - Budget Range" : "Above 60000 - Premium Range"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: { fontFamily: "Segoe UI, sans-serif", maxWidth: "960px", margin: "0 auto", padding: "20px", backgroundColor: "#f5f7fa" },
  mainHeading: { textAlign: "center", color: "#2c3e50", fontSize: "2.2rem", marginBottom: "20px" },
  officeImage: { width: "100%", maxHeight: "300px", objectFit: "cover", borderRadius: "12px", marginBottom: "25px" },
  subHeading: { color: "#2c3e50", borderBottom: "2px solid #3498db", paddingBottom: "8px", marginBottom: "15px" },
  featuredCard: { backgroundColor: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", marginBottom: "30px", lineHeight: "1.8" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "20px" },
  card: { backgroundColor: "#fff", padding: "18px", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" },
  cardTitle: { color: "#2c3e50", marginBottom: "8px" },
  cardAddress: { color: "#7f8c8d", fontSize: "0.9rem", marginBottom: "10px" },
  rentNote: { fontSize: "0.85rem", color: "#999" },
};

export default App;

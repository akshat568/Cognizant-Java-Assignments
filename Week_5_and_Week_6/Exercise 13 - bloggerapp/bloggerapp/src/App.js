import React, { Component } from "react";
import "./App.css";

const books = [
  { id: 1, title: "Clean Code", author: "Robert C. Martin", genre: "Programming", available: true },
  { id: 2, title: "The Pragmatic Programmer", author: "Andrew Hunt", genre: "Programming", available: false },
  { id: 3, title: "Design Patterns", author: "Gang of Four", genre: "Architecture", available: true },
];

function BookDetails() {
  return (
    <div style={styles.section}>
      <h2 style={styles.sectionTitle}>Book Details</h2>
      {books.length > 0 ? (
        <div style={styles.cardGrid}>
          {books.map(book => {
            let statusBadge;
            if (book.available) {
              statusBadge = <span style={styles.badgeGreen}>Available</span>;
            } else {
              statusBadge = <span style={styles.badgeRed}>Not Available</span>;
            }
            return (
              <div key={book.id} style={styles.card}>
                <h3 style={styles.cardTitle}>{book.title}</h3>
                <p>{book.author}</p>
                <p>{book.genre}</p>
                {statusBadge}
              </div>
            );
          })}
        </div>
      ) : (
        <p>No books available.</p>
      )}
    </div>
  );
}

const blogs = [
  { id: 1, title: "Getting Started with React", date: "2026-07-01", published: true },
  { id: 2, title: "Understanding Hooks in React", date: "2026-07-10", published: true },
  { id: 3, title: "React Router Deep Dive", date: "2026-07-20", published: false },
];

function BlogDetails() {
  return (
    <div style={styles.section}>
      <h2 style={styles.sectionTitle}>Blog Details</h2>
      <div style={styles.cardGrid}>
        {blogs.map(blog => (
          <div key={blog.id} style={{ ...styles.card, opacity: blog.published ? 1 : 0.6 }}>
            <h3 style={styles.cardTitle}>{blog.title}</h3>
            <p>{blog.date}</p>
            {blog.published && <span style={styles.badgeGreen}>Published</span>}
            {!blog.published && <span style={styles.badgeGray}>Draft</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

const courses = [
  { id: 1, name: "React Fundamentals", level: "Beginner", duration: "30 hrs", enrolled: 120 },
  { id: 2, name: "Advanced React", level: "Advanced", duration: "45 hrs", enrolled: 85 },
  { id: 3, name: "React + Redux", level: "Intermediate", duration: "40 hrs", enrolled: 200 },
];

class CourseDetails extends Component {
  getLevelColor(level) {
    switch (level) {
      case "Beginner": return "#27ae60";
      case "Intermediate": return "#e67e22";
      case "Advanced": return "#e74c3c";
      default: return "#7f8c8d";
    }
  }
  render() {
    return (
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Course Details</h2>
        <div style={styles.cardGrid}>
          {courses.map(course => (
            <div key={course.id} style={styles.card}>
              <h3 style={styles.cardTitle}>{course.name}</h3>
              <span style={{ ...styles.levelBadge, backgroundColor: this.getLevelColor(course.level) }}>{course.level}</span>
              <p>Duration: {course.duration}</p>
              <p>Enrolled: {course.enrolled} students</p>
              {course.enrolled > 100 ? <p style={{ color: "#e74c3c", fontWeight: "bold" }}>High Demand!</p> : null}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div style={styles.app}>
        <h1 style={styles.title}>Blogger App</h1>
        <p style={styles.subtitle}>Multiple ways of Conditional Rendering in React</p>
        <BookDetails />
        <BlogDetails />
        <CourseDetails />
      </div>
    );
  }
}

const styles = {
  app: { fontFamily: "Segoe UI, sans-serif", backgroundColor: "#f0f4f8", minHeight: "100vh", padding: "20px" },
  title: { textAlign: "center", color: "#2c3e50", fontSize: "2.2rem", marginBottom: "5px" },
  subtitle: { textAlign: "center", color: "#7f8c8d", marginBottom: "30px" },
  section: { backgroundColor: "#fff", borderRadius: "12px", padding: "25px", marginBottom: "25px", boxShadow: "0 2px 10px rgba(0,0,0,0.08)" },
  sectionTitle: { color: "#2c3e50", borderBottom: "2px solid #3498db", paddingBottom: "8px", marginBottom: "20px" },
  cardGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "15px" },
  card: { backgroundColor: "#f9f9f9", border: "1px solid #eee", borderRadius: "8px", padding: "15px", lineHeight: "1.7" },
  cardTitle: { color: "#2c3e50", marginBottom: "6px" },
  badgeGreen: { backgroundColor: "#d5f5e3", color: "#1e8449", padding: "3px 10px", borderRadius: "12px", fontSize: "0.85rem" },
  badgeRed: { backgroundColor: "#fdecea", color: "#c0392b", padding: "3px 10px", borderRadius: "12px", fontSize: "0.85rem" },
  badgeGray: { backgroundColor: "#f2f3f4", color: "#7f8c8d", padding: "3px 10px", borderRadius: "12px", fontSize: "0.85rem" },
  levelBadge: { color: "#fff", padding: "3px 12px", borderRadius: "12px", fontSize: "0.85rem", display: "inline-block", marginBottom: "8px" },
};

export default App;

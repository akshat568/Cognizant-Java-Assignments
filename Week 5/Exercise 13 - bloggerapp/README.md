# Exercise 13 - bloggerapp

## Assignment Objective
Create a React application named **bloggerapp** with **3 components** and implement **as many ways of Conditional Rendering as possible**.

## Components
| Component | Data Shown | Conditional Rendering Used |
|-----------|-----------|--------------------------|
| `BookDetails` | 3 books with availability | if-else (element variables) + ternary |
| `BlogDetails` | 3 blogs with publish status | Short-circuit `&&` operator |
| `CourseDetails` | 3 courses with level + demand | switch/ternary + null return |

## Folder Structure
```
Exercise 13 - bloggerapp/
└── bloggerapp/
    ├── src/
    │   └── App.js   ← All 3 components in one file
    └── package.json
```

## Conditional Rendering Ways Implemented
| Way | Where Used | Code Example |
|-----|-----------|-------------|
| **1. Ternary (`? :`)** | Books table — show or "No books" | `books.length > 0 ? ... : <p>No books</p>` |
| **2. Element Variable** | Book availability badge | `let badge; if (available) badge = <span>Available</span>` |
| **3. Short-circuit `&&`** | Blog published badge | `{blog.published && <span>Published</span>}` |
| **4. Switch statement** | Course level color | `switch(level) { case "Beginner": return "green" }` |
| **5. Return null** | "High Demand!" label | `course.enrolled > 100 ? <p>High Demand!</p> : null` |

## Compilation Steps
```bash
cd bloggerapp
npm install
```

## Execution Steps
```bash
cd bloggerapp
npm start
```
Open browser at **http://localhost:3000**

## Expected Output
Three sections on the page:
1. **Book Details** — 3 cards (Clean Code: ✅ Available, Pragmatic Programmer: ❌ Not Available, Design Patterns: ✅ Available)
2. **Blog Details** — 3 cards (2 Published, 1 Draft)
3. **Course Details** — 3 cards with colored level badges (green/orange/red) and "High Demand!" for popular courses

## Assumptions
- All 3 components are co-located in `App.js` for simplicity (could be split into separate files)
- `CourseDetails` is a class component (to demonstrate `this` usage); `BookDetails` and `BlogDetails` are functional

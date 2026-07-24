# Exercise 5 - CohortDashboard

## Assignment Objective
Style a React application that displays cohort details for **My Academy at Cognizant** using:
- **CSS Modules** — `CohortDetails.module.css` with scoped styles
- **Inline styles** — Dynamic `color` based on cohort status
- **CSS tag selectors** — `dt` element styled with `font-weight: 500`

The `CohortDetails` component displays each cohort in a styled box, with:
- **Green** heading for `ongoing` cohorts
- **Blue** heading for all other (completed) cohorts

## Folder Structure
```
Exercise 5 - CohortDashboard/
└── cohortdashboard/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── CohortDetails.module.css   ← CSS Module (box styles + dt tag selector)
    │   ├── CohortDetails.js           ← Component with CSS Module + inline styles
    │   ├── App.js                     ← Renders 4 CohortDetails components
    │   ├── App.css
    │   ├── index.js
    │   └── index.css
    └── package.json
```

## CSS Module Properties (as specified)
```css
.box {
  width: 300px;
  display: inline-block;
  margin: 10px;          /* 10px overall margin */
  padding-top: 10px;     /* top & bottom padding */
  padding-bottom: 10px;
  padding-left: 20px;    /* left & right padding */
  padding-right: 20px;
  border: 1px solid black;
  border-radius: 10px;
}

dt {
  font-weight: 500;      /* tag selector for dt elements */
}
```

## Dynamic Inline Styles
```jsx
const headingStyle = {
  color: status === 'ongoing' ? 'green' : 'blue'
};
<h3 style={headingStyle}>{cohortName}</h3>
```

## Prerequisites
- Node.js (v14 or above)
- npm

## Compilation Steps
```bash
cd cohortdashboard
npm install
```

## Execution Steps
```bash
cd cohortdashboard
npm start
```
Then open your browser and navigate to: **http://localhost:3000**

## Expected Output
Dashboard showing 4 cohort cards:
| Cohort | Status | Heading Color |
|--------|--------|---------------|
| React Fundamentals - Batch A | ongoing | 🟢 Green |
| Java Spring Boot - Batch B | completed | 🔵 Blue |
| Full Stack Development - Batch C | ongoing | 🟢 Green |
| DevOps Essentials - Batch D | completed | 🔵 Blue |

## Assumptions
- The assignment mentioned downloading a pre-built React app — since no zip file was provided, a new `cohortdashboard` app was created from scratch with the same component structure
- Sample cohort data was created to demonstrate the styling requirement (ongoing = green, completed = blue)
- The `.box` CSS class is applied via `className={styles.box}` using CSS Module import

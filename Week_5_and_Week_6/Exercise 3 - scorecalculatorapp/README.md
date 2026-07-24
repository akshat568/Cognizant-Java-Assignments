# Exercise 3 - scorecalculatorapp

## Assignment Objective
Create a React application named **scorecalculatorapp** with a functional component named **CalculateScore** that:
- Accepts props: `Name`, `School`, `Total`, and `goal`
- Calculates the average score as: `(Total / goal) * 100`
- Displays the student details and calculated average score

The component applies custom CSS styles from a separate stylesheet.

## Folder Structure
```
Exercise 3 - scorecalculatorapp/
└── scorecalculatorapp/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── Components/
    │   │   └── CalculateScore.js   ← Functional component (accepts props)
    │   ├── Stylesheets/
    │   │   └── mystyle.css         ← Custom CSS styles
    │   ├── App.js                  ← Renders CalculateScore with sample data
    │   ├── App.css
    │   ├── index.js
    │   └── index.css
    └── package.json
```

## Prerequisites
- Node.js (v14 or above)
- npm

## Compilation Steps
```bash
cd scorecalculatorapp
npm install
```

## Execution Steps
```bash
cd scorecalculatorapp
npm start
```
Then open your browser and navigate to: **http://localhost:3000**

## Expected Output
A styled card displaying:

```
Student Score Calculator
─────────────────────────────────
Student Name:          John Doe
School:                Springfield High School
Total Marks Obtained:  420
Goal (Maximum Marks):  500
Average Score (%):     84.00%
```

## Assumptions
- Sample data passed as props from `App.js`: Name="John Doe", School="Springfield High School", Total=420, goal=500
- Average is calculated as: `(420 / 500) * 100 = 84.00%`
- CSS file placed in `Stylesheets/` subfolder as specified in the assignment
- The functional component accepts props (Name, School, Total, goal) rather than using state

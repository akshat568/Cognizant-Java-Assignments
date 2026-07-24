# Exercise 2 - StudentApp

## Assignment Objective
Create a React application named **StudentApp** with three class-based components:
- **Home** — displays "Welcome to the Home page of Student Management Portal"
- **About** — displays "Welcome to the About page of the Student Management Portal"
- **Contact** — displays "Welcome to the Contact page of the Student Management Portal"

All three components are called from the main `App` component.

## Folder Structure
```
Exercise 2 - StudentApp/
└── studentapp/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── Home.js      ← Class component - Home page
    │   │   ├── About.js     ← Class component - About page
    │   │   └── Contact.js   ← Class component - Contact page
    │   ├── App.js           ← Renders all three components
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
cd studentapp
npm install
```

## Execution Steps
```bash
cd studentapp
npm start
```
Then open your browser and navigate to: **http://localhost:3000**

## Expected Output
The browser displays:

```
Student Management Portal

Welcome to the Home page of Student Management Portal
Welcome to the About page of the Student Management Portal
Welcome to the Contact page of the Student Management Portal
```

## Assumptions
- The assignment mentions creating separate files under the `Src/Components` folder — implemented as `src/components/` following React conventions
- All components are class-based as specified in the assignment (class component exercise)
- The folder name was lowercased to `studentapp` as npm does not allow capital letters in project names; the display name inside the app remains "StudentApp"

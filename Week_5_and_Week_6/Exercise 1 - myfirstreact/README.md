# Exercise 1 - myfirstreact

## Assignment Objective
Create a new React Application named "myfirstreact" and run it to display **"Welcome to the first session of React"** as the heading of the page.

This is the first hands-on lab for React, covering:
- Setting up a React development environment
- Using `create-react-app` to scaffold a new project
- Modifying the default App component to display custom content
- Running the development server

## Folder Structure
```
Exercise 1 - myfirstreact/
└── myfirstreact/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── App.js          ← Modified to show welcome heading
    │   ├── App.css
    │   ├── index.js
    │   └── index.css
    ├── package.json
    └── README.md
```

## Prerequisites
- Node.js (v14 or above)
- npm

## Compilation Steps
No separate compilation step required. React uses a built-in development server.

```bash
cd myfirstreact
npm install
```

## Execution Steps
```bash
cd myfirstreact
npm start
```
Then open your browser and navigate to: **http://localhost:3000**

## Expected Output
The browser displays a page with the heading:

> **Welcome to the first session of React**

## Assumptions
- Used `create-react-app` as specified in the assignment
- The App.js was modified to remove default CRA boilerplate and replaced with a single `<h1>` heading as instructed
- No additional routing or state management required for this basic exercise

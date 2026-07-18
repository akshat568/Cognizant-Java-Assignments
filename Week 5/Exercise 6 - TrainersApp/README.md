# Exercise 6 - TrainersApp (React Router)

## Assignment Objective
Create a React application named **TrainersApp** for Cognizant Academy to maintain a list of trainers with React Router navigation:

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Home` | Welcome page with stats |
| `/trainers` | `TrainersList` | Tabular list with clickable trainer names |
| `/trainers/:id` | `TrainerDetail` | Detail view of selected trainer via `useParams` |

## Folder Structure
```
Exercise 6 - TrainersApp/
└── trainersapp/
    ├── src/
    │   ├── components/
    │   │   ├── Home.js           ← Home page component
    │   │   ├── TrainersList.js   ← List with React Router Links
    │   │   └── TrainerDetail.js  ← Detail with useParams hook
    │   ├── trainer.js            ← Trainer class model
    │   ├── TrainersMock.js       ← Mock trainer data (5 trainers)
    │   └── App.js                ← BrowserRouter + Routes + Route + Link
    └── package.json
```

## React Router Concepts Used
- `BrowserRouter` — wraps the entire app
- `Routes` + `Route` — defines URL-to-component mappings
- `Link` — navigation links in nav bar and trainer names
- `useParams` — extracts `:id` from URL in TrainerDetail

## Compilation Steps
```bash
cd trainersapp
npm install
npm install react-router-dom
```

## Execution Steps
```bash
npm start
```
Open: **http://localhost:3000**

## Expected Output
- **Home page** (`/`): Academy welcome page with stats cards
- **Trainers List** (`/trainers`): Table with T-ID, Name (clickable), Phone, Email, Stream, Skills
- **Trainer Detail** (`/trainers/1`): Full details card with skills badges for selected trainer

## Assumptions
- 5 trainers created with realistic mock data (React, Java, Python, DevOps, Angular)
- `trainer.js` is a plain JS class (not a React component) used as data model

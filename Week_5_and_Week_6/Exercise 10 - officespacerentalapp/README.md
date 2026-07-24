# Exercise 10 - officespacerentalapp

## Assignment Objective
Create a React application named **officespacerentalapp** demonstrating JSX features:
- **JSX Element** — heading of the page
- **JSX Attribute** — `src` attribute to display an office image
- **Object** — single office with Name, Rent, Address
- **List of objects** — loop through multiple office spaces with `map()`
- **Inline CSS** — Rent color is **Red** if below ₹60,000 and **Green** if above ₹60,000

## Folder Structure
```
Exercise 10 - officespacerentalapp/
└── officespacerentalapp/
    ├── src/
    │   └── App.js   ← All JSX elements, attributes, objects, list rendering, inline CSS
    └── package.json
```

## JSX Concepts Demonstrated
| Concept | Implementation |
|---------|---------------|
| JSX Heading Element | `<h1>Office Space Rental App</h1>` |
| JSX Image Attribute | `<img src={officeImageUrl} alt="Office Space" />` |
| Office Object | `{ name, rent, address }` |
| List of Objects | `officeList.map(office => ...)` |
| Conditional Inline CSS | `color: office.rent < 60000 ? 'red' : 'green'` |

## Compilation Steps
```bash
cd officespacerentalapp
npm install
```

## Execution Steps
```bash
cd officespacerentalapp
npm start
```
Open browser at **http://localhost:3000**

## Expected Output
- Page heading: "Office Space Rental App"
- Office image displayed at top
- Featured office card with rent in **Red** (₹55,000 < ₹60,000)
- Grid of 5 office cards:
  - Tech Park Suite A: ₹45,000 → **Red**
  - Corporate Tower B: ₹75,000 → **Green**
  - Smart Office Complex: ₹62,000 → **Green**
  - Creative Co-Work Space: ₹30,000 → **Red**
  - Executive Centre Plaza: ₹90,000 → **Green**

## Assumptions
- Unsplash image used for office display (internet required)
- Indian Rupee (₹) pricing used as the context is India-based

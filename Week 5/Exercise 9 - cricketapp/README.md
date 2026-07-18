# Exercise 9 - cricketapp

## Assignment Objective
Create a React application named **cricketapp** demonstrating ES6 features with two components:

### `ListofPlayers`
- Declares an array of **11 players** with names and scores using ES6 `map()`
- Filters players with scores **below 70** using ES6 **arrow functions** + `filter()`

### `IndianPlayers`
- Shows **Odd Team** and **Even Team** players using ES6 **Destructuring**
- Declares `T20players` and `RanjiTrophyPlayers` arrays
- **Merges** both arrays using ES6 **Spread operator** (`...`)

Both components are conditionally displayed using a **flag variable** with `if-else`.

## Folder Structure
```
Exercise 9 - cricketapp/
└── cricketapp/
    ├── src/
    │   ├── components/
    │   │   ├── ListofPlayers.js   ← ES6 map() + filter() + arrow functions
    │   │   └── IndianPlayers.js   ← ES6 destructuring + spread/merge
    │   └── App.js                 ← flag-based conditional rendering
    └── package.json
```

## ES6 Features Demonstrated
| Feature | Used In |
|---------|---------|
| `map()` | Rendering all 11 players |
| Arrow functions | `filter(player => player.score < 70)` |
| `filter()` | Getting low-score players |
| Destructuring | Separating odd/even players |
| Spread operator | Merging T20 + Ranji arrays |
| `if-else` flag | Switching between components |

## Compilation Steps
```bash
cd cricketapp
npm install
```

## Execution Steps
```bash
cd cricketapp
npm start
```
Open browser at **http://localhost:3000**

## Expected Output
- **Flag = true**: Shows ListofPlayers table with all 11 players + low-scorers list
- **Flag = false**: Shows IndianPlayers with Odd/Even teams + merged squad badges

## Assumptions
- Sample player data created with realistic Indian cricket player names and scores
- The `flag` variable is implemented as React `useState` hook with toggle buttons for demo

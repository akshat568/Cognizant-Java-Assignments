# Exercise 14 - EmployeeThemeApp (Context API)

## Objective
Convert an employee management app from prop-drilling to **React Context API** for sharing theme (light/dark).

## Files
| File | Role |
|------|------|
| `ThemeContext.js` | Creates context with default value `light` |
| `App.js` | Provider - wraps entire JSX with `ThemeContext.Provider value={state.theme}` |
| `EmployeesList.js` | Does NOT pass theme as prop to children |
| `EmployeeCard.js` | Consumer - uses `useContext(ThemeContext)` to read theme |

## Key Concepts
- `React.createContext('light')` — creates context with default
- `ThemeContext.Provider value={theme}` — provides value to tree
- `useContext(ThemeContext)` — consumes value in functional component

## Run
```bash
cd employeethemeapp && npm start
```
Open: http://localhost:3000

# Exercise 11 - eventexamplesapp

## Assignment Objective
Create a React application **"event examplesapp"** demonstrating React event handling:

| Feature | Implementation |
|---------|---------------|
| **Increment** button | Increases counter |
| **Decrement** button | Decreases counter |
| **Increase** button invoking multiple methods | `increment()` + `sayHello()` called together |
| **Say Hello** with static message | Displays "Hello! Counter incremented." |
| **Say Welcome** with argument | `handleWelcome("welcome")` |
| **Synthetic Event OnPress** | `onClick` displaying "I was clicked" alert |
| **CurrencyConvertor** | Converts INR → EUR via `handleSubmit` |

## Folder Structure
```
Exercise 11 - eventexamplesapp/
└── eventexamplesapp/
    ├── src/
    │   └── App.js   ← All event handlers + CurrencyConvertor component
    └── package.json
```

## Compilation Steps
```bash
cd eventexamplesapp
npm install
```

## Execution Steps
```bash
cd eventexamplesapp
npm start
```
Open browser at **http://localhost:3000**

## Expected Output
- Counter display: starts at 0
- Click **Increment + Say Hello** → counter increases + "Hello! Counter incremented..." appears
- Click **Decrement** → counter decreases
- Click **Say Welcome** → "welcome! Welcome to React Event Examples App!" appears
- Click **Click Me** → browser alert: "I was clicked"
- Enter ₹1000 → Click Convert → shows "EUR 11.00"

## Assumptions
- Euro conversion rate: 1 INR = 0.011 EUR (approximate rate)
- The assignment name "event examplesapp" has a space so the npm project name is `eventexamplesapp`
- `CurrencyConvertor` is implemented as a class component with `handleSubmit` bound in constructor

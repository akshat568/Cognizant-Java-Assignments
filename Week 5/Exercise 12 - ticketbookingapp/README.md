# Exercise 12 - ticketbookingapp

## Assignment Objective
Create a React application named **ticketbookingapp** with conditional rendering:
- **Guest user** — can browse flight details but cannot book tickets
- **Logged-in user** — can book tickets; sees a personalized user page
- **Login button** — switches from Guest page to User page
- **Logout button** — switches back to Guest page

## Folder Structure
```
Exercise 12 - ticketbookingapp/
└── ticketbookingapp/
    ├── src/
    │   └── App.js   ← App (Login/Logout), GuestPage, UserPage components
    └── package.json
```

## Components
| Component | Description |
|-----------|-------------|
| `App` | Manages `isLoggedIn` state; renders Login/Logout button |
| `GuestPage` | Shows all flights with disabled "Book Ticket" button |
| `UserPage` | Shows booking form; allows booking |

## Conditional Rendering Logic
```jsx
{isLoggedIn ? <UserPage username={username} /> : <GuestPage />}
```

## Compilation Steps
```bash
cd ticketbookingapp
npm install
```

## Execution Steps
```bash
cd ticketbookingapp
npm start
```
Open browser at **http://localhost:3000**

## Expected Output
**Guest View (not logged in):**
- Header with green "Login" button
- Red status bar: "Not Logged In - Viewing as Guest"
- 4 flight cards (Delhi→Mumbai, Mumbai→Bangalore, Bangalore→Chennai, Chennai→Kolkata)
- All "Book Ticket" buttons disabled

**User View (after login):**
- Header with red "Logout" button
- Green status bar: "Logged In as Harsh"
- Booking card for Delhi→Mumbai with "Book Now" button
- After clicking: "Ticket Booked!" confirmation

## Assumptions
- Username is hardcoded as "Harsh" for demo purposes
- 4 sample Indian domestic flights are provided
- Booking functionality is simulated (no backend)

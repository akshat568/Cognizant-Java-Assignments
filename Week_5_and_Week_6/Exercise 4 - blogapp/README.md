# Exercise 4 - blogapp

## Assignment Objective
Create a React application named **blogapp** that demonstrates React component lifecycle hooks:
- **`componentDidMount()`** — fetches blog posts from a REST API when the component mounts
- **`componentDidCatch()`** — catches and alerts any component errors

The app fetches posts from `https://jsonplaceholder.typicode.com/posts` using the Fetch API and renders them as a list of titles and body text.

## Folder Structure
```
Exercise 4 - blogapp/
└── blogapp/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── Post.js         ← Post model class (userId, id, title, body)
    │   ├── Posts.js        ← Class component with lifecycle hooks
    │   ├── App.js          ← Renders Posts component
    │   ├── App.css
    │   ├── index.js
    │   └── index.css
    └── package.json
```

## Key Implementation Details

### Post.js
A model class with constructor accepting: `userId`, `id`, `title`, `body`

### Posts.js (Component Lifecycle)
| Lifecycle Method | Purpose |
|-----------------|---------|
| `constructor()` | Initializes state with empty `posts` array |
| `loadPosts()` | Fetches posts from JSONPlaceholder API, updates state |
| `componentDidMount()` | Calls `loadPosts()` after component mounts |
| `componentDidCatch()` | Alerts user if any render error occurs |
| `render()` | Maps over `posts` state and renders title + body |

## Prerequisites
- Node.js (v14 or above)
- npm
- Internet connection (for fetching posts from API)

## Compilation Steps
```bash
cd blogapp
npm install
```

## Execution Steps
```bash
cd blogapp
npm start
```
Then open your browser and navigate to: **http://localhost:3000**

## Expected Output
The browser displays a page titled **"Blog Posts"** with 100 posts loaded from the API. Each post shows:
- **Title** (as `<h2>`)
- **Body** (as `<p>`)

## Assumptions
- `Post.js` is implemented as a JS class (not a React component) as described in the assignment — it serves as a data model
- `componentDidCatch()` displays an alert with the error message as specified
- All 100 posts from the API are rendered (no pagination implemented, as the assignment does not specify it)
- Internet access is required for the API call to succeed

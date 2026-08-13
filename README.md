# DevTinder Frontend

Frontend application for **DevTinder**, a developer networking platform built with **React.js**.

The application provides the user-facing experience for developer discovery, profiles, authentication, connection requests, and real-time chat. It communicates with the DevTinder backend through REST APIs and Socket.IO.

## Live Demo

**https://dev-tinder-web-ten-ruddy.vercel.app/**

## Features

- 🔐 **Authentication**
  - Login and signup flows
  - Cookie-based authentication with the backend
  - Protected application routes

- 🧑‍💻 **Developer Feed**
  - Browse developer profiles
  - View profile information
  - Connect with developers

- 👤 **Profile**
  - View user profile
  - Update profile information
  - Manage account-related information

- 🤝 **Connection Management**
  - Send connection requests
  - Accept/reject requests
  - View connections

- 💬 **Real-Time Chat**
  - Chat interface between connected users
  - Real-time messages using Socket.IO
  - Auto-scrolling message area

- 🧭 **Client-Side Routing**
  - React Router based navigation
  - Route-based rendering with nested layouts

- 🔔 **User Feedback**
  - Toast notifications using React Toastify

- 📱 **Responsive UI**
  - Tailwind CSS utility classes
  - DaisyUI components

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI development |
| Vite | Frontend build tool and development server |
| JavaScript | Application logic |
| React Router DOM | Client-side routing |
| Redux Toolkit | Global state management |
| React Redux | React bindings for Redux |
| Axios | REST API communication |
| Socket.IO Client | Real-time chat |
| Tailwind CSS | Styling |
| DaisyUI | UI components |
| React Icons | Icons |
| React Toastify | Toast notifications |
| ESLint | Code quality |

The current repository's `package.json` lists React 19, Vite, Redux Toolkit, React Router DOM, Axios, Socket.IO Client, Tailwind CSS, DaisyUI, React Icons and React Toastify among its dependencies.

## React Architecture

The application is structured as a React single-page application:

```text
React Application
       │
       ▼
     App
       │
       ├── Navbar
       │
       ├── React Router
       │
       ├── Feed
       ├── Login
       ├── Profile
       ├── Connections
       ├── Requests
       └── Chat
```

The repository uses a `src` directory containing components, utilities, `App.jsx`, global CSS and the React entry point.

## State Management

**Redux Toolkit** is used for global client-side state.

```text
API Response
     ↓
Redux Store
     ↓
React Components
     ↓
UI
```

React Redux connects the React component tree to the Redux store, while Redux Toolkit provides the state-management utilities.

## API Communication

Axios is used to communicate with the DevTinder backend.

```text
React Frontend
      │
      │ Axios / REST API
      ▼
Express.js Backend
      │
      ▼
MongoDB
```

Authenticated requests use credentials/cookies so the frontend can communicate with protected backend endpoints.

## Real-Time Chat

The chat feature uses `socket.io-client`.

```text
User A
  │
  │ Socket.IO
  ▼
Backend Socket Server
  │
  │ Real-time event
  ▼
User B
```

The frontend listens for incoming messages and updates the React state, allowing the chat UI to update without manually refreshing the page.

## Routing

The application uses **React Router DOM** for navigation between application views.

Typical routes include:

```text
/login
/feed
/profile
/connections
/requests
/chat/:targetUserId
```

The exact available routes can evolve as the application is developed.

## Project Structure

```text
devTinder-web/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Body
│   │   ├── Navbar
│   │   ├── Footer
│   │   ├── Feed
│   │   ├── Profile
│   │   ├── Login
│   │   ├── Chat
│   │   └── ...
│   │
│   ├── utils/
│   │   ├── constants
│   │   ├── redux
│   │   └── socket
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── Chat.css
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
├── vercel.json
└── README.md
```

The repository currently contains `src/components`, `src/utils`, `App.jsx`, `main.jsx`, `index.css` and `Chat.css`, along with Vite and ESLint configuration at the project root.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/abhisheknishad345/devTinder-web.git
cd devTinder-web
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Vite will start the development server and provide the local URL in the terminal.

## Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Preview Production Build

```bash
npm run preview
```

Serves the production build locally for testing.

### Lint

```bash
npm run lint
```

Runs ESLint across the project.

These scripts are defined in the current `package.json`.

## Backend Integration

This frontend is designed to work with the separate DevTinder backend:

**Backend Repository:**  
https://github.com/abhisheknishad345/devTinder

The frontend communicates with the backend for:

- Authentication
- User profiles
- Developer feed
- Connection requests
- Connections
- Real-time chat

## Deployment

The frontend is deployed on **Vercel**.

**Live Application:**  
https://devloper-tinder.vercel.app

The repository also contains a `vercel.json` configuration file.

## Development Flow

```text
User
 ↓
React UI
 ↓
React Router
 ↓
Component
 ↓
Redux / Axios / Socket.IO
 ↓
DevTinder Backend
 ↓
MongoDB
```

## What I Learned

Building this frontend helped me work with:

- React component architecture
- React Hooks
- React Router
- Redux Toolkit
- REST API integration
- Axios
- Authentication and protected routes
- Cookie-based API requests
- Socket.IO real-time communication
- Tailwind CSS
- DaisyUI
- Responsive UI development
- Vite-based React development

## Related Repository

### DevTinder Backend

https://github.com/abhisheknishad345/devTinder

## Author

**Abhishek Nishad**

GitHub: https://github.com/abhisheknishad345

## License

This project is intended for learning and portfolio purposes.

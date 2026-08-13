
# 🚀 DevTinder - Web Client

A modern, full-stack developer networking web application built with **React**, **Redux Toolkit**, **Tailwind CSS**, and **DaisyUI**. **DevTinder** helps developers connect, view developer profiles, send connection requests, and engage in real-time chat via **Socket.IO**.

---

## ✨ Features

* 🔐 **Authentication & Authorization:** Secure user login, signup, and session management using JWT cookies.
* 🎴 **Interactive Feed:** Swipe/Explore developer profiles with dynamic action options (Interested / Ignore).
* 🤝 **Connections & Requests:** Manage incoming connection requests and view existing connections.
* 💬 **Real-time Messaging:** Integrated 1-on-1 real-time chat powered by **Socket.IO**.
* 👤 **Profile Management:** Dynamic profile creation and updates including photo uploads, skills, bio, and bio details.
* 🎨 **Sleek UI/UX:** Styled using **Tailwind CSS** & **DaisyUI** with built-in dark theme aesthetic and smooth responsive design.

---

## 🛠️ Tech Stack

* **Frontend Framework:** [React.js](https://reactjs.org/) (Vite / CRA)
* **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/)
* **Routing:** [React Router DOM v6](https://reactrouter.com/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
* **Real-time Communication:** [Socket.IO Client](https://socket.io/)
* **HTTP Client:** [Axios](https://axios-http.com/)
* **Icons & Assets:** FontAwesome / Lucide React

---

## 📁 Project Structure

```text
devTinder-web/
├── src/
│   ├── components/     # Reusable UI components (NavBar, Feed, Cards, etc.)
│   ├── routes/         # Dynamic Page Views (Chat, Connections, Profile, Login)
│   ├── utils/          # Socket configurations, constants, and Axios instances
│   ├── store/          # Redux slices & store setup
│   ├── App.jsx         # Main Application Component & Routing
│   └── main.jsx        # App Entry Point
├── public/             # Static Assets & Icons
├── .gitignore
├── package.json
└── README.md
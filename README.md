# React.js, JSX, and Tailwind CSS - Mastering Front-End Development

A fully functional React application demonstrating component architecture, state management, hooks usage, API integration, and responsive design with Tailwind CSS.

## 🚀 Features

- **Reusable UI Components**: Button, Card, Navbar, Footer with customizable props
- **Task Manager**: Full CRUD functionality with localStorage persistence
- **State Management**: React hooks (useState, useEffect, useContext)
- **API Integration**: Fetches data from JSONPlaceholder with search and pagination
- **Theme Switcher**: Light/Dark mode with persistent user preference
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Clean Architecture**: Organized folder structure following React best practices

## 📦 Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **React Router 6** - Client-side routing
- **JSONPlaceholder API** - Mock REST API for testing

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd <repository-name>
Install dependencies:
npm install
Start the development server:
npm run dev
Open your browser and navigate to the local development URL (typically http://localhost:5173)
📁 Project Structure
src/
├── components/         # Reusable UI components
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Layout.jsx
│   └── TaskManager.jsx
├── pages/             # Page components
│   ├── Home.jsx
│   ├── TasksPage.jsx
│   └── APIPage.jsx
├── utils/             # Utilities and custom hooks
│   ├── useLocalStorage.js
│   └── ThemeContext.jsx
├── App.jsx            # Main app component with routing
├── main.jsx           # App entry point
└── index.css          # Tailwind CSS imports
✨ Features Breakdown
Task Manager
Add new tasks with enter key or button click
Mark tasks as complete/incomplete
Delete tasks
Filter tasks (All, Active, Completed)
Persistent storage using localStorage
Task counter showing remaining tasks
API Integration
Fetches posts from JSONPlaceholder API
Real-time search functionality
Pagination (10 items per page)
Loading states with spinner animation
Error handling with retry functionality
Theme System
Context-based theme management
Persistent theme preference
Smooth transitions between themes
System-wide dark mode support
🎨 Component Documentation
Button Component
Accepts variant prop: primary, secondary, danger
<Button variant="primary" onClick={handleClick}>
  Click Me
</Button>
Card Component
Flexible container with optional title
<Card title="Card Title">
  Content goes here
</Card>
📱 Screenshots
(Add screenshots of your application here after deployment)
Home Page
�
Load image
Task Manager
�
Load image
API Data Browser
�
Load image
Dark Mode
�
Load image
🌐 Live Demo
Deployed URL: [Add your deployed URL here]
👤 Author
[Khensani Ruth Mahwayi]
GitHub: @MahwayiRuth
📄 License
This project is part of a coding assignment for educational purposes.
---
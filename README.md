🗂️ Task Manager – Full Stack Application

A modern, full-stack Task Management application with secure authentication, task tracking, notifications, and a clean UI.
The project is built with React (Vite) on the frontend and Node.js + Express + MongoDB on the backend, using JWT-based authentication.

📌 Project Overview

This repository contains both frontend and backend code:

Frontend: React application for user interaction

Backend: RESTful API handling authentication, tasks, and notifications

The frontend communicates with the backend via secured REST APIs.

🚀 Features
✅ Core Features

User Registration & Login

JWT-based Authentication

Protected Routes

Task CRUD Operations

Task Status Management (Pending / Completed / Overdue)

Sorting & Filtering

Notifications for upcoming & overdue tasks

Responsive and clean UI

🛠️ Tech Stack
Frontend

React.js (Vite)

JavaScript (ES6+)

React Router DOM

CSS (Custom Styling)

Fetch API

Backend

Node.js

Express.js

MongoDB + Mongoose

JWT (JSON Web Tokens)

bcryptjs

dotenv

CORS

📁 Project Structure
Task_manager/
├── Task_Manger_frontend/
│   ├── public/
│   │   └── illustration.png
│   │
│   ├── src/
│   │   ├── api.js
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── TaskTable.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Tasks.jsx
│   │   │   ├── Completed.jsx
│   │   │   └── Notification.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── .env
│   ├── package.json
│   └── README.md
│
├── Task_Manger_backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── userController.js
│   │   └── taskController.js
│   │
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── notFound.js
│   │   └── errorHandler.js
│   │
│   ├── models/
│   │   ├── user.js
│   │   └── tasks.js
│   │
│   ├── routes/
│   │   ├── userRoutes.js
│   │   └── taskRoutes.js
│   │
│   ├── utils/
│   │   └── logger.js
│   │
│   ├── .env
│   ├── server.js
│   ├── package.json
│   └── README.md
│
└── README.md

⚙️ Environment Variables
Frontend (Task_Manger_frontend/.env)
VITE_API_URL=http://localhost:5000/api

Backend (Task_Manger_backend/.env)
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

▶️ Getting Started
1️⃣ Clone the Repository
git clone https://github.com/rushi-341/Task_manager.git
cd Task_manager

2️⃣ Backend Setup
cd Task_Manger_backend
npm install
npm run dev


Backend runs at:

http://localhost:5000

3️⃣ Frontend Setup
cd ../Task_Manger_frontend
npm install
npm run dev


Frontend runs at:

http://localhost:5173

🔐 Authentication Flow

User registers or logs in

Backend returns a JWT token

Token is stored in localStorage

Protected routes require authentication

Token is sent via headers:

Authorization: Bearer <JWT_TOKEN>

📌 API Endpoints
Authentication

POST /api/users/register

POST /api/users/login

Tasks (Protected)

GET /api/tasks

GET /api/tasks/:id

POST /api/tasks

PUT /api/tasks/:id

DELETE /api/tasks/:id

PATCH /api/tasks/:id/done

GET /api/notifications

🧪 Sample Task Payload
{
  "title": "Finish backend APIs",
  "priority": "High",
  "status": "Pending",
  "dueDate": "2025-01-25"
}

🎨 UI Highlights

Clean authentication pages with illustrations

Responsive task table

Sorting by date, priority, and status

Loading and empty states

Minimal and modern design

🔒 Security

Password hashing with bcrypt

JWT-based authentication

Environment variables for secrets

CORS configured at backend

🧑‍💻 Author

Rushi Yalamanchili
Full Stack Developer
GitHub: https://github.com/rushi-341

📌 Notes

Frontend and Backend can be deployed independently

Designed for scalability and clean architecture

Suitable for academic projects and placement portfolios

# 🎨 Task Manager Frontend (React)

A **modern and responsive frontend** for the Task Manager application built using **React (Vite)**.  
This application connects to a separate backend REST API to handle authentication and task management.

---

## 🚀 Features

- User authentication (Login & Register)
- JWT-based protected routes
- Task listing with sorting & filtering
- Create, update, delete, and complete tasks
- Notifications for upcoming & overdue tasks
- Clean UI with responsive design
- API integration using Fetch
- Environment-based configuration

---

## 🛠️ Tech Stack

- **React.js**
- **Vite**
- **JavaScript (ES6+)**
- **React Router DOM**
- **CSS (Custom styling)**
- **Fetch API**

---

## 📁 Project Structure

```
frontend/
├── public/
│   └── illustration.png       # Static images
│
├── src/
│   ├── api.js                 # Centralized API calls
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── TaskTable.jsx
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Home.jsx
│   │   ├── Tasks.jsx
│   │   ├── Completed.jsx
│   │   └── Notification.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env                       # Environment variables
├── package.json
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root of the frontend project:

```env
VITE_API_URL=http://localhost:5000/api/tasks
```

Update this URL after deploying the backend.

---

## ▶️ Getting Started

### 1️⃣ Clone the repository
```bash
git clone <frontend-repo-url>
cd <frontend-project>
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Start the development server
```bash
npm run dev
```

The app will run at:
```
http://localhost:5173
```

---

## 🔐 Authentication Flow

1. User registers or logs in
2. Backend returns a JWT token
3. Token is stored in `localStorage`
4. Protected routes require authentication
5. Token is sent in the `Authorization` header

```
Authorization: Bearer <JWT_TOKEN>
```

---

## 🧪 Pages Overview

| Page | Description |
|----|------------|
| /login | User login |
| /register | User registration |
| / | Protected tasks dashboard |

---

## 🎨 UI Highlights

- Split layout authentication pages with illustrations
- Responsive task table
- Sorting options (date, title, priority, status)
- Loading & empty states
- Clean, minimal styling

---

## 🔒 Security Notes

- JWT stored in localStorage
- Protected routes using React Router
- CORS handled at backend

---


## 📌 Note

This repository contains **only frontend code**.  
Backend APIs are maintained in a separate repository.
# 🗂️ Task Manager Backend (MERN)

A **secure and scalable RESTful backend** for a Task Management application built using **Node.js, Express, MongoDB, and JWT authentication**.  
This backend handles **user authentication**, **task CRUD operations**, and **notifications** with proper authorization.

> 📌 Frontend is maintained in a **separate repository**.

---

## 🚀 Features

- User registration & login (JWT-based authentication)
- Protected routes using middleware
- Task CRUD operations (Create, Read, Update, Delete)
- Task status management (Pending / Completed / Overdue)
- Sorting & filtering support
- Notification API for overdue & upcoming tasks
- Centralized error handling
- Clean, scalable project structure

---

## 🛠️ Tech Stack

- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JWT (JSON Web Tokens)  
- bcryptjs  
- dotenv  
- CORS  

---

## 📁 Project Structure

```
backend/
├── config/
│   └── db.js                 # MongoDB connection
│
├── controllers/
│   ├── userController.js     # Auth logic
│   └── taskController.js     # Task CRUD & notifications
│
├── middleware/
│   ├── auth.js               # JWT authentication
│   ├── notFound.js           # 404 handler
│   └── errorHandler.js       # Global error handler
│
├── models/
│   ├── user.js               # User schema
│   └── tasks.js              # Task schema
│
├── routes/
│   ├── userRoutes.js         # Auth routes
│   └── taskRoutes.js         # Task routes
│
├── utils/
│   └── logger.js             # Request logger
│
├── .env                      # Environment variables
├── server.js                 # Entry point
├── package.json
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## ▶️ Getting Started

### Clone the repository
```bash
git clone https://github.com/narasimha-146/Task_Manger_backend.git
cd Task_Manger_backend
```

### Install dependencies
```bash
npm install
```

### Run the server
```bash
npm run dev
```

Server will start at:
```
http://localhost:5000
```

---

## 🔐 Authentication

All protected routes require a JWT token:

```
Authorization: Bearer <JWT_TOKEN>
```

---

## 📌 API Endpoints

### Auth
- POST `/api/users/register`
- POST `/api/users/login`

### Tasks (Protected)
- GET `/api/tasks`
- GET `/api/tasks/:id`
- POST `/api/tasks`
- PUT `/api/tasks/:id`
- DELETE `/api/tasks/:id`
- PATCH `/api/tasks/:id/done`
- GET `/api/notifications`

---

## 🧪 Sample Request

```json
{
  "title": "Finish backend APIs",
  "priority": "High",
  "status": "Pending",
  "dueDate": "2025-01-25"
}
```

---

## 🔒 Security

- Password hashing with bcrypt
- JWT-based authentication
- Environment variables for secrets
- CORS configuration

---


## 📌 Note

This repository contains **only backend code**.  
Frontend is maintained separately.


# Finance Dashboard Backend

🚀 Overview

A robust backend system for managing financial records with secure authentication and role-based access control.

This system allows users to:
Register and login using JWT authentication
Manage financial records (income & expense)
View dashboard analytics (income, expense, balance)
Access features based on user roles (Viewer, Analyst, Admin)

# 🛠 Tech Stack

Node.js
Express.js
MongoDB (Mongoose)
JWT (Authentication)
bcryptjs (Password hashing)

📂 Project Structure
finance-dashboard/
│── config/
│ └── db.js
│
│── controllers/
│ ├── authController.js
│ ├── recordController.js
│ ├── dashboardController.js
│ └── userController.js
│
│── middleware/
│ ├── auth.js
│ ├── role.js
│ └── errorHandler.js
│
│── models/
│ ├── User.js
│ └── Record.js
│
│── routes/
│ ├── authRoutes.js
│ ├── recordRoutes.js
│ ├── dashboardRoutes.js
│ └── userRoutes.js
│
│── utils/
│ └── validators.js
│
│── .env
│── server.js
│── README.md

# 🔐 Authentication

JWT-based authentication is implemented.
Include token in request headers:

Authorization: Bearer <token>

# 👥 Roles & Access Control

Role Permissions
Viewer View records and dashboard
Analyst View records and analytics
Admin Full access (CRUD + user management)

# API Endpoints

🔑 Authentication
POST /api/auth/register
POST /api/auth/login

📊 Records
POST /api/records (Admin only)
GET /api/records
PUT /api/records/:id (Admin only)
DELETE /api/records/:id (Admin only)

📈 Dashboard
GET /api/dashboard/summary

👤 Users (Admin only)
GET /api/users
PUT /api/users/:id/role
PUT /api/users/:id/status

# How to Run the Project

1. Install dependencies
   npm install
2. Setup environment variables (.env)
   MONGO_URI=your_mongodb_connection
   JWT_SECRET=your_secret_key
3. Run server
   npm start

### Server will run at:

http://localhost:5000

# Features Implemented

JWT Authentication
Role-Based Access Control (RBAC)
CRUD Operations for Financial Records
Dashboard Summary (Income, Expense, Balance)
Input Validation & Error Handling

# 📊 Testing

APIs tested using Thunder Client.
Test Flow:
Register user
Login and get token
Assign admin role
Perform CRUD operations
Verify dashboard summary

# OUTPUT

D:\finance-dashboard\output

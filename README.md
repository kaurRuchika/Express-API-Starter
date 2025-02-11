# Express API Starter

A simple boilerplate for building REST APIs with Express.js.

## 📌 Features
- Basic CRUD operations
- CORS enabled
- Uses environment variables (`dotenv`)

## 🚀 Setup Instructions

### 1️⃣ Install Dependencies
```sh
npm install
2️⃣ Start the Server
sh
Copy
Edit
npm run dev  # Starts with nodemon (hot reload)
3️⃣ API Endpoints
GET /api/tasks - Get all tasks
POST /api/tasks - Add a task (JSON body: { "title": "New Task" })
PUT /api/tasks/:id - Update a task
DELETE /api/tasks/:id - Delete a task

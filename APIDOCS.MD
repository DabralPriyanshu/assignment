# User Authentication APIs

This project provides basic user authentication APIs including Register, Login, Logout, and Get Profile.

---

## Base URL

http://localhost:3000/api/v1/users

---

## Register User

### Endpoint
POST /register

### Full URL
http://localhost:3000/api/v1/users/register

### Request Body
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}

### Success Response
{
  "message": "Registered successfully",
  "data": {
    "user": {
      "id": "USER_ID",
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
}

### Error Response (400)
{
  "message": "All fields are required",
  "data": {}
}
### Error Response (500)
{
  "message": "Internal server error",
  "data": {}
}

---

## Login User

### Endpoint
POST /login

### Full URL
http://localhost:3000/api/v1/users/login

### Request Body
{
  "email": "john@example.com",
  "password": "password123"
}

### Success Response
{
  "message": "Login successful",
  "data": {
    "user": {
      "id": "USER_ID",
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
}

### Error Response (401)
{
  "message": "Invalid credentials",
  "data": {}
}

---

## Logout User

### Endpoint
POST /logout

### Full URL
http://localhost:3000/api/v1/users/logout



### Request Body
No body required

### Success Response
{
  "message": "Logout successfully",
  "data": {}
}

---

## Get User Profile

### Endpoint
GET /profile

### Full URL
http://localhost:3000/api/v1/users/profile

### Headers
Authorization: Bearer <token>

### Success Response
{
  "message": "Fetched user successfully",
  "data": {
    "user": {
      "id": "USER_ID",
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
}

---

## Authentication

Authentication is implemented using JWT (JSON Web Token).

Protected APIs:
- Logout
- Get Profile

Cookie based jwt 

---

## Common Error Responses

### Unauthorized (401)
{
  "message": "Unauthorized access",
  "data": {}
}

### Not Found (404)
{
  "message": "User not found",
  "data": {}
}

### Internal Server Error (500)
{
  "message": "Something went wrong",
  "data": {}
}
# Task Management APIs

This section describes Task CRUD APIs: Create, Get All, Get By ID, Update, and Delete.

---

## Base URL

http://localhost:3000/api/v1/tasks

---

## Create Task

### Endpoint
POST /create

### Full URL
http://localhost:3000/api/v1/tasks/create

### Cookies
JWT token

### Request Body
{
  "title": "Learn Node.js",
  "description": "Complete Node.js authentication module"
}

### Success Response
{
  "message": "Task created successfully",
  "data": {
    "task": {
      "id": "TASK_ID",
      "title": "Learn Node.js",
      "description": "Complete Node.js authentication module",
      "user": "USER_ID"
    }
  }
}

---

## Get All Tasks

### Endpoint
GET /get-all

### Full URL
http://localhost:3000/api/v1/tasks/

### Cookies
JWT token

### Success Response
{
  "message": "Tasks fetched successfully",
  "data": {
    "tasks": [
      {
        "id": "TASK_ID",
        "title": "Learn Node.js",
        "description": "Complete Node.js authentication module"
      }
    ]
  }
}

---

## Get Task By ID

### Endpoint
GET /get/:id

### Full URL
http://localhost:3000/api/v1/tasks/get/TASK_ID

### Cookies
JWT token

### Success Response
{
  "message": "Task fetched successfully",
  "data": {
    "task": {
      "id": "TASK_ID",
      "title": "Learn Node.js",
      "description": "Complete Node.js authentication module"
    }
  }
}

---

## Update Task

### Endpoint
PATCH /update/:id

### Full URL
http://localhost:3000/api/v1/tasks/update/TASK_ID

### Cookies
JWT token

### Request Body
{
  "title": "Learn Node.js Deeply",
  "description": "Complete Node.js with best practices"
}

### Success Response
{
  "message": "Task updated successfully",
  "data": {
    "task": {
      "id": "TASK_ID",
      "title": "Learn Node.js Deeply",
      "description": "Complete Node.js with best practices"
    }
  }
}

---

## Delete Task

### Endpoint
DELETE /delete/:id

### Full URL
http://localhost:3000/api/v1/tasks/delete/TASK_ID

### Cookies
JWT token

### Success Response
{
  "message": "Task deleted successfully",
  "data": {}
}

---

## Task API Authentication

- All Task APIs are **protected**
- User must be logged in
- JWT token is required in headers

Authorization: Bearer <token>

---

## Task Error Responses

### 400 – Bad Request
{
  "message": "Invalid task data",
  "data": {}
}

### 401 – Unauthorized
{
  "message": "Unauthorized access",
  "data": {}
}

### 404 – Not Found
{
  "message": "Task not found",
  "data": {}
}

### 500 – Internal Server Error
{
  "message": "Something went wrong",
  "data": {}
}







## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

---



# Todo List API with NestJS (JSON File Storage)

This project is a simple **Todo List API** built with **NestJS**, using a local `todo.json` file instead of a traditional database.  
It is designed as an **educational example** to learn how to structure a basic NestJS application.

---

## Features

- View all todos  
- View a single todo by ID  
- Create a new todo  
- Delete a todo by ID  
- Toggle a todo's completion status  

---

## API Endpoints

| Method   | Endpoint              | Description                          |
|----------|-----------------------|--------------------------------------|
| `GET`    | `/todos`              | Retrieve all todos                   |
| `GET`    | `/todos/:id`          | Retrieve a specific todo by ID       |
| `POST`   | `/todos`              | Create a new todo                    |
| `DELETE` | `/todos/:id`          | Delete a specific todo by ID         |
| `PATCH`  | `/todos/:id/status`   | Toggle the completion status of todo|

---

## Testing with `curl` (Linux / macOS / Windows PowerShell)

```bash
# 1. Get all todos
Invoke-RestMethod -Uri http://localhost:3000/todos -Method GET

curl -X GET http://localhost:3000/todos

# 2. Get a specific todo by ID (e.g., ID = 1)
Invoke-RestMethod -Uri http://localhost:3000/todos/1 -Method GET

curl -X GET http://localhost:3000/todos/1

# 3. Create a new todo
Invoke-RestMethod -Uri http://localhost:3000/todos -Method POST -Body '{ "title": "Test from PowerShell", "completed": false }' -ContentType "application/json"

curl -X POST http://localhost:3000/todos -H "Content-Type: application/json" -d '{"title": "Test from Linux", "completed": false}'

# 4. Delete a todo by ID
Invoke-RestMethod -Uri http://localhost:3000/todos/1 -Method DELETE

curl -X DELETE http://localhost:3000/todos/1

# 5. Toggle completion status of a todo by ID
Invoke-RestMethod -Uri http://localhost:3000/todos/1/status -Method PATCH

curl -X PATCH http://localhost:3000/todos/1/status
---

Getting started

# 1. Install dependencies
npm install

# 2. Start the development server
npm run start
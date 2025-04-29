# Student-Doctor API

A simple **Node.js** + **Express** REST API to manage two lists:

-   **Students** (name, age, level, address)
-   **Doctors** (name, age, phone)

Built with **MVC architecture**, **MongoDB** (via Mongoose), **Prettier**, **ESLint**, **Swagger** docs, and a **Postman** collection.

---

## Table of Contents

-   [Features](#features)
-   [Prerequisites](#prerequisites)
-   [Installation](#installation)
-   [Environment Variables](#environment-variables)
-   [Project Structure](#project-structure)
-   [Running the Server](#running-the-server)
-   [API Documentation (Swagger)](#api-documentation-swagger)
-   [API Reference](#api-reference)
-   [Contributing](#contributing)
-   [License](#license)

---

## Features

-   CRUD endpoints for **Students** & **Doctors**
-   Hardcoded + Body-based Student creation
-   Query-parameter-based Doctor creation & update
-   Global endpoint to fetch both lists
-   MVC folder structure
-   `.env` for secure config
-   Prettier for formatting
-   ESLint for code quality
-   Swagger UI for interactive API docs
-   Postman collection for easy testing

---

## Prerequisites

-   **Node.js** v14+
-   **npm** v6+
-   **MongoDB** (local or Atlas)

---

## Installation

```bash
git clone https://github.com/SCU-Back-End/API-Task.git
cd API-Task
npm install
```

---

## Environment Variables

Create a `.env` file in the project root:

```env
PORT=8000
MONGO_URI=<your-mongodb-connection-string>
```

> `.env` is gitignored — **never commit secrets**.

---

---

## Project Structure

```
API-Task/
├── .env
├── .gitignore
├── .prettierrc
├── .eslintrc.json
├── package.json
├── app.js
├── config/
│   ├── db.js
│   └── swagger.js
├── models/
│   ├── students.js
│   └── doctors.js
├── controllers/
│   ├── studentsController.js
│   ├── doctorsController.js
│   └── globalController.js
├── routes/
│   ├── studentsRoutes.js
│   ├── doctorsRoutes.js
│   └── allRoutes.js
└── postman/
    └── API-Task.postman_collection.json
```

---

## Running the Server

### Development (with `nodemon`)

```bash
npm run dev
```

### Production

```bash
npm start
```

Default URL: `http://localhost:`

---

## API Documentation (Swagger)

Visit Swagger UI:

```
http://localhost:8000/api-docs
```

---

## API Reference

### Students

| Method | Endpoint              | Description                |
| ------ | --------------------- | -------------------------- |
| POST   | `/students/hardcoded` | Create a hardcoded student |
| POST   | `/students`           | Create from request body   |
| GET    | `/students`           | List all students          |
| DELETE | `/students/:id`       | Delete student by ID       |

### Doctors

| Method | Endpoint                                 | Description                |
| ------ | ---------------------------------------- | -------------------------- |
| POST   | `/doctors?name=&age=&phone=`             | Add new doctor using query |
| PUT    | `/doctors/update-name?oldName=&newName=` | Update name by query       |

### Global

| Method | Endpoint | Description                   |
| ------ | -------- | ----------------------------- |
| GET    | `/all`   | Fetch both students & doctors |

---

## Contributing

1. Fork the repo
2. Create a branch (`git checkout -b feature-x`)
3. Lint & commit (`npm run lint && git commit`)
4. Open a Pull Request

---

## License

This project is licensed under the [MIT License](LICENSE)

---

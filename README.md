
# Express Middleware Project

A simple **Node.js + Express** server demonstrating middleware usage, including logging, authentication, validation, and error handling.

---

## Features

- ✅ **Logger Middleware** – Logs all incoming requests.
- ✅ **Authentication Middleware** – Protects routes like `/dashboard`.
- ✅ **Validation Middleware** – Validates login request data.
- ✅ **Error Handling Middleware** – Catches and responds to errors.
- 🔹 Example routes:
  - `/` – Home page
  - `/login` – Login route
  - `/profile` – Profile page
  - `/dashboard` – Protected route
  - `/error-test` – Throws an error for testing

---

## Folder Structure
project-root/
│
├─ middlewares-c/
│ ├─ loggermiddleware.js
│ ├─ auth.js
│ ├─ validate0login.js
│ └─ errorMiddleware.js
│
├─ index.js
├─ package.json
└─ README.md





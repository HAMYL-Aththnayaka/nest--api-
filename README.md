# 🥷 YZZ API

A modular RESTful API built with **NestJS** and **TypeScript**, demonstrating clean backend architecture, CRUD operations, DTOs, validation, services, controllers, modules, and custom guards.

## 🚀 Features

* Modular NestJS architecture
* RESTful API design
* User management with full CRUD operations
* YZZ resource with CRUD operations
* DTO-based request handling
* Request validation
* Custom route protection using Guards
* Separation of Controllers and Services
* Unit and End-to-End testing support
* Type-safe development with TypeScript

## 🛠️ Tech Stack

| Technology     | Purpose              |
| -------------- | -------------------- |
| **NestJS**     | Backend framework    |
| **TypeScript** | Programming language |
| **Node.js**    | Runtime environment  |
| **npm**        | Package manager      |
| **Jest**       | Testing              |

## 📂 Project Structure

```text
yzz-api/
├── src/
│   ├── experiance/
│   │   ├── experiance.guard.spec.ts
│   │   └── experiance.guard.ts
│   │
│   ├── users/
│   │   ├── dto/
│   │   ├── entities/
│   │   ├── users.controller.spec.ts
│   │   ├── users.controller.ts
│   │   ├── users.module.ts
│   │   ├── users.service.spec.ts
│   │   └── users.service.ts
│   │
│   ├── yzz/
│   │   ├── dto/
│   │   │   ├── create-yzz.dto.ts
│   │   │   └── update-yzz.dto.ts
│   │   ├── yzz.controller.spec.ts
│   │   ├── yzz.controller.ts
│   │   ├── yzz.module.ts
│   │   ├── yzz.service.spec.ts
│   │   └── yzz.service.ts
│   │
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
│
├── test/
│   └── e2e tests
│
├── .gitignore
├── package.json
├── package-lock.json
└── tsconfig.json
```

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

* **Node.js** v18 or higher
* **npm** v9 or higher

### 1. Clone the repository

```bash
git clone https://github.com/HAMYL-Aththnayaka/nest--api-.git
cd nest--api-/yzz-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run start:dev
```

The API will be available at:

```text
http://localhost:3000
```

## 🏃 Running the Application

### Development

```bash
npm run start:dev
```

Runs the application with hot reload.

### Production

```bash
npm run build
npm run start:prod
```

## 📡 API Endpoints

### Users

Base URL:

```text
/users
```

| Method   | Endpoint     | Description       |
| -------- | ------------ | ----------------- |
| `GET`    | `/users`     | Get all users     |
| `GET`    | `/users/:id` | Get a user by ID  |
| `POST`   | `/users`     | Create a new user |
| `PATCH`  | `/users/:id` | Update a user     |
| `DELETE` | `/users/:id` | Delete a user     |

### YZZ

Base URL:

```text
/yzz
```

| Method   | Endpoint   | Description          |
| -------- | ---------- | -------------------- |
| `GET`    | `/yzz`     | Get all YZZ items    |
| `GET`    | `/yzz/:id` | Get a YZZ item by ID |
| `POST`   | `/yzz`     | Create a YZZ item    |
| `PATCH`  | `/yzz/:id` | Update a YZZ item    |
| `DELETE` | `/yzz/:id` | Delete a YZZ item    |

## 📝 Request Example

### Create YZZ Item

**POST**

```http
POST /yzz
Content-Type: application/json
```

Example request body:

```json
{
  "name": "Example",
  "tool": "ms-word"
}
```

The request is handled using `CreateYzzDto`.

## 🛡️ Custom Guard

This project includes a custom NestJS Guard:

```text
src/experiance/experiance.guard.ts
```

Guards are used to determine whether a request should be allowed to reach a route handler.

The project demonstrates how custom authorization or request-checking logic can be implemented using NestJS Guards.

## 📦 DTOs

Data Transfer Objects are used to define and validate the structure of incoming request data.

Example:

```text
src/yzz/dto/
├── create-yzz.dto.ts
└── update-yzz.dto.ts
```

* `CreateYzzDto` — Defines the data required when creating a YZZ item.
* `UpdateYzzDto` — Defines the data that can be changed when updating a YZZ item.

## 🧪 Testing

### Unit Tests

```bash
npm run test
```

### Watch Mode

```bash
npm run test:watch
```

### End-to-End Tests

```bash
npm run test:e2e
```

### Test Coverage

```bash
npm run test:cov
```

## 🧠 What I Learned

This project was built to practice and understand core NestJS concepts, including:

* NestJS modules
* Controllers and routing
* Services and dependency injection
* DTOs
* CRUD operations
* Request validation
* Entities
* Custom Guards
* Unit testing
* E2E testing
* TypeScript backend development

## 🔮 Future Improvements

Possible improvements for the project include:

* [ ] Add PostgreSQL or MongoDB database integration
* [ ] Add Prisma or TypeORM
* [ ] Implement JWT authentication
* [ ] Add role-based authorization
* [ ] Add Swagger API documentation
* [ ] Add global validation pipes
* [ ] Improve error handling
* [ ] Add API pagination
* [ ] Add Docker support
* [ ] Deploy the API to a cloud platform

## 👨‍💻 Author

**Yasas Aththanayaka**

GitHub:
https://github.com/HAMYL-Aththnayaka

---

⭐ If you found this project useful, consider giving the repository a star.

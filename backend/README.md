# Rising Mal Backend API

Backend server for the Rising Mal Flower Shop with authentication.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables in `.env`:
```
PORT=5000
JWT_SECRET=your_secret_key
NODE_ENV=development
```

3. Start the server:
```bash
npm run dev  # Development with auto-reload
npm start    # Production
```

## API Endpoints

### Authentication

#### POST /api/auth/register
Register a new user.

**Request Body:**
```json
{
  "username": "john",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Registration successful",
  "data": {
    "token": "jwt_token_here",
    "user": {
      "id": 1,
      "username": "john",
      "email": "john@example.com"
    }
  }
}
```

#### POST /api/auth/login
Login with username/email and password.

**Request Body:**
```json
{
  "username": "john",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "jwt_token_here",
    "user": {
      "id": 1,
      "username": "john",
      "email": "john@example.com"
    }
  }
}
```

#### GET /api/auth/verify
Verify JWT token.

**Headers:**
```
Authorization: Bearer your_jwt_token
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": 1,
      "username": "john",
      "email": "john@example.com"
    }
  }
}
```

### Health Check

#### GET /api/health
Check if server is running.

**Response:**
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

## Tech Stack

- Express.js - Web framework
- bcryptjs - Password hashing
- jsonwebtoken - JWT authentication
- cors - Cross-origin resource sharing
- dotenv - Environment variables

## Note

This implementation uses in-memory storage. For production, replace with a proper database (MongoDB, PostgreSQL, etc.).

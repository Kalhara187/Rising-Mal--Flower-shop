<<<<<<< HEAD
# Rising Mal Flower Shop - Full Stack Application

A full-stack flower shop website with AI chatbot and authentication.

## Project Structure

```
Rising-Mal--Flower-shop/
├── frontend/          # React + Vite + Tailwind CSS
└── backend/           # Node.js + Express API
```

## Features

✅ Beautiful flower shop website
✅ AI Chatbot with login functionality
✅ JWT-based authentication
✅ Flower bouquet guides and tips
✅ Responsive design

## Setup Instructions

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm run dev  # Development mode with auto-reload
npm start    # Production mode
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## Using the Chatbot Login

1. Open the website and click the chat icon in the bottom-right
2. Type "login" in the chatbot
3. Enter your username (try "demo")
4. Enter your password
5. You're logged in!

### Create a new account:
Type "register" in the chatbot for account creation instructions.

### Test Credentials:
- Username: `demo`
- Password: `password123` (will need to register first)

## API Endpoints

### POST /api/auth/login
Login with username and password

### POST /api/auth/register
Create a new account

### GET /api/auth/verify
Verify JWT token

### GET /api/health
Health check endpoint

## Chatbot Commands

Try these commands in the chatbot:
- `login` - Start login process
- `logout` - Sign out
- `how to create a bouquet` - Get bouquet creation guide
- `romantic bouquet` - Romantic bouquet ideas
- `birthday bouquet` - Birthday bouquet suggestions
- `flower care tips` - Learn how to care for flowers
- `color meanings` - Flower color symbolism

## Technologies Used

### Frontend
- React 19
- Vite
- Tailwind CSS
- React Router

### Backend
- Node.js
- Express.js
- JWT (jsonwebtoken)
- bcryptjs
- CORS

## Development

- Frontend runs on port 5173
- Backend runs on port 5000
- CORS is enabled for local development

## Production Deployment

1. Update `.env` with secure JWT_SECRET
2. Replace in-memory storage with a real database (MongoDB, PostgreSQL, etc.)
3. Build frontend: `npm run build`
4. Deploy backend and frontend separately or together

## Notes

- Current implementation uses in-memory storage for users
- For production, implement a proper database
- Update CORS settings for production domains
- Use environment variables for sensitive data

## License

ISC
=======
# 🌸 RISING මල් – Flower Bouquet Store Website  
A modern, responsive flower shop website built using **React + Tailwind CSS**.  
This project showcases product listings, a clean UI, and pages such as Home, About, Bouquets, and Contact.  
Designed to support small businesses that rely on online orders and social media marketing.

---

## 🚀 Tech Stack

| Technology | Purpose |
|------------|----------|
| **React** | Frontend UI Framework |
| **Tailwind CSS** | Styling & Layout |
| **JavaScript (ES6)** | Core Logic |
| **React Router** | Page Navigation |
| **Node / MongoDB (Optional)** | Backend & Orders (Future Plan) |

---

## 📌 Features

✔ Fully responsive modern UI  
✔ Flower bouquet product listings  
✔ Home, About, Bouquets, Contact pages  
✔ Elegant pastel color theme  
✔ Easy to customize and deploy  
✔ Social media–focused design (Facebook orders)

---

## 🏷 Screenshots

| Home Page | 
|-----------|--------------|
| *<img width="1835" height="891" alt="image" src="https://github.com/user-attachments/assets/656279b5-8ad3-423b-9765-f490d2e476cc" />
| About Us Page |
| <img width="1850" height="877" alt="image" src="https://github.com/user-attachments/assets/bfc852f4-b276-430d-81a2-bf906bf95a37" />


---

## 📂 Project Structure
rising-mal/
│ package.json
│ vite.config.js
│ tailwind.config.js
│ postcss.config.js
│ README.md
│ index.html
└─ src/
   │ App.jsx
   │ index.css
   │ main.jsx
   ├─ pages/
   │   Home.jsx
   │   About.jsx
   │   Products.jsx
   │   Contact.jsx
   ├─ components/
   │   Navbar.jsx
   │   Footer.jsx
   └─ assets/
       banner.jpg
       rose.jpg


>>>>>>> 5c4bba9ed74f24c16f374f224616ad89c1a9b074

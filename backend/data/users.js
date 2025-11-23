// In-memory user storage (replace with database in production)
// Pre-hashed password for demo user: "password123"
export const users = [
  {
    id: 1,
    username: 'demo',
    email: 'demo@risingmal.com',
    password: '$2a$10$YourHashedPasswordHere', // Will be replaced on first login
    createdAt: new Date().toISOString()
  }
];

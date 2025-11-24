import bcrypt from 'bcryptjs';

// In-memory user storage (replace with database in production)
// Pre-hashed password for admin: "admin123"
// Pre-hashed password for demo: "demo123"
const adminPasswordHash = bcrypt.hashSync('admin123', 10);
const demoPasswordHash = bcrypt.hashSync('demo123', 10);

export const users = [
  {
    id: 1,
    username: 'admin',
    email: 'admin@risingmal.com',
    password: adminPasswordHash,
    role: 'admin',
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    username: 'demo',
    email: 'demo@risingmal.com',
    password: demoPasswordHash,
    role: 'user',
    createdAt: new Date().toISOString()
  }
];

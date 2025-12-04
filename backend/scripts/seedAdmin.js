import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import dotenv from 'dotenv';

dotenv.config();

const seedAdmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/risingmal');
    console.log('✅ Connected to MongoDB');

    // Check if admin already exists
    const existingAdmin = await User.findOne({ username: 'admin' });
    
    if (existingAdmin) {
      console.log('⚠️  Admin user already exists');
      process.exit(0);
    }

    // Create admin user
    const admin = await User.create({
      username: 'admin',
      email: 'admin@risingmal.com',
      password: 'admin123', // Will be hashed by pre-save hook
      role: 'admin'
    });

    console.log('✅ Admin user created successfully!');
    console.log('   Username: admin');
    console.log('   Email: admin@risingmal.com');
    console.log('   Password: admin123');
    console.log('   Role: admin');

    // Create demo user
    const demo = await User.create({
      username: 'demo',
      email: 'demo@risingmal.com',
      password: 'demo123',
      role: 'user'
    });

    console.log('✅ Demo user created successfully!');
    console.log('   Username: demo');
    console.log('   Email: demo@risingmal.com');
    console.log('   Password: demo123');
    console.log('   Role: user');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedAdmin();

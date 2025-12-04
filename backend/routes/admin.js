import express from 'express';
import { authenticateToken, isAdmin } from '../middleware/auth.js';
import User from '../models/User.js';

const router = express.Router();

// Get all users (Admin only)
router.get('/users', authenticateToken, isAdmin, async (req, res) => {
  try {
    const users = await User.find({}).select('-password');
    
    res.json({
      success: true,
      data: {
        users: users.map(u => ({
          id: u._id,
          username: u.username,
          email: u.email,
          role: u.role,
          createdAt: u.createdAt
        })),
        count: users.length
      }
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
});

// Get user statistics (Admin only)
router.get('/stats', authenticateToken, isAdmin, async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const adminUsers = await User.countDocuments({ role: 'admin' });
    const regularUsers = await User.countDocuments({ role: 'user' });
    
    // Users registered today
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const registeredToday = await User.countDocuments({
      createdAt: { $gte: today }
    });

    res.json({
      success: true,
      data: {
        totalUsers,
        adminUsers,
        regularUsers,
        registeredToday
      }
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
});

// Delete user (Admin only)
router.delete('/users/:id', authenticateToken, isAdmin, async (req, res) => {
  try {
    const userId = req.params.id;
    
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    // Prevent deleting yourself
    if (user._id.toString() === req.user.id) {
      return res.status(400).json({ 
        success: false, 
        message: 'Cannot delete your own account' 
      });
    }

    await User.findByIdAndDelete(userId);

    res.json({
      success: true,
      message: 'User deleted successfully',
      data: {
        username: user.username
      }
    });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
});

// Update user role (Admin only)
router.patch('/users/:id/role', authenticateToken, isAdmin, async (req, res) => {
  try {
    const userId = req.params.id;
    const { role } = req.body;

    if (!role || !['user', 'admin'].includes(role)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid role. Must be "user" or "admin"' 
      });
    }

    const user = await User.findByIdAndUpdate(
      userId,
      { role },
      { new: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    res.json({
      success: true,
      message: 'User role updated successfully',
      data: {
        id: user._id,
        username: user.username,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Error updating user role:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
});

export default router;

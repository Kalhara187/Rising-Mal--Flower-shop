import express from 'express';
import { authenticateToken, isAdmin } from '../middleware/auth.js';
import { users } from '../data/users.js';

const router = express.Router();

// Get all users (Admin only)
router.get('/users', authenticateToken, isAdmin, (req, res) => {
  try {
    const usersWithoutPasswords = users.map(({ password, ...user }) => user);
    res.json({
      success: true,
      data: {
        users: usersWithoutPasswords,
        count: usersWithoutPasswords.length
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
router.get('/stats', authenticateToken, isAdmin, (req, res) => {
  try {
    const totalUsers = users.length;
    const adminUsers = users.filter(u => u.role === 'admin').length;
    const regularUsers = users.filter(u => u.role === 'user').length;

    res.json({
      success: true,
      data: {
        totalUsers,
        adminUsers,
        regularUsers,
        registeredToday: 0 // Implement based on actual dates
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
router.delete('/users/:id', authenticateToken, isAdmin, (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex === -1) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    // Prevent deleting yourself
    if (users[userIndex].id === req.user.id) {
      return res.status(400).json({ 
        success: false, 
        message: 'Cannot delete your own account' 
      });
    }

    const deletedUser = users.splice(userIndex, 1)[0];

    res.json({
      success: true,
      message: 'User deleted successfully',
      data: {
        username: deletedUser.username
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
router.patch('/users/:id/role', authenticateToken, isAdmin, (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const { role } = req.body;

    if (!role || !['user', 'admin'].includes(role)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid role. Must be "user" or "admin"' 
      });
    }

    const user = users.find(u => u.id === userId);

    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    user.role = role;

    res.json({
      success: true,
      message: 'User role updated successfully',
      data: {
        id: user.id,
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

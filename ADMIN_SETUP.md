# Admin Account Setup

## 🔐 Admin Account Created Successfully!

### Default Admin Credentials:

**Username:** `admin`  
**Email:** `admin@risingmal.com`  
**Password:** `admin123`  
**Role:** `admin`

### Demo User Credentials:

**Username:** `demo`  
**Email:** `demo@risingmal.com`  
**Password:** `demo123`  
**Role:** `user`

## 🎯 Admin Features

### Access Admin Panel
Visit: `http://localhost:5173/admin`

### Admin Capabilities:

1. **View All Users** - See complete user list
2. **User Statistics** - Dashboard with metrics
3. **Delete Users** - Remove users (except yourself)
4. **Change User Roles** - Toggle between 'user' and 'admin'
5. **User Management** - Full control over user accounts

## 🚀 How to Login as Admin

### Via Chatbot:
1. Open the chatbot in bottom-right corner
2. Type "login"
3. Enter username: `admin`
4. Enter password: `admin123`
5. You're now logged in as admin!

### Access Admin Panel:
1. Login as admin (using chatbot or your method)
2. Navigate to `/admin` route
3. View and manage all users

## 📊 Admin Dashboard Features

### Statistics Cards:
- Total Users
- Admin Users  
- Regular Users
- Registered Today

### User Management Table:
- View all users with details
- See user ID, username, email, role
- Toggle user roles (user ↔ admin)
- Delete users

## 🔒 Security Features

- JWT token authentication
- Role-based access control
- Admin-only routes protected
- Cannot delete your own account
- Password hashing with bcrypt

## 🛡️ API Endpoints (Admin Only)

### GET `/api/admin/users`
Get all users (requires admin token)

### GET `/api/admin/stats`
Get user statistics (requires admin token)

### DELETE `/api/admin/users/:id`
Delete a user (requires admin token)

### PATCH `/api/admin/users/:id/role`
Change user role (requires admin token)

## ⚠️ Important Notes

1. **Change Default Password**: In production, change the admin password immediately
2. **Secure JWT Secret**: Update JWT_SECRET in `.env` file
3. **Database**: Current setup uses in-memory storage. Use a real database for production
4. **HTTPS**: Use HTTPS in production
5. **Admin Protection**: Only grant admin access to trusted users

## 🔄 Testing the Admin System

1. Login as admin using chatbot
2. Open browser to `http://localhost:5173/admin`
3. View dashboard and user statistics
4. Try toggling a user's role
5. Test deleting a user (will create a new one to test)

## 📝 User Roles

- **admin**: Full access to admin panel and all features
- **user**: Regular user with standard access

## 🎨 Admin Panel UI

Beautiful, modern admin dashboard with:
- Clean table layout
- Color-coded role badges (Purple for admin, Green for user)
- Interactive buttons
- Responsive design
- Real-time updates

---

**Your admin account is ready to use!** 🎉

Login with `admin` / `admin123` via the chatbot to get started.

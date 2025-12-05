Full Stack Blog Application
This project is a complete Full Stack Blog Application built with a MERN stack-like structure. It features a secure RESTful API for handling posts and user authentication, and a modern, component-based frontend for a seamless user experience.

🚀 Key Features
User Authentication (JWT): Secure registration, login, and token-based protected routes.

CRUD Operations: Users can create, read, update, and delete blog posts (restricted access for post creation/management).

Role-Based Access: Protected routes restrict access to sensitive features like post editing/creation (indicated by the <ProtectedRoute /> component).

Modern Frontend: Built with React and Tailwind CSS for a fast, responsive interface.

📦 Project Structure
The application is split into two main components: frontend (React client) and backend (Node.js/Express API).

Backend (nodejs-blog-api) Structure
Routes: Defines API endpoints for authentication (/api/v1/auth) and posts (/api/v1/posts).

Models: Mongoose schemas for User and Post data.

db: Contains the connectDB function for connecting to MongoDB.

app.js: Main entry point; sets up middleware (CORS, JSON parsing), and mounts route modules.

Frontend (frontend) Structure
Pages: Top-level components for views: LoginPage, UserHome, AdminHome, CreatePost, etc.

Components: Reusable UI elements: Header, Card, etc.

App.jsx: Defines the application routing using react-router-dom, including protected routes.

⚙️ Technologies Used
Frontend Dependencies
React: Component-based UI library.

react-router-dom: Declarative routing for navigation.

Tailwind CSS: Utility-first CSS framework for styling.

Axios: HTTP client for making API requests to the backend.

Vite: Frontend build tool and development server.

Backend Dependencies
Node.js / Express: RESTful API server framework.

MongoDB / Mongoose: Database and object data modeling.

bcryptjs: Password hashing for security.

jsonwebtoken: Creating and verifying JWTs for authentication.

dotenv: Environment variable management.

nodemon: Automatically restarts the server during development.

🛠️ Setup and Installation
1. Prerequisites
You must have Node.js and npm installed. You will also need access to a MongoDB database (either local or cloud-hosted via MongoDB Atlas).

2. Backend Setup
Navigate to the backend directory:

Bash

cd nodejs-blog-api
Install dependencies:

Bash

npm install
Create a .env file in the root of the backend directory and add your MongoDB connection string and JWT secret:

MONGO_URI="YOUR_MONGODB_CONNECTION_STRING"
JWT_SECRET="YOUR_SECRET_KEY_FOR_TOKENS"
Start the backend server:

Bash

npm start
The server will run on port 8000.

3. Frontend Setup
Navigate to the frontend directory:

Bash

cd ../frontend
Install dependencies:

Bash

npm install
Start the frontend development server:

Bash

npm run dev
The frontend will run on port 5173.

The frontend is configured to proxy API requests from /api/v1 to the backend running on port 8000. You can start developing and testing the application by visiting http://localhost:5173.

🗺️ Routing Summary
This section details the primary routes defined in frontend/src/App.jsx.

Public Routes
/: Renders <UserHome /> to display all blog posts.

/loginpage: Renders <LoginPage /> for user login.

/signup: Renders <SignUpPage /> for user registration.

/blogdetailpage: Renders <BlogDetailPage /> to view a specific blog post.

Protected (Admin) Routes
These routes are wrapped in a <ProtectedRoute /> component and require a valid JWT token.

/adminhome: Renders <AdminHome /> for managing posts.

/create-post: Renders <CreatePost /> for creating a new blog post.

/edit-page/:id: Renders <EditPage /> for editing an existing post.

/delete-page/:id: Renders <DeletePage /> for confirming post deletion.
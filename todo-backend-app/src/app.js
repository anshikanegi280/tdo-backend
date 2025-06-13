import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import taskRoutes from './routes/taskRoutes.js';
import connectToDb from './config/database.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Database connection
connectToDb();

// Example: Connect to another database if needed
// const userDbConnection = await connectToDatabase('userdb');
// const logsDbConnection = await connectToDatabase('logsdb');

// test route
app.get('/', (req, res) => {
    res.send('Welcome to the Todo App API');
});

// Routes
app.use('/api/tasks', taskRoutes());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
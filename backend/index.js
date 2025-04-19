import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/connectDB.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json()); // Middleware to parse JSON request bodies: This is used to parse incoming JSON requests and make the data available in req.body.
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded request bodies


app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log('Server is running on port: ', PORT);
}
);




import express from 'express';
import cors from 'cors'; 
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { connectDB } from './db/connectDB.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.CLIENT_URL, 
  credentials: true, 
})); 

app.use(express.json()); // Middleware to parse JSON request bodies: This is used to parse incoming JSON requests and make the data available in req.body.
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded request bodies
app.use(cookieParser()); // Middleware to parse cookies in the request: This is used to parse cookies attached to the client request object.


app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log('Server is running on port: ', PORT);
}
);




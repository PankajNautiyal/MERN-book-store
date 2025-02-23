import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import bookRoute from './routes/booksRoute.js'
import cors from 'cors';

const app = express();

// Middleware for parsing req body
app.use(express.json());

// CORS settings
app.use(cors({
    origin: 'https://mern-book-store-frontend-9qe2.onrender.com/',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}));

app.get('/', (req, res) => {
    // console.log(req);
    return res.status(234).send('Welcome to MERN Stack');
});

app.use('/books', bookRoute);

const PORT = process.env.PORT || 5000;
const mongoDBURL = process.env.MONGO_DB_URL;

// MongoDB connection
mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });

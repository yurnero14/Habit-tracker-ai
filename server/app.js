import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import habitRoutes from './routes/habitRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/habits', habitRoutes);

const PORT = process.env.PORT || 5050;

mongoose
.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
})
.catch((err) => console.error(err));


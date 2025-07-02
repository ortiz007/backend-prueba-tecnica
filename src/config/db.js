import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('conectado a MongoDB')
    } catch (error) {
        console.error('error al conectar a MongoDB', error);
        process.exit(1);
    }
}
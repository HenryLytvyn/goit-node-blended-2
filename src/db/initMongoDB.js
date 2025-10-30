import mongoose from 'mongoose';
import {
  MONGODB_DB,
  MONGODB_PASSWORD,
  MONGODB_URL,
  MONGODB_USER,
} from '../constants/constants-env.js';

export default async function initMongoDB() {
  try {
    await mongoose.connect(
      `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URL}/${MONGODB_DB}?retryWrites=true&w=majority&appName=Cluster0`,
    );
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.log('MongoDB connection failed: ', err);
  }
}

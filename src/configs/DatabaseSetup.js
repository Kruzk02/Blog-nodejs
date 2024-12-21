import mongoose from 'mongoose';

export default async function connectDB() {
  const mongoURI = 'mongodb://mongo:27017/blog';
  
  
  let retries = 5;
  while (retries) {
    try {
      await mongoose.connect(mongoURI);
      console.log("MongoDB connected");
      return;
    } catch (err) {
      console.error("MongoDB connection error:", err);
      retries -= 1;
      console.log(`Retrying... (${5 - retries}/5)`);
      await new Promise(res => setTimeout(res, 5000));  }
  }
  
  console.error("Failed to connect to MongoDB after several attempts.");
  process.exit(1);
}


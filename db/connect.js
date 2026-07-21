import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

  const db_connector = async() => {
    try {
      await mongoose.connect(process.env.MONGO_URI)
      console.log('mongoose database is connected and ready to go')
    } catch (err) {
      console.log(err)
    }
  }

export default db_connector;




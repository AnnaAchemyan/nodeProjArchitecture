import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UsersRouter from './routers/users.router.js';
// import router from './routes.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const dbURL = process.env.MONGODB_URL;
const dbOptions = { useNewUrlParser: true };
// router(app);
app.use('/api/users', UsersRouter);


(async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(dbURL, dbOptions);
    app.listen(process.env.PORT || 3000, () => {
      console.log(`app started listen at ${process.env.PORT || 3000} PORT`);
    });
  } catch (err) {
    console.log(`error: ${err}`);
  }
})();

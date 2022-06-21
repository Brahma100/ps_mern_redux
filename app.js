import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import config from 'config';

// routes
import authRoutes from './routes/api/auth';
import itemRoutes from './routes/api/items';

const MONGO_URI = config.get('mongoURI')
const app = express();

app.use(bodyParser.json());

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }) 
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use('/api/items', itemRoutes);
app.use('/api/auth', authRoutes);

export default app;

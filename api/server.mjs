// ☞ Package import
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
// import dotenv from 'dotenv'

// ☞ Custom import
import addressBookRoutes from './AddressBook.route.mjs';

// dotenv.config()
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ☞ Configure base route path for the api request
app.use('/addressBook', addressBookRoutes);

// ☞ Database connection config
mongoose.Promise = global.Promise;
const run = async () => {
  await mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    autoReconnect: true,
    reconnectTries: process.env.RECONNECT_TRIES,
    reconnectInterval: process.env.RECONNECT_INTERVAL
  })
};

// ☞ Initialize database connection
run().catch(error => console.error(error));

// ☞ Initialize server instance to listen from client
app.listen(PORT, () => console.log('Server is running on Port:', PORT));
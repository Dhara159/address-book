// ☞ Package import
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

// ☞ Custom import
import DB from './DB.mjs';
import addressBookRoutes from './AddressBook.route.mjs';

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
  await mongoose.connect(DB, {
    useNewUrlParser: true,
    autoReconnect: true,
    reconnectTries: 1000000,
    reconnectInterval: 3000
  })
};

// ☞ Initialize database connection
run().catch(error => console.error(error));

// ☞ Initialize server instance to listen from client
app.listen(PORT, () => console.log('Server is running on Port:', PORT));
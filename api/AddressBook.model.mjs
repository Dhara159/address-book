import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// ☞ Define colection and schema for Address book
const addressBook = new Schema({
  id: {
    type: Number
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  notes: {
    type: String
  },
  dob: {
    type: Date
  },
}, {
  collection: 'address_book'
});

// ☞ Object to be used to interact with model
const addressBookModel = mongoose.model('addressBook', addressBook);

export default addressBookModel;
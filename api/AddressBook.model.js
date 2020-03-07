// AddressBook.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Address Book
let addressBook = new Schema({
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
},{
    collection: 'address_book'
});

module.exports = mongoose.model('addressBook', addressBook);
// AddressBook.model.js

const express = require('express');
const addressBookRoutes = express.Router();

// Require Address book model in our routes module
let AddressBook = require('./AddressBook.model');

// Defined store route
addressBookRoutes.route('/add').post(function (req, res) {
  let newAddress = new AddressBook(req.body);
  newAddress.save()
    .then(() => {
      res.status(200).json({ success: true, 'message': 'Contact added successfully' });
    })
    .catch(() => {
      res.status(400).send({ success: false, 'message': 'Something went wrong! Please try again' });
    });
});

// Defined get data(index or listing) route
addressBookRoutes.route('/').get(function (req, res) {
  AddressBook.find(function (err, addressBooks) {
    if (err) {
      res.json({ success: false, err });
    }
    else {
      res.json({ success: true, data: addressBooks });
    }
  });
});

// Defined edit route
addressBookRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  AddressBook.findById(id, function (err, addressBook) {
    if (err) {
      res.json({ success: false, err });
    }
    res.json({ success: true, addressBook });
  });
});

//  Defined update route
addressBookRoutes.route('/update/:id').post(function (req, res) {
  AddressBook.findById(req.params.id, function (err, addressBook) {
    if (!addressBook)
      res.status(404).send({ success: false, err });
    else {
      addressBook.title = req.body.title;
      addressBook.body = req.body.body;
      addressBook.save().then(() => {
        res.json({ success: true, message: 'Updated Successfully' });
      })
        .catch(() => {
          res.status(400).send({ success: false, err });
        });
    }
  });
});

// Defined delete | remove | destroy route
addressBookRoutes.route('/delete/:id').delete(function (req, res) {
  AddressBook.findByIdAndRemove({ _id: req.params.id }, function (err) {
    if (err) res.json({ success: false, err });
    else res.json({ success: true, message: 'Successfully removed' });
  });
});

module.exports = addressBookRoutes;
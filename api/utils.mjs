// ☞ Utils to be used to perform only database operations without any busincess logic and for sending response s

import HttpStatus from 'http-status';

import addressBookModel from './AddressBook.model.mjs'

export const createAddress = async ({ address }) => await new addressBookModel(address).save();

export const fetchAllAddresses = async () => await addressBookModel.find({}).sort({ _id: -1 });

export const fetchAddressById = async ({ id }) => await addressBookModel.findById(id);

export const updateAddressById = async ({ id, address }) => {
  const addressFound = await fetchAddressById({ id });
  if (!addressFound) return false;
  Object.entries(address).map(eachKey => addressFound[eachKey[0]] = eachKey[1]);
  return await addressFound.save();
}

export const deleteAddressById = async ({ id }) => await addressBookModel.findByIdAndRemove({ _id: id });

export const sendSuccessResponse = async ({ res, status, resObj }) => await res.status(status).send(resObj);

export const sendErrorResponse = async ({ res }) => await res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Something went wrong! Please try again' });
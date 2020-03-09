import express from 'express';
import HttpStatus from 'http-status';

import { createAddress, fetchAllAddresses, fetchAddressById, updateAddressById, deleteAddressById, sendSuccessResponse, sendErrorResponse } from './utils.mjs';

// ☞ Instance to be used to get access to different routes and perform CRUD
const addressBookRoutes = express.Router();

// ☞ Route to add new address
addressBookRoutes.post('/add', async ({ body: address }, res) => {
  try {
    const newAddress = await createAddress({ address });
    return sendSuccessResponse({ res, status: HttpStatus.CREATED, resObj: { message: 'New address created', address: newAddress } });
  } catch {
    return sendErrorResponse({ res });
  }
});

// ☞ Route to fetch all addresses
addressBookRoutes.get('/', async (req, res) => {
  try {
    const addressBook = await fetchAllAddresses();
    return sendSuccessResponse({ res, status: HttpStatus.OK, resObj: { addressBook } });
  } catch {
    return sendErrorResponse({ res });
  }
});

// ☞ Route to fetch address using id for editing purpose
addressBookRoutes.get('/edit/:id', async ({ params: { id } }, res) => {
  try {
    const address = await fetchAddressById({ id });
    return sendSuccessResponse({ res, status: address ? HttpStatus.OK : HttpStatus.NO_CONTENT, resObj: { address: address || {} } });
  } catch {
    return sendErrorResponse({ res });
  }
});

// ☞ Route to Update address by id
addressBookRoutes.post('/update/:id', async ({ params: { id }, body: address }, res) => {
  try {
    const updatedAddress = await updateAddressById({ id, address });
    return sendSuccessResponse({ res, status: updatedAddress ? HttpStatus.OK : HttpStatus.NO_CONTENT, resObj: { address: updatedAddress || {} } });
  } catch {
    return sendErrorResponse({ res });
  }
});

// ☞ Route to delete id
addressBookRoutes.delete('/delete/:id', async ({ params: { id } }, res) => {
  try {
    await deleteAddressById({ id });
    return sendSuccessResponse({ res, status: HttpStatus.OK });
  } catch {
    return sendErrorResponse({ res });
  }
});

export default addressBookRoutes;
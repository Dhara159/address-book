import axios from 'axios';

const BASE_URL = process.env.VUE_APP_ROOT_API;

export const addAddress = async ({ v, userData }) => {
  v.$touch();
  if (v.$invalid) {
    return;
  }
  let uri = `${BASE_URL}/addressBook/add`;
  const res = await axios.post(uri, userData);
  return (res.status === 201);
};

export const fetchAllAddresses = async () => {
  let uri = `${BASE_URL}/addressBook`;
  const res = await axios.get(uri);
  if (res.status === 200) return res.data;
  return false;
};

export const fetchAddressById = async ({ id }) => {
  const uri = `${BASE_URL}/addressBook/edit/${id}`;
  const res = await axios.get(uri);
  if (res.status === 200) return res.data;
  return false;
};

export const updateAddressById = async ({ v, userData, id }) => {
  v.$touch();
  if (v.$invalid) {
    return;
  }
  const uri = `${BASE_URL}/addressBook/update/${id}`;
  const res = await axios.post(uri, userData);
  return (res.status === 200);
};

export const deleteAddressById = async ({ id }) => {
  let uri = `${BASE_URL}/addressBook/delete/${id}`;
  const res = await axios.delete(uri);
  return (res.status === 200);
};
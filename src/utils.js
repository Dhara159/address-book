import axios from 'axios';

export const addAddress = async ({ v, userData }) => {
  v.$touch();
  if (v.$invalid) {
    return;
  }
  let uri = "http://localhost:4000/addressBook/add";
  const res = await axios.post(uri, userData);
  return (res.status === 201);
};

export const fetchAllAddresses = async () => {
  let uri = "http://localhost:4000/addressBook";
  const res = await axios.get(uri);
  if (res.status === 200) return res.data;
  return false;
};

export const fetchAddressById = async ({ id }) => {
  const uri = `http://localhost:4000/addressBook/edit/${id}`;
  const res = await axios.get(uri);
  if (res.status === 200) return res.data;
  return false;
};

export const updateAddressById = async ({ v, userData, id }) => {
  v.$touch();
  if (v.$invalid) {
    return;
  }
  const uri = `http://localhost:4000/addressBook/update/${id}`;
  const res = await axios.post(uri, userData);
  return (res.status === 200);
};

export const deleteAddressById = async ({ id }) => {
  let uri = `http://localhost:4000/addressBook/delete/${id}`;
  const res = await axios.delete(uri);
  return (res.status === 200);
};
import axios from 'axios';

const fetchAllAddresses = async () => {
  let uri = "http://localhost:4000/addressBook";
  const res = await axios.get(uri);
  console.log("fetchAllAddresses -> res", res)
  if (res.status === 200) return res.data;
  return false;
}

const addAddress = async ({ v, userData }) => {
  v.$touch();
  if (v.$invalid) {
    return;
  }
  let uri = "http://localhost:4000/addressBook/add";
  return await axios.post(uri, userData);
}

const fetchAddressById = async ({ id }) => {
  const uri = `http://localhost:4000/addressBook/edit/${id}`;
  const res = await axios.get(uri);
  if (res.status === 200) return res.data;
  else alert("Something went wrong");
}

const updateAddressById = async ({ v, userData, id }) => {
  v.$touch();
  if (v.$invalid) {
    return;
  }

  const uri = `http://localhost:4000/addressBook/update/${id}`;
  return await axios.post(uri, userData)
}

const deleteAddressById = async ({ id }) => {
  let uri = `http://localhost:4000/addressBook/delete/${id}`;
  const res = await axios.delete(uri);
  if (res.status === 200) return true;
  alert("Something went wrong")
  return false;
}

export { addAddress, fetchAddressById, updateAddressById, fetchAllAddresses, deleteAddressById };
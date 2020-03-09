import axios from 'axios';

const addAddressBook = async ({ v, userData }) => {
  v.$touch();
  if (v.$invalid) {
    return;
  }
  let uri = "http://localhost:4000/addressBook/add";
  return await axios.post(uri, userData);
}

const fetchAddressToEdit = async ({ id }) => {
  const uri = `http://localhost:4000/addressBook/edit/${id}`;
  const res = await axios.get(uri);
  if (res.status === 200) return res.data;
  else alert("Something went wrong");
}

const updateAddressBook = async ({ v, userData, id }) => {
  v.$touch();
  if (v.$invalid) {
    return;
  }

  const uri = `http://localhost:4000/addressBook/update/${id}`;
  await axios.post(uri, userData)
}

const fetchAllAddresses = async () => {
  let uri = "http://localhost:4000/addressBook";
  const res = await axios.get(uri);
  if (res.status === 200) return res.data;
}

const deleteAddressBook = async ({ id }) => {
  let uri = `http://localhost:4000/addressBook/delete/${id}`;
  const res = await axios.delete(uri);
  if (res.status === 200) return true;
  alert("Something went wrong")
  return false;
}

export { addAddressBook, fetchAddressToEdit, updateAddressBook, fetchAllAddresses, deleteAddressBook };
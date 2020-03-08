import axios from 'axios';
import router from './router'

const addAddressBook = async ({ v, userData }) => {
  v.$touch();
  if (v.$invalid) {
    return;
  }

  let uri = "http://localhost:4000/addressBooks/add";

  const res = await axios.post(uri, userData);
  if (res.status === 200) router.push({ name: "home" });
  else alert("Something went wrong");
}

const fetchAddressToEdit = async ({ id }) => {
  const uri = `http://localhost:4000/addressBooks/edit/${id}`;
  const res = await axios.get(uri);
  if (res.status === 200) return res.data.addressBook;
  else alert("Something went wrong");
}

const updateAddressBook = async ({ v, userData, id }) => {
  v.$touch();
  if (v.$invalid) {
    return;
  }

  const uri = `http://localhost:4000/addressBooks/update/${id}`;
  await axios.post(uri, userData)
  router.push({ name: "addressBooks" });
}

const fetchAllAddresses = async () => {
  let uri = "http://localhost:4000/addressBooks";
  const res = await axios.get(uri);
  if (res.status === 200) return res.data.data;
}

const deleteAddressBook = async ({ id }) => {
  let uri = `http://localhost:4000/addressBooks/delete/${id}`;
  const res = await axios.delete(uri);
  if (res.status === 200) return true;
  alert("Something went wrong")
  return false;
}

export { addAddressBook, fetchAddressToEdit, updateAddressBook, fetchAllAddresses, deleteAddressBook };
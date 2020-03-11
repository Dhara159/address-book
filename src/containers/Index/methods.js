import { utilsFetchAllAddresses } from "./../../utils";

const fetchAllAddresses = async () => {
  const { addressBook } = await utilsFetchAllAddresses();
  if (!addressBook) this.showErrorModal = true;
  this.addressBook = addressBook || [];
}

const hideErrorModal = () => {
  this.showErrorModal = false;
}

export { fetchAllAddresses, hideErrorModal };
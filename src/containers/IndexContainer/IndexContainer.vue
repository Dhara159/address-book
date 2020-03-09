<template>
  <div>
    <div class="pen-title">
      <center>
        <h1>MY PEOPLES</h1>
      </center>
    </div>
    <br />
    <div class="card-list">
      <CardComponent v-on:refetchData="fetchAllAddresses" v-bind:isNewAddress="true" />
      <div v-for="address in addressBook" :key="address._id">
        <CardComponent
          v-on:refetchData="fetchAllAddresses"
          v-bind:isNewAddress="false"
          v-bind:addressBook="address"
        />
      </div>
    </div>
    <div>
      <error-modal-component
        v-on:showErrorModal="toggleShowErrorModal"
        v-if="showErrorModal === true"
      />
    </div>
  </div>
</template>

<script>
import { fetchAllAddresses, deleteAddressById } from "./../../utils";
import CardComponent from "./../../components/CardComponent/CardComponent";
import ErrorModalComponent from "./../../components/ModalComponent/ErrorModalComponent";

export default {
  components: { CardComponent, ErrorModalComponent },
  data() {
    return {
      addressBook: [],
      showErrorModal: false
    };
  },
  async created() {
    this.fetchAllAddresses();
  },
  methods: {
    deleteAddressById: async function(id) {
      const isDeleteSuccess = await deleteAddressById(id);
      if (isDeleteSuccess)
        this.addressBook.splice(this.addressBook.indexOf(id), 1);
    },
    fetchAllAddresses: async function() {
      const { addressBook } = await fetchAllAddresses();
      if (!addressBook) this.showErrorModal = true;
      this.addressBook = addressBook || [];
    },
    toggleShowErrorModal() {
      this.showErrorModal = false;
    }
  }
};
</script>

<style scoped lang="scss">
@import "./IndexContainer.scss";
</style>
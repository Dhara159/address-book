<template>
  <div>
    <div class="pen-title">
      <center>
        <h1>MY PEOPLES</h1>
      </center>
    </div>
    <br />
    <div class="card-list">
      <Card v-on:refetchData="fetchAllAddresses" v-bind:isNewAddress="true" />
      <div v-for="address in addressBook" :key="address._id">
        <Card
          v-on:refetchData="fetchAllAddresses"
          v-bind:isNewAddress="false"
          v-bind:addressBook="address"
        />
      </div>
    </div>
    <div>
      <ErrorModal
        v-on:showErrorModal="hideErrorModal"
        v-if="showErrorModal === true"
      />
    </div>
  </div>
</template>

<script>
import { fetchAllAddresses } from "./../../utils";
import Card from "./../../components/Card";
import ErrorModal from "./../../components/Modal/ErrorModal";

export default {
  components: { Card, ErrorModal },
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
    fetchAllAddresses: async function() {
      const { addressBook } = await fetchAllAddresses();
      if (!addressBook) this.showErrorModal = true;
      this.addressBook = addressBook || [];
    },
    hideErrorModal() {
      this.showErrorModal = false;
    }
  }
};
</script>

<style scoped lang="scss">
@import "./Index.scss";
</style>
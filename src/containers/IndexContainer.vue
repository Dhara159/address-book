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
  </div>
</template>

<script>
import { fetchAllAddresses, deleteAddressBook } from "./../utils";
import CardComponent from "./../components/CardComponent";

export default {
  components: { CardComponent },
  data() {
    return {
      addressBook: []
    };
  },
  async created() {
    const { addressBook } = await fetchAllAddresses();
    this.addressBook = addressBook || [];
  },
  methods: {
    deleteAddressBook: async function(id) {
      const isDeleteSuccess = await deleteAddressBook(id);
      if (isDeleteSuccess)
        this.addressBook.splice(this.addressBook.indexOf(id), 1);
    },
    fetchAllAddresses: async function() {
      const { addressBook } = await fetchAllAddresses();
      this.addressBook = addressBook || [];
    }
  }
};
</script>

<style lang="sass" scoped>
.card-list
  width: 85vw
  margin: 0 auto
  display: grid
  grid-template-columns: 1fr 1fr 1fr
  grid-gap: 20px

.pen-title
  padding: 50px 0 0 0
  text-align: center
  letter-spacing: 2px

  h1
    margin: 0 0 20px
    font-size: 48px
    font-weight: 300
</style>
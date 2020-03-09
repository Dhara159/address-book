<template>
  <div>
    <div class="pen-title">
      <center>
        <h1>MY PEOPLES</h1>
      </center>
    </div>
    <br />
    <div class="card-list">
      <CardComponent v-on:refetchData="fetchAllAddresses" v-bind:isNewAddress=true />
      <div v-for="addressBook in addressBooks" :key="addressBook._id">
        <CardComponent v-on:refetchData="fetchAllAddresses" v-bind:isNewAddress=false v-bind:addressBook="addressBook" />
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
      addressBooks: []
    };
  },
  async created() {
    const addressBooks = await fetchAllAddresses();
    this.addressBooks = addressBooks || [];
  },
  methods: {
    deleteAddressBook: async function(id) {
      const isDeleteSuccess = await deleteAddressBook(id);
      if (isDeleteSuccess)
        this.addressBooks.splice(this.addressBooks.indexOf(id), 1);
    },
    fetchAllAddresses: async function() {
      const addressBooks = await fetchAllAddresses();
      this.addressBooks = addressBooks || [];
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
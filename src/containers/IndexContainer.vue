// IndexComponent.js

<template>
  <div>
    <h1>Address Book</h1>
    <div class="row">
      <div class="col-md-10"></div>
      <div class="col-md-2">
        <router-link :to="{ name: 'create' }" class="btn btn-primary">Create Address</router-link>
      </div>
    </div>
    <br />

    <table class="table table-hover">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Notes</th>
          <th>Date of Birth</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="addressBook in addressBooks" :key="addressBook._id">
          <td>{{ addressBook.firstName }}</td>
          <td>{{ addressBook.lastName }}</td>
          <td>{{ addressBook.email }}</td>
          <td>{{ addressBook.phoneNumber }}</td>
          <td>{{ addressBook.notes }}</td>
          <td>{{ addressBook.dob }}</td>
          <td>
            <router-link
              :to="{name: 'edit', params: { id: addressBook._id }}"
              class="btn btn-primary"
            >Edit</router-link>
          </td>
          <td>
            <button class="btn btn-danger" @click.prevent="deleteAddressBook(addressBook._id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import { fetchAllAddresses, deleteAddressBook } from './../utils';

export default {
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
        if(isDeleteSuccess) this.addressBooks.splice(this.addressBooks.indexOf(id), 1);
      }
    }
};
</script>
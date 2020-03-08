<template>
  <div>
    <h1>Add new address</h1>
    <form id="createContainer" @submit.prevent="addAddressBook" novalidate>
      <div class="row">
        <div class="col-md-6">
          <firstname-component v-model="firstName" :v="$v.firstName" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <lastname-component v-model="lastName" :v="$v.lastName" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <email-component v-model="email" :v="$v.email" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <phonenumber-component v-model="phoneNumber" :v="$v.phoneNumber" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <notes-component v-model="notes" :v="$v.notes" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <date-component v-model="dob" />
        </div>
      </div>
      <br />
      <div class="form-group">
        <button class="btn btn-primary">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
import validations from "./../validator";
import { addAddressBook } from "./../utils";

import FirstnameComponent from "./../components/FirstnameComponent";
import LastnameComponent from "./../components/LastnameComponent";
import EmailComponent from "./../components/EmailComponent";
import PhonenumberComponent from "./../components/PhonenumberComponent";
import NotesComponent from "./../components/NotesComponent";
import DateComponent from "./../components/DateComponent";

export default {
  name: "CreateContainer",
  components: {
    FirstnameComponent,
    LastnameComponent,
    EmailComponent,
    PhonenumberComponent,
    NotesComponent,
    DateComponent
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      notes: "",
      dob: ""
    };
  },
  validations,
  methods: {
    addAddressBook: async function() {
      await addAddressBook({
        v: this.$v,
        userData: {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          phoneNumber: this.phoneNumber,
          notes: this.notes,
          dob: this.dob
        }
      });
    }
  }
};
</script>
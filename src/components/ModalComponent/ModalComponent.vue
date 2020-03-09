<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="header">
            <span
              href="#"
              class="close-button align-right"
              aria-hidden="true"
              v-on:click="closeModal"
            ></span>
          </div>
          <div>
            <form id="createContainer" @submit.prevent="addOrUpdateAddress" novalidate>
              <div class="row">
                <div class="col-md-6">
                  <firstname-component v-model="firstName" :v="$v.firstName" />
                </div>
                <div class="col-md-6">
                  <lastname-component v-model="lastName" :v="$v.lastName" />
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <email-component v-model="email" :v="$v.email" />
                </div>
                <div class="col-md-6">
                  <phonenumber-component v-model="phoneNumber" :v="$v.phoneNumber" />
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <notes-component v-model="notes" :v="$v.notes" />
                </div>
                <div class="col-md-6">
                  <date-component v-model="dob" />
                </div>
              </div>
              <br />
              <div class="form-group align-right">
                <button v-if="isUpdateState === true" class="ghost-button">Update</button>
                <button v-if="isUpdateState === false" class="ghost-button">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import validations from "./../../validator";
import { addAddress, updateAddressById } from "./../../utils";
import FirstnameComponent from "./../FirstnameComponent/FirstnameComponent";
import LastnameComponent from "./../LastnameComponent/LastnameComponent";
import EmailComponent from "./../EmailComponent/EmailComponent";
import PhonenumberComponent from "./../PhonenumberComponent/PhonenumberComponent";
import NotesComponent from "./../NotesComponent/NotesComponent";
import DateComponent from "./../DateComponent/DateComponent";
export default {
  name: "ModalComponent",
  components: {
    FirstnameComponent,
    LastnameComponent,
    EmailComponent,
    PhonenumberComponent,
    NotesComponent,
    DateComponent
  },
  props: {
    addressBook: {
      type: Object,
      required: false
    },
    isUpdate: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      firstName: this.addressBook.firstName,
      lastName: this.addressBook.lastName,
      email: this.addressBook.email,
      phoneNumber: this.addressBook.phoneNumber,
      notes: this.addressBook.notes,
      dob: this.addressBook.dob,
      isUpdateState: this.isUpdate
    };
  },
  validations,
  methods: {
    addOrUpdateAddress: async function() {
      if (this.isUpdateState === true) {
        await updateAddressById({
          v: this.$v,
          userData: {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phoneNumber: this.phoneNumber,
            notes: this.notes,
            dob: this.dob
          },
          id: this.addressBook._id
        });
      } else {
        await addAddress({
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
      this.closeModal();
    },
    closeModal() {
      this.$emit("showModal", false);
    }
  }
};
</script>

<style scoped lang="scss">
  @import "./ModalComponent.scss";
</style>
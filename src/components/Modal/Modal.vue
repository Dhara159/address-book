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
              v-on:click="closeModal('closeByUser')"
            ></span>
          </div>
          <div>
            <form id="createContainer" @submit.prevent="addOrUpdateAddress">
              <div class="row">
                <div class="col-md-6">
                  <FirstName v-model="firstName" :v="$v.firstName" />
                </div>
                <div class="col-md-6">
                  <LastName v-model="lastName" :v="$v.lastName" />
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <Email v-model="email" :v="$v.email" />
                </div>
                <div class="col-md-6">
                  <PhoneNumber v-model="phoneNumber" :v="$v.phoneNumber" />
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <Notes v-model="notes" :v="$v.notes" />
                </div>
                <div class="col-md-6">
                  <Date v-model="dob" :v="$v.dob" />
                </div>
              </div>
              <br />
              <div class="form-group">
                <div>
                  <span class="error" v-if="showErrorText">errorMessage</span>
                </div>
                <div class="align-right">
                  <button
                    id="update-button"
                    v-if="isUpdateState === true"
                    class="ghost-button"
                  >Update</button>
                  <button
                    id="create-button"
                    v-if="isUpdateState === false"
                    class="ghost-button"
                  >Create</button>
                </div>
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
import FirstName from "./../FirstName";
import LastName from "./../LastName";
import Email from "./../Email";
import PhoneNumber from "./../PhoneNumber";
import Notes from "./../Notes";
import Date from "./../Date";
export default {
  name: "Modal",
  components: {
    FirstName,
    LastName,
    Email,
    PhoneNumber,
    Notes,
    Date
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
      isUpdateState: this.isUpdate,
      showErrorText: false,
      errorMessage: "Oops! Something went wrong! Please try again!"
    };
  },
  validations,
  methods: {
    addOrUpdateAddress: async function() {
      let isUpdated;
      if (this.isUpdateState === true) {
        isUpdated = await updateAddressById({
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
        isUpdated = await addAddress({
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
      if (!isUpdated) this.showErrorText = true;
      else this.closeModal("dataUpdated");
    },
    closeModal(event) {
      this.$emit("dataUpdate", event === "dataUpdated" ? true : false);
    }
  }
};
</script>

<style scoped lang="scss">
@import "./Modal.scss";
</style>
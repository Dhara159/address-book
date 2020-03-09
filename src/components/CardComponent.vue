<template>
  <div>
    <div id="card-container">
      <div class="card-link">
        <div v-if="newAddress === true" v-on:click="enableShowModal()" class="blog-card" id="wrap">
          <div class="icon" id="bigplus"></div>
        </div>
        <article v-if="newAddress === false" class="blog-card">
          <img class="post-image" :src="images[Math.floor(Math.random() * Math.floor(29))]" />
          <div class="article-details">
            <h3 class="post-title">{{ addressBook.firstName }} {{ addressBook.lastName }}</h3>
            <p class="post-description">{{ addressBook.phoneNumber }}</p>
            <h4 class="post-category">{{ addressBook.email }}</h4>
            <h4 class="post-notes">ABOUT: {{ addressBook.notes }}</h4>
          </div>
          <button class="card-button">
            <i
              class="material-icons card-edit"
              aria-hidden="true"
              v-on:click="fetchAddressToEdit(addressBook._id)"
            >create</i>
            <i
              class="material-icons card-delete"
              aria-hidden="true"
              v-on:click="deleteAddressBook(addressBook._id)"
            >🚫</i>
          </button>
        </article>
      </div>
    </div>
    <modal-component
      v-on:showModal="toggleShowModal"
      v-bind:isUpdate="!newAddress"
      v-bind:addressBook="addressToBeUpdated"
      v-if="showModal === true"
    />
  </div>
</template>

<script>
import IMAGES from "./../static/images";
import ModalComponent from "./ModalComponent";
import { fetchAddressToEdit, deleteAddressBook } from "./../utils";

export default {
  name: "CardComponent",
  components: { ModalComponent },
  data() {
    return {
      images: IMAGES,
      showModal: false,
      addressToBeUpdated: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        notes: "",
        dob: ""
      }
    };
  },
  props: {
    addressBook: {
      type: Object,
      required: false,
      default: null
    },
    isNewAddress: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  computed: {
    newAddress: {
      get() {
        return this.isNewAddress;
      }
    }
  },
  methods: {
    fetchAddressToEdit: async function(id) {
      const { address } = await fetchAddressToEdit({ id });
      this.addressToBeUpdated = address;
      this.showModal = true;
    },
    deleteAddressBook: async function(id) {
      const isDeleteSuccess = await deleteAddressBook({ id });
      if (isDeleteSuccess) this.$emit("refetchData", true);
    },
    enableShowModal() {
      this.showModal = true;
    },
    toggleShowModal() {
      this.showModal = false;
      this.$emit("refetchData", true);
    }
  }
};
</script>

<style scoped lang="scss">
@import "./../assets/styles/CardComponent.scss";
</style>
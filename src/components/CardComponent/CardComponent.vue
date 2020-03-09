<template>
  <div>
    <div id="card-container">
      <div class="card-link">
        <div v-if="newAddress === true" v-on:click="enableShowModal()" class="card" id="wrap">
          <div class="icon" id="bigplus"></div>
        </div>
        <article v-if="newAddress === false" class="card">
          <img class="card-image" :src="images[Math.floor(Math.random() * Math.floor(29))]" />
          <div class="article-details">
            <h3 class="card-name">{{ addressBook.firstName }} {{ addressBook.lastName }}</h3>
            <p class="card-number">{{ addressBook.phoneNumber }}</p>
            <h4 class="card-email">{{ addressBook.email }}</h4>
            <h4 class="card-notes">ABOUT: {{ addressBook.notes }}</h4>
          </div>
          <button class="card-button">
            <i
              class="material-icons card-edit"
              aria-hidden="true"
              v-on:click="fetchAddressById(addressBook._id)"
            >create</i>
            <i
              class="material-icons card-delete"
              aria-hidden="true"
              v-on:click="deleteAddressById(addressBook._id)"
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
import IMAGES from "./../../static/images";
import ModalComponent from "./../ModalComponent/ModalComponent";
import { fetchAddressById, deleteAddressById } from "./../../utils";

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
    fetchAddressById: async function(id) {
      const { address } = await fetchAddressById({ id });
      this.addressToBeUpdated = address;
      this.showModal = true;
    },
    deleteAddressById: async function(id) {
      const isDeleteSuccess = await deleteAddressById({ id });
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
@import "./CardComponent.scss";
</style>
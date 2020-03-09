<template>
  <div>
    <div id="card-container">
      <div class="card-link">
        <div v-if="newAddress === true" v-on:click="showModal()" class="card" id="wrap">
          <div class="icon" id="bigplus"></div>
        </div>
        <article v-if="newAddress === false" class="card">
          <img class="card-image" :src="images[Math.floor(Math.random() * Math.floor(29))]" />
          <div class="article-details">
            <div>
              <button class="card-button">
                <i
                  class="material-icons card-edit"
                  aria-hidden="true"
                  v-on:click="fetchAddressById(addressBook._id)"
                >create</i>
                <span
                  class="material-icons card-delete"
                  aria-hidden="true"
                  v-on:click="deleteAddressById(addressBook._id)"
                ></span>
              </button>
            </div>
            <div>
              <h3 class="card-name">{{ addressBook.firstName }} {{ addressBook.lastName }}</h3>
              <p class="card-number">{{ addressBook.phoneNumber }}</p>
              <h4 class="card-email">{{ addressBook.email }}</h4>
              <h4 class="card-notes">ABOUT: {{ addressBook.notes }}</h4>
            </div>
          </div>
        </article>
      </div>
    </div>
    <div class="modals">
      <Modal
        v-on:dataUpdate="hideFormModal"
        v-bind:isUpdate="!newAddress"
        v-bind:addressBook="addressToBeUpdated"
        v-if="showFormModal === true"
      />
      <ErrorModal v-on:showErrorModal="hideErrorModal" v-if="showErrorModal === true" />
    </div>
  </div>
</template>

<script>
import IMAGES from "./../../static/images";
import Modal from "./../Modal/Modal";
import ErrorModal from "./../Modal/ErrorModal";
import { fetchAddressById, deleteAddressById } from "./../../utils";

export default {
  name: "Card",
  components: { Modal, ErrorModal },
  data() {
    return {
      images: IMAGES,
      showFormModal: false,
      showErrorModal: false,
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
      if (!address) this.showErrorModal = true;
      else {
        this.addressToBeUpdated = address;
        this.showModal();
      }
    },
    deleteAddressById: async function(id) {
      const isDeleteSuccess = await deleteAddressById({ id });
      if (isDeleteSuccess) this.$emit("refetchData", true);
      else this.showErrorModal = true;
    },
    showModal() {
      this.showFormModal = true;
    },
    hideFormModal(event) {
      this.showFormModal = false;
      event ? this.$emit("refetchData", true) : null;
    }
  }
};
</script>

<style scoped lang="scss">
@import "./Card.scss";
</style>
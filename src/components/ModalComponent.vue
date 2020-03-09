<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="header">
            <span href="#" class="close-button align-right" aria-hidden="true" v-on:click="closeModal"></span>
          </div>
          <div>
            <form id="createContainer" @submit.prevent="addOrUpdateAddressBook" novalidate>
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
import validations from "./../validator";
import { addAddressBook, updateAddressBook } from "./../utils";
import FirstnameComponent from "./../components/FirstnameComponent";
import LastnameComponent from "./../components/LastnameComponent";
import EmailComponent from "./../components/EmailComponent";
import PhonenumberComponent from "./../components/PhonenumberComponent";
import NotesComponent from "./../components/NotesComponent";
import DateComponent from "./../components/DateComponent";
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
    addOrUpdateAddressBook: async function() {
      if (this.isUpdateState === true) {
        await updateAddressBook({
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
      this.closeModal()
    },
    closeModal() {
      this.$emit("showModal", false);
    }
  }
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 45%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.align-right {
  display: flex;
  justify-content: flex-end;
  padding: 0;
}

.ghost-button {
  display: inline-block;
  width: 200px;
  padding: 8px;
  color: #fff;
  border: rgba(0, 0, 0, 0.8);
  background-color: rgba(0, 0, 0, 0.8);
  text-align: center;
  outline: none;
  text-decoration: none;
  transition: background-color 0.2s ease-out, border-color 0.2s ease-out;
}

.ghost-button:hover,
.ghost-button:active {
  color: rgba(0, 0, 0, 0.8);
  background-color: #fff;
  border: 0.5px solid rgba(0, 0, 0, 0.8);
  transition: background-color 0.2s ease-in, border-color 0.2s ease-in;
}

.material-icons {
  font-size: inherit;
}

.close-button {
  cursor: pointer
}

.close-button:after {
  content: "✖︎"
}
</style>
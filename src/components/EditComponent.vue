// EditComponent.vue

<template>
  <div>
    <h1>Add new address</h1>
    <form @submit.prevent="updateAddressBook">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>First Name:</label>
            <input type="text" class="form-control" v-model="addressBook.firstName" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Last Name:</label>
            <input type="text" class="form-control" v-model="addressBook.lastName" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Email:</label>
            <input type="email" class="form-control" v-model="addressBook.email" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Phone number:</label>
            <input type="tel" class="form-control" v-model="addressBook.phoneNumber" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Notes:</label>
            <textarea class="form-control" v-model="addressBook.notes" rows="5"></textarea>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Date of Birth:</label>
            <input type="date" class="form-control" v-model="addressBook.dob" />
          </div>
        </div>
      </div>
      <br />
      <div class="form-group">
        <button class="btn btn-primary">Update</button>
      </div>
    </form>
  </div>
</template>

<script>
    export default {

      data() {
        return {
          addressBook: {}
        }
      },
      created() {
        let uri = `http://localhost:4000/addressBooks/edit/${this.$route.params.id}`;
        this.axios.get(uri).then((response) => {
        console.log("created -> response", response);
            this.addressBook = response.data.addressBook;
        });
      },
      methods: {
        updateAddressBook() {
          let uri = `http://localhost:4000/addressBooks/update/${this.$route.params.id}`;
          this.axios.post(uri, this.post).then(() => {
            this.$router.push({name: 'addressBooks'});
          });
        }
      }
    }
</script>
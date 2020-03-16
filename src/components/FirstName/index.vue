<template>
  <div class="form-group" :class="{ 'form-group--error': v.$error }">
    <label for="firstName">First Name:</label>
    <input
      type="text"
      id="firstName"
      class="form-control"
      name="firstName"
      v-model.trim="v.$model"
      required
    />
    <div v-if="v.$error">
      <span class="error" v-if="!v.required">Field is required</span>
      <span
        class="error"
        v-if="!v.minLength"
      >Firstname must have at least {{v.$params.minLength.min}} letters.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstName',
  props: {
    value: {
      type: String,
      default: "",
      required: false
    },
    v: {
      type: Object,
      required: true
    }
  },
  computed: {
    firstName: {
      get() {
        return this.value;
      },
      set(value) {
        this.v.$touch();
        this.$emit("input", value);
      }
    }
  }
};
</script>

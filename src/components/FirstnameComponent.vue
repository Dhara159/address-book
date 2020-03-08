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
      <div class="error" v-if="!v.required">Field is required</div>
      <div
        class="error"
        v-if="!v.minLength"
      >Firstname must have at least {{v.$params.minLength.min}} letters.</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
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

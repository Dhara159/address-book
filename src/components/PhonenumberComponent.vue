<template>
  <div class="form-group" :class="{ 'form-group--error': v.$error }">
    <label for="phoneNumber">Phone number:</label>
    <input
      type="tel"
      id="phoneNumber"
      class="form-control"
      name="phoneNumber"
      v-model.trim="v.$model"
      required
    />
    <div v-if="v.$error">
      <span class="error" v-if="!v.validNumber">Phone number is invalid</span>
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
    phoneNumber: {
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
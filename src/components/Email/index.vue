<template>
  <div class="form-group" :class="{ 'form-group--error': v.$error }">
    <label for="email">Email:</label>
    <input
      type="email"
      id="email"
      class="form-control"
      name="email"
      v-model.trim="v.$model"
      required
    />
    <div v-if="v.$error">
      <span class="error" v-if="!v.required">Email is required</span>
      <span class="error" v-if="!v.email">Email is invalid</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Email',
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
    email: {
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
<template>
  <div class="form-group" :class="{ 'form-group--error': v.$error }">
    <label for="lastName">Last Name:</label>
    <input
      type="text"
      id="lastName"
      class="form-control"
      name="lastName"
      v-model.trim="v.$model"
      required
    />
    <div v-if="v.$error">
      <span class="error" v-if="!v.required">Lastname is required</span>
      <span
        class="error"
        v-if="!v.minLength"
      >Lastname must have at least {{v.$params.minLength.min}} letters.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LastName',
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
    lastName: {
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
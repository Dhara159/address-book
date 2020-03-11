<template>
  <div class="form-group" :class="{ 'form-group--error': v.$error }">
    <label for="dob">Date of Birth:</label>
    <input type="date" id="dob" class="form-control" name="dob" v-model="dob" />
    <div v-if="v.$error">
      <span class="error" v-if="!v.required">Date of Birth is required</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Date',
  props: {
    value: {
      type: String,
      required: false,
      default: ''
    },
    v: {
      type: Object,
      required: true
    }
  },
  computed: {
    dob: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  }
};
</script>
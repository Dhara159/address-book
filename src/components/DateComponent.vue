<template>
  <div class="form-group">
    <label for="dob">Date of Birth:</label>
    <input type="date" id="dob" class="form-control" name="dob" v-model="dob" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String
    },
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
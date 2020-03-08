<template>
  <div class="form-group" :class="{ 'form-group--error': v.$error }">
    <label for="notes">Notes:</label>
    <textarea id="notes" class="form-control" name="notes" v-model.trim="v.$model" rows="5" />
    <div
      class="error"
      v-if="v.$error && !v.maxLength"
    >Maximum number of allowed character exceeded</div>
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
    notes: {
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
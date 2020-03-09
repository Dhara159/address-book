<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <center>
            <div class="icon" id="bigWarning"></div>
          </center>
          <center>
            <h5>Something went wrong! Please refresh the page</h5>
          </center>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ErrorModal",
  created() {
    setTimeout(() => {
      this.$emit("showErrorModal", false);
    }, 5000);
  }
};
</script>

<style scoped lang="scss">
@import "./Modal.scss";
@import "./ErrorModal.scss";
</style>
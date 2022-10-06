<template>
  <div class="width-wrapper" :style="{ backgroundColor: backgroundColor }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      default: '',
      required: false,
    },
  },
};
</script>

<style scoped>
.width-wrapper {
  width: 100%;
  margin: 0 auto;
  max-width: 90em;
  padding: 0 1rem;
}
</style>
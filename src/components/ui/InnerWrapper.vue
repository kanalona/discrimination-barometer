<template>
  <div class="inner" :style="{ backgroundColor: backgroundColor }">
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
.inner {
  width: 100%;
  margin: 0 auto;
  max-width: 65em;
  padding: 0 1rem;
}
</style>
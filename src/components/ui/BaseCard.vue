<template>
  <div class="card" :style="{ backgroundColor: backgroundColor }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      default: "#fff",
      required: false,
    },
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  padding: 25px 30px;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 1px 6px, rgba(0, 0, 0, 0.09) 0px 1px 4px;
}
</style>
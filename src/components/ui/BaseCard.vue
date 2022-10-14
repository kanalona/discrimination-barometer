<template>
  <div class="card" :style="{ backgroundColor: bgColor }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: "#fff",
      required: false,
    },
  },
};
</script>

<style scoped>
.card {
  /* padding: 25px 30px; */
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 1px 6px, rgba(0, 0, 0, 0.09) 0px 1px 4px;
}
</style>
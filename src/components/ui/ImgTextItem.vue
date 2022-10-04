<template>
  <div class="bg-child">
    <div class="row row-cols-1 row-cols-lg-2 my-lg-9 my-xl-10 my-xxl-10 left">
      <div
        class="col align-self-center"
        :class="{ 'order-1': isImgOnRight, 'order-lg-2': isImgOnRight }"
      >
        <slot name="img"></slot>
      </div>
      <div class="col align-self-center p-5 px-lg-4 px-xl-5 px-xxl-8">
        <slot name="text" class="py-1 py-xl-2"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isImgOnRight: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
};
</script>

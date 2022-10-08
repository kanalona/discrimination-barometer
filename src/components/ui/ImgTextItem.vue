<template>
    <div class="row row-cols-1 row-cols-lg-2 my-lg-9 my-xl-10 my-xxl-10">
      <div
        class="col align-self-center"
        :class="{'order-lg-2': isImgOnRight }"
      >
        <slot name="img"></slot>
      </div>
      <div class="col align-self-center p-4 p-md-5 px-lg-4 px-xl-5 px-xxl-8">
        <slot name="text" class="py-1 py-xl-2"></slot>
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


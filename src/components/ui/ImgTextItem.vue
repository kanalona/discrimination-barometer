<template>
  <div class="row row-cols-1 row-cols-lg-2 my-4 ">
  <!-- <div class="row row-cols-1 row-cols-lg-2 my-4 my-lg-9 my-xl-10 my-xxl-10"> -->

    <div class="col align-self-start py-6 px-5 p-md-5 px-lg-4 px-xl-5 px-xxl-8  md-center">
      <slot name="left" class=""></slot>
    </div>

    <div class="col align-self-center order-sm-" :class="{ 'order-lg-': isImgOnRight }">
      <slot name="right"></slot>
    </div>

  </div>
</template>
<!-- <template>
  <div class="row row-cols-1 row-cols-lg-2 my-4 my-lg-9 my-xl-10 my-xxl-10">

    <div class="col align-self-start py-6 px-5 p-md-5 px-lg-4 px-xl-5 px-xxl-8  md-center">
      <slot name="left" class=""></slot>
    </div>

    <div class="col align-self-center order-sm-" :class="{ 'order-lg-': isImgOnRight }">
      <slot name="right"></slot>
    </div>

  </div>
</template> -->

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

<style>

</style>


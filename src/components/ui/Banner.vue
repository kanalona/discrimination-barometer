<template>
  <!-- <div class="banner" :style="{ backgroundColor: backgroundColor }"> -->
  <div class="banner">
    <!-- <inner-wrapper>
      <slot></slot>
      <div class="container">
        <div class="heading">
          <slot name="heading"></slot>
        </div>

        <div class="content">
          <slot name="content"></slot>
        </div>

        <div class="button">
          <slot name="button"></slot>
        </div>

        <div class="more-content">
          <slot name="more-content"></slot>
        </div>
      </div>
    </inner-wrapper> -->

    <!-- add solution for home page banner -->
    <inner-wrapper>
      <slot></slot>
      <div class="row row-cols-1 gy-4 left center">
        <div class="col align-self-center px-lg-5 px-xl-5 px-xxl-8">
          <slot name="heading"></slot>
        </div>
        <div class="col align-self-center px-lg-8 px-xl-9 px-xxl-10">
          <slot name="text"></slot>
        </div>
        <div class="col align-self-center px-lg-5 px-xl-5 px-xxl-8">
          <slot name="button"></slot>
        </div>
      </div>
    </inner-wrapper>
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
    imageUrl: {
      type: String,
      default: "",
      required: false,
    },
  },
};
</script>

<style scoped>
.banner {
  display: flex;
  align-items: center;
  background-color: var(--bg);
  min-height: 100vh;
  color: white;
  background-position: right bottom;
   /* background-image: linear-gradient(
    to top right,
    var(--primaryColor2),
    var(--primaryColor3),
    var(--secondaryColor2)
  ); */
  /* background-image: linear-gradient(
    to top right,
    var(--primaryColor2),
    var(--primaryColor3),
    var(--primaryColor4),
    var(--secondaryColor4)
  ); */
}

</style>
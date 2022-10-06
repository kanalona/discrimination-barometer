<template>
  <div class="banner" :style="{ backgroundColor: backgroundColor }">
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
      default: "#1d1e20",
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
  background: rgb(0, 0, 0);
  min-height: 100vh;
  color: #f1f1f1;
  background-position: right bottom;
}
/* .container {
  display: grid;
  grid-gap: 40px;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    "heading more-content"
    "content more-content"
    "button more-content";
  padding: 20px;
  align-items: start;
}
.heading {
  grid-area: heading;
}
.content {
  grid-area: content;
}
.more-content {
  grid-area: more-content;
}
.button {
  grid-area: button;
}
@media (max-width: 800px) {
  .container {
    grid-template-areas:
      "heading"
      "content"
      "button"
      "more-content";
  }
}  */
</style>
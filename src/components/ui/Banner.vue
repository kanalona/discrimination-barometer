<template>
  <div class="banner" :style="{ backgroundColor: backgroundColor}">
    <inner-wrapper>
      <slot></slot>
      <slot name="description">
        <div class="container left">
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
      </slot>
    </inner-wrapper>
  </div>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      default: "#131313",
      required: false,
    },
    imageUrl: {
      type: String,
      default: '',
      required: false
    }
  },
};
</script>

<style scoped>
.banner {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  height: 100vh;
  color: #f1f1f1;
   background-position: right bottom;
 /* background-color: #cccccc; */
}
.container {
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
}
</style>
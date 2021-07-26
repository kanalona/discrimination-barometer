<template>
  <inner-wrapper>
    <div class="flex-container">
      <div v-if="previous" class="previous">
        <router-link class="link" :to="link">
          <span class="arrow">&larr;</span> Zurück {{ text }}</router-link
        >
      </div>
      <div v-else-if="next" class="next">
        <router-link class="link" :to="link"
          >Weiter {{ text }} <span class="arrow">&rarr;</span></router-link
        >
      </div>
      <div v-else></div>
    </div>
  </inner-wrapper>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
      required: false,
    },
    link: {
      type: String,
      default: "",
      required: false,
    },
    previous: {
      type: Boolean,
      default: false,
      required: false,
    },
    next: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
.link {
  color: #888;
}
.link:hover {
  color: #ff7b00;
}
.previous {
  margin-right: auto;
}
.arrow {
  font-size: 2rem;
}
</style>
<template>
  <div class="flex-container">
    <div v-if="previous" class="previous">
      <router-link class="link" :to="link">&larr; ZURÜCK {{ text }}</router-link>
    </div>
    <div v-else-if="next" class="next">
      <router-link class="link" :to="link">WEITER {{ text }} &rarr;</router-link>
    </div>
    <div v-else></div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
      required: false,
    },
    link: {
      type: String,
      default: '',
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
  align-items: center;
  justify-content: center;
}
.link {
    color:#888;
}
.link:hover {
    color: #ff7b00;
}
/* .previous {
  align-self: flex-start;
}
.next {
  align-self: flex-end;
} */
</style>
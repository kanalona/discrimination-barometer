<template>
  <button
    v-if="!link"
    :class="{ outlined: mode == 'outlined', contained: mode == 'contained' }"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
  <router-link
    v-else
    :class="{ outlined: mode == 'outlined', contained: mode == 'contained' }"
    :to="to"
    :disabled="disabled"
  >
    <slot></slot>
  </router-link>
  <!-- <router-link
    v-else
    :class="{ tab: tab }"
    :to="to"
    :style="setStyle"
    :disabled="disabled"
    @mouseover="setHovered"
    @mouseout="setHovered"
  >
    <slot></slot>
  </router-link> -->
</template>

 <script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    tab: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style scoped>
button,
a {
  display: inline-block;
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  margin-right: 0.5rem;
  font: inherit;
  border: 2px solid transparent;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.4s;
}
button.contained,
a.contained {
  background: var(--primaryColor);
  color: white;
}
button.contained:hover,
a.contained:hover {
  background: var(--primaryDarker);
}
button.outlined,
a.outlined {
  color: var(--primaryColor);
  border: 1px solid var(--primaryColor);
}
button.outlined:hover,
a.outlined:hover {
  background: rgba(var(--primaryColor-rgb), 0.15);
}
button:disabled {
  opacity: 0.4;
  cursor: default;
}
/* a.tab.router-link-active {
  color: var(--primaryColor) !important;
  border-color: var(--primaryColor) !important;
} */
</style>
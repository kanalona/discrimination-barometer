<template>
  <button
    v-if="!link"
    :class="{
      contained: mode == 'contained',
      outlined: mode == 'outlined',
      gradient: mode == 'gradient',
    }"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
  <router-link
    v-else
    :class="{
      contained: mode == 'contained',
      outlined: mode == 'outlined',
      gradient: mode == 'gradient',
    }"
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
      default: "contained",
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
    color: {
      type: String,
      required:false,
      default: "black",
    }
  },
};
</script>

<style scoped>
button,
a {
  display: inline-block;
  text-decoration: none;
  text-align: center;
  padding: 0.5rem 0.75rem;
  font: inherit;
  margin-right: 0.5rem;
  /* border: 1px solid transparent; */
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

button.contained,
a.contained {
  background: var(--primaryColor2);
  color: white;
}
button.contained:hover,
a.contained:hover {
  background: var(--primaryDarker);
  color: #fff;
  text-decoration: none;
}

button.outlined,
a.outlined {
  color: var(--primaryColor2);
  border: 1px solid var(--primaryColor2);
}
button.outlined:hover,
a.outlined:hover {
  background: rgba(var(--primaryColor-rgb), 0.15);
}

button.gradient,
a.gradient {
  background-image: linear-gradient(
    to right,
    var(--primaryColor),
    var(--secondaryColor),
    var(--primaryColor)
  );
  color: white;
  transition: 0.5s;
  background-size: 200% auto;
}
button.gradient:hover,
a.gradient:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
  border:none;
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
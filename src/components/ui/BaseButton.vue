<template>
  <button
    v-if="!link"
    :style="setStyle"
    :disabled="disabled"
    @mouseover="setHovered"
    @mouseout="setHovered"
  >
    <slot></slot>
  </button>
  <router-link
    v-else
    :class="{tab: tab}"
    :to="to"
    :style="setStyle"
    :disabled="disabled"
    @mouseover="setHovered"
    @mouseout="setHovered"
  >
    <slot></slot>
  </router-link>
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
    primaryColor: {
      type: String,
      required: false,
      default: "",
    },
    secondaryColor: {
      type: String,
      required: false,
      default: "",
    },
    isClicked: {
      type: Boolean,
      required: false,
      default: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      isHovered: false,
      // isClicked: false,
      outline: {
        styles: {
          color: this.primaryColor,
          backgroundColor: this.secondaryColor,
        },
        hoveredStyles: {
          color: this.primaryColor,
          backgroundColor: this.hexToRgb(this.primaryColor, 0.1),
        },
        activeStyles: {
          color: this.secondaryColor,
          backgroundColor: this.primaryColor,
        },
      },
      flat: {
        styles: {
          color: this.primaryColor,
          borderColor: this.primaryColor,
          borderRadius: 0,
          backgroundColor: "",
        },
        hoveredStyles: {
          color: this.secondaryColor,
          borderColor: this.secondaryColor,
          borderRadius: 0,
          backgroundColor: "",
        },
        activeStyles: {
          color: this.hexToRgb(this.secondaryColor, 0.1),
          borderColor: this.hexToRgb(this.secondaryColor, 0.1),
          backgroundColor: this.hexToRgb(this.secondaryColor, 0.1),
        },
      },
    };
  },
  methods: {
    setHovered() {
      this.isHovered = !this.isHovered;
    },
    hexToRgb(hexColor, opacity) {
      // rgba(255, 0, 0, 0.2)
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
      return result
        ? "rgba(" +
            parseInt(result[1], 16) +
            ", " +
            parseInt(result[2], 16) +
            ", " +
            parseInt(result[3], 16) +
            ", " +
            opacity +
            ")"
        : null;
    },
  },
  computed: {
    setStyle() {
      if (this.mode === "outline") {
        if (this.isClicked) {
          return this.outline.activeStyles;
        } else if (this.isHovered) {
          return this.outline.hoveredStyles;
        } else {
          return this.outline.styles;
        }
      }
      if (this.mode === "flat") {
        console.log('entered flat...');
        if (this.isClicked) {
          return this.flat.activeStyles;
        } else if (this.isHovered) {
          return this.flat.hoveredStyles;
        } else {
          return this.flat.styles;
        }
      } else return null;
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
  border: 1px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.4s;
}
button:hover {
  background: black;
}
button:disabled {
  opacity: 0.4;
  cursor: default;
}
a.tab.router-link-active {
  color: var(--primaryColor) !important;
  border-color: var(--primaryColor) !important;
}
</style>
<template>
  <g
    class="axis"
    :class="{ highlight: isHighlighted }"
    :style="styleObject"
  ></g>
</template>

<script>
import * as d3 from "d3";

export default {
  props: [
    "orient",
    "scale",
    "range",
    "domain",
    "numberOfTicks",
    "tickSize",
    "height",
    "width",
    "isHighlighted",
    "styleObject",
  ],
  computed: {
    _orient: function () {
      return "axis" + this.orient;
    },
    _scale: function () {
      return d3[this.scale]().range(this.range).domain(this.domain);
    },
  },
  methods: {
    renderAxis() {
      d3.select(this.$el).call(
        d3[this._orient](this._scale)
          .ticks(this.numberOfTicks)
          .tickSize(this.tickSize)
      );
    },
  },
  mounted() {
    this.renderAxis();
  },
  updated() {
    this.renderAxis();
  },
};
</script>


<style>
.axis path {
  fill: none;
  stroke: black;
  stroke-width: 1px;
  shape-rendering: auto;
}
.axis.highlight path {
  stroke: var(--primaryColor);
}
.axis.transparent path {
  stroke: none;
}
.tick {
  color: black;
}
.tick text {
  /* color: black; */
  font-size: 1rem;
  font-weight: 300;
}
</style>
<template>
  <svg :viewBox="sizeSvg">
    <g class="graph" :transform="translate(margin.left, margin.top)">
      <g
        class="percent-container"
        v-for="d in dataWithPercent"
        :key="d.name"
        :transform="translate(width - width / 6, height - height / 3)"
      >
        <line
          class="percent-line"
          stroke="black"
          :x1="10"
          :y1="0"
          :x2="70"
          :y2="50"
        ></line>
        <text :transform="translate(120, 80)" text-anchor="middle">
          {{ showPercent(d) }}
        </text>
      </g>
      <g class="donut-container" :transform="translate(width / 2, height / 2)">
        <path
          v-for="d in pieArcs"
          :key="d.data.name"
          stroke="white"
          stroke-width="2"
          :fill="color(d.data.name)"
          :d="setArc(d)"
          @mouseover="setHoveredElement(d.data.name)"
          @mouseout="unsetHoveredElement"
          v-tippy="setUpTippy(d.data)"
        ></path>

        <text text-anchor="middle">
          {{ formatValue(totalValue, unit) }}
        </text>
      </g>
    </g>

    <g
      class="legend-container"
      v-if="hasLegend"
      :transform="translate(width-10, legendHeight(data))"
    >
      <g
        v-for="(d, index) in pieArcs"
        :key="d.name"
        class="legend-item"
        :transform="translate(0, index * legendItemHeight)"
      >
        <rect :width="20" :height="20" :fill="color(d.data.name)"></rect>
        <text :x="25" :y="9.5" :dy="'0.32em'">{{ d.data.name }}</text>
      </g>
    </g>
  </svg>
</template>

<script>
import { scaleOrdinal } from "d3-scale";
import { arc, pie } from "d3-shape";

import "tippy.js/animations/shift-away.css";
import { directive } from "vue-tippy";

export default {
  directives: {
    tippy: directive,
  },
  data() {
    return {
      legendItemHeight: 30,
      hoveredElement: null,
    };
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
    svgWidth: {
      type: Number,
      required: false,
      default: 1500,
    },
    svgHeight: {
      type: Number,
      required: false,
      default: 500,
    },
    hasLegend: {
      type: Boolean,
      required: false,
      default: false,
    },
    hasTooltips: {
      type: Boolean,
      required: false,
      default: true,
    },
    //unused
    titel: {
      type: String,
      required: false,
      default: "",
    },
    colors: {
      type: Array,
      required: false,
      default: null, // to do
    },
  },
  computed: {
    margin() {
      if (this.hasLegend) {
        return { top: 0, right: 200, bottom: 0, left: 0 };
      } else {
        return { top: 0, right: 80, bottom: 0, left: 0 };
      }
    },
    width() {
      return this.svgWidth - this.margin.left - this.margin.right;
    },
    height() {
      return this.svgHeight - this.margin.top - this.margin.bottom;
    },
    sizeSvg() {
      return "0 0" + " " + this.svgWidth + " " + this.svgHeight;
    },
    color() {
      return scaleOrdinal(
        this.data.map((d) => d.name),
        this.colors
      );
    },
    radius() {
      return Math.min(this.width, this.height) / 2;
    },
    arc() {
      return (
        arc()
          // After some trial-and-error, half (0.5) of the full radius gives a nice appearance
          // To see a pie chart, just change this to zero
          .innerRadius(0.5 * this.radius)
          // Outer radius is less than the full radius because our labels will sit outside of the donut
          .outerRadius(0.85 * this.radius)
      );
    },
    hoverArc() {
      return (
        arc()
          // After some trial-and-error, half (0.5) of the full radius gives a nice appearance
          // To see a pie chart, just change this to zero
          .innerRadius(0.5 * this.radius)
          // Outer radius is less than the full radius because our labels will sit outside of the donut
          .outerRadius(0.9 * this.radius)
      );
    },
    pie() {
      return pie()
        .sort(null)
        .value((d) => d.value);
    },
    // labelArcs() {
    //   return arc()
    //     .innerRadius(this.radius * 1.3)
    //     .outerRadius(this.radius * 1.3);
    // },
    pieArcs() {
      return this.pie(this.data);
    },
    totalValue() {
      return this.data
        .map((item) => item.value)
        .reduce((total, value) => {
          return total + value;
        });
    },
    unit() {
      return this.data[0].unit;
    },
    dataWithPercent() {
      return this.data
        .map((item) => {
          if (item.percent > 0) return item;
        })
        .filter((item) => item);
    },
  },
  methods: {
    translate(x, y) {
      return "translate(" + x + "," + y + ")";
    },
    legendHeight(data) {
      var numberOfItems = data.length;
      var heightOfLegend = numberOfItems * this.legendItemHeight;
      return this.height / 2 - heightOfLegend / 2;
    },
    formatValue(value, unit) {
      return value + " " + unit;
    },
    showPercent(obj) {
      if (obj.percent != null) {
        return obj.percent + "%";
      }
    },
    hoverable(name) {
      if (this.hasTooltips && name !== "Differenz") {
        return true;
      } else {
        return false;
      }
    },
    setHoveredElement(name) {
      if (this.hoverable(name)) {
        this.hoveredElement = name;
      }
    },
    unsetHoveredElement() {
      this.hoveredElement = null;
    },
    setUpTippy(obj) {
      if (this.hoverable(obj.name)) {
        return {
          content: this.toolTipContent(obj),
          animation: "shift-away",
          duration: 200,
          theme: "white-bordered",
          followCursor: "true",
          allowHTML: true,
          hideOnClick: false,
        };
      } else {
        return null;
      }
    },
    toolTipContent(obj) {
      return `<div style="text-align:center;">${obj.name}<br><strong>${obj.value} ${obj.unit}</strong></div>`;
    },

    // hexToRgb(hexColor, opacity) {
    //   var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
    //   return result
    //     ? "rgba(" +
    //         parseInt(result[1], 16) +
    //         ", " +
    //         parseInt(result[2], 16) +
    //         ", " +
    //         parseInt(result[3], 16) +
    //         ", " +
    //         opacity +
    //         ")"
    //     : null;
    // },
    // setColor(name) {
    //   if (this.hoverable(name) && this.hoveredElement === name) {
    //     return this.hexToRgb(this.color(name), 1);
    //   } else {
    //     return this.color(name);
    //   }
    // },
    setArc(d) {
      if (this.hoverable(d.data.name) && this.hoveredElement === d.data.name) {
        return this.hoverArc(d);
      } else {
        return this.arc(d);
      }
    },
  },
};
</script>

<style scoped>
text {
  font-size: 1.5rem;
}
.percent-container text {
  font-size: 3rem;
}
</style>
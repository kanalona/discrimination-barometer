<template>
  <svg :viewBox="sizeSvg">
    <chart-axis
      class="left-axis"
      :class="'transparent'"
      :transform="translate(margin.left, margin.top)"
      :orient="leftAxis.orient"
      :scale="leftAxis.scale"
      :range="leftAxis.range"
      :domain="leftAxis.domain"
      :numberOfTicks="leftAxis.ticks"
      :tickSize="6"
      :width="width"
      :height="height"
    ></chart-axis>
    <chart-axis
      class="right-axis"
      :class="'transparent'"
      :transform="translate(500, margin.top)"
      :orient="rightAxis.orient"
      :scale="rightAxis.scale"
      :range="rightAxis.range"
      :domain="rightAxis.domain"
      :numberOfTicks="rightAxis.ticks"
      :tickSize="160"
      :width="width"
      :height="height"
    ></chart-axis>
    <g class="graph" :transform="translate(margin.left, margin.top)">
      <g
        class="layer-group"
        v-for="(series, index) in stackedSeries"
        :key="series.key"
        :class="'layer-group-' + series.key"
        :fill="color(series.key)"
      >
        <g
          class="rect-and-label"
          v-for="item in series"
          :key="item.data.gender"
        >
          <rect
            class="rect"
            :class="'rect-' + item.data.gender"
            :x="x(0)"
            :y="y(item.data.gender)"
            :width="0"
            :height="y.bandwidth()"
          ></rect>
          <text
            class="value-label"
            :x="index * 390 + 10"
            :y="y(item.data.gender) + (3 * y.bandwidth()) / 4"
            :fill="'black'"
          >
            {{
              series.key === "paid"
                ? formatTime(item.data.paid)
                : formatTime(item.data.unpaid)
            }}
          </text>
        </g>
      </g>
    </g>

    <g class="legend">
      <g
        v-for="(series, index) in stackedSeries"
        :key="series.key"
        :class="'legend-' + series.key"
        :transform="translate(svgWidth - 150, index * 25 + margin.top)"
      >
        <rect :width="20" :height="20" :fill="color(series.key)"></rect>
        <text :x="25" :y="9.5" :dy="'0.32em'">
          {{ showLegend(series.key) }}
        </text>
      </g>
    </g>
  </svg>
</template>


<script>
import { scaleLinear, scaleBand, scaleOrdinal } from "d3-scale";
import { stack } from "d3-shape";
import { selectAll } from "d3-selection";
import { transition } from "d3-transition";
import ChartAxis from "../chart/ChartAxis.vue";

export default {
  components: {
    ChartAxis,
  },
  data() {
    return {
      margin: { top: 20, right: 250, bottom: 20, left: 70 },
      padding: 0.08,
    };
  },
  props: ["data", "svgWidth", "svgHeight", "maxRange"],
  mounted() {
    this.transition();
  },
  updated() {
    this.transition();
  },
  computed: {
    stackGenerator() {
      return stack().keys(this.data.categories);
    },
    stackedSeries() {
      return this.stackGenerator(this.data);
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
    y() {
      return scaleBand()
        .domain(this.data.map((d) => d.gender))
        .range([0, this.height])
        .padding(this.padding);
    },
    x() {
      return scaleLinear().domain([0, this.maxRange]).range([0, this.width]);
    },
    leftAxis() {
      return {
        scale: "scaleBand",
        range: [0, this.height],
        domain: this.data.map((d) => d.gender),
        orient: "Left",
        ticks: 2,
      };
    },
    rightAxis() {
      return {
        scale: "scaleBand",
        range: [0, this.height],
        domain: this.data.map((d) => this.formatTime(d.total)),
        orient: "Right",
        ticks: 2,
      };
    },
    color() {
      return scaleOrdinal().range(["#5F37D1", "#feaf0a"]);
    },
  },
  methods: {
    translate(x, y) {
      return "translate(" + x + "," + y + ")";
    },
    formatTime(value) {
      var whole = Math.floor(value);
      var decimal = value - whole;
      var minutes = (decimal * 60).toFixed(0);
      return whole + "h " + minutes + "min ";
    },
    showLegend(key) {
      if (key === "paid") {
        return "bezahlte Arbeit";
      } else {
        return "unbezahlte Arbeit";
      }
    },
    transition() {
      var layers = selectAll(".layer-group").data(this.stackedSeries);

      layers
        .selectAll("rect")
        .data((d) => d)
        .transition()
        // .delay((d, i) => {
        //   return i * 150;
        // })
        .duration(1500)
        .attr("x", (d) => {
          return this.x(d[0]);
        })
        .attr("width", (d) => {
          return this.x(d[1]) - this.x(d[0]);
        });
    },
  },
};
</script>
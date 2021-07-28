<template>
  <div id="container" class="svg-container" align="center">
    <div class="button-group">
      <base-button
        class="category-label"
        v-for="category in filteredData"
        :key="category.label"
        :value="category.label"
        :isClicked="isSelected(category.label)"
        :disabled="disabledButton"
        mode="outline"
        :primaryColor="color(category.label)"
        secondaryColor="#ffffff"
        @mouseover="setHoveredCategory"
        @mouseout="unsetHoveredCategory"
        @click="setSelectedCategory"
      >
        {{ category.label }}
      </base-button>
    </div>

    <div v-for="category in descriptions" :key="category.label">
      <div class="infobox" v-show="isSelected(category.label)">
        <img
          src="../../assets/icon-info-50.png"
          alt="icon for information"
          class="icon"
        />
        <p class="font-small grey">{{ category.description }}</p>
      </div>
    </div>

    <svg :viewBox="sizeSvg">
      <g class="graph" :transform="translate(margin.left, margin.top)">
        <g
          class="category-group"
          v-for="category in filteredData"
          :key="category.label"
          :class="'category-group-' + category.label"
          :transform="translate(xTranslateGroup(category.cummulative), 0)"
        >
          <g
            class="attr-group"
            v-for="(attribute, index) in category.options"
            :key="'attr-group-' + attribute.text"
            :class="'attr-group-' + attribute.text"
            :transform="translate(xTranslateGroup(index), 0)"
          >
            <g
              class="attr-details"
              v-if="isSelected(category.label) || isBaseGroup(attribute.value)"
              :fill="baseView ? '#ff7b00' : setColor(category.label)"
            >
              <text
                class="attr-label"
                :key="'attr-label-' + attribute.text"
                :class="'attr-label-' + attribute.text"
                :x="xPositionAttrLabels"
                :y="yPositionAttrLabels(category.options, attribute)"
              >
                {{ attribute.text }}
              </text>
              <line
                class="label-line"
                :x1="xPositionAttrLabels"
                :y1="yPositionAttrLabels(category.options, attribute)"
                :x2="xPositionAttrLabels"
                :y2="y(0)"
              ></line>
              <text
                class="value-label"
                :key="'value-label-' + attribute.text"
                :class="'value-label-' + attribute.text"
                :x="xPositionAttrLabels"
                :y="onBarPosition(attribute.value)"
              >
                {{ formatValues(attribute.value) }}
              </text>
            </g>
            <text
              v-else
              class="attr-short-label"
              :key="'attr-short-label-' + attribute.text"
              :class="'attr-short-label-' + attribute.text"
              :x="xPositionAttrLabels"
              :y="onBarPosition(attribute.value)"
              :fill="setColor(category.label)"
            >
              {{ attribute.shorttext }}
            </text>
            <rect
              :x="xCategory(barPadding)"
              :y="yPositionRect(attribute.value)"
              :width="widthRect"
              :height="heightRect(attribute.value)"
              :fill="setHoverableColor(category.label)"
            ></rect>
          </g>
        </g>
        <chart-axis
          class="x-axis"
          :transform="translate(0, y(0))"
          :orient="xAxis.orient"
          :scale="xAxis.scale"
          :range="xAxis.range"
          :domain="xAxis.domain"
          :numberOfTicks="xAxis.ticks"
          :width="width"
          :height="height"
          :isHighlighted="baseView"
        ></chart-axis>
      </g>
    </svg>

    <div v-show="isSelected('Wohnort (Regionales Arbeitsmarktgeschehen)')">
      <img
        src="../../assets/RGS-Karte.png"
        alt="Karte von Österreich über das regionale Arbeitsmarktgeschehen im Jahr 2017."
        class="map"
      />
      <div class="footnote">
        <p>Regionale Arbeitsmarktbedingungen, Basisjahr 2017</p>
        <p>
          Quelle: Judit Marte-Huainigg (2020): Arbeitsmarktchancen
          Assistenz-System. Hintergründe, Strategie, Modell.
          <a
            href="https://slidetodoc.com/arbeitsmarktchancen-assistenzsystem-hintergrnde-strategie-modell-judit-martehuainigg-vor/"
            >online verfügbar</a
          >
        </p>
      </div>
    </div>

    <!-- <img
      v-show="isSelected('Regionales Arbeitsmarktgeschehen')"
      src="../../assets/RGS-Karte.png"
      alt="Karte von Österreich über das regionale Arbeitsmarktgeschehen im Jahr 2017."
      class="map"
    /> -->
  </div>
</template>

<script>
import ChartAxis from "./ChartAxis.vue";
import { scaleLinear, scaleBand, scaleOrdinal } from "d3-scale";
import { max, min } from "d3-array";

export default {
  components: {
    ChartAxis,
  },
  props: {
    filteredData: {
      type: Array,
      required: true,
    },
    completeData: {
      type: Array,
      required: false,
    },
    toggleView: {
      type: Boolean,
      required: false,
      default: true,
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
    baseView: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      margin: { top: 30, right: 125, bottom: 20, left: 60 },
      barPadding: 10,
      selectedCategory: null,
      hoveredCategory: null,
    };
  },
  watch: {
    baseView: function (newVal, oldVal) {
      if (this.baseView === true) {
        this.selectedCategory = null;
      }
    },
  },
  computed: {
    disabledButton() {
      if (this.baseView === true) {
        return true;
      } else {
        return false;
      }
    },
    descriptions() {
      return this.filteredData.filter((item) => item.description != null);
    },
    cummulatives() {
      var cummulatives = [];
      var cummulative = 0;
      this.filteredData.forEach((criterium, index) => {
        criterium.cummulative = cummulative;
        cummulative += criterium.options.length;
        criterium.options.forEach((option) => {
          cummulatives.push(index);
          console.log(option); //fix this
        });
      });
      return cummulatives;
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
      return scaleOrdinal().range([
        "#5F37D1",
        "#feaf0a",
        "#4EAFCF",
        "#f95fa1",
        "#fe641c",
        "#205454",
      ]);
    },
    // create dummy scale to get bandwidths (width/childrenValues)
    xAttribute() {
      return scaleBand()
        .domain(this.cummulatives) // eigentlich bandWidths
        .rangeRound([0, this.width]);
    },
    xCategoryDomain() {
      return this.cummulatives.length * this.xAttribute.bandwidth();
    },
    //set x-scale for whole svg
    xCategory() {
      return scaleLinear()
        .range([0, this.width])
        .domain([0, this.xCategoryDomain]);
    },
    //set y-scale
    y() {
      return scaleLinear()
        .domain([
          min(this.completeData, (d) => min(d.options, (o) => o.value)),
          max(this.completeData, (d) => max(d.options, (o) => o.value)),
        ])
        .range([this.height, 0]);
    },
    xAxis() {
      return {
        scale: "scaleLinear",
        range: [0, this.width],
        domain: [0, this.xCategoryDomain],
        orient: "Bottom",
        ticks: 0,
      };
    },
    xPositionAttrLabels() {
      return this.xCategory(
        (this.xAttribute.bandwidth() + this.barPadding) / 2
      );
    },
    widthRect() {
      return this.xCategory(this.xAttribute.bandwidth() - this.barPadding);
    },
  },
  methods: {
    hexToRgb(hexColor, opacity) {
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
    setColor(category) {
      if (this.baseView === true) {
        return this.hexToRgb(this.color(category), 0.3);
      } else {
        return this.color(category);
      }
    },
    setHoverableColor(category) {
      if (this.baseView === true) {
        return this.hexToRgb(this.color(category), 0.3);
      }
      if (
        this.hoveredCategory === category ||
        this.selectedCategory === category
      ) {
        return this.color(category);
      } else {
        return this.hexToRgb(this.color(category), 0.5);
      }
    },
    setHoveredCategory(event) {
      this.hoveredCategory = event.target.textContent;
    },
    unsetHoveredCategory(event) {
      this.hoveredCategory = null;
    },
    setSelectedCategory(event) {
      var category = event.target.textContent;
      if (this.selectedCategory === category) {
        this.selectedCategory = null;
      } else {
        this.selectedCategory = category;
      }
    },
    isSelected(category) {
      if (this.selectedCategory === category) {
        return true;
      }
      return false;
    },
    isBaseGroup(value) {
      if (this.baseView === true && value === 0) {
        return true;
      } else {
        return false;
      }
    },
    formatValues(value) {
      if (value === null) {
        return "keine Daten";
      } else if (value == 0) {
        return value + "%";
      } else {
        return value.toFixed(2) + "%";
      }
    },
    translate(x, y) {
      return "translate(" + x + "," + y + ")";
    },
    xTranslateGroup(index) {
      return this.xCategory(index * this.xAttribute.bandwidth());
    },
    onBarPosition(value) {
      if (value === null) {
        return this.y(0) - 5;
      } else if (value < 0) {
        return Math.abs(this.y(value) + 20);
      } else {
        return this.y(value) - 5;
      }
    },
    yPositionAttrLabels(options, attribute) {
      var attrIndex = options.indexOf(attribute);
      //sum of all attribute values of one category
      var sum = options
        .map((option) => {
          if (option.value != null) {
            return option.value;
          } else {
            return 0;
          }
        })
        .reduce((acc, curr) => {
          return acc + curr;
        });

      if (sum < 15) {
        return this.y(25) + 30 * attrIndex;
      } else {
        return this.y(-10) + 30 * attrIndex;
      }
    },
    yPositionRect(value) {
      return this.y(Math.max(value, 0));
    },
    heightRect(value) {
      return Math.abs(this.y(value) - this.y(0));
    },
  },
};
</script>

<style scoped>
.map {
  width: 100%;
  margin: 20px 0;
}
.button-group {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-flow: column;
}
.infobox {
  display: inline-flex;
  justify-content: center;
  /* align-items: stretch; */
  overflow: hidden;

  position: relative;
  max-width: 50%;
  height: auto;
  border: 1px solid #ccc;
  margin: 10px auto;
  padding: 5px;
  box-sizing: border-box;
}
/* .infobox p {
  font-size: 0.8rem;
  color: rgb(139, 139, 139);
} */
.svg-container {
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  vertical-align: top;
  overflow: hidden;
  margin: 10px;
}
.category-label {
  font-weight: 400;
  font-size: 0.9rem;
  cursor: pointer;
}
.attr-group {
  transition: all 0.4s;
}
.attr-label {
  font-size: 1.1rem;
}
.attr-short-label {
  text-anchor: middle;
  font-size: 1.1rem;
}
.label-line {
  stroke: black;
  stroke-width: 0.5px;
}
.value-label {
  text-anchor: middle;
  font-size: 1.1rem;
}
rect {
  transition: 0.4s ease-in-out;
}
</style>

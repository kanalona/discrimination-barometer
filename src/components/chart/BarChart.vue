<template>
  <div>
    <base-card class="bar-chart-container">
      <div class="border-bottom"> 
        <p class="font-big nomargin">{{ title }}</p>
      </div>
      <div
        v-show="showViewToggle"
        class="radio-container"
      >
        <simple-radio
        v-for="option in viewOptions"
        :key="option.view"
          :name="option.label + title"
          :id="option.label + title"
          :labelText="option.label"
          :value="option.view"
          v-model="selectedView"
          @change="changeOption"
        ></simple-radio>
      </div>
      <p class="font-small grey nomargin">
        Um mehr Informationen zu erhalten klicke unten auf die entsprechende
        Kategorie.&cudarrr;
      </p>

      <bar-chart-canvas
        :title="title"
        :filteredData="filteredChartData(keySelection)"
        :completeData="chartData"
        :baseView="isBaseGroup"
        :svgWidth="svgWidth"
        :svgHeight="svgHeight"
      />
    </base-card>
  </div>
</template>

<script>
import criteria from "@/assets/data/criteria.js";
import BarChartCanvas from "./BarChartCanvas.vue";

export default {
  components: {
    BarChartCanvas,
  },
  data() {
    return {
      criteria: criteria,
      selectedView: "standard",
      viewOptions: [
        { view: "standard", label: "Standardansicht" },
        { view: "basegroup", label: "Basisgruppe" },
      ],
    };
  },
  props: ["keySelection", "title", "showViewToggle", "svgWidth", "svgHeight"],
  computed: {
    isBaseGroup() {
      if (this.selectedView === "basegroup") {
        return true;
      } else {
        return false;
      }
    },
    //obj => array
    dataArray() {
      return Object.keys(this.criteria).map((key) => {
        return this.criteria[key];
      });
    },
    //add keys, values => percent, add label deeper nested
    chartData() {
      return this.dataArray.map((criterium, index) => ({
        ...criterium,
        key: Object.keys(this.criteria)[index],
        options: criterium.options.map((option, index) => {
          return option.value != null
            ? {
                ...option,
                value: this.toPercent(option.value),
              }
            : {
                ...option,
              };
        }),
      }));
    },
  },
  methods: {
    filteredChartData(keys) {
      var array = this.chartData.map((criterium) => {
        if (keys.includes(criterium.key)) {
          return criterium;
        }
        return null;
      });
      return array.filter((item) => item !== null);
    },
    logTrans(value) {
      return (Math.exp(value) / (1 + Math.exp(value))) * 100;
    },
    toPercent(value) {
      return this.logTrans(0.1 + value) - this.logTrans(0.1);
    },
    changeOption(view) {
      console.log(this.selectedView);
      this.selectedView = view;
      console.log(this.selectedView);
    },
  },
};
</script>

<style scoped>
.bar-chart-container{
  margin: 30px 0;
}
.radio-container {
  display: inline-flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: stretch;
  overflow: hidden;
  margin: 1rem 0;
}
</style>
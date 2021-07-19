<template>
  <div class="column-container">
    <p class="font-big border-bottom center">
      Wochenarbeitszeit in bezahlter und unbezahlter Arbeit von Personen ab 18
    </p>
    <p class="font-small font-light center nomargin">
      Sieh was passiert, wenn Kinder betreut werden müssen! &cudarrr;
    </p>
    <section class="radio-container">
      <simple-radio
        v-for="(item, key) in unpaidworkData"
        :key="key"
        :name="'kids'"
        :id="key"
        :labelText="item.label"
        :value="key"
        v-model="selected"
        @change="setSelected"
      ></simple-radio>
    </section>
    <section>
      <stacked-bar-chart-canvas
        :data="chartData"
        :svgWidth="900"
        :svgHeight="100"
        :maxRange="maxTotal"
      ></stacked-bar-chart-canvas>
    </section>
    <section class="footnote">
      <p>
        In dieser Studie wurde von Zweigeschlechlichkeit ausgegangen, es wurden
        also keine Daten über nicht-binäre Personen erhoben.
      </p>
      <p>
        Quelle: Statistisches Bundesamt (2015): Wie die Zeit vergeht. Ergebnisse
        zur Zeitverwendung in Deutschland 2012/2013, Wiesbaden
      </p>
      <br />
      <p>Erhebungsort und -zeitpunkt: Deutschland, 2013</p>
    </section>
  </div>
</template>

<script>
import { max } from "d3-array";
import unpaidwork from "@/assets/data/unpaidwork.js";
import StackedBarChartCanvas from "./StackedBarChartCanvas.vue";
export default {
  components: {
    StackedBarChartCanvas,
  },
  data() {
    return {
      unpaidworkData: unpaidwork,
      categories: ["paid", "unpaid"],
      selected: "nokids",
    };
  },
  computed: {
    maxTotal() {
      var totalsArray = [];
      this.dataWithTotal.map((item) => {
        item.entries.map((obj) => {
          totalsArray.push(obj.total);
        });
      });
      return max(totalsArray);
    },
    //obj => array
    dataArray() {
      return Object.keys(this.unpaidworkData).map((key) => {
        return this.unpaidworkData[key];
      });
    },
    //add keys, values => percent, add label deeper nested
    dataWithTotal() {
      return this.dataArray.map((item, index) => ({
        ...item,
        // categories: this.categories,
        key: Object.keys(this.unpaidworkData)[index],
        entries: item.entries.map((obj) => {
          return { ...obj, total: obj.paid + obj.unpaid };
        }),
      }));
    },
    chartData() {
      var data = this.dataWithTotal.filter(
        (item) => item.key === this.selected
      )[0].entries;
      data.categories = this.categories;
      return data;
    },
  },
  methods: {
    setSelected(val) {
      this.selected = val;
    },
  },
};
</script>

<style scoped>
.column-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.radio-container {
  display: inline-flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: stretch;
  overflow: hidden;
  margin: 1rem 0;
}
.footnote {
  max-width: 80%;
  align-self: center;
}
</style>
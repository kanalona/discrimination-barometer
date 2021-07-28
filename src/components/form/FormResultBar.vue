<template>
  <base-card class="card centered">
    <div class="result-container centered">
      <h2>Chance auf dem Arbeitsmarkt</h2>
      <div class="progress">
        <div class="progress-value" :style="{ width: result + '%' }">
          <h1><span ref="result"></span>%</h1>
        </div>
      </div>
    </div>
  </base-card>
</template>

<script>
import { CountUp } from "countup.js";
export default {
  props: ["result"],
  mounted() {
    this.countUp = new CountUp(
      this.$refs.result,
      this.result,
      this.countUpOptions
    );

    if (!this.countUp.error) {
      this.countUp.start();
    } else {
      console.error(this.countUp.error);
    }
  },
  data() {
    return {
      countUp: null,
      countUpOptions: {
        useEasing: true,
        useGrouping: false,
        separator: ".",
        decimal: ",",
        decimalPlaces: 2,
      },
    };
  },
  watch: {
    result: function (newValue) {
      this.countUp.update(newValue);
    },
  },
};
</script>

<style scoped>
.card {
  padding: 10px 50px;
  width: 100%;
  position: fixed;
  bottom: 0;
}
.result-container {
  max-width: 90rem;
  width: 100%;
  margin: auto;
}
.progress {
  background: #e8e8e8;
  border-radius: 100px;
  position: relative;
  padding: 5px 5px;
  margin: 5px 5px;
  height: 60px;
  width: 100%;
}
.progress-value {
  display: flex;
  justify-content: center;
  align-items: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.9s;
  border-radius: 100px;
  background: #fff;
  color: var(--primaryColor);
  height: 50px;
  
}
h1 {
  font-size: 2.5rem;
  margin: 0;
}

h2 {
  font-size: 1.5rem;
  margin: 0;
}
</style>
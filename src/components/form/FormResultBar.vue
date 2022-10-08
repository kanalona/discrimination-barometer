<template>
  <!-- <base-card class="card centered"> -->
  <div class="progress-wrapper centered">
    <div class="progress-container">
      <div class="progress-value" :style="{ height: result + '%' }"></div>
    </div>

    <h1><span ref="result"></span>%</h1>
    <p>Kurzfristige Chance auf dem Arbeitsmarkt</p>
  </div>
  <!-- </base-card> -->
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
      console.log("FRB: result changed");
      console.log(newValue);
      this.countUp.update(newValue);
    },
  },
};
</script>

<style scoped>
.card {
  /* padding: 10px 50px;
  width: 100%;
  position: fixed;
  bottom: 0; */
}
.progress-wrapper {
  display: flex;
  flex-direction: column;
  height: 90vh;
  /* overflow: hidden; */
  /* position: relative; */
  /* margin: auto; */
}
.progress-container {
  background: #e8e8e8;
  border-radius: 100px;
  padding: 5px 5px;
  position: relative;
  top: 50%;
  margin-top: 50px;
  transform: translateY(-50%);
  width: 60px;
  height: 100%;
}
.progress-value {
  padding: 5px 5px;
  background-color: #fff;
  width: 50px;
  border-radius: 100px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.9s;
  position: absolute;
  bottom: 5px;
  transform-origin: bottom;
}
/* @keyframes grow{
  from{
    transform: scaleY(0);
  }
} */

h1 {
  font-size: 2.5rem;
  margin: 0;
}

h2 {
  font-size: 1.5rem;
  margin: 0;
}
</style>
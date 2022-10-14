<template>
  <div v-if="vertical" class="progress-wrapper-v p-4 centered">
    <div class="progress-container-v">
      <div class="progress-value-v" :style="{ height: result + '%' }"></div>
    </div>

    <h1><span ref="result"></span>%</h1>
    <p>Kurzfristige Chance auf dem Arbeitsmarkt</p>
  </div>

  <div v-else class="progress-wrapper-h p-2 centered">
    <div class="progress-container-h m-2">
      <div class="progress-value-h" :style="{ width: result + '%' }">
        <h1><span ref="result"></span>%</h1>
      </div>
    </div>
    <p class="no-margin">(Kurzfristige Chance auf dem Arbeitsmarkt)</p>
  </div>
</template>

<script>
import { CountUp } from "countup.js";
export default {
  props: {
    result: {
      type: Number,
      required: true,
      default: 0,
    },
    vertical: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
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
        duration: 0.8,
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
/* vertical progress bar */
.progress-wrapper-v {
  display: flex;
  flex-direction: column;
  height: 90vh;
}
.progress-container-v {
  display: flex;
  align-items: flex-end;
  border: solid 2px #e8e8e8;
  border-radius: 100px;
  padding: 5px 5px;
  height: 100%;
}
.progress-value-v {
  background-color: #e8e8e8;
  width: 60px;
  border-radius: 100px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.9s;
}

/* horizontal progressbar */
.progress-wrapper-h {
  display: flex;
  flex-direction: column;
  /* height: 5vh; */
}
.progress-container-h {
  display: flex;
  align-items: flex-end;
  border: solid 2px #e8e8e8;
  border-radius: 100px;
  padding: 5px 5px;
  width: 100%;
}
.progress-value-h {
  background-color: #e8e8e8;
  height: 3vh;
  border-radius: 100px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.9s;
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
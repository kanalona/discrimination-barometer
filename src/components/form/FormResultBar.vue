<template>
  <div>
    <div v-if="vertical" class="progress-wrapper-v p-4 centered">
      <div class="progress-container-v">
        <div class="progress-value-v" :style="{ height: result + '%' }"></div>
      </div>

      <h1><span ref="result"></span>%</h1>
      <p>Kurzfristige Chance auf dem Arbeitsmarkt</p>
    </div>

    <div v-else class="progress-wrapper-h p-2 centered">
      <div class="progress-container-h m-2">
        <div class="progress-value-h" :style="{ width: result + '%' }"></div>
        <h5 class="progress-text-h"><span ref="result"></span>%</h5>
      </div>
      <p class="no-margin">(Kurzfristige Chance auf dem Arbeitsmarkt)</p>
    </div>
  </div>
</template>

<script>
import { CountUp } from "countup.js";
export default {
  props: {
    result: {
      type: String,
      required: true,
      default: "0",
    },
    vertical: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  mounted() {
    console.log("mounted");
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
  updated() {
    console.log("updated");
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
        duration: 0.7,
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
  height: 100%;
  overflow: hidden;
  /* gradient progrss bar */
  position: relative;
}
.progress-value-v {
  width: 5vw;
  max-width: 70px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.7s;
  /* gradient progrss bar */
  -webkit-mask: linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0);
}

.progress-value-v::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
    to top,
    var(--secondaryColor),
    var(--primaryColor)
  );
}

/* horizontal progressbar */
.progress-wrapper-h {
  display: flex;
  flex-direction: column;
}
.progress-container-h {
  display: flex;
  align-items: center;
  border: solid 2px #e8e8e8;
  border-radius: 100px;
  width: 100%;
  overflow: hidden;
  /* gradient progrss bar */
  position: relative;
}
.progress-value-h {
  /* gradient progrss bar */
  -webkit-mask: linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0);

  height: 3vh;
  min-height: 30px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.9s;
}
.progress-value-h::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
 background-image: linear-gradient(
    to right,
    var(--secondaryColor),
    var(--primaryColor)
  );
}
.progress-text-h {
  margin: 0;
  position: absolute;
  right: 4rem;
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
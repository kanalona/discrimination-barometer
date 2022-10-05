<template>
  <!-- <div class="steps">
    <div class="step" v-for="(step, index) in steps" :key="index">
      <router-link :to="step.link">
        <div class="step-container">
          <p class="text right">{{ step.text }}</p>
        </div></router-link
      >
    </div>
  </div> -->

  <!-- circle and line for big screens -->
  <div class="row mb-4 position-relative d-none d-lg-flex">
    <div
      v-for="(step, key) in steps"
      :key="key"
      class="col d-flex justify-content-center"
    >
      <div
        class="circle"
        @mouseover="mouseOver(key)"
        @mouseleave="mouseLeave(key)"
        :class="{ hoveredCircle: hoveredElement == key }"
      >
        <span>{{ step.name }}</span>
      </div>
    </div>
    <div class="line"></div>
  </div>

  <!-- text and circles for small screens-->
  <div class="row justify-content-center">
    <div
      v-for="(step, key) in steps"
      :key="key"
      class="col-12 col-lg-4 d-flex flex-column align-items-center mb-6"
      @mouseover="mouseOver(key)"
      @mouseleave="mouseLeave(key)"
    >
      <div class="circle mb-3 d-lg-none" :class="{ hoveredCircle: hoveredElement == key }">
        <span>{{ step.name }}</span>
      </div>

      <div class="card" :class="{ hoveredCard: hoveredElement == key }">
        <div class="text-center">
          <h5>{{ step.heading }}</h5>
          <p>{{ step.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["steps"],
  data() {
    return {
      hoveredElement: false,
    };
  },
  computed: {
    backgroundColor() {
      return "#fafafa";
    },
  },
  methods: {
    mouseOver(key) {
      this.hoveredElement = key;
      console.log(key);
    },
    mouseLeave(key) {
      this.hoveredElement = null;
      console.log(key);
    },
    clicked() {},
  },
};
</script>
<style scoped>
.line {
  position: absolute;
  border-top: 1px solid #a7a7a7;
  width: calc(100% - 33%);
  left: 16%;
  top: 50%;
  z-index: 0;
}
.circle {
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  z-index: 1;
  border-radius: 50% !important;
  color: #a7a7a7;
  background-color: var(--primaryColor);
}
.hoveredCircle {
  color: var(--primaryColor);
  background-color: #dadada;
  border: 2px solid var(--primaryColor);
  cursor: pointer;
}

.card {
  width: 100%;
   height: 100%; /*problem circle not round */
  padding: 25px 30px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 1px 6px, rgba(0, 0, 0, 0.09) 0px 1px 4px;
  background-color: #fafafa;
}
.hoveredCard {
  color: var(--primaryColor);
  background-color: #dadada;
  border: 2px solid var(--primaryColor);
  cursor: pointer;
}

 .flex-column {
  flex-direction: column !important;
}
.align-items-center {
  align-items: center !important;
} 
/*

.step:hover {
  background: var(--primaryColor);
  cursor: pointer;
}
.step:hover .text {
  color: black;
}
.number {
  grid-area: number;
  text-align: center;
  font-size: 10rem;
  color: white;
  line-height: 0.8;
  font-weight: 400;
}
.text {
  grid-area: text;
  font-size: 1.3rem;
}
p {
  margin: 0;
}
ul {
  list-style: none;
} */
</style>
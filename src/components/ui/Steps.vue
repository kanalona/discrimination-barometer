<template>
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
    <div class="h-line"></div>
  </div>

  <!-- text and circles for small screens-->
  <div class="row position-relative justify-content-center">
    <div
      v-for="(step, key) in steps"
      :key="key"
      class="col-12 col-lg-4 d-flex flex-column align-items-center mb-3"
      @mouseover="mouseOver(key)"
      @mouseleave="mouseLeave(key)"
      @click="changeRoute(key)"
    >
      <div
        class="circle mb-3 me-3 d-lg-none"
        :class="{ hoveredCircle: hoveredElement == key }"
      >
        <span>{{ step.name }}</span>
      </div>

      <div class="card" :class="{ hoveredCard: hoveredElement == key }">
        <div class="text-center">
          <h5>{{ step.heading }}</h5>
          <p class="no-margin">{{ step.text }}</p>
        </div>
      </div>
    </div>
    <!-- <div class="v-line"></div> -->
  </div>
</template>

<script>
export default {
  props: {
    steps: {
      type: Object,
      required: true,
    },
    clickable: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  data() {
    return {
      hoveredElement: false,
    };
  },
  methods: {
    mouseOver(key) {
      if (this.clickable == true) {
        this.hoveredElement = key;
        console.log(key);
      }
    },
    mouseLeave(key) {
      if (this.clickable == true) {
        this.hoveredElement = null;
        console.log(key);
      }
    },
    changeRoute(key) {
      if (this.clickable == true) {
        this.$router.push({ path: this.steps[key].link });
      }
    },
  },
};
</script>
<style scoped>
.h-line {
  position: absolute;
  border-top: 1px solid #a7a7a7;
  width: calc(100% - 33%);
  left: 16%;
  top: 50%;
  z-index: 0;
}
.v-line {
  position: absolute;
  /* border-left: 5px solid red; */
  border-left: 1px solid #a7a7a7;
  height: calc(100% - 33%);
  top: 10%;
  left: 4%;
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
  /* color: var(--secondaryColor); */
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
  flex: 1 1 0px;

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
</style>
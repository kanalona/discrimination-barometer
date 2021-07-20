<template>
  <div class="steps">
    <div class="step" v-for="(step, index) in steps" :key="index">
      <router-link :to="step.link">
        <div class="step-container">
          <p class="number">{{ index + 1 }}</p>
          <p class="text right">{{ step.text }}</p>
        </div></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["steps"],
};
</script>
<style scoped>
.steps {
  display: grid;
  grid-gap: 80px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
}
.step-container {
  display: grid;
  justify-items: end;
  align-items: end;
}
.step {
  background: #eee;
}
.step:hover {
  background: #ff7b00;
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
}
</style>
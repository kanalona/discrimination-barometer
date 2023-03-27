<template>
  <div class="mouse-container d-flex justify-content-center align-items-center" @mousemove="getMousePos">

    <div v-if="mode == 'rectangle'" id="mouse-rectangle" class="movearea" :style="{
      // top: rectY + 'px',
      // left: rectX + 'px',
      height: height + 'vh',
      width: width + 'vw',
    }">
    </div>

    <div v-else-if="mode == 'circle'" id="mouse-circle" class="movearea" :style="{
      top: circleY + 'px',
      left: circleX + 'px',
      height: diameter + 'vw',
      width: diameter + 'vw',
    }">
    </div>

    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: true,
      default: "rectangle",
    },
    diameter: {
      type: Number,
      required: false,
      default: 60,
    },
    height: {
      type: Number,
      required: false,
      default: 100,
    },
    width: {
      type: Number,
      required: false,
      default: 100,
    },
  },
  data() {
    return {
      circleX: 0,
      circleY: 0,
      rectX: 0,
      rectY: 0,
    }
  },
  methods: {
    getMousePos(event) {
      this.rectX = (event.clientX / 10)
      this.rectY = (event.clientY / 10)
      this.circleX = (event.clientX - (this.diameter * 10 / 2))
      this.circleY = (event.clientY - (this.diameter * 10 / 2))
    },
  }
}
</script>

<style scoped>
.mouse-container {
  position: relative;
  background-color: var(--bg);
  height: 100vh;
  width: 100%;
  margin: 0;
  overflow: hidden;
  /* cursor: none; */
}

#mouse-circle {
  position: absolute;
  filter: blur(50px);
  border-radius: 100%;
  /* opacity: 0.8; */
  background-image: linear-gradient(to right,
      var(--primaryColor) 25%,
      var(--secondaryColor));
}

#mouse-rectangle {
  position: absolute;
  /* filter: blur(20px); */
  box-shadow: 0 0 5px 10px #ffffff;
  background-image: linear-gradient(to right,
      var(--primaryColor) 25%,
      var(--secondaryColor));
}

.movearea {
  transition: all 0.7s linear;
}
</style>
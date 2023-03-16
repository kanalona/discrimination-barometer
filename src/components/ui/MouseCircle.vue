<template>
  <div class="mouse-container d-flex justify-content-center" @mousemove="getMousePos">

    <div id="mouse-circle" class="movearea" :style="{
      top: circleY + 'px',
      left: circleX + 'px',
      height: diameter + 'vh',
      width: diameter + 'vh',
      // backgroundColor: 'red'
    }">
    </div>

    <slot></slot>

  </div>
</template>

<script>
export default {
  data() {
    return {
      x: 0,
      circleX: 0,
      circleY: 0,
      speed: 0.4,
      diameter: 150,
    }
  },
  methods: {
    mouseEnter(event) {
      console.log("mouseenter")
    },
    getMousePos(event) {
      this.circleX = (event.pageX - (this.diameter * 10 / 2)) * this.speed
      this.circleY = (event.pageY - (this.diameter * 10 / 2)) * this.speed
      this.x = event.pageX
    }
  }
}
</script>

<style scoped>
.mouse-container {
  position: relative;
  background-color: var(--bg);
  height: 200vh;
  width: 100%;
  margin: 0;
  overflow: hidden;
  cursor: none;
}

#mouse-circle {
  position: absolute;
  filter: blur(50px);
  border-radius: 50%;
  opacity: 0.8;
  background-image: linear-gradient(to right,
      var(--secondaryColor),
      var(--primaryColor),
      var(--primaryColor));
}

.movearea {
  transition: all 0.7s linear;
}

</style>
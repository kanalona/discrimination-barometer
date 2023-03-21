<template>
  <div class="mouse-container d-flex justify-content-center" @mousemove="getMousePos">

    <div id="mouse-circle" class="movearea" :style="{

      height: diameter + 'vh',
      width: diameter + 'vw',
      // backgroundColor: 'red'
    }">

    </div>
    <!-- <div id="mouse-circle" class="movearea" :style="{
      top: circleY + 'px',
      left: circleX + 'px',
      height: diameter + 'vh',
      width: diameter + 'vw',
      // backgroundColor: 'red'
    }">

    </div> -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circleX: 0,
      circleY: 0,
      speed: 0.4,
      diameter: 100,
    }
  },
  methods: {
    mouseEnter(event) {
      console.log("mouseenter")
    },
    getMousePos(event) {
      this.circleX = (event.clientX - (this.diameter * 10 / 2))
      this.circleY = (event.clientY - (this.diameter * 10 / 2))
    }
  }
}
</script>

<style scoped>
.mouse-container {
  position: relative;
  background-color: var(--bg);
  height: 110vh;
  width: 100%;
  margin: 0;
  overflow: hidden;
  /* cursor: none; */
}

#mouse-circle {
  position: absolute;
  /* filter: blur(10px); */
  /* border-radius: 50%; */
  /* opacity: 0.8; */
  background-image: linear-gradient(to right,
      var(--primaryColor) 25%,
      var(--secondaryColor)
    );
}

.movearea {
  transition: all 0.7s linear;
}
</style>
<template>
  <header ref="header" :class="{ sticky: isSticky }">
    <nav>
      <h3><router-link to="/">{{"Home".toUpperCase()}}</router-link></h3>
      <ul class="navigation-tabs">
        <li>
          <router-link to="/barometer">{{
            "1. Barometer".toUpperCase()
          }}</router-link>
        </li>
        &rarr;
        <li>
          <router-link to="/berechnung">{{
            "2. Werte".toUpperCase()
          }}</router-link>
        </li>
        &rarr;
        <li>
          <router-link to="/kontext">{{
            "3. Kontext".toUpperCase()
          }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  emits: ["set-sticky"],
  data() {
    return {
      isSticky: false,
      initialHeaderPos: 0,
      headerHeight: 0,
    };
  },
  mounted() {
    this.initialHeaderPos = this.$refs.header.offsetTop;
    this.headerHeight = this.$refs.header.offsetHeight;
  },
   created() {
    window.addEventListener("scroll", this.setSticky);
  },
  unmounted() {
    window.removeEventListener("scroll", this.setSticky);
  },
  methods: {
    setSticky() {
      if (window.scrollY > this.initialHeaderPos) {
        this.isSticky = true;
        this.$refs.header.style.top = 0;
      } else {
        this.isSticky = false;
        this.$refs.header.style.top = "";
      }
      this.$emit("set-sticky", this.isSticky, this.headerHeight);
    },
  },
};
</script>


<style scoped>
header {
  padding: 10px;
  background: #f1f1f1;
  border: 1px solid #ccc;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
}
nav {
  width: 90%;
  margin: auto;
  max-width: 65rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
li {
  margin: 0 0.5rem;
}
h3 {
  margin: 0;
}
a {
  position: relative;
  display: inline-block;
  padding: 0rem 1rem;
}
.navigation-tabs > * {
  font-weight: 400;
}
.sticky {
  position: fixed;
}
/* a:hover,
a:active,
a.router-link-active {
  color: var(--primaryColor);
} */

/* a::before{
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: var(--primaryColor);
  visibility: hidden;
  transform-origin:left;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
} 
a:hover::before{
  visibility: visible;
  transform: scaleX(1);
}

a:active,
a.router-link-active {
  border-bottom: 2px solid var(--primaryColor);
} */
</style>
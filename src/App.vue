<template>
  <div>
    <the-navbar></the-navbar>
    <div>
      <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import TheNavbar from "./components/layout/TheNavbar.vue";
// import TopContainer from "./components/layout/TopContainer.vue";
export default {
  components: {
    TheNavbar,
    // TopContainer,
  },
  data() {
    return {
      padding: 0,
    };
  },
  methods: {
    addPadding(isSticky, headerHeight) {
      if (isSticky) {
        this.padding = `${headerHeight}px`;
      } else {
        this.padding = `0px`;
      }
    },
  },
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* color: #4c59a8; */
  /* color: #7448ff; */
  color: "#131313";
  background: #f1f1f1;
}

:root {
  --primaryColor: royalblue;
  --primaryOpaque: rgb(106, 90, 205, 0.2);
  --white: #ffffff;
}
* {
  box-sizing: border-box;
}

/* UNIVERSAL */

html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
  font-size: 100%;
}

/* ROOT FONT STYLES */

* {
  /* font-family: 'Lato', Helvetica, sans-serif;
  color: #333447; */
  line-height: 1.5;
}

body {
  margin: 0;
}

.icon {
  width: 1rem;
  height: 1rem;
}
.clickable {
  cursor: pointer;
}
a {
  text-decoration: none;
  color: #131313;
}

a:hover,
a:active,
a.router-link-active {
  color: var(--primaryColor);
}
/* p {
  text-align: justify;
}
h1, h2, h3 {
  text-align: left;
} */
.tippy-box[data-theme~="white-bordered"] {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: rgba(255, 255, 255, 0.8);
  color: black;
  border: 1px solid #ccc;
}
.tippy-box[data-theme~="white-bordered"][data-placement^="top"]
  > .tippy-arrow::before {
  border-top-color: rgba(255, 255, 255, 0.8);
}
.tippy-box[data-theme~="white-bordered"][data-placement^="bottom"]
  > .tippy-arrow::before {
  border-bottom-color: rgba(255, 255, 255, 0.8);
}
.tippy-box[data-theme~="white-bordered"][data-placement^="left"]
  > .tippy-arrow::before {
  border-left-color: rgba(255, 255, 255, 0.8);
}
.tippy-box[data-theme~="white-bordered"][data-placement^="right"]
  > .tippy-arrow::before {
  border-right-color: rgba(255, 255, 255, 0.8);
}

.tippy-box[data-theme~="gray-white"] {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #535252;
  color: #fff;
}

.tippy-box[data-theme~="gray-white"][data-placement^="top"]
  > .tippy-arrow::before {
  border-top-color: #535252;
}
.tippy-box[data-theme~="gray-white"][data-placement^="bottom"]
  > .tippy-arrow::before {
  border-bottom-color: #535252;
}
.tippy-box[data-theme~="gray-white"][data-placement^="left"]
  > .tippy-arrow::before {
  border-left-color: #535252;
}
.tippy-box[data-theme~="gray-white"][data-placement^="right"]
  > .tippy-arrow::before {
  border-right-color: #535252;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateX(0);
}

/**
*** SIMPLE GRID
*** (C) ZACH COLE 2016
**/

@import url(https://fonts.googleapis.com/css?family=Lato:400,300,300italic,400italic,700,700italic);

/* TYPOGRAPHY */

h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 2rem;
  font-weight: 400;
}

h3 {
  font-size: 1.375rem;
}

h4 {
  font-size: 1.125rem;
  font-weight: 400;
}

h5 {
  font-size: 1rem;
}

h6 {
  font-size: 0.875rem;
}

p {
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.8;
}
.font-big {
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.8;
}
.font-small {
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.5;
}
.italic {
  font-style: italic;
}
.darkgrey {
  color: #555;
}
.grey {
  color: #888;
}
.border-bottom {
  border-bottom: 1px solid #ccc;
}
.padding-bottom {
  padding-bottom: 10px;
}
.footnote {
  border-top: 1px solid #ccc;
  padding-top: 10px;
}
.footnote-marker {
  color: #555;
  font-style: italic;
  font-size: 0.8rem;
  line-height: 1.5;
  text-align: center;
}
.footnote p {
  color: #555;
  font-style: italic;
  font-size: 0.8rem;
  line-height: 1.5;
  text-align: left;
  margin: 0.1rem 0;
}
.footnote p {
  margin: 0;
}
.centered {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
/* sup {
  vertical-align: top;
  position: relative;
  top: -0.5em;
} */

.font-light {
  font-weight: 300;
}

.font-regular {
  font-weight: 400;
}

.font-heavy {
  font-weight: 700;
}

/* POSITIONING */

.left {
  text-align: left;
}

.right {
  text-align: right;
}

.center {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.justify {
  text-align: justify;
}

.nomargin {
  margin: 0;
  padding: 0;
}

.background-wrapper > * {
  padding: 3rem;
  /* width: 100%; */
}
.background-wrapper .background-child:nth-child(2n) {
  background-color: rgb(250, 250, 250);
  /* background-color: rgba(250, 250, 250, 0.74); */
}
</style>
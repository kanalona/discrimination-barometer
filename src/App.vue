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
export default {
  components: {
    TheNavbar,
  },
};
</script>

<style>
/* UNIVERSAL */
#app {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* color: #4c59a8; */
  /* color: #7448ff; */
  color: #313131;
  background: #f1f1f1;
}
:root {
  /* --primaryColor: royalblue; */
  /* --primaryDarker: #d8e775; */
  /* --primaryColor: #eeff78; */
  /* --primaryColor: #ff8325; */
  /* --primaryColor-rgb: 238, 255, 120; */
  /* --secondaryColor:  #084699; */
  /* --primaryColor: #ee585a; */
  /* --primaryOpaque: rgb(106, 90, 205, 0.2); */
  --white: #ffffff;
  --bg-light: #fafafa;
  --bg: #f1f1f1;

  /* --darkblue: #0d0867;
  --middleblue: #4a4bf4;
  --middlelightblue: #7a96f3;
  --lightblue: #93b2fa;
  --lightlightblue: #e5eafc;
  --red: #e24940;
  --lachs: #ff807c;
  --rose: #efb2b4;

  --primaryColor1: #06033a;
  --primaryColor2: #4a4bf4;
  --primaryColor3: #7a96f3;
  --primaryColor4: #f0f3ff;
  --secondaryColor1: #e24940;
  --secondaryColor2: #fe7b77;
  --secondaryColor3: #efb2b4;
  --secondaryColor4: #fff0f1;

  --primaryColor2-rgb: 74, 75, 244; */
  --primaryColor-rgb: 0, 0, 255; 

  --blue: #0000ff;
  --red: #ff2d16;
  --darkrosa: #f0bacc;
  --rosa: #f9c9df; 
  --lighrosa: #fad6e8;

  --primaryColor: #4846F0;
  --secondaryColor: #F05A3A;
  


  --card-border-color: rgba(0, 0, 0, 0.175)
}
.primaryColor1 {
  color: var(--primaryColor1);
}
.primaryColor2 {
  color: var(--primaryColor2);
}
.primaryColor3 {
  color: var(--primaryColor3);
}
.primaryColor4 {
  color: var(--primaryColor4);
}
.secondaryColor1 {
  color: var(--secondaryColor1);
}
.secondaryColor2 {
  color: var(--secondaryColor2);
}
.secondaryColor3 {
  color: var(--secondaryColor3);
}
.secondaryColor4 {
  color: var(--secondaryColor4);
}

* {
  box-sizing: border-box;
}
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
  /* font-size: 100%; */
}

/* ROOT FONT STYLES */
* {
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
  color: #313131;
}
a:hover,
a:active,
a.router-link-active {
  color: var(--primaryColor);
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  hyphens: auto;
}

/*TOOLTIPS */
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

/*PAGE TRANSITIONS */
/* .route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
} */
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
/* .route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateX(0);
} */

/*CUSTOM LIST*/
.arrow-list {
  list-style: none;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
}
.arrow-list li {
  display: flex;
}
.arrow-list li:before {
  content: "→";
  color: var(--primaryColor);

  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 2em; /* Also needed for space (tweak if needed) */
  margin-left: -2em; /* Also needed for space (tweak if needed) */
}

@import url(https://fonts.googleapis.com/css?family=Lato:400,300,300italic,400italic,700,700italic);

/* TYPOGRAPHY */
.fw-300 {
  font-weight: 300;
}
/* h1 {
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
  font-weight: 400;
  line-height: 1.8;
}*/
.font-huge {
  font-size: 3rem;
  line-height: 1.8;
} /*
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
.font-light {
  font-weight: 300;
}
.font-regular {
  font-weight: 400;
}
.font-heavy {
  font-weight: 700;
} */
.italic {
  font-style: italic;
}
.upper-case {
  text-transform: uppercase;
}

/*FONT COLORS*/
.darkgrey {
  color: #555;
}
.grey {
  color: #888;
}
.primaryColor {
  color: var(--primaryColor);
}

/*BORDERS*/
.border-bottom {
  border-bottom: 1px solid #ccc;
}
.padding-bottom {
  padding-bottom: 10px;
}

/*FOOTNOTES*/
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
/* sup {
  vertical-align: top;
  position: relative;
  top: -0.5em;
} */

/* POSITIONING */

.centered {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
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
  hyphens: auto;
}
.margin-auto {
  margin: auto;
}
.no-margin {
  margin: 0;
  padding: 0;
}

/*BACKGROUND*/

/* .bg-wrapper .bg-child {
  display: flex;
}
.bg-wrapper .bg-child:nth-child(2n) {
  background-color: rgb(250, 250, 250);
} */

.width-wrapper {
  width: 100%;
  margin: 0 auto;
  max-width: 65em;
  padding: 0 1rem;
}

.headline-slash,
.headline-slash-big {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.headline-slash::before {
  content: "/";
  margin-right: 1rem;
  /* color: var(--secondaryColor2); */
  color: var(--primaryColor2);
  font-size: 1.7em;
}
.headline-slash::after {
  content: "/";
  margin-left: 1rem;
  /* color: var(--secondaryColor2); */
  color: var(--primaryColor2);
  font-size: 1.7em;
}
.headline-slash-big::before {
  content: "/";
  margin-right: 1rem;
 /* color: var(--secondaryColor2); */
 color: var(--primaryColor2);
  font-size: 4em;
}
.headline-slash-big::after {
  content: "/";
  margin-left: 1rem;
/* color: var(--secondaryColor2); */
color: var(--primaryColor2);
  font-size: 4em;
}
</style>

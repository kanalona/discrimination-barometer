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

/*MEDIA QUERIES */
/* Extra small devices (phones, 600px and down) */
/* @media only screen and (max-width: 600px) {...} */

/* Small devices (portrait tablets and large phones, 600px and up) */
/* @media only screen and (min-width: 600px) {...} */

/* Medium devices (landscape tablets, 768px and up) */
/* @media only screen and (min-width: 768px) {...} */

/* Large devices (laptops/desktops, 992px and up) */
/* @media only screen and (min-width: 992px) {...} */

/* Extra large devices (large laptops and desktops, 1200px and up) */
/* @media only screen and (min-width: 1200px) {...}  */

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
.font-huge {
  font-size: 3rem;
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
.font-light {
  font-weight: 300;
}
.font-regular {
  font-weight: 400;
}
.font-heavy {
  font-weight: 700;
}
.italic {
  font-style: italic;
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
}
.margin-auto {
  margin: auto;
}
.nomargin {
  margin: 0;
  padding: 0;
}

/*BACKGROUND*/

.bg-wrapper .bg-child {
  display: flex;
}
.bg-wrapper .bg-child:nth-child(2n) {
  background-color: rgb(250, 250, 250);
}

/*SPACING*/
.w-25 {
 width:25%!important
}
.w-50 {
 width:50%!important
}
.w-75 {
 width:75%!important
}
.w-100 {
 width:100%!important
}
.w-auto {
 width:auto!important
}
.h-25 {
 height:25%!important
}
.h-50 {
 height:50%!important
}
.h-75 {
 height:75%!important
}
.h-100 {
 height:100%!important
}
.h-auto {
 height:auto!important
}
.mw-100 {
 max-width:100%!important
}
.mh-100 {
 max-height:100%!important
}
.m-0 {
 margin:0!important
}
.mt-0,
.my-0 {
 margin-top:0!important
}
.mr-0,
.mx-0 {
 margin-right:0!important
}
.mb-0,
.my-0 {
 margin-bottom:0!important
}
.ml-0,
.mx-0 {
 margin-left:0!important
}
.m-1 {
 margin:.25rem!important
}
.mt-1,
.my-1 {
 margin-top:.25rem!important
}
.mr-1,
.mx-1 {
 margin-right:.25rem!important
}
.mb-1,
.my-1 {
 margin-bottom:.25rem!important
}
.ml-1,
.mx-1 {
 margin-left:.25rem!important
}
.m-2 {
 margin:.5rem!important
}
.mt-2,
.my-2 {
 margin-top:.5rem!important
}
.mr-2,
.mx-2 {
 margin-right:.5rem!important
}
.mb-2,
.my-2 {
 margin-bottom:.5rem!important
}
.ml-2,
.mx-2 {
 margin-left:.5rem!important
}
.m-3 {
 margin:1rem!important
}
.mt-3,
.my-3 {
 margin-top:1rem!important
}
.mr-3,
.mx-3 {
 margin-right:1rem!important
}
.mb-3,
.my-3 {
 margin-bottom:1rem!important
}
.ml-3,
.mx-3 {
 margin-left:1rem!important
}
.m-4 {
 margin:1.5rem!important
}
.mt-4,
.my-4 {
 margin-top:1.5rem!important
}
.mr-4,
.mx-4 {
 margin-right:1.5rem!important
}
.mb-4,
.my-4 {
 margin-bottom:1.5rem!important
}
.ml-4,
.mx-4 {
 margin-left:1.5rem!important
}
.m-5 {
 margin:3rem!important
}
.mt-5,
.my-5 {
 margin-top:3rem!important
}
.mr-5,
.mx-5 {
 margin-right:3rem!important
}
.mb-5,
.my-5 {
 margin-bottom:3rem!important
}
.ml-5,
.mx-5 {
 margin-left:3rem!important
}
.m-6 {
 margin:4.5rem!important
}
.mt-6,
.my-6 {
 margin-top:4.5rem!important
}
.mr-6,
.mx-6 {
 margin-right:4.5rem!important
}
.mb-6,
.my-6 {
 margin-bottom:4.5rem!important
}
.ml-6,
.mx-6 {
 margin-left:4.5rem!important
}
.m-7 {
 margin:6rem!important
}
.mt-7,
.my-7 {
 margin-top:6rem!important
}
.mr-7,
.mx-7 {
 margin-right:6rem!important
}
.mb-7,
.my-7 {
 margin-bottom:6rem!important
}
.ml-7,
.mx-7 {
 margin-left:6rem!important
}
.m-8 {
 margin:7.5rem!important
}
.mt-8,
.my-8 {
 margin-top:7.5rem!important
}
.mr-8,
.mx-8 {
 margin-right:7.5rem!important
}
.mb-8,
.my-8 {
 margin-bottom:7.5rem!important
}
.ml-8,
.mx-8 {
 margin-left:7.5rem!important
}
.m-9 {
 margin:9rem!important
}
.mt-9,
.my-9 {
 margin-top:9rem!important
}
.mr-9,
.mx-9 {
 margin-right:9rem!important
}
.mb-9,
.my-9 {
 margin-bottom:9rem!important
}
.ml-9,
.mx-9 {
 margin-left:9rem!important
}
.m-10 {
 margin:10.5rem!important
}
.mt-10,
.my-10 {
 margin-top:10.5rem!important
}
.mr-10,
.mx-10 {
 margin-right:10.5rem!important
}
.mb-10,
.my-10 {
 margin-bottom:10.5rem!important
}
.ml-10,
.mx-10 {
 margin-left:10.5rem!important
}
.m-11 {
 margin:12rem!important
}
.mt-11,
.my-11 {
 margin-top:12rem!important
}
.mr-11,
.mx-11 {
 margin-right:12rem!important
}
.mb-11,
.my-11 {
 margin-bottom:12rem!important
}
.ml-11,
.mx-11 {
 margin-left:12rem!important
}
.m-12 {
 margin:13.5rem!important
}
.mt-12,
.my-12 {
 margin-top:13.5rem!important
}
.mr-12,
.mx-12 {
 margin-right:13.5rem!important
}
.mb-12,
.my-12 {
 margin-bottom:13.5rem!important
}
.ml-12,
.mx-12 {
 margin-left:13.5rem!important
}
.p-0 {
 padding:0!important
}
.pt-0,
.py-0 {
 padding-top:0!important
}
.pr-0,
.px-0 {
 padding-right:0!important
}
.pb-0,
.py-0 {
 padding-bottom:0!important
}
.pl-0,
.px-0 {
 padding-left:0!important
}
.p-1 {
 padding:.25rem!important
}
.pt-1,
.py-1 {
 padding-top:.25rem!important
}
.pr-1,
.px-1 {
 padding-right:.25rem!important
}
.pb-1,
.py-1 {
 padding-bottom:.25rem!important
}
.pl-1,
.px-1 {
 padding-left:.25rem!important
}
.p-2 {
 padding:.5rem!important
}
.pt-2,
.py-2 {
 padding-top:.5rem!important
}
.pr-2,
.px-2 {
 padding-right:.5rem!important
}
.pb-2,
.py-2 {
 padding-bottom:.5rem!important
}
.pl-2,
.px-2 {
 padding-left:.5rem!important
}
.p-3 {
 padding:1rem!important
}
.pt-3,
.py-3 {
 padding-top:1rem!important
}
.pr-3,
.px-3 {
 padding-right:1rem!important
}
.pb-3,
.py-3 {
 padding-bottom:1rem!important
}
.pl-3,
.px-3 {
 padding-left:1rem!important
}
.p-4 {
 padding:1.5rem!important
}
.pt-4,
.py-4 {
 padding-top:1.5rem!important
}
.pr-4,
.px-4 {
 padding-right:1.5rem!important
}
.pb-4,
.py-4 {
 padding-bottom:1.5rem!important
}
.pl-4,
.px-4 {
 padding-left:1.5rem!important
}
.p-5 {
 padding:3rem!important
}
.pt-5,
.py-5 {
 padding-top:3rem!important
}
.pr-5,
.px-5 {
 padding-right:3rem!important
}
.pb-5,
.py-5 {
 padding-bottom:3rem!important
}
.pl-5,
.px-5 {
 padding-left:3rem!important
}
.p-6 {
 padding:4.5rem!important
}
.pt-6,
.py-6 {
 padding-top:4.5rem!important
}
.pr-6,
.px-6 {
 padding-right:4.5rem!important
}
.pb-6,
.py-6 {
 padding-bottom:4.5rem!important
}
.pl-6,
.px-6 {
 padding-left:4.5rem!important
}
.p-7 {
 padding:6rem!important
}
.pt-7,
.py-7 {
 padding-top:6rem!important
}
.pr-7,
.px-7 {
 padding-right:6rem!important
}
.pb-7,
.py-7 {
 padding-bottom:6rem!important
}
.pl-7,
.px-7 {
 padding-left:6rem!important
}
.p-8 {
 padding:7.5rem!important
}
.pt-8,
.py-8 {
 padding-top:7.5rem!important
}
.pr-8,
.px-8 {
 padding-right:7.5rem!important
}
.pb-8,
.py-8 {
 padding-bottom:7.5rem!important
}
.pl-8,
.px-8 {
 padding-left:7.5rem!important
}
.p-9 {
 padding:9rem!important
}
.pt-9,
.py-9 {
 padding-top:9rem!important
}
.pr-9,
.px-9 {
 padding-right:9rem!important
}
.pb-9,
.py-9 {
 padding-bottom:9rem!important
}
.pl-9,
.px-9 {
 padding-left:9rem!important
}
.p-10 {
 padding:10.5rem!important
}
.pt-10,
.py-10 {
 padding-top:10.5rem!important
}
.pr-10,
.px-10 {
 padding-right:10.5rem!important
}
.pb-10,
.py-10 {
 padding-bottom:10.5rem!important
}
.pl-10,
.px-10 {
 padding-left:10.5rem!important
}
.p-11 {
 padding:12rem!important
}
.pt-11,
.py-11 {
 padding-top:12rem!important
}
.pr-11,
.px-11 {
 padding-right:12rem!important
}
.pb-11,
.py-11 {
 padding-bottom:12rem!important
}
.pl-11,
.px-11 {
 padding-left:12rem!important
}
.p-12 {
 padding:13.5rem!important
}
.pt-12,
.py-12 {
 padding-top:13.5rem!important
}
.pr-12,
.px-12 {
 padding-right:13.5rem!important
}
.pb-12,
.py-12 {
 padding-bottom:13.5rem!important
}
.pl-12,
.px-12 {
 padding-left:13.5rem!important
}
.m-auto {
 margin:auto!important
}
.mt-auto,
.my-auto {
 margin-top:auto!important
}
.mr-auto,
.mx-auto {
 margin-right:auto!important
}
.mb-auto,
.my-auto {
 margin-bottom:auto!important
}
.ml-auto,
.mx-auto {
 margin-left:auto!important
}
@media(min-width:576px) {
 .m-sm-0 {
  margin:0!important
 }
 .mt-sm-0,
 .my-sm-0 {
  margin-top:0!important
 }
 .mr-sm-0,
 .mx-sm-0 {
  margin-right:0!important
 }
 .mb-sm-0,
 .my-sm-0 {
  margin-bottom:0!important
 }
 .ml-sm-0,
 .mx-sm-0 {
  margin-left:0!important
 }
 .m-sm-1 {
  margin:.25rem!important
 }
 .mt-sm-1,
 .my-sm-1 {
  margin-top:.25rem!important
 }
 .mr-sm-1,
 .mx-sm-1 {
  margin-right:.25rem!important
 }
 .mb-sm-1,
 .my-sm-1 {
  margin-bottom:.25rem!important
 }
 .ml-sm-1,
 .mx-sm-1 {
  margin-left:.25rem!important
 }
 .m-sm-2 {
  margin:.5rem!important
 }
 .mt-sm-2,
 .my-sm-2 {
  margin-top:.5rem!important
 }
 .mr-sm-2,
 .mx-sm-2 {
  margin-right:.5rem!important
 }
 .mb-sm-2,
 .my-sm-2 {
  margin-bottom:.5rem!important
 }
 .ml-sm-2,
 .mx-sm-2 {
  margin-left:.5rem!important
 }
 .m-sm-3 {
  margin:1rem!important
 }
 .mt-sm-3,
 .my-sm-3 {
  margin-top:1rem!important
 }
 .mr-sm-3,
 .mx-sm-3 {
  margin-right:1rem!important
 }
 .mb-sm-3,
 .my-sm-3 {
  margin-bottom:1rem!important
 }
 .ml-sm-3,
 .mx-sm-3 {
  margin-left:1rem!important
 }
 .m-sm-4 {
  margin:1.5rem!important
 }
 .mt-sm-4,
 .my-sm-4 {
  margin-top:1.5rem!important
 }
 .mr-sm-4,
 .mx-sm-4 {
  margin-right:1.5rem!important
 }
 .mb-sm-4,
 .my-sm-4 {
  margin-bottom:1.5rem!important
 }
 .ml-sm-4,
 .mx-sm-4 {
  margin-left:1.5rem!important
 }
 .m-sm-5 {
  margin:3rem!important
 }
 .mt-sm-5,
 .my-sm-5 {
  margin-top:3rem!important
 }
 .mr-sm-5,
 .mx-sm-5 {
  margin-right:3rem!important
 }
 .mb-sm-5,
 .my-sm-5 {
  margin-bottom:3rem!important
 }
 .ml-sm-5,
 .mx-sm-5 {
  margin-left:3rem!important
 }
 .m-sm-6 {
  margin:4.5rem!important
 }
 .mt-sm-6,
 .my-sm-6 {
  margin-top:4.5rem!important
 }
 .mr-sm-6,
 .mx-sm-6 {
  margin-right:4.5rem!important
 }
 .mb-sm-6,
 .my-sm-6 {
  margin-bottom:4.5rem!important
 }
 .ml-sm-6,
 .mx-sm-6 {
  margin-left:4.5rem!important
 }
 .m-sm-7 {
  margin:6rem!important
 }
 .mt-sm-7,
 .my-sm-7 {
  margin-top:6rem!important
 }
 .mr-sm-7,
 .mx-sm-7 {
  margin-right:6rem!important
 }
 .mb-sm-7,
 .my-sm-7 {
  margin-bottom:6rem!important
 }
 .ml-sm-7,
 .mx-sm-7 {
  margin-left:6rem!important
 }
 .m-sm-8 {
  margin:7.5rem!important
 }
 .mt-sm-8,
 .my-sm-8 {
  margin-top:7.5rem!important
 }
 .mr-sm-8,
 .mx-sm-8 {
  margin-right:7.5rem!important
 }
 .mb-sm-8,
 .my-sm-8 {
  margin-bottom:7.5rem!important
 }
 .ml-sm-8,
 .mx-sm-8 {
  margin-left:7.5rem!important
 }
 .m-sm-9 {
  margin:9rem!important
 }
 .mt-sm-9,
 .my-sm-9 {
  margin-top:9rem!important
 }
 .mr-sm-9,
 .mx-sm-9 {
  margin-right:9rem!important
 }
 .mb-sm-9,
 .my-sm-9 {
  margin-bottom:9rem!important
 }
 .ml-sm-9,
 .mx-sm-9 {
  margin-left:9rem!important
 }
 .m-sm-10 {
  margin:10.5rem!important
 }
 .mt-sm-10,
 .my-sm-10 {
  margin-top:10.5rem!important
 }
 .mr-sm-10,
 .mx-sm-10 {
  margin-right:10.5rem!important
 }
 .mb-sm-10,
 .my-sm-10 {
  margin-bottom:10.5rem!important
 }
 .ml-sm-10,
 .mx-sm-10 {
  margin-left:10.5rem!important
 }
 .m-sm-11 {
  margin:12rem!important
 }
 .mt-sm-11,
 .my-sm-11 {
  margin-top:12rem!important
 }
 .mr-sm-11,
 .mx-sm-11 {
  margin-right:12rem!important
 }
 .mb-sm-11,
 .my-sm-11 {
  margin-bottom:12rem!important
 }
 .ml-sm-11,
 .mx-sm-11 {
  margin-left:12rem!important
 }
 .m-sm-12 {
  margin:13.5rem!important
 }
 .mt-sm-12,
 .my-sm-12 {
  margin-top:13.5rem!important
 }
 .mr-sm-12,
 .mx-sm-12 {
  margin-right:13.5rem!important
 }
 .mb-sm-12,
 .my-sm-12 {
  margin-bottom:13.5rem!important
 }
 .ml-sm-12,
 .mx-sm-12 {
  margin-left:13.5rem!important
 }
 .p-sm-0 {
  padding:0!important
 }
 .pt-sm-0,
 .py-sm-0 {
  padding-top:0!important
 }
 .pr-sm-0,
 .px-sm-0 {
  padding-right:0!important
 }
 .pb-sm-0,
 .py-sm-0 {
  padding-bottom:0!important
 }
 .pl-sm-0,
 .px-sm-0 {
  padding-left:0!important
 }
 .p-sm-1 {
  padding:.25rem!important
 }
 .pt-sm-1,
 .py-sm-1 {
  padding-top:.25rem!important
 }
 .pr-sm-1,
 .px-sm-1 {
  padding-right:.25rem!important
 }
 .pb-sm-1,
 .py-sm-1 {
  padding-bottom:.25rem!important
 }
 .pl-sm-1,
 .px-sm-1 {
  padding-left:.25rem!important
 }
 .p-sm-2 {
  padding:.5rem!important
 }
 .pt-sm-2,
 .py-sm-2 {
  padding-top:.5rem!important
 }
 .pr-sm-2,
 .px-sm-2 {
  padding-right:.5rem!important
 }
 .pb-sm-2,
 .py-sm-2 {
  padding-bottom:.5rem!important
 }
 .pl-sm-2,
 .px-sm-2 {
  padding-left:.5rem!important
 }
 .p-sm-3 {
  padding:1rem!important
 }
 .pt-sm-3,
 .py-sm-3 {
  padding-top:1rem!important
 }
 .pr-sm-3,
 .px-sm-3 {
  padding-right:1rem!important
 }
 .pb-sm-3,
 .py-sm-3 {
  padding-bottom:1rem!important
 }
 .pl-sm-3,
 .px-sm-3 {
  padding-left:1rem!important
 }
 .p-sm-4 {
  padding:1.5rem!important
 }
 .pt-sm-4,
 .py-sm-4 {
  padding-top:1.5rem!important
 }
 .pr-sm-4,
 .px-sm-4 {
  padding-right:1.5rem!important
 }
 .pb-sm-4,
 .py-sm-4 {
  padding-bottom:1.5rem!important
 }
 .pl-sm-4,
 .px-sm-4 {
  padding-left:1.5rem!important
 }
 .p-sm-5 {
  padding:3rem!important
 }
 .pt-sm-5,
 .py-sm-5 {
  padding-top:3rem!important
 }
 .pr-sm-5,
 .px-sm-5 {
  padding-right:3rem!important
 }
 .pb-sm-5,
 .py-sm-5 {
  padding-bottom:3rem!important
 }
 .pl-sm-5,
 .px-sm-5 {
  padding-left:3rem!important
 }
 .p-sm-6 {
  padding:4.5rem!important
 }
 .pt-sm-6,
 .py-sm-6 {
  padding-top:4.5rem!important
 }
 .pr-sm-6,
 .px-sm-6 {
  padding-right:4.5rem!important
 }
 .pb-sm-6,
 .py-sm-6 {
  padding-bottom:4.5rem!important
 }
 .pl-sm-6,
 .px-sm-6 {
  padding-left:4.5rem!important
 }
 .p-sm-7 {
  padding:6rem!important
 }
 .pt-sm-7,
 .py-sm-7 {
  padding-top:6rem!important
 }
 .pr-sm-7,
 .px-sm-7 {
  padding-right:6rem!important
 }
 .pb-sm-7,
 .py-sm-7 {
  padding-bottom:6rem!important
 }
 .pl-sm-7,
 .px-sm-7 {
  padding-left:6rem!important
 }
 .p-sm-8 {
  padding:7.5rem!important
 }
 .pt-sm-8,
 .py-sm-8 {
  padding-top:7.5rem!important
 }
 .pr-sm-8,
 .px-sm-8 {
  padding-right:7.5rem!important
 }
 .pb-sm-8,
 .py-sm-8 {
  padding-bottom:7.5rem!important
 }
 .pl-sm-8,
 .px-sm-8 {
  padding-left:7.5rem!important
 }
 .p-sm-9 {
  padding:9rem!important
 }
 .pt-sm-9,
 .py-sm-9 {
  padding-top:9rem!important
 }
 .pr-sm-9,
 .px-sm-9 {
  padding-right:9rem!important
 }
 .pb-sm-9,
 .py-sm-9 {
  padding-bottom:9rem!important
 }
 .pl-sm-9,
 .px-sm-9 {
  padding-left:9rem!important
 }
 .p-sm-10 {
  padding:10.5rem!important
 }
 .pt-sm-10,
 .py-sm-10 {
  padding-top:10.5rem!important
 }
 .pr-sm-10,
 .px-sm-10 {
  padding-right:10.5rem!important
 }
 .pb-sm-10,
 .py-sm-10 {
  padding-bottom:10.5rem!important
 }
 .pl-sm-10,
 .px-sm-10 {
  padding-left:10.5rem!important
 }
 .p-sm-11 {
  padding:12rem!important
 }
 .pt-sm-11,
 .py-sm-11 {
  padding-top:12rem!important
 }
 .pr-sm-11,
 .px-sm-11 {
  padding-right:12rem!important
 }
 .pb-sm-11,
 .py-sm-11 {
  padding-bottom:12rem!important
 }
 .pl-sm-11,
 .px-sm-11 {
  padding-left:12rem!important
 }
 .p-sm-12 {
  padding:13.5rem!important
 }
 .pt-sm-12,
 .py-sm-12 {
  padding-top:13.5rem!important
 }
 .pr-sm-12,
 .px-sm-12 {
  padding-right:13.5rem!important
 }
 .pb-sm-12,
 .py-sm-12 {
  padding-bottom:13.5rem!important
 }
 .pl-sm-12,
 .px-sm-12 {
  padding-left:13.5rem!important
 }
 .m-sm-auto {
  margin:auto!important
 }
 .mt-sm-auto,
 .my-sm-auto {
  margin-top:auto!important
 }
 .mr-sm-auto,
 .mx-sm-auto {
  margin-right:auto!important
 }
 .mb-sm-auto,
 .my-sm-auto {
  margin-bottom:auto!important
 }
 .ml-sm-auto,
 .mx-sm-auto {
  margin-left:auto!important
 }
}
@media(min-width:768px) {
 .m-md-0 {
  margin:0!important
 }
 .mt-md-0,
 .my-md-0 {
  margin-top:0!important
 }
 .mr-md-0,
 .mx-md-0 {
  margin-right:0!important
 }
 .mb-md-0,
 .my-md-0 {
  margin-bottom:0!important
 }
 .ml-md-0,
 .mx-md-0 {
  margin-left:0!important
 }
 .m-md-1 {
  margin:.25rem!important
 }
 .mt-md-1,
 .my-md-1 {
  margin-top:.25rem!important
 }
 .mr-md-1,
 .mx-md-1 {
  margin-right:.25rem!important
 }
 .mb-md-1,
 .my-md-1 {
  margin-bottom:.25rem!important
 }
 .ml-md-1,
 .mx-md-1 {
  margin-left:.25rem!important
 }
 .m-md-2 {
  margin:.5rem!important
 }
 .mt-md-2,
 .my-md-2 {
  margin-top:.5rem!important
 }
 .mr-md-2,
 .mx-md-2 {
  margin-right:.5rem!important
 }
 .mb-md-2,
 .my-md-2 {
  margin-bottom:.5rem!important
 }
 .ml-md-2,
 .mx-md-2 {
  margin-left:.5rem!important
 }
 .m-md-3 {
  margin:1rem!important
 }
 .mt-md-3,
 .my-md-3 {
  margin-top:1rem!important
 }
 .mr-md-3,
 .mx-md-3 {
  margin-right:1rem!important
 }
 .mb-md-3,
 .my-md-3 {
  margin-bottom:1rem!important
 }
 .ml-md-3,
 .mx-md-3 {
  margin-left:1rem!important
 }
 .m-md-4 {
  margin:1.5rem!important
 }
 .mt-md-4,
 .my-md-4 {
  margin-top:1.5rem!important
 }
 .mr-md-4,
 .mx-md-4 {
  margin-right:1.5rem!important
 }
 .mb-md-4,
 .my-md-4 {
  margin-bottom:1.5rem!important
 }
 .ml-md-4,
 .mx-md-4 {
  margin-left:1.5rem!important
 }
 .m-md-5 {
  margin:3rem!important
 }
 .mt-md-5,
 .my-md-5 {
  margin-top:3rem!important
 }
 .mr-md-5,
 .mx-md-5 {
  margin-right:3rem!important
 }
 .mb-md-5,
 .my-md-5 {
  margin-bottom:3rem!important
 }
 .ml-md-5,
 .mx-md-5 {
  margin-left:3rem!important
 }
 .m-md-6 {
  margin:4.5rem!important
 }
 .mt-md-6,
 .my-md-6 {
  margin-top:4.5rem!important
 }
 .mr-md-6,
 .mx-md-6 {
  margin-right:4.5rem!important
 }
 .mb-md-6,
 .my-md-6 {
  margin-bottom:4.5rem!important
 }
 .ml-md-6,
 .mx-md-6 {
  margin-left:4.5rem!important
 }
 .m-md-7 {
  margin:6rem!important
 }
 .mt-md-7,
 .my-md-7 {
  margin-top:6rem!important
 }
 .mr-md-7,
 .mx-md-7 {
  margin-right:6rem!important
 }
 .mb-md-7,
 .my-md-7 {
  margin-bottom:6rem!important
 }
 .ml-md-7,
 .mx-md-7 {
  margin-left:6rem!important
 }
 .m-md-8 {
  margin:7.5rem!important
 }
 .mt-md-8,
 .my-md-8 {
  margin-top:7.5rem!important
 }
 .mr-md-8,
 .mx-md-8 {
  margin-right:7.5rem!important
 }
 .mb-md-8,
 .my-md-8 {
  margin-bottom:7.5rem!important
 }
 .ml-md-8,
 .mx-md-8 {
  margin-left:7.5rem!important
 }
 .m-md-9 {
  margin:9rem!important
 }
 .mt-md-9,
 .my-md-9 {
  margin-top:9rem!important
 }
 .mr-md-9,
 .mx-md-9 {
  margin-right:9rem!important
 }
 .mb-md-9,
 .my-md-9 {
  margin-bottom:9rem!important
 }
 .ml-md-9,
 .mx-md-9 {
  margin-left:9rem!important
 }
 .m-md-10 {
  margin:10.5rem!important
 }
 .mt-md-10,
 .my-md-10 {
  margin-top:10.5rem!important
 }
 .mr-md-10,
 .mx-md-10 {
  margin-right:10.5rem!important
 }
 .mb-md-10,
 .my-md-10 {
  margin-bottom:10.5rem!important
 }
 .ml-md-10,
 .mx-md-10 {
  margin-left:10.5rem!important
 }
 .m-md-11 {
  margin:12rem!important
 }
 .mt-md-11,
 .my-md-11 {
  margin-top:12rem!important
 }
 .mr-md-11,
 .mx-md-11 {
  margin-right:12rem!important
 }
 .mb-md-11,
 .my-md-11 {
  margin-bottom:12rem!important
 }
 .ml-md-11,
 .mx-md-11 {
  margin-left:12rem!important
 }
 .m-md-12 {
  margin:13.5rem!important
 }
 .mt-md-12,
 .my-md-12 {
  margin-top:13.5rem!important
 }
 .mr-md-12,
 .mx-md-12 {
  margin-right:13.5rem!important
 }
 .mb-md-12,
 .my-md-12 {
  margin-bottom:13.5rem!important
 }
 .ml-md-12,
 .mx-md-12 {
  margin-left:13.5rem!important
 }
 .p-md-0 {
  padding:0!important
 }
 .pt-md-0,
 .py-md-0 {
  padding-top:0!important
 }
 .pr-md-0,
 .px-md-0 {
  padding-right:0!important
 }
 .pb-md-0,
 .py-md-0 {
  padding-bottom:0!important
 }
 .pl-md-0,
 .px-md-0 {
  padding-left:0!important
 }
 .p-md-1 {
  padding:.25rem!important
 }
 .pt-md-1,
 .py-md-1 {
  padding-top:.25rem!important
 }
 .pr-md-1,
 .px-md-1 {
  padding-right:.25rem!important
 }
 .pb-md-1,
 .py-md-1 {
  padding-bottom:.25rem!important
 }
 .pl-md-1,
 .px-md-1 {
  padding-left:.25rem!important
 }
 .p-md-2 {
  padding:.5rem!important
 }
 .pt-md-2,
 .py-md-2 {
  padding-top:.5rem!important
 }
 .pr-md-2,
 .px-md-2 {
  padding-right:.5rem!important
 }
 .pb-md-2,
 .py-md-2 {
  padding-bottom:.5rem!important
 }
 .pl-md-2,
 .px-md-2 {
  padding-left:.5rem!important
 }
 .p-md-3 {
  padding:1rem!important
 }
 .pt-md-3,
 .py-md-3 {
  padding-top:1rem!important
 }
 .pr-md-3,
 .px-md-3 {
  padding-right:1rem!important
 }
 .pb-md-3,
 .py-md-3 {
  padding-bottom:1rem!important
 }
 .pl-md-3,
 .px-md-3 {
  padding-left:1rem!important
 }
 .p-md-4 {
  padding:1.5rem!important
 }
 .pt-md-4,
 .py-md-4 {
  padding-top:1.5rem!important
 }
 .pr-md-4,
 .px-md-4 {
  padding-right:1.5rem!important
 }
 .pb-md-4,
 .py-md-4 {
  padding-bottom:1.5rem!important
 }
 .pl-md-4,
 .px-md-4 {
  padding-left:1.5rem!important
 }
 .p-md-5 {
  padding:3rem!important
 }
 .pt-md-5,
 .py-md-5 {
  padding-top:3rem!important
 }
 .pr-md-5,
 .px-md-5 {
  padding-right:3rem!important
 }
 .pb-md-5,
 .py-md-5 {
  padding-bottom:3rem!important
 }
 .pl-md-5,
 .px-md-5 {
  padding-left:3rem!important
 }
 .p-md-6 {
  padding:4.5rem!important
 }
 .pt-md-6,
 .py-md-6 {
  padding-top:4.5rem!important
 }
 .pr-md-6,
 .px-md-6 {
  padding-right:4.5rem!important
 }
 .pb-md-6,
 .py-md-6 {
  padding-bottom:4.5rem!important
 }
 .pl-md-6,
 .px-md-6 {
  padding-left:4.5rem!important
 }
 .p-md-7 {
  padding:6rem!important
 }
 .pt-md-7,
 .py-md-7 {
  padding-top:6rem!important
 }
 .pr-md-7,
 .px-md-7 {
  padding-right:6rem!important
 }
 .pb-md-7,
 .py-md-7 {
  padding-bottom:6rem!important
 }
 .pl-md-7,
 .px-md-7 {
  padding-left:6rem!important
 }
 .p-md-8 {
  padding:7.5rem!important
 }
 .pt-md-8,
 .py-md-8 {
  padding-top:7.5rem!important
 }
 .pr-md-8,
 .px-md-8 {
  padding-right:7.5rem!important
 }
 .pb-md-8,
 .py-md-8 {
  padding-bottom:7.5rem!important
 }
 .pl-md-8,
 .px-md-8 {
  padding-left:7.5rem!important
 }
 .p-md-9 {
  padding:9rem!important
 }
 .pt-md-9,
 .py-md-9 {
  padding-top:9rem!important
 }
 .pr-md-9,
 .px-md-9 {
  padding-right:9rem!important
 }
 .pb-md-9,
 .py-md-9 {
  padding-bottom:9rem!important
 }
 .pl-md-9,
 .px-md-9 {
  padding-left:9rem!important
 }
 .p-md-10 {
  padding:10.5rem!important
 }
 .pt-md-10,
 .py-md-10 {
  padding-top:10.5rem!important
 }
 .pr-md-10,
 .px-md-10 {
  padding-right:10.5rem!important
 }
 .pb-md-10,
 .py-md-10 {
  padding-bottom:10.5rem!important
 }
 .pl-md-10,
 .px-md-10 {
  padding-left:10.5rem!important
 }
 .p-md-11 {
  padding:12rem!important
 }
 .pt-md-11,
 .py-md-11 {
  padding-top:12rem!important
 }
 .pr-md-11,
 .px-md-11 {
  padding-right:12rem!important
 }
 .pb-md-11,
 .py-md-11 {
  padding-bottom:12rem!important
 }
 .pl-md-11,
 .px-md-11 {
  padding-left:12rem!important
 }
 .p-md-12 {
  padding:13.5rem!important
 }
 .pt-md-12,
 .py-md-12 {
  padding-top:13.5rem!important
 }
 .pr-md-12,
 .px-md-12 {
  padding-right:13.5rem!important
 }
 .pb-md-12,
 .py-md-12 {
  padding-bottom:13.5rem!important
 }
 .pl-md-12,
 .px-md-12 {
  padding-left:13.5rem!important
 }
 .m-md-auto {
  margin:auto!important
 }
 .mt-md-auto,
 .my-md-auto {
  margin-top:auto!important
 }
 .mr-md-auto,
 .mx-md-auto {
  margin-right:auto!important
 }
 .mb-md-auto,
 .my-md-auto {
  margin-bottom:auto!important
 }
 .ml-md-auto,
 .mx-md-auto {
  margin-left:auto!important
 }
}
@media(min-width:992px) {
 .m-lg-0 {
  margin:0!important
 }
 .mt-lg-0,
 .my-lg-0 {
  margin-top:0!important
 }
 .mr-lg-0,
 .mx-lg-0 {
  margin-right:0!important
 }
 .mb-lg-0,
 .my-lg-0 {
  margin-bottom:0!important
 }
 .ml-lg-0,
 .mx-lg-0 {
  margin-left:0!important
 }
 .m-lg-1 {
  margin:.25rem!important
 }
 .mt-lg-1,
 .my-lg-1 {
  margin-top:.25rem!important
 }
 .mr-lg-1,
 .mx-lg-1 {
  margin-right:.25rem!important
 }
 .mb-lg-1,
 .my-lg-1 {
  margin-bottom:.25rem!important
 }
 .ml-lg-1,
 .mx-lg-1 {
  margin-left:.25rem!important
 }
 .m-lg-2 {
  margin:.5rem!important
 }
 .mt-lg-2,
 .my-lg-2 {
  margin-top:.5rem!important
 }
 .mr-lg-2,
 .mx-lg-2 {
  margin-right:.5rem!important
 }
 .mb-lg-2,
 .my-lg-2 {
  margin-bottom:.5rem!important
 }
 .ml-lg-2,
 .mx-lg-2 {
  margin-left:.5rem!important
 }
 .m-lg-3 {
  margin:1rem!important
 }
 .mt-lg-3,
 .my-lg-3 {
  margin-top:1rem!important
 }
 .mr-lg-3,
 .mx-lg-3 {
  margin-right:1rem!important
 }
 .mb-lg-3,
 .my-lg-3 {
  margin-bottom:1rem!important
 }
 .ml-lg-3,
 .mx-lg-3 {
  margin-left:1rem!important
 }
 .m-lg-4 {
  margin:1.5rem!important
 }
 .mt-lg-4,
 .my-lg-4 {
  margin-top:1.5rem!important
 }
 .mr-lg-4,
 .mx-lg-4 {
  margin-right:1.5rem!important
 }
 .mb-lg-4,
 .my-lg-4 {
  margin-bottom:1.5rem!important
 }
 .ml-lg-4,
 .mx-lg-4 {
  margin-left:1.5rem!important
 }
 .m-lg-5 {
  margin:3rem!important
 }
 .mt-lg-5,
 .my-lg-5 {
  margin-top:3rem!important
 }
 .mr-lg-5,
 .mx-lg-5 {
  margin-right:3rem!important
 }
 .mb-lg-5,
 .my-lg-5 {
  margin-bottom:3rem!important
 }
 .ml-lg-5,
 .mx-lg-5 {
  margin-left:3rem!important
 }
 .m-lg-6 {
  margin:4.5rem!important
 }
 .mt-lg-6,
 .my-lg-6 {
  margin-top:4.5rem!important
 }
 .mr-lg-6,
 .mx-lg-6 {
  margin-right:4.5rem!important
 }
 .mb-lg-6,
 .my-lg-6 {
  margin-bottom:4.5rem!important
 }
 .ml-lg-6,
 .mx-lg-6 {
  margin-left:4.5rem!important
 }
 .m-lg-7 {
  margin:6rem!important
 }
 .mt-lg-7,
 .my-lg-7 {
  margin-top:6rem!important
 }
 .mr-lg-7,
 .mx-lg-7 {
  margin-right:6rem!important
 }
 .mb-lg-7,
 .my-lg-7 {
  margin-bottom:6rem!important
 }
 .ml-lg-7,
 .mx-lg-7 {
  margin-left:6rem!important
 }
 .m-lg-8 {
  margin:7.5rem!important
 }
 .mt-lg-8,
 .my-lg-8 {
  margin-top:7.5rem!important
 }
 .mr-lg-8,
 .mx-lg-8 {
  margin-right:7.5rem!important
 }
 .mb-lg-8,
 .my-lg-8 {
  margin-bottom:7.5rem!important
 }
 .ml-lg-8,
 .mx-lg-8 {
  margin-left:7.5rem!important
 }
 .m-lg-9 {
  margin:9rem!important
 }
 .mt-lg-9,
 .my-lg-9 {
  margin-top:9rem!important;
 }
 .mr-lg-9,
 .mx-lg-9 {
  margin-right:9rem!important
 }
 .mb-lg-9,
 .my-lg-9 {
  margin-bottom:9rem!important;
 }
 .ml-lg-9,
 .mx-lg-9 {
  margin-left:9rem!important
 }
 .m-lg-10 {
  margin:10.5rem!important
 }
 .mt-lg-10,
 .my-lg-10 {
  margin-top:10.5rem!important
 }
 .mr-lg-10,
 .mx-lg-10 {
  margin-right:10.5rem!important
 }
 .mb-lg-10,
 .my-lg-10 {
  margin-bottom:10.5rem!important
 }
 .ml-lg-10,
 .mx-lg-10 {
  margin-left:10.5rem!important
 }
 .m-lg-11 {
  margin:12rem!important
 }
 .mt-lg-11,
 .my-lg-11 {
  margin-top:12rem!important
 }
 .mr-lg-11,
 .mx-lg-11 {
  margin-right:12rem!important
 }
 .mb-lg-11,
 .my-lg-11 {
  margin-bottom:12rem!important
 }
 .ml-lg-11,
 .mx-lg-11 {
  margin-left:12rem!important
 }
 .m-lg-12 {
  margin:13.5rem!important
 }
 .mt-lg-12,
 .my-lg-12 {
  margin-top:13.5rem!important
 }
 .mr-lg-12,
 .mx-lg-12 {
  margin-right:13.5rem!important
 }
 .mb-lg-12,
 .my-lg-12 {
  margin-bottom:13.5rem!important
 }
 .ml-lg-12,
 .mx-lg-12 {
  margin-left:13.5rem!important
 }
 .p-lg-0 {
  padding:0!important
 }
 .pt-lg-0,
 .py-lg-0 {
  padding-top:0!important
 }
 .pr-lg-0,
 .px-lg-0 {
  padding-right:0!important
 }
 .pb-lg-0,
 .py-lg-0 {
  padding-bottom:0!important
 }
 .pl-lg-0,
 .px-lg-0 {
  padding-left:0!important
 }
 .p-lg-1 {
  padding:.25rem!important
 }
 .pt-lg-1,
 .py-lg-1 {
  padding-top:.25rem!important
 }
 .pr-lg-1,
 .px-lg-1 {
  padding-right:.25rem!important
 }
 .pb-lg-1,
 .py-lg-1 {
  padding-bottom:.25rem!important
 }
 .pl-lg-1,
 .px-lg-1 {
  padding-left:.25rem!important
 }
 .p-lg-2 {
  padding:.5rem!important
 }
 .pt-lg-2,
 .py-lg-2 {
  padding-top:.5rem!important
 }
 .pr-lg-2,
 .px-lg-2 {
  padding-right:.5rem!important
 }
 .pb-lg-2,
 .py-lg-2 {
  padding-bottom:.5rem!important
 }
 .pl-lg-2,
 .px-lg-2 {
  padding-left:.5rem!important
 }
 .p-lg-3 {
  padding:1rem!important
 }
 .pt-lg-3,
 .py-lg-3 {
  padding-top:1rem!important
 }
 .pr-lg-3,
 .px-lg-3 {
  padding-right:1rem!important
 }
 .pb-lg-3,
 .py-lg-3 {
  padding-bottom:1rem!important
 }
 .pl-lg-3,
 .px-lg-3 {
  padding-left:1rem!important
 }
 .p-lg-4 {
  padding:1.5rem!important
 }
 .pt-lg-4,
 .py-lg-4 {
  padding-top:1.5rem!important
 }
 .pr-lg-4,
 .px-lg-4 {
  padding-right:1.5rem!important
 }
 .pb-lg-4,
 .py-lg-4 {
  padding-bottom:1.5rem!important
 }
 .pl-lg-4,
 .px-lg-4 {
  padding-left:1.5rem!important
 }
 .p-lg-5 {
  padding:3rem!important
 }
 .pt-lg-5,
 .py-lg-5 {
  padding-top:3rem!important
 }
 .pr-lg-5,
 .px-lg-5 {
  padding-right:3rem!important
 }
 .pb-lg-5,
 .py-lg-5 {
  padding-bottom:3rem!important
 }
 .pl-lg-5,
 .px-lg-5 {
  padding-left:3rem!important
 }
 .p-lg-6 {
  padding:4.5rem!important
 }
 .pt-lg-6,
 .py-lg-6 {
  padding-top:4.5rem!important
 }
 .pr-lg-6,
 .px-lg-6 {
  padding-right:4.5rem!important
 }
 .pb-lg-6,
 .py-lg-6 {
  padding-bottom:4.5rem!important
 }
 .pl-lg-6,
 .px-lg-6 {
  padding-left:4.5rem!important
 }
 .p-lg-7 {
  padding:6rem!important
 }
 .pt-lg-7,
 .py-lg-7 {
  padding-top:6rem!important
 }
 .pr-lg-7,
 .px-lg-7 {
  padding-right:6rem!important
 }
 .pb-lg-7,
 .py-lg-7 {
  padding-bottom:6rem!important
 }
 .pl-lg-7,
 .px-lg-7 {
  padding-left:6rem!important
 }
 .p-lg-8 {
  padding:7.5rem!important
 }
 .pt-lg-8,
 .py-lg-8 {
  padding-top:7.5rem!important
 }
 .pr-lg-8,
 .px-lg-8 {
  padding-right:7.5rem!important
 }
 .pb-lg-8,
 .py-lg-8 {
  padding-bottom:7.5rem!important
 }
 .pl-lg-8,
 .px-lg-8 {
  padding-left:7.5rem!important
 }
 .p-lg-9 {
  padding:9rem!important
 }
 .pt-lg-9,
 .py-lg-9 {
  padding-top:9rem!important
 }
 .pr-lg-9,
 .px-lg-9 {
  padding-right:9rem!important
 }
 .pb-lg-9,
 .py-lg-9 {
  padding-bottom:9rem!important
 }
 .pl-lg-9,
 .px-lg-9 {
  padding-left:9rem!important
 }
 .p-lg-10 {
  padding:10.5rem!important
 }
 .pt-lg-10,
 .py-lg-10 {
  padding-top:10.5rem!important
 }
 .pr-lg-10,
 .px-lg-10 {
  padding-right:10.5rem!important
 }
 .pb-lg-10,
 .py-lg-10 {
  padding-bottom:10.5rem!important
 }
 .pl-lg-10,
 .px-lg-10 {
  padding-left:10.5rem!important
 }
 .p-lg-11 {
  padding:12rem!important
 }
 .pt-lg-11,
 .py-lg-11 {
  padding-top:12rem!important
 }
 .pr-lg-11,
 .px-lg-11 {
  padding-right:12rem!important
 }
 .pb-lg-11,
 .py-lg-11 {
  padding-bottom:12rem!important
 }
 .pl-lg-11,
 .px-lg-11 {
  padding-left:12rem!important
 }
 .p-lg-12 {
  padding:13.5rem!important
 }
 .pt-lg-12,
 .py-lg-12 {
  padding-top:13.5rem!important
 }
 .pr-lg-12,
 .px-lg-12 {
  padding-right:13.5rem!important
 }
 .pb-lg-12,
 .py-lg-12 {
  padding-bottom:13.5rem!important
 }
 .pl-lg-12,
 .px-lg-12 {
  padding-left:13.5rem!important
 }
 .m-lg-auto {
  margin:auto!important
 }
 .mt-lg-auto,
 .my-lg-auto {
  margin-top:auto!important
 }
 .mr-lg-auto,
 .mx-lg-auto {
  margin-right:auto!important
 }
 .mb-lg-auto,
 .my-lg-auto {
  margin-bottom:auto!important
 }
 .ml-lg-auto,
 .mx-lg-auto {
  margin-left:auto!important
 }
}
@media(min-width:1200px) {
 .m-xl-0 {
  margin:0!important
 }
 .mt-xl-0,
 .my-xl-0 {
  margin-top:0!important
 }
 .mr-xl-0,
 .mx-xl-0 {
  margin-right:0!important
 }
 .mb-xl-0,
 .my-xl-0 {
  margin-bottom:0!important
 }
 .ml-xl-0,
 .mx-xl-0 {
  margin-left:0!important
 }
 .m-xl-1 {
  margin:.25rem!important
 }
 .mt-xl-1,
 .my-xl-1 {
  margin-top:.25rem!important
 }
 .mr-xl-1,
 .mx-xl-1 {
  margin-right:.25rem!important
 }
 .mb-xl-1,
 .my-xl-1 {
  margin-bottom:.25rem!important
 }
 .ml-xl-1,
 .mx-xl-1 {
  margin-left:.25rem!important
 }
 .m-xl-2 {
  margin:.5rem!important
 }
 .mt-xl-2,
 .my-xl-2 {
  margin-top:.5rem!important
 }
 .mr-xl-2,
 .mx-xl-2 {
  margin-right:.5rem!important
 }
 .mb-xl-2,
 .my-xl-2 {
  margin-bottom:.5rem!important
 }
 .ml-xl-2,
 .mx-xl-2 {
  margin-left:.5rem!important
 }
 .m-xl-3 {
  margin:1rem!important
 }
 .mt-xl-3,
 .my-xl-3 {
  margin-top:1rem!important
 }
 .mr-xl-3,
 .mx-xl-3 {
  margin-right:1rem!important
 }
 .mb-xl-3,
 .my-xl-3 {
  margin-bottom:1rem!important
 }
 .ml-xl-3,
 .mx-xl-3 {
  margin-left:1rem!important
 }
 .m-xl-4 {
  margin:1.5rem!important
 }
 .mt-xl-4,
 .my-xl-4 {
  margin-top:1.5rem!important
 }
 .mr-xl-4,
 .mx-xl-4 {
  margin-right:1.5rem!important
 }
 .mb-xl-4,
 .my-xl-4 {
  margin-bottom:1.5rem!important
 }
 .ml-xl-4,
 .mx-xl-4 {
  margin-left:1.5rem!important
 }
 .m-xl-5 {
  margin:3rem!important
 }
 .mt-xl-5,
 .my-xl-5 {
  margin-top:3rem!important
 }
 .mr-xl-5,
 .mx-xl-5 {
  margin-right:3rem!important
 }
 .mb-xl-5,
 .my-xl-5 {
  margin-bottom:3rem!important
 }
 .ml-xl-5,
 .mx-xl-5 {
  margin-left:3rem!important
 }
 .m-xl-6 {
  margin:4.5rem!important
 }
 .mt-xl-6,
 .my-xl-6 {
  margin-top:4.5rem!important
 }
 .mr-xl-6,
 .mx-xl-6 {
  margin-right:4.5rem!important
 }
 .mb-xl-6,
 .my-xl-6 {
  margin-bottom:4.5rem!important
 }
 .ml-xl-6,
 .mx-xl-6 {
  margin-left:4.5rem!important
 }
 .m-xl-7 {
  margin:6rem!important
 }
 .mt-xl-7,
 .my-xl-7 {
  margin-top:6rem!important
 }
 .mr-xl-7,
 .mx-xl-7 {
  margin-right:6rem!important
 }
 .mb-xl-7,
 .my-xl-7 {
  margin-bottom:6rem!important
 }
 .ml-xl-7,
 .mx-xl-7 {
  margin-left:6rem!important
 }
 .m-xl-8 {
  margin:7.5rem!important
 }
 .mt-xl-8,
 .my-xl-8 {
  margin-top:7.5rem!important
 }
 .mr-xl-8,
 .mx-xl-8 {
  margin-right:7.5rem!important
 }
 .mb-xl-8,
 .my-xl-8 {
  margin-bottom:7.5rem!important
 }
 .ml-xl-8,
 .mx-xl-8 {
  margin-left:7.5rem!important
 }
 .m-xl-9 {
  margin:9rem!important
 }
 .mt-xl-9,
 .my-xl-9 {
  margin-top:9rem!important
 }
 .mr-xl-9,
 .mx-xl-9 {
  margin-right:9rem!important
 }
 .mb-xl-9,
 .my-xl-9 {
  margin-bottom:9rem!important
 }
 .ml-xl-9,
 .mx-xl-9 {
  margin-left:9rem!important
 }
 .m-xl-10 {
  margin:10.5rem!important
 }
 .mt-xl-10,
 .my-xl-10 {
  margin-top:10.5rem!important
 }
 .mr-xl-10,
 .mx-xl-10 {
  margin-right:10.5rem!important
 }
 .mb-xl-10,
 .my-xl-10 {
  margin-bottom:10.5rem!important
 }
 .ml-xl-10,
 .mx-xl-10 {
  margin-left:10.5rem!important
 }
 .m-xl-11 {
  margin:12rem!important
 }
 .mt-xl-11,
 .my-xl-11 {
  margin-top:12rem!important
 }
 .mr-xl-11,
 .mx-xl-11 {
  margin-right:12rem!important
 }
 .mb-xl-11,
 .my-xl-11 {
  margin-bottom:12rem!important
 }
 .ml-xl-11,
 .mx-xl-11 {
  margin-left:12rem!important
 }
 .m-xl-12 {
  margin:13.5rem!important
 }
 .mt-xl-12,
 .my-xl-12 {
  margin-top:13.5rem!important
 }
 .mr-xl-12,
 .mx-xl-12 {
  margin-right:13.5rem!important
 }
 .mb-xl-12,
 .my-xl-12 {
  margin-bottom:13.5rem!important
 }
 .ml-xl-12,
 .mx-xl-12 {
  margin-left:13.5rem!important
 }
 .p-xl-0 {
  padding:0!important
 }
 .pt-xl-0,
 .py-xl-0 {
  padding-top:0!important
 }
 .pr-xl-0,
 .px-xl-0 {
  padding-right:0!important
 }
 .pb-xl-0,
 .py-xl-0 {
  padding-bottom:0!important
 }
 .pl-xl-0,
 .px-xl-0 {
  padding-left:0!important
 }
 .p-xl-1 {
  padding:.25rem!important
 }
 .pt-xl-1,
 .py-xl-1 {
  padding-top:.25rem!important
 }
 .pr-xl-1,
 .px-xl-1 {
  padding-right:.25rem!important
 }
 .pb-xl-1,
 .py-xl-1 {
  padding-bottom:.25rem!important
 }
 .pl-xl-1,
 .px-xl-1 {
  padding-left:.25rem!important
 }
 .p-xl-2 {
  padding:.5rem!important
 }
 .pt-xl-2,
 .py-xl-2 {
  padding-top:.5rem!important
 }
 .pr-xl-2,
 .px-xl-2 {
  padding-right:.5rem!important
 }
 .pb-xl-2,
 .py-xl-2 {
  padding-bottom:.5rem!important
 }
 .pl-xl-2,
 .px-xl-2 {
  padding-left:.5rem!important
 }
 .p-xl-3 {
  padding:1rem!important
 }
 .pt-xl-3,
 .py-xl-3 {
  padding-top:1rem!important
 }
 .pr-xl-3,
 .px-xl-3 {
  padding-right:1rem!important
 }
 .pb-xl-3,
 .py-xl-3 {
  padding-bottom:1rem!important
 }
 .pl-xl-3,
 .px-xl-3 {
  padding-left:1rem!important
 }
 .p-xl-4 {
  padding:1.5rem!important
 }
 .pt-xl-4,
 .py-xl-4 {
  padding-top:1.5rem!important
 }
 .pr-xl-4,
 .px-xl-4 {
  padding-right:1.5rem!important
 }
 .pb-xl-4,
 .py-xl-4 {
  padding-bottom:1.5rem!important
 }.w-25 {
 width:25%!important
}
.w-50 {
 width:50%!important
}
.w-75 {
 width:75%!important
}
.w-100 {
 width:100%!important
}
.w-auto {
 width:auto!important
}
.h-25 {
 height:25%!important
}
.h-50 {
 height:50%!important
}
.h-75 {
 height:75%!important
}
.h-100 {
 height:100%!important
}
.h-auto {
 height:auto!important
}
.mw-100 {
 max-width:100%!important
}
.mw-65 {
 max-width:65%!important
}
.mh-100 {
 max-height:100%!important
}
.m-0 {
 margin:0!important
}
.mt-0,
.my-0 {
 margin-top:0!important
}
.mr-0,
.mx-0 {
 margin-right:0!important
}
.mb-0,
.my-0 {
 margin-bottom:0!important
}
.ml-0,
.mx-0 {
 margin-left:0!important
}
.m-1 {
 margin:.25rem!important
}
.mt-1,
.my-1 {
 margin-top:.25rem!important
}
.mr-1,
.mx-1 {
 margin-right:.25rem!important
}
.mb-1,
.my-1 {
 margin-bottom:.25rem!important
}
.ml-1,
.mx-1 {
 margin-left:.25rem!important
}
.m-2 {
 margin:.5rem!important
}
.mt-2,
.my-2 {
 margin-top:.5rem!important
}
.mr-2,
.mx-2 {
 margin-right:.5rem!important
}
.mb-2,
.my-2 {
 margin-bottom:.5rem!important
}
.ml-2,
.mx-2 {
 margin-left:.5rem!important
}
.m-3 {
 margin:1rem!important
}
.mt-3,
.my-3 {
 margin-top:1rem!important
}
.mr-3,
.mx-3 {
 margin-right:1rem!important
}
.mb-3,
.my-3 {
 margin-bottom:1rem!important
}
.ml-3,
.mx-3 {
 margin-left:1rem!important
}
.m-4 {
 margin:1.5rem!important
}
.mt-4,
.my-4 {
 margin-top:1.5rem!important
}
.mr-4,
.mx-4 {
 margin-right:1.5rem!important
}
.mb-4,
.my-4 {
 margin-bottom:1.5rem!important
}
.ml-4,
.mx-4 {
 margin-left:1.5rem!important
}
.m-5 {
 margin:3rem!important
}
.mt-5,
.my-5 {
 margin-top:3rem!important
}
.mr-5,
.mx-5 {
 margin-right:3rem!important
}
.mb-5,
.my-5 {
 margin-bottom:3rem!important
}
.ml-5,
.mx-5 {
 margin-left:3rem!important
}
.m-6 {
 margin:4.5rem!important
}
.mt-6,
.my-6 {
 margin-top:4.5rem!important
}
.mr-6,
.mx-6 {
 margin-right:4.5rem!important
}
.mb-6,
.my-6 {
 margin-bottom:4.5rem!important
}
.ml-6,
.mx-6 {
 margin-left:4.5rem!important
}
.m-7 {
 margin:6rem!important
}
.mt-7,
.my-7 {
 margin-top:6rem!important
}
.mr-7,
.mx-7 {
 margin-right:6rem!important
}
.mb-7,
.my-7 {
 margin-bottom:6rem!important
}
.ml-7,
.mx-7 {
 margin-left:6rem!important
}
.m-8 {
 margin:7.5rem!important
}
.mt-8,
.my-8 {
 margin-top:7.5rem!important
}
.mr-8,
.mx-8 {
 margin-right:7.5rem!important
}
.mb-8,
.my-8 {
 margin-bottom:7.5rem!important
}
.ml-8,
.mx-8 {
 margin-left:7.5rem!important
}
.m-9 {
 margin:9rem!important
}
.mt-9,
.my-9 {
 margin-top:9rem!important
}
.mr-9,
.mx-9 {
 margin-right:9rem!important
}
.mb-9,
.my-9 {
 margin-bottom:9rem!important
}
.ml-9,
.mx-9 {
 margin-left:9rem!important
}
.m-10 {
 margin:10.5rem!important
}
.mt-10,
.my-10 {
 margin-top:10.5rem!important
}
.mr-10,
.mx-10 {
 margin-right:10.5rem!important
}
.mb-10,
.my-10 {
 margin-bottom:10.5rem!important
}
.ml-10,
.mx-10 {
 margin-left:10.5rem!important
}
.m-11 {
 margin:12rem!important
}
.mt-11,
.my-11 {
 margin-top:12rem!important
}
.mr-11,
.mx-11 {
 margin-right:12rem!important
}
.mb-11,
.my-11 {
 margin-bottom:12rem!important
}
.ml-11,
.mx-11 {
 margin-left:12rem!important
}
.m-12 {
 margin:13.5rem!important
}
.mt-12,
.my-12 {
 margin-top:13.5rem!important
}
.mr-12,
.mx-12 {
 margin-right:13.5rem!important
}
.mb-12,
.my-12 {
 margin-bottom:13.5rem!important
}
.ml-12,
.mx-12 {
 margin-left:13.5rem!important
}
.p-0 {
 padding:0!important
}
.pt-0,
.py-0 {
 padding-top:0!important
}
.pr-0,
.px-0 {
 padding-right:0!important
}
.pb-0,
.py-0 {
 padding-bottom:0!important
}
.pl-0,
.px-0 {
 padding-left:0!important
}
.p-1 {
 padding:.25rem!important
}
.pt-1,
.py-1 {
 padding-top:.25rem!important
}
.pr-1,
.px-1 {
 padding-right:.25rem!important
}
.pb-1,
.py-1 {
 padding-bottom:.25rem!important
}
.pl-1,
.px-1 {
 padding-left:.25rem!important
}
.p-2 {
 padding:.5rem!important
}
.pt-2,
.py-2 {
 padding-top:.5rem!important
}
.pr-2,
.px-2 {
 padding-right:.5rem!important
}
.pb-2,
.py-2 {
 padding-bottom:.5rem!important
}
.pl-2,
.px-2 {
 padding-left:.5rem!important
}
.p-3 {
 padding:1rem!important
}
.pt-3,
.py-3 {
 padding-top:1rem!important
}
.pr-3,
.px-3 {
 padding-right:1rem!important
}
.pb-3,
.py-3 {
 padding-bottom:1rem!important
}
.pl-3,
.px-3 {
 padding-left:1rem!important
}
.p-4 {
 padding:1.5rem!important
}
.pt-4,
.py-4 {
 padding-top:1.5rem!important
}
.pr-4,
.px-4 {
 padding-right:1.5rem!important
}
.pb-4,
.py-4 {
 padding-bottom:1.5rem!important
}
.pl-4,
.px-4 {
 padding-left:1.5rem!important
}
.p-5 {
 padding:3rem!important
}
.pt-5,
.py-5 {
 padding-top:3rem!important
}
.pr-5,
.px-5 {
 padding-right:3rem!important
}
.pb-5,
.py-5 {
 padding-bottom:3rem!important
}
.pl-5,
.px-5 {
 padding-left:3rem!important
}
.p-6 {
 padding:4.5rem!important
}
.pt-6,
.py-6 {
 padding-top:4.5rem!important
}
.pr-6,
.px-6 {
 padding-right:4.5rem!important
}
.pb-6,
.py-6 {
 padding-bottom:4.5rem!important
}
.pl-6,
.px-6 {
 padding-left:4.5rem!important
}
.p-7 {
 padding:6rem!important
}
.pt-7,
.py-7 {
 padding-top:6rem!important
}
.pr-7,
.px-7 {
 padding-right:6rem!important
}
.pb-7,
.py-7 {
 padding-bottom:6rem!important
}
.pl-7,
.px-7 {
 padding-left:6rem!important
}
.p-8 {
 padding:7.5rem!important
}
.pt-8,
.py-8 {
 padding-top:7.5rem!important
}
.pr-8,
.px-8 {
 padding-right:7.5rem!important
}
.pb-8,
.py-8 {
 padding-bottom:7.5rem!important
}
.pl-8,
.px-8 {
 padding-left:7.5rem!important
}
.p-9 {
 padding:9rem!important
}
.pt-9,
.py-9 {
 padding-top:9rem!important
}
.pr-9,
.px-9 {
 padding-right:9rem!important
}
.pb-9,
.py-9 {
 padding-bottom:9rem!important
}
.pl-9,
.px-9 {
 padding-left:9rem!important
}
.p-10 {
 padding:10.5rem!important
}
.pt-10,
.py-10 {
 padding-top:10.5rem!important
}
.pr-10,
.px-10 {
 padding-right:10.5rem!important
}
.pb-10,
.py-10 {
 padding-bottom:10.5rem!important
}
.pl-10,
.px-10 {
 padding-left:10.5rem!important
}
.p-11 {
 padding:12rem!important
}
.pt-11,
.py-11 {
 padding-top:12rem!important
}
.pr-11,
.px-11 {
 padding-right:12rem!important
}
.pb-11,
.py-11 {
 padding-bottom:12rem!important
}
.pl-11,
.px-11 {
 padding-left:12rem!important
}
.p-12 {
 padding:13.5rem!important
}
.pt-12,
.py-12 {
 padding-top:13.5rem!important
}
.pr-12,
.px-12 {
 padding-right:13.5rem!important
}
.pb-12,
.py-12 {
 padding-bottom:13.5rem!important
}
.pl-12,
.px-12 {
 padding-left:13.5rem!important
}
.m-auto {
 margin:auto!important
}
.mt-auto,
.my-auto {
 margin-top:auto!important
}
.mr-auto,
.mx-auto {
 margin-right:auto!important
}
.mb-auto,
.my-auto {
 margin-bottom:auto!important
}
.ml-auto,
.mx-auto {
 margin-left:auto!important
}
@media(min-width:576px) {
 .m-sm-0 {
  margin:0!important
 }
 .mt-sm-0,
 .my-sm-0 {
  margin-top:0!important
 }
 .mr-sm-0,
 .mx-sm-0 {
  margin-right:0!important
 }
 .mb-sm-0,
 .my-sm-0 {
  margin-bottom:0!important
 }
 .ml-sm-0,
 .mx-sm-0 {
  margin-left:0!important
 }
 .m-sm-1 {
  margin:.25rem!important
 }
 .mt-sm-1,
 .my-sm-1 {
  margin-top:.25rem!important
 }
 .mr-sm-1,
 .mx-sm-1 {
  margin-right:.25rem!important
 }
 .mb-sm-1,
 .my-sm-1 {
  margin-bottom:.25rem!important
 }
 .ml-sm-1,
 .mx-sm-1 {
  margin-left:.25rem!important
 }
 .m-sm-2 {
  margin:.5rem!important
 }
 .mt-sm-2,
 .my-sm-2 {
  margin-top:.5rem!important
 }
 .mr-sm-2,
 .mx-sm-2 {
  margin-right:.5rem!important
 }
 .mb-sm-2,
 .my-sm-2 {
  margin-bottom:.5rem!important
 }
 .ml-sm-2,
 .mx-sm-2 {
  margin-left:.5rem!important
 }
 .m-sm-3 {
  margin:1rem!important
 }
 .mt-sm-3,
 .my-sm-3 {
  margin-top:1rem!important
 }
 .mr-sm-3,
 .mx-sm-3 {
  margin-right:1rem!important
 }
 .mb-sm-3,
 .my-sm-3 {
  margin-bottom:1rem!important
 }
 .ml-sm-3,
 .mx-sm-3 {
  margin-left:1rem!important
 }
 .m-sm-4 {
  margin:1.5rem!important
 }
 .mt-sm-4,
 .my-sm-4 {
  margin-top:1.5rem!important
 }
 .mr-sm-4,
 .mx-sm-4 {
  margin-right:1.5rem!important
 }
 .mb-sm-4,
 .my-sm-4 {
  margin-bottom:1.5rem!important
 }
 .ml-sm-4,
 .mx-sm-4 {
  margin-left:1.5rem!important
 }
 .m-sm-5 {
  margin:3rem!important
 }
 .mt-sm-5,
 .my-sm-5 {
  margin-top:3rem!important
 }
 .mr-sm-5,
 .mx-sm-5 {
  margin-right:3rem!important
 }
 .mb-sm-5,
 .my-sm-5 {
  margin-bottom:3rem!important
 }
 .ml-sm-5,
 .mx-sm-5 {
  margin-left:3rem!important
 }
 .m-sm-6 {
  margin:4.5rem!important
 }
 .mt-sm-6,
 .my-sm-6 {
  margin-top:4.5rem!important
 }
 .mr-sm-6,
 .mx-sm-6 {
  margin-right:4.5rem!important
 }
 .mb-sm-6,
 .my-sm-6 {
  margin-bottom:4.5rem!important
 }
 .ml-sm-6,
 .mx-sm-6 {
  margin-left:4.5rem!important
 }
 .m-sm-7 {
  margin:6rem!important
 }
 .mt-sm-7,
 .my-sm-7 {
  margin-top:6rem!important
 }
 .mr-sm-7,
 .mx-sm-7 {
  margin-right:6rem!important
 }
 .mb-sm-7,
 .my-sm-7 {
  margin-bottom:6rem!important
 }
 .ml-sm-7,
 .mx-sm-7 {
  margin-left:6rem!important
 }
 .m-sm-8 {
  margin:7.5rem!important
 }
 .mt-sm-8,
 .my-sm-8 {
  margin-top:7.5rem!important
 }
 .mr-sm-8,
 .mx-sm-8 {
  margin-right:7.5rem!important
 }
 .mb-sm-8,
 .my-sm-8 {
  margin-bottom:7.5rem!important
 }
 .ml-sm-8,
 .mx-sm-8 {
  margin-left:7.5rem!important
 }
 .m-sm-9 {
  margin:9rem!important
 }
 .mt-sm-9,
 .my-sm-9 {
  margin-top:9rem!important
 }
 .mr-sm-9,
 .mx-sm-9 {
  margin-right:9rem!important
 }
 .mb-sm-9,
 .my-sm-9 {
  margin-bottom:9rem!important
 }
 .ml-sm-9,
 .mx-sm-9 {
  margin-left:9rem!important
 }
 .m-sm-10 {
  margin:10.5rem!important
 }
 .mt-sm-10,
 .my-sm-10 {
  margin-top:10.5rem!important
 }
 .mr-sm-10,
 .mx-sm-10 {
  margin-right:10.5rem!important
 }
 .mb-sm-10,
 .my-sm-10 {
  margin-bottom:10.5rem!important
 }
 .ml-sm-10,
 .mx-sm-10 {
  margin-left:10.5rem!important
 }
 .m-sm-11 {
  margin:12rem!important
 }
 .mt-sm-11,
 .my-sm-11 {
  margin-top:12rem!important
 }
 .mr-sm-11,
 .mx-sm-11 {
  margin-right:12rem!important
 }
 .mb-sm-11,
 .my-sm-11 {
  margin-bottom:12rem!important
 }
 .ml-sm-11,
 .mx-sm-11 {
  margin-left:12rem!important
 }
 .m-sm-12 {
  margin:13.5rem!important
 }
 .mt-sm-12,
 .my-sm-12 {
  margin-top:13.5rem!important
 }
 .mr-sm-12,
 .mx-sm-12 {
  margin-right:13.5rem!important
 }
 .mb-sm-12,
 .my-sm-12 {
  margin-bottom:13.5rem!important
 }
 .ml-sm-12,
 .mx-sm-12 {
  margin-left:13.5rem!important
 }
 .p-sm-0 {
  padding:0!important
 }
 .pt-sm-0,
 .py-sm-0 {
  padding-top:0!important
 }
 .pr-sm-0,
 .px-sm-0 {
  padding-right:0!important
 }
 .pb-sm-0,
 .py-sm-0 {
  padding-bottom:0!important
 }
 .pl-sm-0,
 .px-sm-0 {
  padding-left:0!important
 }
 .p-sm-1 {
  padding:.25rem!important
 }
 .pt-sm-1,
 .py-sm-1 {
  padding-top:.25rem!important
 }
 .pr-sm-1,
 .px-sm-1 {
  padding-right:.25rem!important
 }
 .pb-sm-1,
 .py-sm-1 {
  padding-bottom:.25rem!important
 }
 .pl-sm-1,
 .px-sm-1 {
  padding-left:.25rem!important
 }
 .p-sm-2 {
  padding:.5rem!important
 }
 .pt-sm-2,
 .py-sm-2 {
  padding-top:.5rem!important
 }
 .pr-sm-2,
 .px-sm-2 {
  padding-right:.5rem!important
 }
 .pb-sm-2,
 .py-sm-2 {
  padding-bottom:.5rem!important
 }
 .pl-sm-2,
 .px-sm-2 {
  padding-left:.5rem!important
 }
 .p-sm-3 {
  padding:1rem!important
 }
 .pt-sm-3,
 .py-sm-3 {
  padding-top:1rem!important
 }
 .pr-sm-3,
 .px-sm-3 {
  padding-right:1rem!important
 }
 .pb-sm-3,
 .py-sm-3 {
  padding-bottom:1rem!important
 }
 .pl-sm-3,
 .px-sm-3 {
  padding-left:1rem!important
 }
 .p-sm-4 {
  padding:1.5rem!important
 }
 .pt-sm-4,
 .py-sm-4 {
  padding-top:1.5rem!important
 }
 .pr-sm-4,
 .px-sm-4 {
  padding-right:1.5rem!important
 }
 .pb-sm-4,
 .py-sm-4 {
  padding-bottom:1.5rem!important
 }
 .pl-sm-4,
 .px-sm-4 {
  padding-left:1.5rem!important
 }
 .p-sm-5 {
  padding:3rem!important
 }
 .pt-sm-5,
 .py-sm-5 {
  padding-top:3rem!important
 }
 .pr-sm-5,
 .px-sm-5 {
  padding-right:3rem!important
 }
 .pb-sm-5,
 .py-sm-5 {
  padding-bottom:3rem!important
 }
 .pl-sm-5,
 .px-sm-5 {
  padding-left:3rem!important
 }
 .p-sm-6 {
  padding:4.5rem!important
 }
 .pt-sm-6,
 .py-sm-6 {
  padding-top:4.5rem!important
 }
 .pr-sm-6,
 .px-sm-6 {
  padding-right:4.5rem!important
 }
 .pb-sm-6,
 .py-sm-6 {
  padding-bottom:4.5rem!important
 }
 .pl-sm-6,
 .px-sm-6 {
  padding-left:4.5rem!important
 }
 .p-sm-7 {
  padding:6rem!important
 }
 .pt-sm-7,
 .py-sm-7 {
  padding-top:6rem!important
 }
 .pr-sm-7,
 .px-sm-7 {
  padding-right:6rem!important
 }
 .pb-sm-7,
 .py-sm-7 {
  padding-bottom:6rem!important
 }
 .pl-sm-7,
 .px-sm-7 {
  padding-left:6rem!important
 }
 .p-sm-8 {
  padding:7.5rem!important
 }
 .pt-sm-8,
 .py-sm-8 {
  padding-top:7.5rem!important
 }
 .pr-sm-8,
 .px-sm-8 {
  padding-right:7.5rem!important
 }
 .pb-sm-8,
 .py-sm-8 {
  padding-bottom:7.5rem!important
 }
 .pl-sm-8,
 .px-sm-8 {
  padding-left:7.5rem!important
 }
 .p-sm-9 {
  padding:9rem!important
 }
 .pt-sm-9,
 .py-sm-9 {
  padding-top:9rem!important
 }
 .pr-sm-9,
 .px-sm-9 {
  padding-right:9rem!important
 }
 .pb-sm-9,
 .py-sm-9 {
  padding-bottom:9rem!important
 }
 .pl-sm-9,
 .px-sm-9 {
  padding-left:9rem!important
 }
 .p-sm-10 {
  padding:10.5rem!important
 }
 .pt-sm-10,
 .py-sm-10 {
  padding-top:10.5rem!important
 }
 .pr-sm-10,
 .px-sm-10 {
  padding-right:10.5rem!important
 }
 .pb-sm-10,
 .py-sm-10 {
  padding-bottom:10.5rem!important
 }
 .pl-sm-10,
 .px-sm-10 {
  padding-left:10.5rem!important
 }
 .p-sm-11 {
  padding:12rem!important
 }
 .pt-sm-11,
 .py-sm-11 {
  padding-top:12rem!important
 }
 .pr-sm-11,
 .px-sm-11 {
  padding-right:12rem!important
 }
 .pb-sm-11,
 .py-sm-11 {
  padding-bottom:12rem!important
 }
 .pl-sm-11,
 .px-sm-11 {
  padding-left:12rem!important
 }
 .p-sm-12 {
  padding:13.5rem!important
 }
 .pt-sm-12,
 .py-sm-12 {
  padding-top:13.5rem!important
 }
 .pr-sm-12,
 .px-sm-12 {
  padding-right:13.5rem!important
 }
 .pb-sm-12,
 .py-sm-12 {
  padding-bottom:13.5rem!important
 }
 .pl-sm-12,
 .px-sm-12 {
  padding-left:13.5rem!important
 }
 .m-sm-auto {
  margin:auto!important
 }
 .mt-sm-auto,
 .my-sm-auto {
  margin-top:auto!important
 }
 .mr-sm-auto,
 .mx-sm-auto {
  margin-right:auto!important
 }
 .mb-sm-auto,
 .my-sm-auto {
  margin-bottom:auto!important
 }
 .ml-sm-auto,
 .mx-sm-auto {
  margin-left:auto!important
 }
}
@media(min-width:768px) {
 .m-md-0 {
  margin:0!important
 }
 .mt-md-0,
 .my-md-0 {
  margin-top:0!important
 }
 .mr-md-0,
 .mx-md-0 {
  margin-right:0!important
 }
 .mb-md-0,
 .my-md-0 {
  margin-bottom:0!important
 }
 .ml-md-0,
 .mx-md-0 {
  margin-left:0!important
 }
 .m-md-1 {
  margin:.25rem!important
 }
 .mt-md-1,
 .my-md-1 {
  margin-top:.25rem!important
 }
 .mr-md-1,
 .mx-md-1 {
  margin-right:.25rem!important
 }
 .mb-md-1,
 .my-md-1 {
  margin-bottom:.25rem!important
 }
 .ml-md-1,
 .mx-md-1 {
  margin-left:.25rem!important
 }
 .m-md-2 {
  margin:.5rem!important
 }
 .mt-md-2,
 .my-md-2 {
  margin-top:.5rem!important
 }
 .mr-md-2,
 .mx-md-2 {
  margin-right:.5rem!important
 }
 .mb-md-2,
 .my-md-2 {
  margin-bottom:.5rem!important
 }
 .ml-md-2,
 .mx-md-2 {
  margin-left:.5rem!important
 }
 .m-md-3 {
  margin:1rem!important
 }
 .mt-md-3,
 .my-md-3 {
  margin-top:1rem!important
 }
 .mr-md-3,
 .mx-md-3 {
  margin-right:1rem!important
 }
 .mb-md-3,
 .my-md-3 {
  margin-bottom:1rem!important
 }
 .ml-md-3,
 .mx-md-3 {
  margin-left:1rem!important
 }
 .m-md-4 {
  margin:1.5rem!important
 }
 .mt-md-4,
 .my-md-4 {
  margin-top:1.5rem!important
 }
 .mr-md-4,
 .mx-md-4 {
  margin-right:1.5rem!important
 }
 .mb-md-4,
 .my-md-4 {
  margin-bottom:1.5rem!important
 }
 .ml-md-4,
 .mx-md-4 {
  margin-left:1.5rem!important
 }
 .m-md-5 {
  margin:3rem!important
 }
 .mt-md-5,
 .my-md-5 {
  margin-top:3rem!important
 }
 .mr-md-5,
 .mx-md-5 {
  margin-right:3rem!important
 }
 .mb-md-5,
 .my-md-5 {
  margin-bottom:3rem!important
 }
 .ml-md-5,
 .mx-md-5 {
  margin-left:3rem!important
 }
 .m-md-6 {
  margin:4.5rem!important
 }
 .mt-md-6,
 .my-md-6 {
  margin-top:4.5rem!important
 }
 .mr-md-6,
 .mx-md-6 {
  margin-right:4.5rem!important
 }
 .mb-md-6,
 .my-md-6 {
  margin-bottom:4.5rem!important
 }
 .ml-md-6,
 .mx-md-6 {
  margin-left:4.5rem!important
 }
 .m-md-7 {
  margin:6rem!important
 }
 .mt-md-7,
 .my-md-7 {
  margin-top:6rem!important
 }
 .mr-md-7,
 .mx-md-7 {
  margin-right:6rem!important
 }
 .mb-md-7,
 .my-md-7 {
  margin-bottom:6rem!important
 }
 .ml-md-7,
 .mx-md-7 {
  margin-left:6rem!important
 }
 .m-md-8 {
  margin:7.5rem!important
 }
 .mt-md-8,
 .my-md-8 {
  margin-top:7.5rem!important
 }
 .mr-md-8,
 .mx-md-8 {
  margin-right:7.5rem!important
 }
 .mb-md-8,
 .my-md-8 {
  margin-bottom:7.5rem!important
 }
 .ml-md-8,
 .mx-md-8 {
  margin-left:7.5rem!important
 }
 .m-md-9 {
  margin:9rem!important
 }
 .mt-md-9,
 .my-md-9 {
  margin-top:9rem!important
 }
 .mr-md-9,
 .mx-md-9 {
  margin-right:9rem!important
 }
 .mb-md-9,
 .my-md-9 {
  margin-bottom:9rem!important
 }
 .ml-md-9,
 .mx-md-9 {
  margin-left:9rem!important
 }
 .m-md-10 {
  margin:10.5rem!important
 }
 .mt-md-10,
 .my-md-10 {
  margin-top:10.5rem!important
 }
 .mr-md-10,
 .mx-md-10 {
  margin-right:10.5rem!important
 }
 .mb-md-10,
 .my-md-10 {
  margin-bottom:10.5rem!important
 }
 .ml-md-10,
 .mx-md-10 {
  margin-left:10.5rem!important
 }
 .m-md-11 {
  margin:12rem!important
 }
 .mt-md-11,
 .my-md-11 {
  margin-top:12rem!important
 }
 .mr-md-11,
 .mx-md-11 {
  margin-right:12rem!important
 }
 .mb-md-11,
 .my-md-11 {
  margin-bottom:12rem!important
 }
 .ml-md-11,
 .mx-md-11 {
  margin-left:12rem!important
 }
 .m-md-12 {
  margin:13.5rem!important
 }
 .mt-md-12,
 .my-md-12 {
  margin-top:13.5rem!important
 }
 .mr-md-12,
 .mx-md-12 {
  margin-right:13.5rem!important
 }
 .mb-md-12,
 .my-md-12 {
  margin-bottom:13.5rem!important
 }
 .ml-md-12,
 .mx-md-12 {
  margin-left:13.5rem!important
 }
 .p-md-0 {
  padding:0!important
 }
 .pt-md-0,
 .py-md-0 {
  padding-top:0!important
 }
 .pr-md-0,
 .px-md-0 {
  padding-right:0!important
 }
 .pb-md-0,
 .py-md-0 {
  padding-bottom:0!important
 }
 .pl-md-0,
 .px-md-0 {
  padding-left:0!important
 }
 .p-md-1 {
  padding:.25rem!important
 }
 .pt-md-1,
 .py-md-1 {
  padding-top:.25rem!important
 }
 .pr-md-1,
 .px-md-1 {
  padding-right:.25rem!important
 }
 .pb-md-1,
 .py-md-1 {
  padding-bottom:.25rem!important
 }
 .pl-md-1,
 .px-md-1 {
  padding-left:.25rem!important
 }
 .p-md-2 {
  padding:.5rem!important
 }
 .pt-md-2,
 .py-md-2 {
  padding-top:.5rem!important
 }
 .pr-md-2,
 .px-md-2 {
  padding-right:.5rem!important
 }
 .pb-md-2,
 .py-md-2 {
  padding-bottom:.5rem!important
 }
 .pl-md-2,
 .px-md-2 {
  padding-left:.5rem!important
 }
 .p-md-3 {
  padding:1rem!important
 }
 .pt-md-3,
 .py-md-3 {
  padding-top:1rem!important
 }
 .pr-md-3,
 .px-md-3 {
  padding-right:1rem!important
 }
 .pb-md-3,
 .py-md-3 {
  padding-bottom:1rem!important
 }
 .pl-md-3,
 .px-md-3 {
  padding-left:1rem!important
 }
 .p-md-4 {
  padding:1.5rem!important
 }
 .pt-md-4,
 .py-md-4 {
  padding-top:1.5rem!important
 }
 .pr-md-4,
 .px-md-4 {
  padding-right:1.5rem!important
 }
 .pb-md-4,
 .py-md-4 {
  padding-bottom:1.5rem!important
 }
 .pl-md-4,
 .px-md-4 {
  padding-left:1.5rem!important
 }
 .p-md-5 {
  padding:3rem!important
 }
 .pt-md-5,
 .py-md-5 {
  padding-top:3rem!important
 }
 .pr-md-5,
 .px-md-5 {
  padding-right:3rem!important
 }
 .pb-md-5,
 .py-md-5 {
  padding-bottom:3rem!important
 }
 .pl-md-5,
 .px-md-5 {
  padding-left:3rem!important
 }
 .p-md-6 {
  padding:4.5rem!important
 }
 .pt-md-6,
 .py-md-6 {
  padding-top:4.5rem!important
 }
 .pr-md-6,
 .px-md-6 {
  padding-right:4.5rem!important
 }
 .pb-md-6,
 .py-md-6 {
  padding-bottom:4.5rem!important
 }
 .pl-md-6,
 .px-md-6 {
  padding-left:4.5rem!important
 }
 .p-md-7 {
  padding:6rem!important
 }
 .pt-md-7,
 .py-md-7 {
  padding-top:6rem!important
 }
 .pr-md-7,
 .px-md-7 {
  padding-right:6rem!important
 }
 .pb-md-7,
 .py-md-7 {
  padding-bottom:6rem!important
 }
 .pl-md-7,
 .px-md-7 {
  padding-left:6rem!important
 }
 .p-md-8 {
  padding:7.5rem!important
 }
 .pt-md-8,
 .py-md-8 {
  padding-top:7.5rem!important
 }
 .pr-md-8,
 .px-md-8 {
  padding-right:7.5rem!important
 }
 .pb-md-8,
 .py-md-8 {
  padding-bottom:7.5rem!important
 }
 .pl-md-8,
 .px-md-8 {
  padding-left:7.5rem!important
 }
 .p-md-9 {
  padding:9rem!important
 }
 .pt-md-9,
 .py-md-9 {
  padding-top:9rem!important
 }
 .pr-md-9,
 .px-md-9 {
  padding-right:9rem!important
 }
 .pb-md-9,
 .py-md-9 {
  padding-bottom:9rem!important
 }
 .pl-md-9,
 .px-md-9 {
  padding-left:9rem!important
 }
 .p-md-10 {
  padding:10.5rem!important
 }
 .pt-md-10,
 .py-md-10 {
  padding-top:10.5rem!important
 }
 .pr-md-10,
 .px-md-10 {
  padding-right:10.5rem!important
 }
 .pb-md-10,
 .py-md-10 {
  padding-bottom:10.5rem!important
 }
 .pl-md-10,
 .px-md-10 {
  padding-left:10.5rem!important
 }
 .p-md-11 {
  padding:12rem!important
 }
 .pt-md-11,
 .py-md-11 {
  padding-top:12rem!important
 }
 .pr-md-11,
 .px-md-11 {
  padding-right:12rem!important
 }
 .pb-md-11,
 .py-md-11 {
  padding-bottom:12rem!important
 }
 .pl-md-11,
 .px-md-11 {
  padding-left:12rem!important
 }
 .p-md-12 {
  padding:13.5rem!important
 }
 .pt-md-12,
 .py-md-12 {
  padding-top:13.5rem!important
 }
 .pr-md-12,
 .px-md-12 {
  padding-right:13.5rem!important
 }
 .pb-md-12,
 .py-md-12 {
  padding-bottom:13.5rem!important
 }
 .pl-md-12,
 .px-md-12 {
  padding-left:13.5rem!important
 }
 .m-md-auto {
  margin:auto!important
 }
 .mt-md-auto,
 .my-md-auto {
  margin-top:auto!important
 }
 .mr-md-auto,
 .mx-md-auto {
  margin-right:auto!important
 }
 .mb-md-auto,
 .my-md-auto {
  margin-bottom:auto!important
 }
 .ml-md-auto,
 .mx-md-auto {
  margin-left:auto!important
 }
}
@media(min-width:992px) {
 .m-lg-0 {
  margin:0!important
 }
 .mt-lg-0,
 .my-lg-0 {
  margin-top:0!important
 }
 .mr-lg-0,
 .mx-lg-0 {
  margin-right:0!important
 }
 .mb-lg-0,
 .my-lg-0 {
  margin-bottom:0!important
 }
 .ml-lg-0,
 .mx-lg-0 {
  margin-left:0!important
 }
 .m-lg-1 {
  margin:.25rem!important
 }
 .mt-lg-1,
 .my-lg-1 {
  margin-top:.25rem!important
 }
 .mr-lg-1,
 .mx-lg-1 {
  margin-right:.25rem!important
 }
 .mb-lg-1,
 .my-lg-1 {
  margin-bottom:.25rem!important
 }
 .ml-lg-1,
 .mx-lg-1 {
  margin-left:.25rem!important
 }
 .m-lg-2 {
  margin:.5rem!important
 }
 .mt-lg-2,
 .my-lg-2 {
  margin-top:.5rem!important
 }
 .mr-lg-2,
 .mx-lg-2 {
  margin-right:.5rem!important
 }
 .mb-lg-2,
 .my-lg-2 {
  margin-bottom:.5rem!important
 }
 .ml-lg-2,
 .mx-lg-2 {
  margin-left:.5rem!important
 }
 .m-lg-3 {
  margin:1rem!important
 }
 .mt-lg-3,
 .my-lg-3 {
  margin-top:1rem!important
 }
 .mr-lg-3,
 .mx-lg-3 {
  margin-right:1rem!important
 }
 .mb-lg-3,
 .my-lg-3 {
  margin-bottom:1rem!important
 }
 .ml-lg-3,
 .mx-lg-3 {
  margin-left:1rem!important
 }
 .m-lg-4 {
  margin:1.5rem!important
 }
 .mt-lg-4,
 .my-lg-4 {
  margin-top:1.5rem!important
 }
 .mr-lg-4,
 .mx-lg-4 {
  margin-right:1.5rem!important
 }
 .mb-lg-4,
 .my-lg-4 {
  margin-bottom:1.5rem!important
 }
 .ml-lg-4,
 .mx-lg-4 {
  margin-left:1.5rem!important
 }
 .m-lg-5 {
  margin:3rem!important
 }
 .mt-lg-5,
 .my-lg-5 {
  margin-top:3rem!important
 }
 .mr-lg-5,
 .mx-lg-5 {
  margin-right:3rem!important
 }
 .mb-lg-5,
 .my-lg-5 {
  margin-bottom:3rem!important
 }
 .ml-lg-5,
 .mx-lg-5 {
  margin-left:3rem!important
 }
 .m-lg-6 {
  margin:4.5rem!important
 }
 .mt-lg-6,
 .my-lg-6 {
  margin-top:4.5rem!important
 }
 .mr-lg-6,
 .mx-lg-6 {
  margin-right:4.5rem!important
 }
 .mb-lg-6,
 .my-lg-6 {
  margin-bottom:4.5rem!important
 }
 .ml-lg-6,
 .mx-lg-6 {
  margin-left:4.5rem!important
 }
 .m-lg-7 {
  margin:6rem!important
 }
 .mt-lg-7,
 .my-lg-7 {
  margin-top:6rem!important
 }
 .mr-lg-7,
 .mx-lg-7 {
  margin-right:6rem!important
 }
 .mb-lg-7,
 .my-lg-7 {
  margin-bottom:6rem!important
 }
 .ml-lg-7,
 .mx-lg-7 {
  margin-left:6rem!important
 }
 .m-lg-8 {
  margin:7.5rem!important
 }
 .mt-lg-8,
 .my-lg-8 {
  margin-top:7.5rem!important
 }
 .mr-lg-8,
 .mx-lg-8 {
  margin-right:7.5rem!important
 }
 .mb-lg-8,
 .my-lg-8 {
  margin-bottom:7.5rem!important
 }
 .ml-lg-8,
 .mx-lg-8 {
  margin-left:7.5rem!important
 }
 .m-lg-9 {
  margin:9rem!important
 }
 .mt-lg-9,
 .my-lg-9 {
  margin-top:9rem!important;
 }
 .mr-lg-9,
 .mx-lg-9 {
  margin-right:9rem!important
 }
 .mb-lg-9,
 .my-lg-9 {
  margin-bottom:9rem!important;
 }
 .ml-lg-9,
 .mx-lg-9 {
  margin-left:9rem!important
 }
 .m-lg-10 {
  margin:10.5rem!important
 }
 .mt-lg-10,
 .my-lg-10 {
  margin-top:10.5rem!important
 }
 .mr-lg-10,
 .mx-lg-10 {
  margin-right:10.5rem!important
 }
 .mb-lg-10,
 .my-lg-10 {
  margin-bottom:10.5rem!important
 }
 .ml-lg-10,
 .mx-lg-10 {
  margin-left:10.5rem!important
 }
 .m-lg-11 {
  margin:12rem!important
 }
 .mt-lg-11,
 .my-lg-11 {
  margin-top:12rem!important
 }
 .mr-lg-11,
 .mx-lg-11 {
  margin-right:12rem!important
 }
 .mb-lg-11,
 .my-lg-11 {
  margin-bottom:12rem!important
 }
 .ml-lg-11,
 .mx-lg-11 {
  margin-left:12rem!important
 }
 .m-lg-12 {
  margin:13.5rem!important
 }
 .mt-lg-12,
 .my-lg-12 {
  margin-top:13.5rem!important
 }
 .mr-lg-12,
 .mx-lg-12 {
  margin-right:13.5rem!important
 }
 .mb-lg-12,
 .my-lg-12 {
  margin-bottom:13.5rem!important
 }
 .ml-lg-12,
 .mx-lg-12 {
  margin-left:13.5rem!important
 }
 .p-lg-0 {
  padding:0!important
 }
 .pt-lg-0,
 .py-lg-0 {
  padding-top:0!important
 }
 .pr-lg-0,
 .px-lg-0 {
  padding-right:0!important
 }
 .pb-lg-0,
 .py-lg-0 {
  padding-bottom:0!important
 }
 .pl-lg-0,
 .px-lg-0 {
  padding-left:0!important
 }
 .p-lg-1 {
  padding:.25rem!important
 }
 .pt-lg-1,
 .py-lg-1 {
  padding-top:.25rem!important
 }
 .pr-lg-1,
 .px-lg-1 {
  padding-right:.25rem!important
 }
 .pb-lg-1,
 .py-lg-1 {
  padding-bottom:.25rem!important
 }
 .pl-lg-1,
 .px-lg-1 {
  padding-left:.25rem!important
 }
 .p-lg-2 {
  padding:.5rem!important
 }
 .pt-lg-2,
 .py-lg-2 {
  padding-top:.5rem!important
 }
 .pr-lg-2,
 .px-lg-2 {
  padding-right:.5rem!important
 }
 .pb-lg-2,
 .py-lg-2 {
  padding-bottom:.5rem!important
 }
 .pl-lg-2,
 .px-lg-2 {
  padding-left:.5rem!important
 }
 .p-lg-3 {
  padding:1rem!important
 }
 .pt-lg-3,
 .py-lg-3 {
  padding-top:1rem!important
 }
 .pr-lg-3,
 .px-lg-3 {
  padding-right:1rem!important
 }
 .pb-lg-3,
 .py-lg-3 {
  padding-bottom:1rem!important
 }
 .pl-lg-3,
 .px-lg-3 {
  padding-left:1rem!important
 }
 .p-lg-4 {
  padding:1.5rem!important
 }
 .pt-lg-4,
 .py-lg-4 {
  padding-top:1.5rem!important
 }
 .pr-lg-4,
 .px-lg-4 {
  padding-right:1.5rem!important
 }
 .pb-lg-4,
 .py-lg-4 {
  padding-bottom:1.5rem!important
 }
 .pl-lg-4,
 .px-lg-4 {
  padding-left:1.5rem!important
 }
 .p-lg-5 {
  padding:3rem!important
 }
 .pt-lg-5,
 .py-lg-5 {
  padding-top:3rem!important
 }
 .pr-lg-5,
 .px-lg-5 {
  padding-right:3rem!important
 }
 .pb-lg-5,
 .py-lg-5 {
  padding-bottom:3rem!important
 }
 .pl-lg-5,
 .px-lg-5 {
  padding-left:3rem!important
 }
 .p-lg-6 {
  padding:4.5rem!important
 }
 .pt-lg-6,
 .py-lg-6 {
  padding-top:4.5rem!important
 }
 .pr-lg-6,
 .px-lg-6 {
  padding-right:4.5rem!important
 }
 .pb-lg-6,
 .py-lg-6 {
  padding-bottom:4.5rem!important
 }
 .pl-lg-6,
 .px-lg-6 {
  padding-left:4.5rem!important
 }
 .p-lg-7 {
  padding:6rem!important
 }
 .pt-lg-7,
 .py-lg-7 {
  padding-top:6rem!important
 }
 .pr-lg-7,
 .px-lg-7 {
  padding-right:6rem!important
 }
 .pb-lg-7,
 .py-lg-7 {
  padding-bottom:6rem!important
 }
 .pl-lg-7,
 .px-lg-7 {
  padding-left:6rem!important
 }
 .p-lg-8 {
  padding:7.5rem!important
 }
 .pt-lg-8,
 .py-lg-8 {
  padding-top:7.5rem!important
 }
 .pr-lg-8,
 .px-lg-8 {
  padding-right:7.5rem!important
 }
 .pb-lg-8,
 .py-lg-8 {
  padding-bottom:7.5rem!important
 }
 .pl-lg-8,
 .px-lg-8 {
  padding-left:7.5rem!important
 }
 .p-lg-9 {
  padding:9rem!important
 }
 .pt-lg-9,
 .py-lg-9 {
  padding-top:9rem!important
 }
 .pr-lg-9,
 .px-lg-9 {
  padding-right:9rem!important
 }
 .pb-lg-9,
 .py-lg-9 {
  padding-bottom:9rem!important
 }
 .pl-lg-9,
 .px-lg-9 {
  padding-left:9rem!important
 }
 .p-lg-10 {
  padding:10.5rem!important
 }
 .pt-lg-10,
 .py-lg-10 {
  padding-top:10.5rem!important
 }
 .pr-lg-10,
 .px-lg-10 {
  padding-right:10.5rem!important
 }
 .pb-lg-10,
 .py-lg-10 {
  padding-bottom:10.5rem!important
 }
 .pl-lg-10,
 .px-lg-10 {
  padding-left:10.5rem!important
 }
 .p-lg-11 {
  padding:12rem!important
 }
 .pt-lg-11,
 .py-lg-11 {
  padding-top:12rem!important
 }
 .pr-lg-11,
 .px-lg-11 {
  padding-right:12rem!important
 }
 .pb-lg-11,
 .py-lg-11 {
  padding-bottom:12rem!important
 }
 .pl-lg-11,
 .px-lg-11 {
  padding-left:12rem!important
 }
 .p-lg-12 {
  padding:13.5rem!important
 }
 .pt-lg-12,
 .py-lg-12 {
  padding-top:13.5rem!important
 }
 .pr-lg-12,
 .px-lg-12 {
  padding-right:13.5rem!important
 }
 .pb-lg-12,
 .py-lg-12 {
  padding-bottom:13.5rem!important
 }
 .pl-lg-12,
 .px-lg-12 {
  padding-left:13.5rem!important
 }
 .m-lg-auto {
  margin:auto!important
 }
 .mt-lg-auto,
 .my-lg-auto {
  margin-top:auto!important
 }
 .mr-lg-auto,
 .mx-lg-auto {
  margin-right:auto!important
 }
 .mb-lg-auto,
 .my-lg-auto {
  margin-bottom:auto!important
 }
 .ml-lg-auto,
 .mx-lg-auto {
  margin-left:auto!important
 }
}
@media(min-width:1200px) {
 .m-xl-0 {
  margin:0!important
 }
 .mt-xl-0,
 .my-xl-0 {
  margin-top:0!important
 }
 .mr-xl-0,
 .mx-xl-0 {
  margin-right:0!important
 }
 .mb-xl-0,
 .my-xl-0 {
  margin-bottom:0!important
 }
 .ml-xl-0,
 .mx-xl-0 {
  margin-left:0!important
 }
 .m-xl-1 {
  margin:.25rem!important
 }
 .mt-xl-1,
 .my-xl-1 {
  margin-top:.25rem!important
 }
 .mr-xl-1,
 .mx-xl-1 {
  margin-right:.25rem!important
 }
 .mb-xl-1,
 .my-xl-1 {
  margin-bottom:.25rem!important
 }
 .ml-xl-1,
 .mx-xl-1 {
  margin-left:.25rem!important
 }
 .m-xl-2 {
  margin:.5rem!important
 }
 .mt-xl-2,
 .my-xl-2 {
  margin-top:.5rem!important
 }
 .mr-xl-2,
 .mx-xl-2 {
  margin-right:.5rem!important
 }
 .mb-xl-2,
 .my-xl-2 {
  margin-bottom:.5rem!important
 }
 .ml-xl-2,
 .mx-xl-2 {
  margin-left:.5rem!important
 }
 .m-xl-3 {
  margin:1rem!important
 }
 .mt-xl-3,
 .my-xl-3 {
  margin-top:1rem!important
 }
 .mr-xl-3,
 .mx-xl-3 {
  margin-right:1rem!important
 }
 .mb-xl-3,
 .my-xl-3 {
  margin-bottom:1rem!important
 }
 .ml-xl-3,
 .mx-xl-3 {
  margin-left:1rem!important
 }
 .m-xl-4 {
  margin:1.5rem!important
 }
 .mt-xl-4,
 .my-xl-4 {
  margin-top:1.5rem!important
 }
 .mr-xl-4,
 .mx-xl-4 {
  margin-right:1.5rem!important
 }
 .mb-xl-4,
 .my-xl-4 {
  margin-bottom:1.5rem!important
 }
 .ml-xl-4,
 .mx-xl-4 {
  margin-left:1.5rem!important
 }
 .m-xl-5 {
  margin:3rem!important
 }
 .mt-xl-5,
 .my-xl-5 {
  margin-top:3rem!important
 }
 .mr-xl-5,
 .mx-xl-5 {
  margin-right:3rem!important
 }
 .mb-xl-5,
 .my-xl-5 {
  margin-bottom:3rem!important
 }
 .ml-xl-5,
 .mx-xl-5 {
  margin-left:3rem!important
 }
 .m-xl-6 {
  margin:4.5rem!important
 }
 .mt-xl-6,
 .my-xl-6 {
  margin-top:4.5rem!important
 }
 .mr-xl-6,
 .mx-xl-6 {
  margin-right:4.5rem!important
 }
 .mb-xl-6,
 .my-xl-6 {
  margin-bottom:4.5rem!important
 }
 .ml-xl-6,
 .mx-xl-6 {
  margin-left:4.5rem!important
 }
 .m-xl-7 {
  margin:6rem!important
 }
 .mt-xl-7,
 .my-xl-7 {
  margin-top:6rem!important
 }
 .mr-xl-7,
 .mx-xl-7 {
  margin-right:6rem!important
 }
 .mb-xl-7,
 .my-xl-7 {
  margin-bottom:6rem!important
 }
 .ml-xl-7,
 .mx-xl-7 {
  margin-left:6rem!important
 }
 .m-xl-8 {
  margin:7.5rem!important
 }
 .mt-xl-8,
 .my-xl-8 {
  margin-top:7.5rem!important
 }
 .mr-xl-8,
 .mx-xl-8 {
  margin-right:7.5rem!important
 }
 .mb-xl-8,
 .my-xl-8 {
  margin-bottom:7.5rem!important
 }
 .ml-xl-8,
 .mx-xl-8 {
  margin-left:7.5rem!important
 }
 .m-xl-9 {
  margin:9rem!important
 }
 .mt-xl-9,
 .my-xl-9 {
  margin-top:9rem!important
 }
 .mr-xl-9,
 .mx-xl-9 {
  margin-right:9rem!important
 }
 .mb-xl-9,
 .my-xl-9 {
  margin-bottom:9rem!important
 }
 .ml-xl-9,
 .mx-xl-9 {
  margin-left:9rem!important
 }
 .m-xl-10 {
  margin:10.5rem!important
 }
 .mt-xl-10,
 .my-xl-10 {
  margin-top:10.5rem!important
 }
 .mr-xl-10,
 .mx-xl-10 {
  margin-right:10.5rem!important
 }
 .mb-xl-10,
 .my-xl-10 {
  margin-bottom:10.5rem!important
 }
 .ml-xl-10,
 .mx-xl-10 {
  margin-left:10.5rem!important
 }
 .m-xl-11 {
  margin:12rem!important
 }
 .mt-xl-11,
 .my-xl-11 {
  margin-top:12rem!important
 }
 .mr-xl-11,
 .mx-xl-11 {
  margin-right:12rem!important
 }
 .mb-xl-11,
 .my-xl-11 {
  margin-bottom:12rem!important
 }
 .ml-xl-11,
 .mx-xl-11 {
  margin-left:12rem!important
 }
 .m-xl-12 {
  margin:13.5rem!important
 }
 .mt-xl-12,
 .my-xl-12 {
  margin-top:13.5rem!important
 }
 .mr-xl-12,
 .mx-xl-12 {
  margin-right:13.5rem!important
 }
 .mb-xl-12,
 .my-xl-12 {
  margin-bottom:13.5rem!important
 }
 .ml-xl-12,
 .mx-xl-12 {
  margin-left:13.5rem!important
 }
 .p-xl-0 {
  padding:0!important
 }
 .pt-xl-0,
 .py-xl-0 {
  padding-top:0!important
 }
 .pr-xl-0,
 .px-xl-0 {
  padding-right:0!important
 }
 .pb-xl-0,
 .py-xl-0 {
  padding-bottom:0!important
 }
 .pl-xl-0,
 .px-xl-0 {
  padding-left:0!important
 }
 .p-xl-1 {
  padding:.25rem!important
 }
 .pt-xl-1,
 .py-xl-1 {
  padding-top:.25rem!important
 }
 .pr-xl-1,
 .px-xl-1 {
  padding-right:.25rem!important
 }
 .pb-xl-1,
 .py-xl-1 {
  padding-bottom:.25rem!important
 }
 .pl-xl-1,
 .px-xl-1 {
  padding-left:.25rem!important
 }
 .p-xl-2 {
  padding:.5rem!important
 }
 .pt-xl-2,
 .py-xl-2 {
  padding-top:.5rem!important
 }
 .pr-xl-2,
 .px-xl-2 {
  padding-right:.5rem!important
 }
 .pb-xl-2,
 .py-xl-2 {
  padding-bottom:.5rem!important
 }
 .pl-xl-2,
 .px-xl-2 {
  padding-left:.5rem!important
 }
 .p-xl-3 {
  padding:1rem!important
 }
 .pt-xl-3,
 .py-xl-3 {
  padding-top:1rem!important
 }
 .pr-xl-3,
 .px-xl-3 {
  padding-right:1rem!important
 }
 .pb-xl-3,
 .py-xl-3 {
  padding-bottom:1rem!important
 }
 .pl-xl-3,
 .px-xl-3 {
  padding-left:1rem!important
 }
 .p-xl-4 {
  padding:1.5rem!important
 }
 .pt-xl-4,
 .py-xl-4 {
  padding-top:1.5rem!important
 }
 .pr-xl-4,
 .px-xl-4 {
  padding-right:1.5rem!important
 }
 .pb-xl-4,
 .py-xl-4 {
  padding-bottom:1.5rem!important
 }
 .pl-xl-4,
 .px-xl-4 {
  padding-left:1.5rem!important
 }
 .p-xl-5 {
  padding:3rem!important
 }
 .pt-xl-5,
 .py-xl-5 {
  padding-top:3rem!important
 }
 .pr-xl-5,
 .px-xl-5 {
  padding-right:3rem!important
 }
 .pb-xl-5,
 .py-xl-5 {
  padding-bottom:3rem!important
 }
 .pl-xl-5,
 .px-xl-5 {
  padding-left:3rem!important
 }
 .p-xl-6 {
  padding:4.5rem!important
 }
 .pt-xl-6,
 .py-xl-6 {
  padding-top:4.5rem!important
 }
 .pr-xl-6,
 .px-xl-6 {
  padding-right:4.5rem!important
 }
 .pb-xl-6,
 .py-xl-6 {
  padding-bottom:4.5rem!important
 }
 .pl-xl-6,
 .px-xl-6 {
  padding-left:4.5rem!important
 }
 .p-xl-7 {
  padding:6rem!important
 }
 .pt-xl-7,
 .py-xl-7 {
  padding-top:6rem!important
 }
 .pr-xl-7,
 .px-xl-7 {
  padding-right:6rem!important
 }
 .pb-xl-7,
 .py-xl-7 {
  padding-bottom:6rem!important
 }
 .pl-xl-7,
 .px-xl-7 {
  padding-left:6rem!important
 }
 .p-xl-8 {
  padding:7.5rem!important
 }
 .pt-xl-8,
 .py-xl-8 {
  padding-top:7.5rem!important
 }
 .pr-xl-8,
 .px-xl-8 {
  padding-right:7.5rem!important
 }
 .pb-xl-8,
 .py-xl-8 {
  padding-bottom:7.5rem!important
 }
 .pl-xl-8,
 .px-xl-8 {
  padding-left:7.5rem!important
 }
 .p-xl-9 {
  padding:9rem!important
 }
 .pt-xl-9,
 .py-xl-9 {
  padding-top:9rem!important
 }
 .pr-xl-9,
 .px-xl-9 {
  padding-right:9rem!important
 }
 .pb-xl-9,
 .py-xl-9 {
  padding-bottom:9rem!important
 }
 .pl-xl-9,
 .px-xl-9 {
  padding-left:9rem!important
 }
 .p-xl-10 {
  padding:10.5rem!important
 }
 .pt-xl-10,
 .py-xl-10 {
  padding-top:10.5rem!important
 }
 .pr-xl-10,
 .px-xl-10 {
  padding-right:10.5rem!important
 }
 .pb-xl-10,
 .py-xl-10 {
  padding-bottom:10.5rem!important
 }
 .pl-xl-10,
 .px-xl-10 {
  padding-left:10.5rem!important
 }
 .p-xl-11 {
  padding:12rem!important
 }
 .pt-xl-11,
 .py-xl-11 {
  padding-top:12rem!important
 }
 .pr-xl-11,
 .px-xl-11 {
  padding-right:12rem!important
 }
 .pb-xl-11,
 .py-xl-11 {
  padding-bottom:12rem!important
 }
 .pl-xl-11,
 .px-xl-11 {
  padding-left:12rem!important
 }
 .p-xl-12 {
  padding:13.5rem!important
 }
 .pt-xl-12,
 .py-xl-12 {
  padding-top:13.5rem!important
 }
 .pr-xl-12,
 .px-xl-12 {
  padding-right:13.5rem!important
 }
 .pb-xl-12,
 .py-xl-12 {
  padding-bottom:13.5rem!important
 }
 .pl-xl-12,
 .px-xl-12 {
  padding-left:13.5rem!important
 }
 .m-xl-auto {
  margin:auto!important
 }
 .mt-xl-auto,
 .my-xl-auto {
  margin-top:auto!important
 }
 .mr-xl-auto,
 .mx-xl-auto {
  margin-right:auto!important
 }
 .mb-xl-auto,
 .my-xl-auto {
  margin-bottom:auto!important
 }
 .ml-xl-auto,
 .mx-xl-auto {
  margin-left:auto!important
 }
}
 .pl-xl-4,
 .px-xl-4 {
  padding-left:1.5rem!important
 }
 .p-xl-5 {
  padding:3rem!important
 }
 .pt-xl-5,
 .py-xl-5 {
  padding-top:3rem!important
 }
 .pr-xl-5,
 .px-xl-5 {
  padding-right:3rem!important
 }
 .pb-xl-5,
 .py-xl-5 {
  padding-bottom:3rem!important
 }
 .pl-xl-5,
 .px-xl-5 {
  padding-left:3rem!important
 }
 .p-xl-6 {
  padding:4.5rem!important
 }
 .pt-xl-6,
 .py-xl-6 {
  padding-top:4.5rem!important
 }
 .pr-xl-6,
 .px-xl-6 {
  padding-right:4.5rem!important
 }
 .pb-xl-6,
 .py-xl-6 {
  padding-bottom:4.5rem!important
 }
 .pl-xl-6,
 .px-xl-6 {
  padding-left:4.5rem!important
 }
 .p-xl-7 {
  padding:6rem!important
 }
 .pt-xl-7,
 .py-xl-7 {
  padding-top:6rem!important
 }
 .pr-xl-7,
 .px-xl-7 {
  padding-right:6rem!important
 }
 .pb-xl-7,
 .py-xl-7 {
  padding-bottom:6rem!important
 }
 .pl-xl-7,
 .px-xl-7 {
  padding-left:6rem!important
 }
 .p-xl-8 {
  padding:7.5rem!important
 }
 .pt-xl-8,
 .py-xl-8 {
  padding-top:7.5rem!important
 }
 .pr-xl-8,
 .px-xl-8 {
  padding-right:7.5rem!important
 }
 .pb-xl-8,
 .py-xl-8 {
  padding-bottom:7.5rem!important
 }
 .pl-xl-8,
 .px-xl-8 {
  padding-left:7.5rem!important
 }
 .p-xl-9 {
  padding:9rem!important
 }
 .pt-xl-9,
 .py-xl-9 {
  padding-top:9rem!important
 }
 .pr-xl-9,
 .px-xl-9 {
  padding-right:9rem!important
 }
 .pb-xl-9,
 .py-xl-9 {
  padding-bottom:9rem!important
 }
 .pl-xl-9,
 .px-xl-9 {
  padding-left:9rem!important
 }
 .p-xl-10 {
  padding:10.5rem!important
 }
 .pt-xl-10,
 .py-xl-10 {
  padding-top:10.5rem!important
 }
 .pr-xl-10,
 .px-xl-10 {
  padding-right:10.5rem!important
 }
 .pb-xl-10,
 .py-xl-10 {
  padding-bottom:10.5rem!important
 }
 .pl-xl-10,
 .px-xl-10 {
  padding-left:10.5rem!important
 }
 .p-xl-11 {
  padding:12rem!important
 }
 .pt-xl-11,
 .py-xl-11 {
  padding-top:12rem!important
 }
 .pr-xl-11,
 .px-xl-11 {
  padding-right:12rem!important
 }
 .pb-xl-11,
 .py-xl-11 {
  padding-bottom:12rem!important
 }
 .pl-xl-11,
 .px-xl-11 {
  padding-left:12rem!important
 }
 .p-xl-12 {
  padding:13.5rem!important
 }
 .pt-xl-12,
 .py-xl-12 {
  padding-top:13.5rem!important
 }
 .pr-xl-12,
 .px-xl-12 {
  padding-right:13.5rem!important
 }
 .pb-xl-12,
 .py-xl-12 {
  padding-bottom:13.5rem!important
 }
 .pl-xl-12,
 .px-xl-12 {
  padding-left:13.5rem!important
 }
 .m-xl-auto {
  margin:auto!important
 }
 .mt-xl-auto,
 .my-xl-auto {
  margin-top:auto!important
 }
 .mr-xl-auto,
 .mx-xl-auto {
  margin-right:auto!important
 }
 .mb-xl-auto,
 .my-xl-auto {
  margin-bottom:auto!important
 }
 .ml-xl-auto,
 .mx-xl-auto {
  margin-left:auto!important
 }
}
</style>
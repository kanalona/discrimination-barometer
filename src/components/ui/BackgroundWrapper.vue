<template>
  <div class="bg-wrapper">
      <slot></slot>
  </div>
</template>

<style>
.bg-wrapper > *:nth-child(2) {
  background-color: rgb(250, 250, 250);
  z-index: -10;
}
.bg-wrapper > * {
  width: 100%;
}
</style>
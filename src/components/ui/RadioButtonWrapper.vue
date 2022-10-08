<template>
  <div class="radio-btn-wrapper">
    <div class="radio-btn-container">
      <slot></slot>
    </div>
  </div>
</template>

<style>
.radio-btn-wrapper {
  display: flex;
  align-items: flex-start;
}
.radio-btn-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
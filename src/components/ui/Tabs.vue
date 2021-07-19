<template>
  <nav>
    <ul>
      <li v-for="tab in tabs" :key="tab.name">
        <router-link :to="tab.link">{{ tab.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["tabs"],
};
</script>


<style scoped>
nav {
  padding: 10px 16px;
  margin: 0rem 0rem;
  /* background: #f2685d; */
  background: #f1f1f1;
  border: 1px solid #ccc;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
}

a {
  position: relative;
  display: inline-block;
  padding: 0.75rem 1.5rem;
}

a::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: #ff7b00;
  visibility: hidden;
  transform-origin: left;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
}
a:hover::before {
  visibility: visible;
  transform: scaleX(1);
}
a:active,
a.router-link-active {
  border-bottom: 2px solid #ff7b00;
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

.sticky {
  position: fixed;
}
</style>
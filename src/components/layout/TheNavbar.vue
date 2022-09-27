<template>
  <header>
    <nav class="navbar sticky-top navbar-expand-lg">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">{{
          "Home".toUpperCase()
        }}</router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/barometer">{{
                "1. Barometer".toUpperCase()
              }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/berechnung">{{
                "2. Werte".toUpperCase()
              }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/kontext">{{
                "3. Kontext".toUpperCase()
              }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

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

li {
  margin: 0 0.5rem;
}

a:hover,
a:active,
a.router-link-active {
  color: var(--primaryColor);
}
</style>
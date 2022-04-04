<script setup>
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';
import IdealBody from './components/pages/IdealBody.vue';
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <div class="logo me-3"></div>
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
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a
              class="nav-link fw-bold"
              to="/"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Breath Equation
            </a>
            <ul class="dropdown-menu px-3" aria-labelledby="navbarDropdown">
              <li>
                <router-link
                  tag="a"
                  class="nav-link"
                  aria-current="page"
                  to="/ventilatioon-parameters"
                  >Ventilation</router-link
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <router-link
                  tag="a"
                  class="nav-link"
                  aria-current="page"
                  to="/oxygenation-measurements"
                  >Oxygenation measurements</router-link
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <router-link
                  tag="a"
                  class="nav-link"
                  aria-current="page"
                  to="/conservative-therapy"
                  >Conservative Therapy</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link tag="a" class="nav-link" aria-current="page" to="/"
              >About US</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container my-5">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.logo {
  width: 6.625rem;
  /* border: 1px solid #3a3131; */
  height: 3.0625rem;
  padding: 1.4375rem;
  background-image: url('https://www.lancasterdistrict.co.uk/app/uploads/2020/03/Breathe-Logo-No-TL-Trans-pixelblowin-1024x458.png');
  background-size: cover;
  background-position: center;
  /* border-radius: 0.25rem; */
}
.dropdown-menu {
  background-color: #312a2a;
  color: white;
  font-size: 1.0625rem;
}

@media (min-width: 992px) {
  .dropdown-menu {
    width: 21.125rem;
    background-color: #312a2a;
    color: white;
    margin: 0.4375rem;
    font-size: 1.0625rem;
  }
}
</style>

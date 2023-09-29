<script setup>
import NavBar from './components/Navbar.vue'
import Footer from './components/Footer.vue';
</script>

<template>
  <v-app>
    <NavBar/>
    <v-main>
      <Router-View></Router-View>
    </v-main>
  </v-app>
  <header>
    <img alt="new logo" class="new logo" src="./assets/images/new logo.jpeg" width="150" height="125" />
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

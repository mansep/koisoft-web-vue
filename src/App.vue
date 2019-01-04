<template>
  <div id="app" class="container d-flex w-100 h-100 mx-auto flex-column"> 
    <header class="mb-4">
      <nav-bar/>
    </header>
    <main>
      <router-view/>
    </main>
    <footer class="mt-auto  text-center">
      <p>Koisoft SPA &copy; 2018 </p>
    </footer>
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/main.css'

export default {
  components: {
    NavBar,
  }
}
</script>

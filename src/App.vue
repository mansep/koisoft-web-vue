<template>
  <div id="app" class="container d-flex w-100 h-100 mx-auto flex-column"> 
    <external-css/>
    <header class="mb-4">
      <nav-bar/>
    </header>
    <main>
      <router-view/>
    </main>
    <footer class="mt-auto  text-center">
      <p>Koisoft SPA &copy; 2018 </p>
    </footer>
    <external-js/>
  </div>
</template>

<script>

import ExternalCss from './components/ExternalCss.vue'
import ExternalJs from './components/ExternalJs.vue'
import NavBar from './components/NavBar.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/main.css'

export default {
  components: {
    ExternalCss,
    NavBar,
    ExternalJs
  }
}
</script>

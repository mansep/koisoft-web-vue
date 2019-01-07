<template>
  <div id="app" class="d-flex w-100 h-100 mx-auto flex-column" > 
    <header >
      <nav-bar/>
    </header>
    <main>
      <router-view/>
    </main>
    <footer class="mt-5 text-center">
      <p>&copy; 2018 {{ settings.name }} - <a v-bind:href =settings.facebook><i class="fab fa-facebook-square"></i></a> <a class="ml-1" v-bind:href =settings.twitter> <i class="fab fa-twitter-square"></i></a></p>
      <p>See the source code of this website in <a href="https://github.com/mansep/koisoft-web-vue"><i class="fab fa-github"></i></a> </p>
    </footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Settings from './settings';

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/main.css'

export default {
  components: {
    NavBar,
  },
  data: function(){
    return {
      settings: Settings
    }
  }
}
</script>

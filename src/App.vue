<template>
  <div id="app" class="d-flex w-100 h-100 mx-auto flex-column" > 
    <header >
      <nav-bar/>
    </header>
    <main>
      <router-view/>
    </main>
    <img id="footer_img" src="./assets/img/bottom.png">
    <footer class="text-center">
      <p>&copy; {{ settings.name }} | 2010 - 2019 | All rights reserved <br/><a v-bind:href =settings.facebook target="_blank"><i class="fab fa-facebook-square"></i></a> <a class="ml-1" v-bind:href =settings.twitter target="_blank"> <i class="fab fa-twitter-square"></i></a></p>
      <p>See the source code of this website in <a href="https://github.com/mansep/koisoft-web-vue" target="_blank"><i class="fab fa-github"></i></a> </p>
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

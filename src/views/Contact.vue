<template>
    <div class="row">
      <div class="col-8">
          <h1>Contact</h1>
          <form class="pt-3">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input id="name" type="text" class="form-control">
            </div>
            <div class="form-group">
              <label for="company">Company</label>
              <input id="company" type="company" class="form-control">
            </div>
            <div class="form-group">
              <label for="email">Email address</label>
              <input id="email" type="text" class="form-control">
            </div>
            <div class="form-group">
              <label for="subject">Subject</label>
              <input id="subject" type="text" class="form-control">
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="mesagge" class="form-control" rows="3"></textarea>
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-outline-primary m-1">Send</button>
              <button type="reset" class="btn btn-outline-secondary m-1">Reset</button>
            </div>
          </form>
      </div>
      <div class="col-4">        
          <h1>Info</h1>
          <div class="pt-3">
            <p><i class="fas fa-map-marker-alt"/> <span class="pl-3">Camino correntoso KM 5.1, Puerto Montt, Chile</span></p>
            <p><i class="fas fa-phone"/> <span class="pl-3">+56 12 3456789 </span></p>
            <p><i class="far fa-envelope"/> <span class="pl-3">hello@koisoft.cl</span></p>
            <google-map  name="example" lat="-41.4683807" lng="-72.9456145"/>
          </div>
      </div>
    </div>
</template>

<script>

import GoogleMap from '../components/GoogleMap.vue';

export default {
  components: {
    GoogleMap
  }

}
</script>

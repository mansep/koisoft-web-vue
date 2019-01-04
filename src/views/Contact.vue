<template>
    <div class="row">
      <div class="col-lg-8 col-sm-12">
          <h1>Contact</h1>
          <form class="pt-3" v-on:submit="sendContact" action="#" method="post">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input id="name" v-model="name" type="text" class="form-control">
            </div>
            <div class="form-group">
              <label for="company">Company</label>
              <input id="company" v-model="company" type="company" class="form-control">
            </div>
            <div class="form-group">
              <label for="email">Email address</label>
              <input id="email" v-model="email" type="text" class="form-control">
            </div>
            <div class="form-group">
              <label for="subject">Subject</label>
              <input id="subject" v-model="subject" type="text" class="form-control">
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" v-model="message" class="form-control" rows="3"></textarea>
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-outline-primary m-1">Send</button>
              <button type="reset" class="btn btn-outline-secondary m-1">Reset</button>
            </div>
          </form>
      </div>
      <div class="col-lg-4 col-sm-12">        
          <h1>Info</h1>
          <div class="pt-3">
            <p><i class="fas fa-map-marker-alt"/> <span class="pl-3">Camino correntoso KM 5.1, Puerto Montt, Chile</span></p>
            <p><i class="fas fa-phone"/> <span class="pl-3">+56 12 3456789 </span></p>
            <p><i class="far fa-envelope"/> <span class="pl-3">hello@koisoft.cl</span></p>
            <google-map />
          </div>
      </div>
    </div>
</template>

<script>

import GoogleMap from '../components/GoogleMap.vue';
import smtp from '../assets/js/smtp.js';

export default {
  components: {
    GoogleMap
  },
  data: function(){ 
    return {
      name: '',
      company: '',
      email: '',
      subject: '',
      message: ''
    };
  },
  methods: {
    sendContact: function(event){

      var body =  "Name: " + this.name + "<br/>"
      body + "Company: " + this.company + "<br/>"
      body + "Subject: " + this.subject + "<br/>"
      body + "Email: " + this.email + "<br/>"
      body + "Message: " + this.message;


      smtp.send({
          To : 'hello@koisoft.cl',
          From : this.email,
          Subject : "WEB CONTACT - " + this.subject,
          Body : body
      }).then(response => {
        console.log(response.json());
      }).catch(error =>{
        console.log(error);
      });

      event.preventDefault();
    }
  }

}

//
</script>
<template>
    <div class="container mt-3">      
      <div class="row">
        <div class="col-lg-8 col-sm-12">
            <h1>Contact</h1>
        </div>
        <div class="col-lg-4 col-sm-12">        
            <h1>Info</h1>
        </div>
      </div>
      <hr/>
      <div class="row">
        <div class="col-lg-8 col-sm-12">
            <form v-on:submit="sendContact" action="#" method="post">
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
                <button type="submit" class="btn btn-primary m-1">Send</button>
                <button type="reset" class="btn btn-secondary m-1">Reset</button>
              </div>
            </form>
        </div>
        <div class="col-lg-4 col-sm-12">  
          <p><i class="fas fa-map-marker-alt"/> <span class="pl-3">{{ settings.address }}</span></p>
          <p><i class="fas fa-phone"/> <span class="pl-3"> <a v-bind:href="['tel:' + settings.phone]"> {{ settings.phone }} </a></span></p>
          <p><i class="far fa-envelope"/> <span class="pl-3"> <a v-bind:href="['mailto:' + settings.email]"> {{ settings.email }}</a></span></p>
          <p><i class="fab fa-facebook-square"/> <span class="pl-3"> <a v-bind:href=settings.facebook > {{ settings.facebook }}</a></span></p>
          <p><i class="fab fa-twitter-square"/> <span class="pl-3"> <a v-bind:href=settings.twitter > {{ settings.twitter }}</a></span></p>
          <google-map />
        </div>
      </div>
      <v-dialog/>
    </div>
</template>

<script>

import Settings from '../settings';
import GoogleMap from '../components/GoogleMap.vue';
 
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
      message: '',
      settings: Settings
    };
  },
  methods: {
    dialog: function(title, message){
      this.$modal.show('dialog', {
        title: title,
        text: message,
        buttons: [
          {
            title: 'Close',
            default: true
          }
      ]
      })
    },
    sendContact: function(event){

      var body =  "Name: " + this.name + "<br/>"
      body + "Company: " + this.company + "<br/>"
      body + "Subject: " + this.subject + "<br/>"
      body + "Email: " + this.email + "<br/>"
      body + "Message: " + this.message;

      var email = {
          To : Settings.email,
          From : this.email,
          Subject : "WEB CONTACT - " + this.subject,
          Body : body
      }

      var ejson = JSON.stringify(email);
      fetch(Settings.email_api_url, {
          method: 'POST',
          body: ejson,
          headers:{
            "Content-Type": "application/x-www-form-urlencoded"
          }
      }).then(response => {
        console.log(response.json());
      }).catch(error =>{
        console.log(error);
        this.dialog("Sorry!", "Error when sending mail: " + error.message);
      });

      event.preventDefault();
    }
  }

}

//
</script>
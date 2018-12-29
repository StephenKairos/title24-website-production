<template>
  <div class="home">
    <!-- <h1>{{ title }}</h1> -->
    <!-- <b-row>
      <b-button @click="" variant="danger">Test Email</b-button>
    </b-row> -->
    <b-row class="background-form">
      <b-col md="4" offset-md="7">
        <b-card class="front-form">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <h2>Let's Get Started!</h2>
            <p>Call us @ (510) 402-4513 or fill in the form below for some advice on your latest project.</p>
            <b-form-group id="infoInputGroup1"
                          label-for="infoInput1">
              <b-form-textarea id="textarea1"
                               v-model="form.text"
                               placeholder="How can we help?"
                               :rows="3"
                               :max-rows="6">
              </b-form-textarea>          
            </b-form-group>
            <b-form-group>
              <b-form-input id="nameInput"
                            type="text"
                            v-model="form.name"
                            required
                            placeholder="Your name...">
              </b-form-input>
            </b-form-group>
            <b-form-group>
              <b-form-input id="nameInput"
                            type="text"
                            v-model="form.number"
                            required
                            placeholder="Contact Number...">
              </b-form-input>
            </b-form-group>
            <b-form-group>
              <b-form-input id="emailInput"
                              type="email"
                              v-model="form.email"
                              required
                              placeholder="Email address...">
              </b-form-input>
            </b-form-group>
            <b-button type="submit" variant="danger">Click to Complete Enquiry</b-button>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script> 
import EmailService from '@/services/EmailService'

export default {
  name: 'home',
  data () {
    return {
      title: "Home",
      form: {
        text: '',
        number: '',
        email: '',
        name: ''
      },
      show: true
    }
  },
  mounted() {
    this.sendEmail();
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      // alert(JSON.stringify(this.form));
      alert("Thank you for your request! We will get back to you shortly.");

      sendEmail();
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.number = null;
      this.form.text = '';
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    },
    async sendEmail() {
      await EmailService.sendEmail({
        form: this.form
      });
    }
  }
}
</script>

<style>
.front-form {
  margin: 5%;
}
.background-form {
  background: url("../assets/background-1.jpg");
}

.home {
    margin-top: 50px;
} 
</style>
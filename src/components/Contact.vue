<template>
  <div class="contact">
    <h1>{{ title }}</h1>
    <h4>Request a quote or make an inquiry</h4>
    
    <b-row>
      <b-col md="8" offset="2">
        <p>We welcome the opportunity to talk to you about how we can help with your latest project.  Whether you want a free, no obligation consultation or just a quick chat please give us a call at (510) 402-4513<br/>
        Or complete the form below and we’ll get right back to you.</p>
      </b-col>
    </b-row>

    <b-row class="background-form">
      <b-col md="6" offset-md="3">
        <b-card class="front-form">
          <b-form @submit="sendEmail" v-if="show">
            <h2>Make an enquiry.</h2>
            <h4>We'll reply today - we promise!</h4>
            <b-form-group id="infoInputGroup1"
                          label-for="infoInput1">
              <b-form-textarea id="textarea1"
                               v-model="form.text"
                               placeholder="How can we help? *"
                               required
                               :rows="3"
                               :max-rows="6">
              </b-form-textarea>          
            </b-form-group>
            <b-form-group>
              <b-form-input id="nameInput"
                            type="text"
                            v-model="form.name"
                            required
                            placeholder="Name *">
              </b-form-input>
            </b-form-group>
            <b-form-group>
              <b-form-input id="companyInput"
                            type="text"
                            v-model="form.company"
                            placeholder="Company">
              </b-form-input>
            </b-form-group>
            <b-form-group>
              <b-form-input id="nameInput"
                            type="text"
                            v-model="form.number"
                            required
                            placeholder="Telephone *">
              </b-form-input>
            </b-form-group>
            <b-form-group>
              <b-form-input id="emailInput"
                              type="email"
                              v-model="form.email"
                              required
                              placeholder="Email Address *">
              </b-form-input>
            </b-form-group>
            <p>Fields marked with * are mandatory</p>
            <b-button type="submit" variant="danger">Send</b-button>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import EmailService from '@/services/EmailService'

export default {
  name: 'contact',
  data () {
    return {
      title: "Contact Us",
      show: true,
      form: {
        text: '',
        number: '',
        email: '',
        name: '',
        company: '',
        time: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    resetForm () {
      // evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.number = '';
      this.form.text = '';
      this.form.company = '';
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    },
    sendEmail() {
      var time = new Date();
      this.form.time = time.toString();

      EmailService.sendHomeEmail({
        text: this.form.text,
        name: this.form.name,
        number: this.form.number,
        email: this.form.email,
        company: this.form.company,
        time: this.form.time
      });

      alert("Thank you for your request! We will get back to you shortly.");

      this.resetForm();
    }
  }
}
</script>

<style>
.contact {
    margin-top: 50px;
} 
</style>
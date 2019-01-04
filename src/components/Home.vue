<template>
  <div class="home">
    <!-- <h1>{{ title }}</h1> -->
    <!-- <b-row>
      <b-button @click="" variant="danger">Test Email</b-button>
    </b-row> -->

    <!-- Form Section -->
    <b-row class="background-form">
      <b-col md="4" offset-md="7">
        <b-card class="front-form">
          <b-form @submit="sendEmail" v-if="show">
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
                            type="tel"
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

    <!-- Services Section -->
    <b-row>
      <h2>Energy calculation services from the experts</h2>
    </b-row>
    <b-row>
      <h3>We offer an accurate,  affordable and fast compliance process across all cities in California.</h3>
    </b-row>
    <b-row>
      <b-col md="4">
        <h3>Quick Turn Around</h3>
        <p>We specialize in a fast and reliable service with a turnaround time of 1 to 2 business days from the moment you  give us your notice to proceed.</p>
      </b-col>
      <b-col md="4">
        <h3>Flat Fee</h3>
        <p>Enjoy our affordable flat fee of $300 on all of your residential projects from new construction, remodel and  addition  up to 2000 square feet.</p>
      </b-col>
      <b-col md="4">
        <h3>Guaranteed Service</h3>
        <p>Experience our worry-free guarantee that your Title 24 calculations will be accepted by the building department.</p>
      </b-col>
    </b-row>

    <!-- Steps Section -->

    <!-- Info Section -->

    <!-- Video Section -->
  </div>
</template>

<script> 
import EmailService from '@/services/EmailService'

export default {
  name: 'home',
  data () {
    return {
      title: "Home",
      show: true,
      form: {
        text: '',
        number: '',
        email: '',
        name: '',
        time: ''
      },
      testget: 'pending...'
    }
  },
  mounted () {
    this.test_get()
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      // alert(JSON.stringify(this.form));
      // alert("Thank you for your request! We will get back to you shortly.");
    },
    resetForm () {
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.number = '';
      this.form.text = '';
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
        company: "N/A",
        time: this.form.time
      });

      alert("Thank you for your request! We will get back to you shortly.");

      this.resetForm();
    },
    async test_get() {
      const res = await EmailService.getHomeEmail();
      this.testget = res.data;
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
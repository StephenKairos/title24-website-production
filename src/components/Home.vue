<template>
  <div class="home">
    <!-- <h1>{{ title }}</h1> -->
    <!-- <b-row>
      <b-button @click="" variant="danger">Test Email</b-button>
    </b-row> -->

    <!-- Form Section -->
    <b-row class="background-form">
      <b-col md="4" offset-md="7">
        <b-card class="section">
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
    <div class="section">
      <b-row>
        <b-col md="12">
          <h2>Energy calculation services from the experts</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="12">
          <p>We offer an accurate,  affordable and fast compliance process across all cities in California.</p>
        </b-col>
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
          <p>Experience our worry-free guarantee that your Title 24 calculations will be accepted by the building department. </p>
        </b-col>
      </b-row>
    </div>

    <!-- Steps Section -->
    <div class="section">
      <b-row class="subtitle-color">
        <b-col md="12">
          <h2>Get your Energy Report in 4 easy steps</h2>
        </b-col>
      </b-row>
      <b-row class="section-color">
        <b-col class="column-padding" md="3">
          <h3>let us know</h3>
          <img src="../assets/order-plans.jpg"/>
          <div>
            <b-btn v-b-toggle="'collapse1'" variant="primary">Find out more...</b-btn>
            <b-collapse id="collapse1" class="mt-2">
              <b-card>
                <p class="card-text">The first step is to give us a call or send us an email and let us know how we can be of help. You may also fill up an enquiry  or order form. We will answer your questions & concerns and will provide you all the information you need to get you started right away.</p>
              </b-card>
            </b-collapse>
          </div>
        </b-col>
        <b-col class="column-padding" md="3">
          <h3>email/upload plans</h3>
          <img src="../assets/order-plans.jpg"/>
          <div>
            <b-btn v-b-toggle="'collapse2'" variant="primary">Find out more...</b-btn>
            <b-collapse id="collapse2" class="mt-2">
              <b-card>
                <p class="card-text">You can send us your drawings and plans either by emailing us at service@californiatitle24.net or by <a to="contact">uploading them through our order form.</a></p>
              </b-card>
            </b-collapse>
          </div>
        </b-col>
        <b-col class="column-padding" md="3">
          <h3>receive Title 24 report</h3>
          <img src="../assets/order-plans.jpg"/>
          <div>
            <b-btn v-b-toggle="'collapse3'" variant="primary">Find out more...</b-btn>
            <b-collapse id="collapse3" class="mt-2">
              <b-card>
                <p class="card-text">Once we receive your plans and drawings, we will quickly prepare your report and you will be given an ETA which is typically within 24 hours. You will be notified by phone and email when your Title 24 calculations are ready. We will promptly let you know f we need more information along the process. Simply choose how you want to pay us and we will email you a signed & completed report, ready for submission .</p>
              </b-card>
            </b-collapse>
          </div>
        </b-col>
        <b-col class="column-padding" md="3">
          <h3>print 2 copies</h3>
          <img src="../assets/order-plans.jpg"/>
          <div>
            <b-btn v-b-toggle="'collapse4'" variant="primary">Find out more...</b-btn>
            <b-collapse id="collapse4" class="mt-2">
              <b-card>
                <p class="card-text">After you have paid and received your calculations in electronic files via e-mail in pdf format with signatures, you will need to print out two (2) copies. These printed Title 24 reports and calculations  are what you will need to submit to the building department. Upon request, we can also mail you a hard copy of your Title 24 report via first-class mail.</p>
              </b-card>
            </b-collapse>
          </div>
        </b-col>
      </b-row>
    </div>

    <!-- Info Section -->
    <div class="section">
      <b-row>
        <b-col md="12">
          <h2>Energy compliance report specialists at your service</h2>
          <p>We have been preparing approved Title 24 calculations and reports for Architects, Contractors, Engineers, Designers and Homeowners for over a decade. The experience, skill, and quality of service that we have provided over these years make us the expert and go to consultants in the field. The moment you call or email us, one of our qualified energy specialists will work with you closely until you get the guaranteed approval of your report by the city. All of these will be accomplished within the shortest amount of time, normally within hours and not days. You will find that we have the most affordable rate in the industry that you can find. We have everything you need for a seamless process in complying with the strict California Building Energy Efficiency standards:

          We serve all counties and cities in California. We communicate diligently with each of our client to understand their specific need in order to minimize and eliminate project risk. Come and join our satisfied and happy customers, many of who whom have become our repeat clients over the years due to our bar none service and exemplary delivered results. Others have gone to give us referrals, reflecting the quality of trust that have been built over these years with them.

          WHAT YOU CAN EXPECT FROM US:

          Fast turnaround, which is typically within 24 -48 hours.
          Guaranteed approved compliance report by the building department through a quick plan-check process.
          You will be provided with energy compliance options in order to save you thousands of dollars in project costs.
          You will be guided through the step-by-step approval process and be advised on city specific requirements.
          
          Energy Calculations

          When California experienced one of its energy crisis, new regulations for energy conservation standards for all of the new residential and new nonresidential buildings in 1977 were established and adopted by the California Energy Commission, which became effective in July of 1978. These would also include additions and alterations to existing buildings be subject to meet the minimum standards of the California Code of Regulations. Through the years, amendments were made and building regulations were re-adopted whichwill remain in effect with an ongoing strict and technical rigidity.

          Due to these standards, sustaining natural gas and electricity has been contributory in preventing the state to construct more power plants. According to the California Energy Commission, “due to the energy efficiency standards, Californians have saved more than $74 billion in reduced electricity bills since 1977.

          As a result of the process in calculating the energy savings correlated to a more efficient house or building and with the process of replacing old appliances with newer and more efficient ones as well as replacing old buildings with new architecture, California’s per capita electricity use remain flat over the years while the use of the rest of the country continue to accelerate.”

          Compliance Report Process

          We only have one mission and that is for you to get approved quickly and cost-effectively. Once you send us your project drawings either through email, website submission or through express delivery, we will start the work right away. Sometimes, client wants to meet us in person specially if they are within close proximity to our location and we would be glad to meet with them. Once the report is completed, it will be signed and delivered to you in PDF format. This is now ready for submission to the building department in the city that you are working with. Through each progress, we will be available to answer any questions, clarifications and updates from you.

          Our Satisfied Clients

          We value each client and service them with utmost competence. Knowing that this crucial part of the process determines the future of the project at hand, we know where our customers are coming from. And since many of them have come for us on their subsequent projects, we are proud to share with you some of their testimonials.</p>
        </b-col>
      </b-row>
    </div>
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
.section {
  margin: 5%;
}

.subtitle-color {
  background-color: #E5E5E5;
}

.section-color {
  background-color: #EDEDED;
}

.column-padding {
  padding: 1%;
}

.background-form {
  background: url("../assets/background-1.jpg");
}

.home {
    margin-top: 50px;
} 
</style>
<template>
  <div class="order">
    <h1>{{ title }}</h1>

    <b-row class="order-row">
      <b-col md="2" offset-md="3" align-self="center">
        <img src="../assets/order-plans.jpg">
      </b-col>
      <b-col md="4" align-self="center">
        <p class="light-text" align="left">Some of our clients want to have a quick chat, while others want to go ahead and fill in the form below to expedite the process. We will  accommodate whatever method you choose and are comfortable with. Our goal is for you to be able to submit your Title 24 report in the shortest amount of time possible and in the most efficient way.</p>
        <p class="light-text" align="left">If you have any questions, you may always call us at (510) 402-4513.</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'order',
  data () {
    return {
      title: "Order Today"
    }
  }
}
</script>

<style>
img {
  margin: 10px;
}
.light-text {
  margin: 10px;
  color: #f8f9fa;
}
.order-row {
  background-color: #0088cc;
}
.order {
    margin-top: 50px;
} 
</style>
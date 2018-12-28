<template>
  <div class="footer">
    <!-- Navbar Code -->
    <b-navbar style="background-color: #0088cc;" toggleable="md" type="dark">
      <!-- <b-navbar-brand>{{ title }}</b-navbar-brand> -->
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-text center>© All rights reserved. Made with ❤️ by S. Reyes</b-nav-text>
        </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'footer',
  props: {
    title: String
  }
}
</script>

<style>
.footer {
  background-color: #0088cc;
  margin-top: 50px;
}
</style>
<template>
  <div class="header">
    <!-- Navbar Code -->
    <b-navbar style="background-color: #0088cc" toggleable="md" type="dark" fixed="top">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="/">{{ title }}</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <!-- Right aligned nav items -->
        <b-navbar-nav right class="ml-auto">
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="order">Order Today</b-nav-item>
            <b-nav-item to="contact">Let's Talk!</b-nav-item>
            <b-nav-item to="questions">Questions?</b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'header',
  props: {
    title: String
  }
}
</script>

<style>
.header-color {
  background-color: #0088cc;
}
</style>
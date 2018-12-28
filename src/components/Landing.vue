<template>
  <div class="landing">
    <h1>{{ title }}</h1>
    <h5>{{ subtitle }}</h5>
  </div>
</template>

<script>
export default {
  name: 'posts',
  props: {
    title: String,
    subtitle: String
  }
}
</script>

<style>
.landing {
    margin-top: 80px;
} 
</style>
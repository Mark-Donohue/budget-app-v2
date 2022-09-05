<template>
  <div id="navigation-bar">
    <router-link to="/" id="home-link">
      <h1>Budget App</h1>
    </router-link>
    <router-link to="/about" id="about-link">
      <button>About</button>
    </router-link>
  </div>


</template>

<script>
  export default {
    name: 'NavigationBar',
  }
</script>

<style scoped>

</style>
<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div id="navigation-bar">
    <nav class="navbar navbar-expand navbar-light fixed-top">
      <div class="container">
        <router-link to="/" class="navbar-brand"><i class="fa fa-fw fa-home"></i>Home</router-link>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/register" class="nav-link">Sign Up</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'NavigationBar',
  }
</script>

<style scoped>

</style>
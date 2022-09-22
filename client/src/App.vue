<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <NavigationBar/>
  <router-view/>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
  export default {
    name: "App",
    components: { NavigationBar }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');

  * {
    box-sizing: border-box;
  }

  body {
    background: #1C8EF9 !important;
    min-height: 100vh;
    display: flex;
    font-weight: 400;
    font-family: 'Fira Sans', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, label, span {
    font-weight: 500;
    font-family: 'Fira Sans', sans-serif;
  }

  body, html, #app, #root, .auth-wrapper {
    width: 100%;
    height: 100%;
  }

  #app {
    text-align: center;
  }

  .navbar-light {
    background-color: #FFFFFF;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  }

  .card {
    background: #FFFFFF;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    position: relative;
    top: 80px;
    border-radius: 15px;
    margin: auto;
    width: 90%;
    height: 80%;
  }

  .custom-control-label {
    font-weight: 400;
  }

  .forgot-password,
  .forgot-password a {
    text-align: right;
    font-size: 13px;
    padding-top: 10px;
    color: #7F7D7D;
    margin: 0;
  }

  .forgot-password a {
    color: #167BFF
  }
</style>

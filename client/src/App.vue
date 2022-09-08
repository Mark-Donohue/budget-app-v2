<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <NavigationBar/>
  <router-view/>
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

  .auth-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
  }

  .auth-inner {
    border-radius: 15px;
    width: 450px;
    margin: auto;
    background: #FFFFFF;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px, 55px, 45px, 55px;
  }

  .auth-wrapper label {
    padding-left: 5px;
  }

  .auth-wrapper .form-group {
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .auth-wrapper .form-control:focus {
    border-color: #167BFF;
    box-shadow: none;
  }

  .auth-wrapper h3 {
    text-align: center;
    margin: 0;
    line-height: 1;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .auth-wrapper p {
    text-align: center;
    margin: 0;
    line-height: 1;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
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

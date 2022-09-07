<template>
  <div class="auth-wrapper">
    <div class="auth-inner">
      <h3>Welcome Back!</h3>
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control"/>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control"/>
      </div>
      <div class="btn-login">
        <button class="btn btn-primary btn-block">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LoginView',
  };
</script>

<style scoped>
  .auth-wrapper .btn-login {
    text-align: center;
    padding-bottom: 5px;
  }

  .auth-wrapper .btn {
    width: 40%;
  }
</style>

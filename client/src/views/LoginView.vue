<template>
  <div class="auth-wrapper">
    <div class="auth-inner">
      <form @submit.prevent="handleSubmit">
        <h3>Welcome Back!</h3>
        <div class="form-group">
          <label>Email</label>
          <input type="email" class="form-control" v-model="email"/>
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" v-model="password"/>
        </div>
        <div class="btn-login">
          <button class="btn btn-primary btn-block">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LoginView',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async handleSubmit() {
        // Axios back-end call

        this.$router.push('/');
      }
    }
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

<template>
  <div class="auth-wrapper">
    <div class="auth-inner">
      <form @submit.prevent="handleSubmit">
        <h3>Welcome Back!</h3>
        <div class="form-group">
          <i class="fa fa-user" aria-hidden="true"></i>
          <label>Email</label>
          <input type="email" class="form-control" v-model="email"/>
        </div>
        <div class="form-group">
          <i class="fa fa-lock" aria-hidden="true"></i>
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
  .auth-wrapper h3 {
    text-align: center;
    margin: 0;
    line-height: 1;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .auth-wrapper .btn-login {
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
    width: 100%;
  }

  .auth-inner {
    position: relative;
    top: 30px;
    border-radius: 15px;
    width: 600px;
    margin: auto;
    background: #FFFFFF;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px, 55px, 45px, 55px;
  }

  .auth-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
    margin: auto;
  }

  .auth-wrapper label {
    padding-left: 5px;
  }

  .auth-wrapper .form-group {
    padding-bottom: 3px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .auth-wrapper .form-control:focus {
    border-color: #167BFF;
    box-shadow: none;
  }
</style>

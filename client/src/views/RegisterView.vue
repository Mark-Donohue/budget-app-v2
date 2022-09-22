<template>
  <div class="auth-wrapper">
    <div class="auth-inner">
      <form @submit.prevent="handleSubmit">
        <h3>Welcome!</h3>
        <p>Please enter your contact information to sign up.</p>
        <div class="form-group">
          <label>First Name</label>
          <input type="text" class="form-control" v-model="firstName"/>
        </div>
        <div class="form-group">
          <label>Last Name</label>
          <input type="text" class="form-control" v-model="lastName"/>
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" class="form-control" v-model="email"/>
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" v-model="password"/>
        </div>
        <div class="form-group">
          <label>Confirm Password</label>
          <input type="password" class="form-control" v-model="passwordConfirm"/>
        </div>
        <div class="btn-login">
          <button class="btn btn-primary btn-block">Sign Up</button>
        </div>
      </form>
      <div class="login-redirect">
        <p>Already registerd? <a href="/login">Sign in here.</a></p>
        <p>Forgot password? <a href="/forgot">Reset password here.</a></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RegisterView',
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirm: ''
      }
    },
    methods: {
      async handleSubmit() {
        // const data = {
        //   firstName: this.firstName,
        //   lastName: this.lastName,
        //   email: this.email,
        //   password: this.password,
        //   passwordConfirm: this.passwordConfirm
        // }

        // Axios back-end call

        this.$router.push('/login');
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
    padding-bottom: 5px;
  }

  .auth-wrapper p {
    text-align: center;
    margin: 0;
    line-height: 1;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .auth-wrapper .btn-login {
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 5px;
    width: 100%;
  }

  .login-redirect {
    text-align: center;
  }

  .auth-inner {
    position: relative;
    top: 80px;
    border-radius: 15px;
    width: 450px;
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

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
</style>

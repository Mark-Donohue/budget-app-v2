<template>
  <div class="card">
    <div class="card-body">
      <h3>Welcome!</h3>
      <div class="btn-login">
        <button class="btn btn-primary btn-block">Build a Budget</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  async created() {
    // Axios call to get currently authenticated user
  },
};
</script>

<style scoped>
.auth-wrapper .btn-login {
  text-align: center;
  padding-bottom: 5px;
}
</style>

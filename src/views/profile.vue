<template>
  <div class="sign-up-form">
    <h1>Sign Up Now</h1>
    <form>
      <input type="email" class="input-box" placeholder="Your Email">
      <input type="password" class="input-box" placeholder="Your Password">
      <p><span><input class='Checkbox' type="checkbox"></span> I agree to the terms of services</p>
      <button type="button" class="signup-box">Sign up</button>
      <hr>
      <p class="or">OR</p>
      <button type="button" class="facebook-btn">Login with Facebook</button>
      <p>Do you have an account?<a href="#"> Sign in</a></p>
    </form>
  </div>
</template>

<style lang="scss">
.sign-up-form{
  width:500px;
  box-shadow: 0 0 3px 0 rgba(0,0,0,0.3);
  background:#fff;
  padding: 20px;
  margin:8% auto 0;
  text-align: center;
}
.sign-up-form h1{
  color: #1c8adb;
  margin-bottom:30px;
}

.input-box{
  border-radius: 20px;
  padding: 4px;
  margin: 10px 0;
  width: 100%;
  border: 1px solid #999;
  outline: none;
}

button{
  color:#fff;
  width:100%;
  padding:10px;
  border-radius: 20px;
  font-size: 15px;
  margin: 10px 0;
  border: none;
  outline: none;
  cursor: pointer;
}
.signup-box{
  background-color: #1c8adb;
}
.facebook-btn{
  background-color: #21afde;
}
a{
  text-decoration: none;
}
hr{
  margin-top: 20px;
  width: 80%;
}
.or{
  background: #fff ;
  width:50px;
  margin: -34px auto 10px;
}
</style>
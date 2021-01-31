<template>
  <div class="sign-in-form">
    <h1>Sign In Here</h1>
    <form>
      <input type="text" class="input-box" v-model="username" placeholder="Your Username">
      <input type="password" class="input-box" v-model="password" placeholder="Your Password">
      <button type="button" @click="login" class="signin-box">Sign in</button>
      <hr>
      <p class="or">OR</p>
      <button type="button" class="facebook-btn">Login with Facebook</button>
      <p>Don't have an account yet?<br>
      <a href="#"> Sign Up</a></p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
      return {
        password:'',
       }
    },
  computed: {
    username: {
      get() {
        return this.$store.state.username
      },
      set(username) {
        this.$store.commit('setUsername', username)
      }
    }
  },


  methods:{
      login(){
    if(this.username===''){
        alert("username cannot be empty");
    }
    else {
        this.$router.push({
          name: "Profile",
          params:{
         inputedname: this.username,
          }
        });
      }
    }
    },
  name: 'Signin',
}
</script>

<style lang="scss">
.sign-in-form{
  width:500px;
  box-shadow: 0 0 3px 0 rgba(0,0,0,0.3);
  background:#fff;
  padding: 20px;
  margin:8% auto 0;
  text-align: center;
}
.sign-in-form h1{
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
.signin-box{
  background-color: #1c8adb;
}
.facebook-btn{
  background-color: #21afde;
}
a{
  text-decoration: none;
}
hr{
  margin-top: 26px;
  width: 80%;
}
.or{
  background: #fff ;
  width:50px;
  margin: -40px auto 10px;
}
</style>
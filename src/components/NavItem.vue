<template>
<div>
 <div class='topNav'>
   <div class='brand'>
        <router-link to="/">Tickets</router-link> | 
   </div>
   <div class='info'>
        <router-link to="/signin" v-if = "isnotLogin() && homepage()">Sign in</router-link>
        <router-link to="/profile" v-if = "!isnotLogin() && signinpage() ">Welcome!  {{this.$store.state.username}}</router-link>
         <router-link to="/profile" v-if = "!isnotLogin() && homepage()">Welcome!  {{this.$store.state.username}} <p><i class="fa fa-user-circle"></i></p></router-link>

  </div>
  <!-- <div class='info'>
        <span v-if="user"> {{username}}
            <el-button type="warning"  @click="login"></el-button>
        </span>
        <el-button v-else type="success" @click="login">Sign in</el-button>
  </div> -->
 </div> 
    <router-view/> 
 </div>
</template>

<script>
export default {
 /* computed: {
   islogin () {
  return this.$store.state.username
  }
 } */
methods:{
  isnotLogin(){
    if(this.$store.state.username == ""){
      return true
    }
    else 
    return false
  },
  homepage(){
    if(this.$router.currentRoute.name == "Home")
    return true
    else
    return false
  },
  signinpage(){
    if(this.$router.currentRoute.name == "Signin")
    return false
  }
}

}
</script>

<style scoped lang="scss">
.topNav {
  display: flex;
  justify-content: space-between;
  background-color: #3944a1;
  height: 60px;
  margin-bottom: 30px; 
  //box-shadow: 10px 1px 10px rgba(10,100,100,.6); 
}
.brand{
  font-style: italic;
  font-weight: bold;
}
.info{
  font-size: x-large;
}
</style>
<template>
<div>
 <div class='topNav'>
   <div class='brand'>
        <router-link to="/TicketHub"><img src="../assets/img/tickets1.svg" width="170px" height="80px" alt="" >Concerts </router-link>
   </div>
   <div class='info'>
        <router-link id="userinfo" class="signin" to="/signin" v-if = "isnotLogin() && homepage()">Sign in<p>
           <i class="fa fa-user-circle"></i>
         </p></router-link>
        <router-link :to="'/profile/'+inputedname" v-if = "!isnotLogin() && signinpage() ">Welcome!  {{this.$store.state.username}}</router-link>
        <router-link  id='userinfo' to="/profile" v-if = "!isnotLogin() && homepage()">{{this.$store.state.username}} <p>
           <i class="fa fa-user-circle"></i>
         </p>  
        </router-link>
  </div>
 </div> 
    <router-view/> 
 </div>
</template>

<script>
export default {
methods:{
  //method to check whether the user is logged in or not
  isnotLogin(){
    if(this.$store.state.username == ""){
      return true
    }
    else 
    return false
  },
  //method to check whether in home page or not
  homepage(){
    if(this.$router.currentRoute.name == "Home")
    return true
    else
    return false
  },
  //method to check whether in signin page or not
  signinpage(){
    if(this.$router.currentRoute.name == "Signin")
    return false
  }
}
}
</script>

<style lang="scss">
.topNav {
  display: flex;
  justify-content: space-between;
  background-size: 100% 100%;
  background-color: #102038;
  box-shadow: 0 0 3px 0 rgba(56, 54, 54, 0.3);
  a {
    color: #fafbfc;
    font-size: 2rem;
     text-decoration: none;
   /*  &.router-link-exact-active :hover{
      color: #79aee2;
    } */
  }
 // box-shadow: 10px 1px 20px  rgba(133, 134, 134, 0.6); 
}
.brand{
  padding-top: 12px;
  padding-left: 30px ;
}
.signin{
  font-size: 1.5rem;
  padding:10px;
  font-weight: light;
}
#userinfo{
  display: flex;
  font-size:1.3rem;
  padding-top: 30px;
  padding-right: 30px;
}
i{
  margin-left: 10px;
}

</style>
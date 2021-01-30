<template>
<div>
 <div class='topNav'>
   <div class='brand'>
        <router-link to="/">Tickets</router-link> | 
   </div>
   <div class='info'>
        <router-link to="/signin">Sign in</router-link>
  </div>
 </div> 
    <router-view/> 
 </div>
</template>

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
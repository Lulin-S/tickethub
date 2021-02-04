<template>
<div>
  <div class="main">
    <h3>Hi! {{this.$store.state.username}} <br>{{ msg }}</h3>
    <div class='collapsebox'>
    <div>
      <span v-b-toggle.collapse-1><i class="fa fa-ticket"></i>My tickts</span>
      <b-collapse id="collapse-1" class="mt-2">
          <p><a href="#"> Show the coming events</a></p>
          <p><a href="#"> Show the earlier events</a></p>
      </b-collapse>
    </div>

    <div>
      <span v-b-toggle.collapse-2> <i class="fa fa-user-circle"></i>My profile</span>
      <b-collapse id="collapse-2" class="mt-2">
          <p><a href="#">Update information</a></p>
          <p><a href="#">Change the pay way</a></p>
          <p><a href="#">My presentcard</a></p>
      </b-collapse>
    </div>

    <div>
      <span v-b-toggle.collapse-3><i class="fa fa-cog"></i>Setting</span>
      <b-collapse id="collapse-3" class="mt-2">
          <p><a href="#">Manage preference</a></p>
          <p><a href="#"> Show the earlier events</a></p>
      </b-collapse>
    </div>
 </div>
</div>
      <FooterPage></FooterPage>
  </div>
</template>

<script>
import FooterPage from 'components/footer.vue'
  export default {
    name:'Profile',
    data () {
      return {
        msg: 'Welcome to the your page!',
      }
    },
  components:{
    FooterPage
  }
  }
</script>

<style scoped lang="scss">
.main{
  padding:100px;
}
.collapsebox{
  margin-top: 60px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 60px;
}

span{
  font-size: 1.5rem;
}
a{
  color: rgb(49, 48, 48);
}

a:hover{
  color: rgb(108, 199, 226);
}
</style>
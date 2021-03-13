<template>
  <div>
    <div class="topNav">
      <div class="brand">
        <router-link to="/TicketHub">TicketHub </router-link>
        <router-link to="/TicketHub">Concerts </router-link>
      </div>
      <div class="info">
        <router-link
          id="userinfo"
          class="signin"
          to="/signin"
          v-if="isnotLogin() && homepage()"
          >Sign in
          <p>
            <i @click="Jump" class="fa fa-user-circle"></i></p
        ></router-link>
        <router-link
          :to="'/profile/' + inputedname"
          v-if="!isnotLogin() && signinpage()"
          >Welcome! {{ this.$store.state.username }}</router-link
        >
        <router-link
          id="userinfo"
          to="/profile"
          v-if="!isnotLogin() && homepage()"
          >{{ this.$store.state.username }}
          <p>
            <i class="fa fa-user-circle"></i>
          </p>
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    //method to check whether the user is logged in or not
    isnotLogin() {
      if (this.$store.state.username == '') {
        return true
      } else return false
    },
    //method to check whether in home page or not
    homepage() {
      if (this.$router.currentRoute.name == 'Home') return true
      else return false
    },
    //method to check whether in signin page or not
    signinpage() {
      if (this.$router.currentRoute.name == 'Signin') return false
    }
  }
}
</script>

<style lang="scss">
.topNav {
  display: flex;
  justify-content: space-between;
  background-size: 100% 100%;
  //background-color: #f59c48;
  //box-shadow: 0 0 3px 0 rgba(56, 54, 54, 0.3);
  a {
    color: #fafbfc;
    font-size: 2.5rem;
    text-decoration: none;
  }
  a:hover {
    color: #75428a;
  }
  // box-shadow: 10px 1px 20px  rgba(133, 134, 134, 0.6);
}
.brand {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 30px;
  width: 450px;
  //background-image: url('../assets/img/concertsbanner1.jpg');
}
.brand :nth-child(2) {
  font-size: 2rem;
  padding-top: 8px;
}
.signin {
  font-size: 2rem;
  padding: 10px;
  font-weight: light;
}
#userinfo {
  display: flex;
  font-size: 1.3rem;
  align-items: center;
}
i {
  margin: 22px 60px 0 10px;
}
</style>

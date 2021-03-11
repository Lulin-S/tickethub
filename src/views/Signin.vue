<template>
  <!-- creat a sign in form -->
  <div>
    <div>
      <div class="sign-in-form">
        <h1>Sign In Here</h1>
        <form>
          <input
            type="text"
            class="input-box"
            v-model="username"
            placeholder="Your Username"
            required
          />
          <input
            type="password"
            class="input-box"
            v-model="password"
            placeholder="Your Password"
            required
          />
          <button type="button" @click="login" class="signin-box">
            Sign in
          </button>
          <hr />
          <p class="or">OR</p>
          <button type="button" class="facebook-btn">
            Login with Facebook
          </button>
          <p>Don't have an account yet?<br /></p>
          <b-button v-b-toggle.sidebar-right>Sign Up</b-button>
        </form>
      </div>
      <div>
        <b-sidebar id="sidebar-right" title="Register" right shadow>
          <div class="px-3 py-2">
            <form>
              <h5>Please input you email</h5>
              <input
                type="email"
                class="input-box"
                v-model="creatEmail"
                placeholder="Your Username"
                required
              />
              <h5>Please input you password</h5>
              <input
                type="password"
                class="input-box"
                v-model="creatPassword"
                placeholder="Your Password"
                required
              />
              <span>
                * The maximum length of the password is 9 characters
              </span>

              <button type="button" @click="login" class="signin-box">
                Confirm
              </button>
            </form>
          </div>
        </b-sidebar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      creatPassword: '',
      creatEmail: ''
    }
  },
  //watch function for monitoring signup password length
  watch: {
    creatPassword(password1, password2) {
      if (password1.length > 9 || password2.length > 9)
        alert('Please set a password with maximum length of 9 characters!')
    }
  },
  //Vuex data update
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

  methods: {
    login() {
      if (this.username === '') {
        alert('username cannot be empty')
      } else {
        this.$router.push({
          name: 'Profile',
          params: {
            inputedname: this.username
          }
        })
      }
    }
  },
  name: 'Signin'
}
</script>

<style scoped lang="scss">
$white: rgb(252, 250, 250);
.sign-in-form {
  width: 500px;
  height: 800px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.3);
  background: $white;
  padding: 20px;
  margin: 8% auto 60px;
  text-align: center;
}
.sign-in-form h1 {
  color: #1c8bdbd3;
  margin-bottom: 30px;
}

.input-box {
  border-radius: 20px;
  padding: 4px;
  margin: 10px 0;
  width: 100%;
  border: 1px solid #999;
  outline: none;
}

button {
  color: $white;
  width: 100%;
  padding: 10px;
  border-radius: 18px;
  font-size: 15px;
  margin: 10px 0;
  border: none;
  outline: none;
  cursor: pointer;
}
.signin-box {
  background-color: #1c8adb;
}
.facebook-btn {
  background-color: #21afde;
}
a {
  text-decoration: none;
}
hr {
  margin-top: 26px;
  width: 80%;
}
.or {
  background: $white;
  width: 50px;
  margin: -30px auto 10px;
}
span {
  font-size: x-small;
  font-weight: light;
  color: red;
}
</style>

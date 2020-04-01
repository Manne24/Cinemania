export default {
  template: `
      <form class="login" @submit.prevent="performLogin">
        <!-- <h2>Login</h2> -->
        <label>Email :</label><br>
        <input v-model="email" required type="email" placeholder="email..."><br>
        
        <label>Password :</label><br>
        <input v-model="password" required type="password" placeholder="password..."><br>
        <button>Login</button><br><br>
        <p v-if="errorLogin" :style="{color: 'red'}">Wrong username or password</p>
        
        <br><p>Don't have an account?</p>
        <button @click="goToSignUp">Click here</button>
      </form>
    `,
  data() {
    return {
      email: '',
      password: '',
      errorLogin: false
    }
  },
  methods: {
    async performLogin() {

      const credentials = 'email=' +
        encodeURIComponent(this.email)
        + '&password=' +
        encodeURIComponent(this.password)

      let response = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: credentials
      });

        if(response.url.includes('error')) {
          console.log('Wrong email/password');
          this.errorLogin = true
        }
        else {
          this.$router.push('/mypage');
          
          let user = await fetch('/auth/whoami')
          user = await user.json()
          this.$store.commit('setUser', user)
          console.log('Successfully logged in:', user)
        }
    },

    goToSignUp() {
      location.href = "/register";

    }
  }
}
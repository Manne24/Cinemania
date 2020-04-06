export default {
  template: `
    <div class="login-page">
      <div class="form">
        <div class="login-header">
          <h3>LOGIN</h3>
          <p>Please enter your credentials to login.</p>
        </div>
        <form class="login" @submit.prevent="performLogin">
          <input v-model="email" required type="email" placeholder="Email address"><br>
          
          <input v-model="password" required type="password" placeholder="Password"><br>
          <button>Login</button><br><br>
          <p v-if="errorLogin" :style="{color: 'red'}">Wrong username or password</p>
          
          <br><p>Don't have an account?</p>
          <button @click="goToSignUp">Click here</button>
        </form>
      </div>
    </div>
  
      
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
      
          
          let user = await fetch('/auth/whoami')
          user = await user.json()
          this.$store.commit('setUser', user)
          console.log('Successfully logged in:', user)

          this.$router.push('/mypage');
        }
    },

    goToSignUp() {
      location.href = "/register";

    }
  }
}
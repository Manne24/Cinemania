export default {
    template: `
      <form @submit.prevent="performLogin">
        <h2>Login</h2>
        <label>Email :</label>
        <input v-model="email" required type="email" placeholder="email...">
        
        <label>Password :</label>
        <input v-model="password" required type="password" placeholder="password...">
        <button>Login</button>

        <p>Don't have an account?</p>
        <button @click="goToSignUp">Click here</button>
      </form>
    `,
    data() {
      return {
        email: '',
        password: ''
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
        }
        else {
          this.$router.push('/mypage');
          
          let user = await fetch('/auth/whoami')
          user = await user.json()
          console.log('Successfully logged in:', user)
        }
        },

      goToSignUp(){
        location.href ="/register";

      }
    }
  }
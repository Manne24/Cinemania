export default {
    template: `
      <div>
        <label>Email :</label>
        <input v-model="email" type="text" placeholder="email...">
        
        <label>Password :</label>
        <input v-model="password" type="password" placeholder="password...">
        <button @click="performLogin">Login</button>

        <p>Don't have an account?</p>
        <button @click="goToSignUp">Click here</button>

      </div>
    `,
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async performLogin() {
  
        this.email = ''
        this.password = ''
      },

      goToSignUp(){
        location.href ="/signup";

      }
    }
  }
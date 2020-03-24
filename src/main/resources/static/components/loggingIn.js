export default {
    template: `
      <div>
        <label>Email :</label>
        <input v-model="email" type="text" placeholder="email...">
        
        <label>Password :</label>
        <input v-model="password" type="password" placeholder="password...">
        <button @click="performLogin">Login</button>
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
  
        // const credentials = `email=${
        //   encodeURIComponent(this.email)
        // }&password=${
        //   encodeURIComponent(this.password)}`
  
        // let loginRes = await fetch("/rest/users", {
        //   method: "POST",
        //   body: credentials,
        //   headers: {
        //     "Content-Type": "application/x-www-form-urlencoded"
        //   }
        // });
  
        //console.log(loginRes);

        this.email = ''
        this.password = ''
      }
    }
  }
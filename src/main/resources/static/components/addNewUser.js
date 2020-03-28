export default {
    template: `

    <div class="addUser" >
      <h1>Sign up</h1><br>
      <br>
      <p>Please fill in this form to create an account.</p> 
      <hr>
      <form @submit.prevent="submitNewUser">
        <label>User name :</label>
        <input v-model="userName" type="text" required
        placeholder="Enter user name ...">
        
        <label>Email :</label>
        <input v-model="email" type="text" required
        placeholder="Enter user email ...">
        
        <label>Password :</label>
        <input v-model="password" type="password" required
        placeholder="Enter user password ...">
        
        <label>Repeat Password :</label>
        <input v-model="password2" type="password" required 
        placeholder="Repeat Password ..."> 
        
        <label>
        <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
        </label>

        <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Cinemania Privacy Policy</a>.</p>

        <div class="clearfix">
          <button type="reset" class="cancelbtn">Cancel</button>
          <button type="submit" class="signupbtn">Submit</button>
        </div>
        
      </form>
    </div>

    `,
    data() {
     return  {
       userName: '',
       email: '',
       password: ''
     }
    },
    computed: {
     users() {
       return this.$store.state.users
     }
    },

    methods: {
        async submitNewUser() {
            if(!this.userName.trim() &&
                !this.email.trim() &&
                !this.password.trim())
                {
                  return
                }
    
            let user = {
              name: this.userName,
              email: this.email,
              password: this.password
            }
           
            let result = await fetch('/rest/users', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(user)
            })
           
            result = await result.json()
    
            this.$store.commit('appendUser', result)
    
            this.userName = ''
            this.email = ''
            this.password = ''
         }
       }
     }
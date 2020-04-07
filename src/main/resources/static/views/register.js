export default {
    template: `
      <div class="signup-page">
        <div class="signup-form">
          <div class="signup-header">
            <h3>Sign up</h3><br>
            <h4>Please fill in this form to create an account.</h4> 
          </div>
          <form @submit.prevent="submitNewUser" class="signup">
            <div class="form-group">
              <input v-model="name" @input="$v.name.$touch()" type="name" placeholder="User name">
              <span v-if="$v.name.$error" class="error-message">The name field is required</span>
            </div>
            <div class="form-group">
              <input v-model="email" @blur="$v.email.$touch()" type="email" placeholder="User email">
              <div v-if="$v.email.$error">
                <span v-if="!$v.email.required" class="error-message">The email field is required</span>
                <span v-if="!$v.email.email" class="error-message">The email address is not correct</span>
              </div>
            </div>
            <div class="form-group">
            <input v-model="password" @input="$v.password.$touch()" type="password" placeholder="Password (at least 6 characters)">
            <span v-if="$v.password.$error" class="error-message">Password must contain at least 6 characters</span>  
            </div>
            <div class="form-group">
            <input v-model="password2" @input="$v.password2.$touch()" type="password" placeholder="Repeat Password"> 
            <span v-if="$v.password2.$error" class="error-message">Please make sure your passwords match</span>  
            </div> 
            <input type="checkbox" value="lsRememberMe" id="rememberMe"> <label for="rememberMe">Remember me</label>
            <button type="reset" class="cancelbtn">Cancel</button><br><br>
            <button type="submit" class="signupbtn">Submit</button>
          
          </form>
        </div>
      </div>

    `,
    data() {
     return  {
       name: '',
       email: '',
       password: '',
       password2: ''
     }
    },

    validations:{
      name:{
        required: validators.required
      },
    
      email:{
        required: validators.required
      },
  
      password:{
        required: validators.required,
        minLength: validators.minLength(6)
      },

      password2:{
        sameAs: validators.sameAs('password')
      }
    },

    computed: {
     users() {
       return this.$store.state.users
     },

     
    },

    methods: {
        async submitNewUser() {

          const credentials = {
            name: this.name,
            email: this.email,
            password: this.password
          }

          let response = await fetch("/auth/register",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials)
          });
          
          try{
            response = await response.json()
            this.$store.commit('appendUser', response)
            console.log('Successfully registered:', response) 

            this.$router.push("/login");

          }catch{
            console.log('Error, could not register')
          }  

        }
       }
      }
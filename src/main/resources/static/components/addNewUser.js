export default {
    template: `

    <div class="addUser" >
      <h1>Sign up</h1><br>
      <br>
      <p>Please fill in this form to create an account.</p> 
      <hr>
      <form @submit.prevent="submitNewUser">
        <div class="form-group">
          <label for="name">User name :</label>
          <input v-model="name" @input="$v.name.$touch()" type="name" placeholder="Enter user name ...">
          <span v-if="$v.name.$error" class="error-message">The name field is required</span>
        </div>

        <div class="form-group">
          <label for="email" >Email :</label>
          <input v-model="email" @blur="$v.email.$touch()" type="email" placeholder="Enter user email ...">
          <div v-if="$v.email.$error">
            <span v-if="!$v.email.required" class="error-message">The email field is required</span>
            <span v-if="!$v.email.email" class="error-message">The email address is not correct</span>
          </div>
        </div>

        <div class="form-group">
        <label for="password">Password :</label>
        <input v-model="password" @input="$v.password.$touch()" type="password" placeholder="Enter user password ...">
        <span v-if="$v.password.$error" class="error-message">Password must contain at least 6 characters</span>  
        </div>

        <div class="form-group">
        <label for="password2">Repeat Password :</label>
        <input v-model="password2" @input="$v.password2.$touch()" type="password" placeholder="Repeat Password ..."> 
        <span v-if="$v.password2.$error" class="error-message">Please make sure your passwords match</span>  
        </div> 

        <label>
        <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
        </label>

        <p>By creating an account you agree to our <a href="#" style="color:dodgerred">Cinemania Privacy Policy</a>.</p>

        <div class="clearfix">
          <button type="reset" class="cancelbtn">Cancel</button>
          <button type="submit" class="signupbtn">Submit</button>
        </div>
        
      </form>
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

          this.$v.$touch();
          if(this.$v.$invalid){
            console.log('Invalid form')
          }
          else{
            console.log('Form Submitted')
            }
            
    
          let user = {
            name: this.name,
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
  
          this.name = ''
          this.email = ''
          this.password = ''
        }
       }
     }
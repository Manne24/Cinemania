export default {
    template: `
     <form @submit.prevent="submitNewUser">
       <input v-model="userName" type="text" 
       required
       placeholder="Enter user name ...">
       <input v-model="email" type="text" 
       required
       placeholder="Enter user email ...">
       <input v-model="password" type="text" 
       required
       placeholder="Enter user password ...">

       <button>Submit</button>
     </form>
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
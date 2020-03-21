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
                  // input-fälten får inte vara tomma!
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
            // plockar ut objektet ur responsen
            // och lägger i samma variabel
            // som vi fick responsen i
            result = await result.json()
    
            // när vi fått ett svar från servern
            // så får vi tillbaka samma objekt igen,
            // fast med ett nytt färskt ID, direkt
            // från databasen. Denna vill vi lägga till
            // i vår store lista med pets.
    
            this.$store.commit('appendUser', result)
    
            // tömmer fälten 
            this.userName = ''
            this.email = ''
            this.password = ''
         }
       }
     }
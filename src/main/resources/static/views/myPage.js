import history from '../components/history.js'

export default {
    components: {
        history
    },
    template: `
    <div class="container">

        <h2>My Account</h2>
        <div class="user-info">
            User_id: {{ user.user_id }}<br>
            Name: {{ user.name }}<br>
            Email: {{ user.email }}
        </div>

        <button @click="quitUser">Cancel membership</button>
        <label>Enter your user id :</label><br>
        <input v-model="user_id" required type="id" placeholder="user_id..."><br>
        <h2>My booking history</h2>
        <history/>
    </div>    
    `,
    
    computed:{
        user(){
            return this.$store.state.user
        }
    },
    methods: {
        async quitUser() {
          let response = await fetch("/users/"+ this.user_id, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: this.user_id
          });
                //   let user = await fetch('/auth/whoami')
            //   user = await user.json()
              this.$store.state.users
              console.log('Successfully resigned your membership')
            //   this.$store.commit('setUser', user)
            //   console.log('Successfully logged in:', user)
            //   this.$router.push('/mypage');
            }
        },
    }
}
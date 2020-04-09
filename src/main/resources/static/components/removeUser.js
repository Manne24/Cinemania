export default {
    template:`
         <div class="admin-userform">
           <h4>Delete User</h4>
              <form class="user-delete" @submit.prevent="quitUser">
              <input v-model="user_id" required type="id" placeholder="Enter ID of user to remove"><br>
              <button type="submit">CANCEL MEMBERSHIP</button>
            </form>
          </div>
    `
    ,
    data() {
        return {
        user_id: '',
        }
    },
    methods: {
        async quitUser() {
          let response = await fetch("/users/"+ this.user_id, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: this.user_id
          });
     
            this.$store.state.users
            console.log('Successfully resigned your membership')
     
            }
        }
}

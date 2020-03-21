export default {
    template:`
        <ul>
            <li v-for="user of users"
                :key="user.user_id">
                <hr>
                user_id: {{ user.user_id }} <br>
                name: {{ user.name }}<br>
                email: {{ user.email }}
                <hr>
            </li>
        </ul>
    `,
    computed:{
        users(){
            return this.$store.state.users
        }
    }
}

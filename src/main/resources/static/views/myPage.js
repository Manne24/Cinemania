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
            Email: {{ user.email }}<br>
        </div>

        <h2>My booking history</h2>
        <history/>
    </div>    
    `,
    
    computed:{
        user(){
            return this.$store.state.user
        }
    }
    }
import addNewUser from '../components/addNewUser.js'
import usersList from '../components/usersList.js'

export default {
    components: {
        addNewUser,
        usersList
      },
    template:`
    <div>
        <h2 class="title">Login</h2>

        <h2 class="title">Register</h2>
        <addNewUser />
        <usersList />

    </div>
    `
}
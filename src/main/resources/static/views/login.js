import usersList from '../components/usersList.js'
import addNewUser from '../components/addNewUser.js'
import loggingIn from '../components/loggingIn.js'

export default {
    components: {
        addNewUser,
        usersList,
        loggingIn
      },
    template:`
    <div>
        <h2 class="title">Login</h2>
        <loggingIn />

        <h2 class="title">Register</h2>

        <addNewUser />

    

    </div>
    `
}
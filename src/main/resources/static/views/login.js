import usersList from '../components/usersList.js'
import loggingIn from '../components/loggingIn.js'

export default {
    components: {
        usersList,
        loggingIn
      },
    template:`
    <div>
        <h2 class="title">Login</h2>

        <loggingIn />


    </div>
    `
}
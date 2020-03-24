import usersList from '../components/usersList.js'
import addNewUser from '../components/addNewUser.js'
import loggingIn from '../components/loggingIn.js'

export default {
    components: {
        usersList,
        loggingIn,
        addNewUser
      },
    template:`
    <div>
        <h3>Login</h3>
        <loggingIn />

        <h3>Sign up</h3>
        <addNewUser />

    

    </div>
    `
}
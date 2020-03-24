import addNewUser from '../components/addNewUser.js'
import usersList from '../components/usersList.js'

export default {
    components: {
        usersList,
        addNewUser
      },
    template:`
    <div>

        <h3>Sign up</h3>
        <addNewUser />

        <userList />

    

    </div>
    `
}
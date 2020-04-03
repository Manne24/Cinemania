import addNewFilm from '../components/addNewFilm.js'
import removeUser from '../components/removeUser.js'

export default {
    components: {
        addNewFilm,
        removeUser
    },
    template: `
    <div>
    <addNewFilm />
    <removeUser />
    <div class="add-new-film">
        <br><hr>
        <form class="example" @submit.prevent="quitUser">
        <input v-model="user_id" required type="id" placeholder="Enter ID of user to remove"><br>
        <button type="submit">CANCEL MEMBERSHIP</button>
        </form>
        </div>
    </div>
    `
}

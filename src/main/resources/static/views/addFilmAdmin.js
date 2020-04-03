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
    </div>
    `
}

import filmList from '../components/filmList.js'
import getFilms from '../components/getFilms.js'

export default {
    components:{
        filmList,
        getFilms
    },
    template:`
    <div>
        <h2>Films</h2>
        <filmList />
        <getFilms />
    </div>
    `
}
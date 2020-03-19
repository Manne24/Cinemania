
export default {
    template:`
    <div>
    <h1>Films</h1>
        <ul>
        <li v-for="film of films"
        :key="film.id">
        id: {{ film.id }} <br>
        title: {{ film.title }} <br>
        director: {{ film.director }} <br>
        description: {{ film.description}} <br>
        <iframe id="ytplayer" type="text/html" width="640" height="360"
        src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
        frameborder="0"></iframe>
        <hr>
        </li>
    </ul>
   </div>
    `,
    computed: {
        films() {
            return this.$store.state.films
        }
    },
        async created() {
            let films = await fetch('/rest/films')
            films = await films.json()
            console.log(films)
            this.$store.commit('setFilms', films)
        }
    }

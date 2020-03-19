
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

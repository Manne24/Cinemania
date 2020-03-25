
export default {
    template: `
    <div>
    <h1>Films</h1>

        <button
         v-for="(rating, i) in filmFilterAge" 
        :key="rating.age + i"
        @click="filmFilterKey = rating.age"
        class="button-sort-films"
        >{{ rating.age }}
        </button>

        <div class="filmcard" 
         v-for="film of films"
         :key="film.id"
         @click="goToFilmInfo(film.id)">
        <img :src="film.image" alt="film image"><br>
        {{ film.title | to-uppercase }} <br>
        {{ film.rated | to-uppercase }} <br>
        </div>
    
   </div>
    `,
    data() {
        return {
            filmFilterKey: 'all',
            filmFilterAge: [
                { age: "all" },
                { age: "children" },
                { age: "adult" }
            ]
        }
    },
    methods: {
        goToFilmInfo(id) {
            this.$router.push('/films/' + id)
        },
    },
    computed: {
        films() {
            console.log(this.filmFilterKey)
            return this[this.filmFilterKey]
        },
        all() {
            return this.$store.state.films
        },
        children() {
            return this.$store.state.films.filter((film) => film.rated === 'g')
        },
        adult() {
            return this.$store.state.films.filter((film) => film.rated === 'r')
        }

    }
}




export default {
    template: `
    <div>
    <h1>Films</h1>
        <button 
        @click="filmFilterKey = 'all'" 
        class="button-sort-films"
        >ALL</button>

        <button 
        @click="filmFilterKey = 'children'" 
        class="button-sort-films"
        >G-RATED</button>

        <button 
        @click="filmFilterKey = 'adult'" 
        class="button-sort-films"
        >R-RATED</button>

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
            filmFilterKey: 'all'
        }
    },
    methods: {
        goToFilmInfo(id) {
            this.$router.push('/films/' + id)
        },
        /* sortByAge() {
             const filmsSortedByAge = this.$store.state.films.filter((film) => {
                 return film.rated === 'g'
             })
             console.log(filmsSortedByAge)
 
         }  */
    },
    computed: {
        films() {
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


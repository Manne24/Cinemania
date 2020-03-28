
export default {
    template: `
    <div>
    <!-- <h2 class="title">Films</h2> -->

        <button
         v-for="(rating, i) in filmFilterAge" 
        :key="rating.age + i"
        @click="filmFilterKey = rating.age;"
        class="button-sort-films"
        >{{ rating.age }}
        </button>

        <div class="filmcard" 
         v-for="film of films"
         :key="film.film_id"
         @click="goToFilmInfo(film.film_id)">
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
                { age: "adult" }],
        }
    },
    methods: {
        goToFilmInfo(film_id) {
            this.$router.push('/films/' + film_id)
        }, /* onButtonClick() {
            this.clicked = !this.clicked
            this.$refs.button-sort-films.style.setProperty('height', this.isOpen ? '100%' : '93px')
        } */
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

/* :style='{"background-color": (clicked? "yellow" : "orange" )}' */

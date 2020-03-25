
export default {
    template: `
    <div>
    <h1>Films</h1>

        <button
         v-for="(rating, i) in filmFilterAge" 
        :key="rating.age + i"
        @click="filmFilterKey = rating.age; clicked = !clicked"
        class="button-sort-films"
        :style='{"background-color": (clicked? "yellow" : "orange" )}'
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
                { age: "adult" }],
            clicked: false
        }
    },
    methods: {
        goToFilmInfo(id) {
            this.$router.push('/films/' + id)
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

/*  */

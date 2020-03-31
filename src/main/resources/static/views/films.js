
export default {
    template: `
    <div>
    <!-- <h2 class="title">Films</h2> -->
     <!-- v-for="(rating, i) in filmFilterAge" 
        :key="rating.age + i" 
        {{ rating.age }}-->
    <div class="sort-film-container">
        <button
        @click="filmFilterKey = 'all'"
        class="Button"
        
        >ALL
        </button>
        <button
        @click="filmFilterKey = 'children'"
        class="Button"
        >CHILDREN
        </button>
        <button
        @click="filmFilterKey = 'adult'"
        class="Button"
        >ADULT
        </button>
    </div>

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
            color: 'red'
           /*  filmFilterAge: [
                { age: "all" },
                { age: "children" },
                { age: "adult" }], */
        }
    },
    methods: {
        goToFilmInfo(film_id) {
            this.$router.push('/films/' + film_id)
        }, onButtonClick() {
            console.log('pressed')
            $(this).toggleClass( "selected" );
        } 
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
            return this.$store.state.films.filter((film) => film.rated === 'G'
            || film.rated === 'PG' || film.rated === 'PG-13')
        },
        adult() {
            return this.$store.state.films.filter((film) => film.rated === 'R')
        }

    }
}

/* :style='{"background-color": (clicked? "yellow" : "orange" )}' */

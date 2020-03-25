
export default {
    template: `
    <div>
    <h1>Films</h1>

        <button
        v-for="(rating, index) in filmFilter" 
        :item="rating"
        :key="index"
        @click="filter = rating"
        class="button-sort-films"
        >{{ rating }}
        </button>

       <!--  <button 
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
        >R-RATED</button>-->

        <div class="filmcard" 
         v-for="film of films"
         v-if="film[filmFilterKey] === filter || filter === 'all'"
         :item="film"
         :key="film.id"
         @click="goToFilmInfo(film.id)">
        <img :src="film.image" alt="film image"><br>
        {{ film.title }} <br>
        {{ film.rated }} <br>
        
    </div>
   </div>
    `,
    data() {
        return {
            filmFilterKey: 'all',
            filmFilter: ["all", "children", "adult"],
            filter: "all"
        }
    },
    methods: {
        goToFilmInfo(id) {
            this.$router.push('/films/' + id)
        },
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

/* :class="{active: entry == filter}" 
| to-uppercase 
| to-uppercase 

*/


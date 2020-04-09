import sortByDate from '../components/sortByDate.js'

export default {

    components: {
        sortByDate,
    },

    template: `
    <div class="container">
    <section class="sort-and-select"> 
        <div>
            <sortByDate @selectedDate="updateSelectedDate"/>
        </div>    
            <div class="sort-films">
                <button
                v-for="(rating, i) in filmFilterAge" 
                :key="rating.age + i"
                @click="onFilterButtonClick(rating.age)"
                >{{ rating.age }}
                </button>
            </div>
        </section>

        <section class="films-info">
            <div class="filmcard"  
                v-for="(film ,index) of dateFilms"
                :key="film.film_id + index"
                @click="goToFilmInfo(film.film_id)">
                <img :src="film.image" alt="film image">
                <h3>{{ film.title | to-uppercase }}</h3>
                <h4>{{ film.rated }}</h4>
            </div>
        </section>
        </div>    
      </div>
   </div>


   </div>
    `,
    data() {
        return {
            selectedDate: '',
            filmFilterKey: 'all',
            filmFilterAge: [
                { age: "all" },
                { age: "children" },
                { age: "adult" }],
        }
    },
    methods: {
        onFilterButtonClick(age) {
            this.filmFilterKey = age
        },
        updateSelectedDate(date) {
            this.selectedDate = date
        },
        goToFilmInfo(film_id) {
            this.$router.push('/films/' + film_id)
        }, onButtonClick() {
            console.log('pressed')
            $(this).toggleClass("selected");
        }
    },
    computed: {
        dateFilms() {
            let filmIDs = this.$store.state.screenings
                .filter((screening) => {
                    if (!this.selectedDate) {
                        return true
                    } else {
                        return screening.date == this.selectedDate
                    }
                })

            filmIDs = filmIDs.map(screening => screening.film_id)
            return this.films.filter(film => filmIDs.includes(film.film_id))
        },
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

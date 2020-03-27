export default {
    template: `
     <div>
        <h1>{{ imdbInfo.Title }}</h1>
        <section class="iframe">
        <iframe width="640" height="360" :src="film.trailer" frameborder="0" allowtransparency="true" ></iframe>
        </section>

        <section>
        title: {{ imdbInfo.Title }} <br>
        director: {{ imdbInfo.Director }} <br>
        description: {{ imdbInfo.Plot}} <br>
        language: {{imdbInfo.Language}}<br>
        length: {{imdbInfo.Runtime}} <br>
        age: {{imdbInfo.Rated}} <br>
        year of production: {{imdbInfo.Year}} <br>
        genre: {{imdbInfo.Genre}}<br>
        <button class="button-buy-ticket" @click="goToTickets(film.id)" >Buy ticket</button>
        </section><br>
        
        <form @submit.prevent="submitNewFilm">
        <input v-model="title" type="text">
        <button type="submit">Submit</button>
        </form>

        </div>  
  
    `,
    data() {
        return {
            film: {
                title: 'film.title'
            },
            imdbInfo: [],
            title: '',
            description: '',
            director: '',
            image: '',
            genre: '',
            rated: ''
        }
    },
    methods: {
        goToTickets(id) {
            this.$router.push('/tickets/')
            console.log(id)
        },
        async submitNewFilm() {
            console.log(this.film.title)
            console.log(this.imdbInfo.Title)

            if (this.film.title === this.imdbInfo.Title) {
                console.log(this.imdbInfo.Title)
                return 'null'

            } else {
                this.addNewFilm
            }
        },
        async addNewFilm() {

            if (!this.title.trim() &&
                !this.description.trim() &&
                !this.director.trim() &&
                !this.image.trim() &&
                !this.genre.trim() &&
                !this.rated.trim()) {
                return
            }

            let filmInfoAPI = {
                title: this.imdbInfo.Title,
                director: this.imdbInfo.Director,
                description: this.imdbInfo.Plot,
                image: this.imdbInfo.Poster,
                genre: this.imdbInfo.Genre,
                rated: this.imdbInfo.Rated
            }

            let result = await fetch('/rest/films', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(filmInfoAPI)
            })

            result = await result.json()
            console.log(result)

            this.title = '',
                this.director = '',
                this.description = '',
                this.director = '',
                this.image = '',
                this.genre = '',
                this.rated = ''

        }
    },
    async created() {

        let film = await fetch('/rest/films/' + this.$route.params.id)
        film = await film.json()
        console.log(film)
        this.film = film


        fetch('http://www.omdbapi.com/?apikey=87748bc7&t=' + film.title)
            .then((res) => { return res.json() })
            .then((res) => {
                this.imdbInfo = res;
                console.log(this.imdbInfo)
            })
        /* .catch(error => console.log(error)); ASK JOHAN */

    },
}

/* Adds film to list in store */
/* this.$store.commit('appendFilm', result) */



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
        <input v-model="title" type="text" required>
        <input v-model="director" type="text" required>
        <input v-model="description" type="text" required>
        <input v-model="rated" type="text" required><br>
        <button type="submit">Submit</button>
        </form>

        </div>  
  
    `,
    data() {
        return {
            film: {
                /* title: '' */
            },
            imdbInfo: [],
            title: '',
            director: '',
            description: '',
            rated: '',
            image: '',
            /* length: imdbInfo.Runtime,
            age: imdbInfo.Rated,
            year: imdbInfo.Year,
            genre: imdbInfo.Genre, */

        }
    },
    methods: {
        goToTickets(id) {
            this.$router.push('/tickets/')
            console.log(id)
        },
        async submitNewFilm() {

            if (!this.title.trim() &&
                !this.director.trim() &&
                !this.description.trim() &&
                !this.rated.trim()) {
                return
            }

            let film = {
                title: this.title,
                director: this.director,
                description: this.description,
                rated: this.rated,
                image: this.imdbInfo.Language
            }

            let result = await fetch('/rest/films', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(film)
            })

            result = await result.json()
            console.log(result)

            /* Adds film to list in store */
            /* this.$store.commit('appendFilm', result) */

                this.title = '',
                this.description = '',
                this.director = '',
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

    }
}





export default {
    template: `
     <div>
     <h1>{{film.title}}</h1>
     <iframe width="640" height="360" :src="film.trailer" frameborder="0"></iframe>
    <section>
        title: {{ film.title }} <br>
        director: {{ imdbInfo.Director }} <br>
        description: {{ imdbInfo.Plot}} <br>
        language: {{imdbInfo.Language}}<br>
        length: {{imdbInfo.Runtime}} <br>
        age: {{imdbInfo.Rated}} <br>
        year of production: {{imdbInfo.Year}} <br>
        genre: {{imdbInfo.Genre}}<br>
        <button class="button-buy-ticket" @click="goToTickets">Buy ticket</button>
        <!-- <button @click="getImdbInfo(film.title)">Get API</button> -->
        </section>
   </div>
    `,
    data() {
        return {
            film: {
                title: '',
                image: '',
                director: '',
                description: '',
                trailer: ''
            },
            imdbInfo: [
            ]
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
            })

    },
    methods: {
        goToTickets() {
            this.$router.push('/tickets/')
        }
    }
}




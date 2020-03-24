export default {
    template: `
     <div>
        <h1>{{film.title}}</h1>
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
        </section>
      <!--   <p v-if="!film.trailer == null">Video loading...</p>
        <p v-else>Video loaded</p> -->
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
            ],
            loading: false
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
        goToTickets(id) {
            this.$router.push('/tickets/' + id)
            console.log(id)
        }
    }
}




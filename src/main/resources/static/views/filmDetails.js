export default {
    template: `
     <div>
     <h1>{{film.title}}</h1>
     <iframe width="640" height="360" :src="film.trailer" frameborder="0"></iframe>
    <section>
       <!--  <img :src="film.image" alt="film image"><br> -->
        title: {{ film.title }} <br>
        director: {{ film.director }} <br>
        description: {{ film.description}} <br>
        language: <br>
        length: <br>
        age: <br>
        year of production: <br>
        genre: <br>
        <button class="button-buy-ticket" @click="goToTickets">Buy ticket</button>
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
        }
    },
    async created() {

        let film = await fetch('/rest/films/' + this.$route.params.id)
        film = await film.json()

        console.log(film)

        this.film = film
    },
    methods: {
        goToTickets() {
            this.$router.push('/tickets/')
        }

    }
} 

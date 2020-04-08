export default {
    template: `
     <div>
        <h1>{{ film.title }}</h1>
        <section class="iframe">
        <iframe width="640" height="360" :src="film.trailer" frameborder="0" allowtransparency="true" ></iframe>
        </section>

        <section>
        <p>Title: {{ film.title }}</p>
        <p>Director: {{ film.director }}</p>
        <p>Description: {{ film.description }} </p>
        <p>Language: {{film.language }}</p>
        <p>Age: {{film.rated }}</p>
        <p>Year of production: {{film.year}}</p>
        <p>Genre: {{film.genre}}</p>
        <p>Runtime: {{film.runtime}}</p>
        <button class="button-buy-ticket" @click="goToTickets(film.id)" >Buy ticket</button>
        </section><br>
        </div>  
  
    `,
    data() {
        return {
            film: {
            }
        }
    },
    methods: {
        goToTickets(id) {
            this.$router.push('/bokTickets/')
            console.log(id)
        },
    },
    async created() {
        let film = await fetch('/rest/films/' + this.$route.params.id)
        film = await film.json()
        console.log(film)
        this.film = film
    },
}




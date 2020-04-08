export default {
    template: `
     <div>
        <h1>{{ film.title }}</h1>
        <section class="iframe">
        <iframe width="640" height="360" :src="film.trailer" frameborder="0" allowtransparency="true" ></iframe>
        </section>

        <section>
        title: {{ film.title }} <br>
        director: {{ film.director }} <br>
        description: {{ film.description }} <br>
        language: {{film.language }}<br>
        age: {{film.rated }} <br>
        year of production: {{film.year}} <br>
        genre: {{film.genre}}<br>
        runtime: {{film.runtime}}<br>
        <button class="button-buy-ticket" @click="goToTickets(film.id)" >Buy ticket</button>
        </section><br>
        
       <!--   
       TRAILER????
       <form @submit.prevent="addNewFilm">
        <input v-model="title" type="text"><br>
        <button type="submit">ADD NEW FILM</button>
        </form> -->

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




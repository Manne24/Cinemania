
export default {
    template: `
    <div>
    <h1>Films</h1>
    <div class="filmcard" 
         v-for="film of films" 
         :key="film.id"
         @click="goToFilmInfo(film.id)">
        <img :src="film.image" alt="film image"><br>
        {{ film.title }} <br>
    </div>
   </div>
    `,
    methods: {
        goToFilmInfo(id){
            this.$router.push('/films/' + id)
        }
    }, 
    computed: {
        films() {
            return this.$store.state.films
        }
    }
}

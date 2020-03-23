
export default {
    template: `
    <div>
 <!-- <iframe id="ytplayer" type="text/html" width="640" height="360"
        src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
        frameborder="0"></iframe> -->
    <h1>Films</h1>
    <div class="filmcard" 
         v-for="film of films" 
         :key="film.id"
         @click="goToFilmInfo(film.id)">
        <img :src="film.image" alt="film image"><br>
        {{ film.title }} <br>
        length: will add on Monday
        <!-- <button @click="showTrailer">Trailer</button> -->
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

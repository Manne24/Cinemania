export default {
    template: `
   <ul>
    <li v-for="film of films"
        :key="film.id">
    id: {{ film.id }} <br>
    title: {{ film.title }} <br>
    description: {{ film.description}} <br>
    length: {{ film.length}} <br>
    {{ film.trailer }}
    <iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
  frameborder="0"></iframe>
    <!-- <iframe width='640' height='390' src="https://www.youtube.com/watch?v=gCcx85zbxz4"></iframe> -->
    <hr>
    </li>
   </ul>
    `
    ,
    computed: {
        films() {
            return this.$store.state.films
        }
    }
}
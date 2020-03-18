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
export default {
    template: `
    <button @click="getFilms">Fetch Films</button>
    `,
    methods: {
        async getFilms() {
            let films = await fetch('/rest/films')
            films = await films.json()
            console.log(films)
            this.$store.commit('setFilms', films)
        }
    }
}
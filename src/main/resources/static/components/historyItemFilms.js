
export default {
    template: `
    <div>
      <div>
        <div v-for="(film, i) of films"
            :key="film.film_id"
            :film="film">
            Screening time: {{ screening.start_time}}<br>
            Screening date: {{ screening.date}}<br>
            Film title: {{ film.title}} <br>
            </div><br>
      </div> 
    </div>
    `,
    props: ['screening'],
    computed: {
        films() {
            return this.$store.state.films.filter((film) => film.film_id === this.screening.film_id)
        }
    }
}

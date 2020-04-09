
export default {
  template: `
    <div>
      <div>
        <div v-for="(film, i) of films"
            :key="film.film_id"
            :film="film">
            <p>Screening time: {{ screening.start_time}}</p>
            <p>Screening date: {{ screening.date}}</p>
            <p>Film title: {{ film.title}}</p>
            </div>
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

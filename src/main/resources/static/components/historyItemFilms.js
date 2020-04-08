
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
            <i class="far fa-trash-alt" @click="cancelBooking" v-if="screening.date > todaysDate"></i>
            </div>
      </div> 
    </div>
    `,
    props: ['screening', 'ticket'],
    methods: {
        async cancelBooking() {
            console.log(this.screening.date)
          /* let response = await fetch("/rest/tickets/" + this.booking.booking_id, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: this.booking.booking_id,
          });
          console.log(response);*/
        } 
      },
    computed: {
        films() {
            return this.$store.state.films.filter((film) => film.film_id === this.screening.film_id)
        },
        todaysDate() {
            let m = moment(); 
            let currentTime = m.format('YYYY-MM-DD');
            console.log(currentTime)
            return currentTime
          }
    }
}

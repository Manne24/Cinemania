import historyItemFilms from './historyItemFilms.js'

export default {
  components: {
    historyItemFilms
  },
  template: `
    <div>
      <div>
        <historyItemFilms 
            v-for="(screening, i) of screenings"
            :key="screening.screening_id"
            :screening="screening"/>
            <div
            v-for="(seat, i) of seats"
            :key="seat.seat_id"
            :seat="seat">
            <p>Seat number: {{ seat.name }}</p> </div>    
      </div> 
    </div>
    `,
  props: ['ticket'],
  computed: {
    screenings() {
      return this.$store.state.screenings.filter((screening) => screening.screening_id === this.ticket.screening_id)
    },
    seats() {
      return this.$store.state.seats.filter((seat) => seat.seat_id === this.ticket.seat_id)
    }
  }
}

/* Ticket id: {{ ticket.ticket_id }} */

import historyItemScreening from './historyItemScreening.js'
import historyItemFilms from './historyItemFilms.js'

export default {
  components: {
    historyItemScreening,
    historyItemFilms
  },
  template: `
    <div class = "mypage-inside2">
      <div class="booking-card" >
        <p>Booking id: {{ booking.booking_id }}</p>
        <p>Booking time: {{ booking.booking_time }}</p>
        </div>
        <div>
        <historyItemScreening
            class="ticket-card" 
            v-for="(ticket, i) of tickets"
            :key="ticket.ticket_id"
            :ticket="ticket"/>
        </div>
       
    </div>
    `,
  props: ["booking"],
  computed: {
    tickets() {
      return this.$store.state.tickets.filter((ticket) => ticket.booking_id === this.booking.booking_id)
    }
  }
}




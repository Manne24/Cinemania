import historyItemScreening from './historyItemScreening.js'
import historyItemSeats from './historyItemSeats.js'

export default {
  components: {
    historyItemScreening,
    historyItemSeats
  },
  template: `
    <div class="booking-card" >
        Booking id: {{ booking.booking_id }} <br>
        Booking time: {{ booking.booking_time }} <br> 
        <i class="far fa-trash-alt" @click="cancelBooking"></i>
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
  methods: {
    async cancelBooking() {
      let response = await fetch("/rest/bookings/" + this.booking.booking_id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: this.booking.booking_id,
      });
      console.log(response);
    }
  },
  computed: {
    tickets() {
      return this.$store.state.tickets.filter((ticket) => ticket.booking_id === this.booking.booking_id)
    }
  }
}




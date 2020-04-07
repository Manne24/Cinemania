import historyItemScreening from './historyItemScreening.js'

export default {
  components: {
    historyItemScreening
  },
  template: `
    <div class="booking-card" >
        <!-- Booking id: {{ booking.booking_id }} <br>
        Booking time: {{ booking.booking_time }} <br> -->
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

/* <!-- Ticket id: {{ ticket.ticket_id }} <br/>
                    Booking id: {{ ticket.booking_id }}<br/>
                    Screening id: {{ ticket.screening_id }}<br/>
                    Seat id: {{ ticket.seat_id.row }}<br/>
                    ticket type id: {{ ticket.ticket_type_id }}<br/> -->
                    <!-- <historyItemScreening/> --> */

/* v-if="ticket.booking_id === booking.booking_id" */
/* <!-- <div
            class="ticket-card" 
            v-for="(screening, i) of screenings"
            :key="screening.screening_id"
            :screening="screening">{{screening.start_time}}
            
        </div>   --> */



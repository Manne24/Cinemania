import historyItemScreening from './historyItemScreening.js'

export default {
  components: {
    historyItemScreening
  },
  template: `
    <div class = "mypage-inside2">
      <div class="booking-card" >
        <p>Booking id: {{ booking.booking_id }}</p>
        <p>Booking time: {{ booking.booking_time }}</p>
        <i class="far fa-trash-alt" @click="cancelBooking"></i>
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
  },
  todaysDate() {
    let m = moment();
    let currentTime = m.format('YYYY-MM-DD');
    console.log(currentTime)
    return currentTime
  }
}

/*
v-if="screening.date > todaysDate" */


export default {
  template: `
    <div class = "mypage-inside2">
      <div class="booking-card" >
        Booking id: {{ booking.booking_id }} <br>
        Booking time: {{ booking.booking_time }}
        <i class="far fa-trash-alt" @click="cancelBooking"></i>
      </div>  
      <div class="ticket-card" 
            v-for="(ticket, i) of tickets"
            v-if="ticket.booking_id === booking.booking_id"
            :key="ticket.ticket_id"
            :ticket="ticket">
                    Ticket id: {{ ticket.ticket_id }} <br/>
                    Booking id: {{ ticket.booking_id }}<br/>
                    Screening id: {{ ticket.screening_id }}<br/>
                    Seat id: {{ ticket.seat_id.row }}<br/>
                    ticket type id: {{ ticket.ticket_type_id }}<br/>
      </div>  
</div>
    `,
  props: ["booking"],
  methods: {
    async cancelBooking() {
      console.log(this.ticket.ticket_id);
      let response = await fetch("/rest/bookings/" + this.booking.booking_id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: this.booking.booking_id,
      });
      console.log(response);
    },
  },
  computed: {
    tickets() {
      return this.$store.state.tickets;
    },
  },
};

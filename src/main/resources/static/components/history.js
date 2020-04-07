export default {
  template: `
    <div>
        <div class="booking-card"  
            v-for="booking of bookings"
            :key="booking.booking_id">
            Booking id: {{ booking.booking_id }} <br>
            Booking time: {{ booking.booking_time }} <br>
            <i class="far fa-trash-alt" @click="cancelBooking"></i>

                <div
                    class="ticket-card"
                    v-for="ticket of tickets"
                    v-if="ticket.booking_id === booking.booking_id"
                    :key="ticket.ticket_id"
                >
                    Ticket id: {{ ticket.ticket_id }} <br/>
                    Booking id: {{ ticket.booking_id }}<br/>
                    Screening id: {{ ticket.screening_id }}<br/>
                    Seat id: {{ ticket.seat_id.row }}<br/>
                    ticket type id: {{ ticket.ticket_type_id }}<br/>
                </div>


        </div>
    </div>
    `,
  /* data() {
        return {
            booking
        }
    }
    , */ computed: {
    bookings() {
      return this.$store.state.bookings.filter(
        (booking) => booking.user_id === this.user.user_id
      );
    },
    tickets() {
      return this.$store.state.tickets;
    },
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    async cancelBooking() {
      let response = await fetch("/bookings/" + this.booking_id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: this.booking_id,
      });
      console.log(response);
    },
  },
};

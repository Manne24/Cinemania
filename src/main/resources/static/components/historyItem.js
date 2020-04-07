export default {
    template: `
    <div class="booking-card" >
        Booking id: {{ booking.booking_id }} <br>
        Booking time: {{ booking.booking_time }} <br>
        <i class="far fa-trash-alt" @click="cancelBooking"></i>
        <div v-for="(ticket, i) of tickets"
            :key="ticket.ticket_id"
            :ticket="ticket">
           {{ ticket.screening_id }} 
        </div>  
    </div>
    `,
    props: ['booking'],
    methods: {
        async cancelBooking() {
            console.log(this.ticket.ticket_id)
            let response = await fetch("/rest/bookings/" + this.booking.booking_id, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: this.booking.booking_id

            });
            console.log(response)
        }

    },
    computed: {
        tickets() {
            return this.$store.state.tickets
        }
    }
}
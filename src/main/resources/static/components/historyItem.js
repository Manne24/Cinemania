export default {
    template: `
    <div class="booking-card" >
        Booking id: {{ booking.booking_id }} <br>
        Booking time: {{ booking.booking_time }} <br>
        <i class="far fa-trash-alt" @click="cancelBooking"></i>
    </div>
    `,
    props: ['booking'],
    methods: {
        async cancelBooking() {
            console.log(this.booking_id)
            let response = await fetch("/bookings/" + booking_id, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: this.booking_id

            });
            console.log(response)
        }

    }
}
export default {
    template: `
    <div>
        <section>
        <p>Booking id: {{ booking.booking_id }}</p>       
        <p>Booking time: {{ booking.booking_time }}</p>
        <p>Movie: {{ booking.booking_id }}</p>
        <p>Screening: {{ booking.booking_id }}</p>
           <br>
        </section>    
    </div>
    `,
    data() {
        return {
            booking: []
        }
    },
    async created() {
        let booking = await fetch('/rest/bookings/' + this.$route.params.id)
        booking = await booking.json()
        console.log(booking)
        this.booking = booking
    },
}

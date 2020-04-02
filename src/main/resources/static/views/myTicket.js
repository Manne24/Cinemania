export default {
    template: `
    <div>
        <section>
           <p>title: {{ booking.booking_time }}</p><br>
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

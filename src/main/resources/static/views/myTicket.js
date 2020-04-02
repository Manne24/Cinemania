export default {
    template: `
    <div>
        <section>
        <p>Booking id: {{ myBooking.booking_id }}</p>       
        <p>Booking time: {{ myBooking.booking_time }}</p>
        <p>Movie: not added </p>
        <p>Screening: not added</p>
        <p>User name: not added</p>
      
           <br>
        </section>    
    </div>
    `,
    data() {
        return {
            myBooking: []
        }
    },
    async created() {
        let booking = await fetch('/rest/bookings/' + this.$route.params.id)
        booking = await booking.json()
        console.log(booking)
        this.myBooking = booking
    },
}

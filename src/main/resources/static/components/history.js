export default {
    template: `
    <div>
        <div class="booking-card"  
            v-for="booking of bookings"
            :key="booking.booking_id">
            Booking id: {{ booking.booking_id }} <br>
            Booking time: {{ booking.booking_time }} <br>
            <i class="far fa-trash-alt" @click="cancelBooking"></i>
        </div>
    </div>
    `
    ,computed: {
        bookings() {
            return this.$store.state.bookings.filter((booking) => booking.user_id === this.user.user_id)
        },
        user(){
            return this.$store.state.user
        }

    }, async cancelBooking() {
        let response = await fetch("/bookings/" + this.booking_id, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: this.booking_id
        });
    }
}
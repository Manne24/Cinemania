import history from '../components/history.js'


export default {
    components: {
        history
    },
    template: `
    <div class="container">

        <h2>My Account</h2>
        <div class="user-info">
            Name: {{ user.name }}<br>
            Email: {{ user.email }}
        </div>

        <h2>My booking history</h2>
        <div class="filmcard"  
            v-for="booking of bookings"
            :key="booking.booking_id">
            Booking id: {{ booking.booking_id }} <br>
            Booking time: {{ booking.booking_time }}<!-- </p> -->
        </div>
        <history/>
    </div>    
    `,
    computed: {
        user() {
            return this.$store.state.user
        },
        bookings() {
            return this.$store.state.bookings.filter((booking) => booking.user_id === this.user.user_id)
        }
    },
    /* async created() {
        let booking = await fetch('/rest/bookings/' + this.user.user_id)
        booking = await booking.json()
        console.log(booking)
        this.myPageBooking = booking
    } */
}


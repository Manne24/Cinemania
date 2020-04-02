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
        Booking id: {{ myPageBooking.booking_id }} <br>
        Booking time: {{ myPageBooking.booking_time }}
        <history/>
    </div>    
    `,
    data() {
        return {
            myPageBooking: [],
        }
    },
    computed: {
        user() {
            return this.$store.state.user
        }
    },
    async created() {
        let booking = await fetch('/rest/bookings/' + this.user.user_id)
        booking = await booking.json()
        console.log(booking)
        this.myPageBooking = booking
    }
}


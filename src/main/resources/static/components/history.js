import historyItem from './historyItem.js'

export default {
    components: {
        historyItem
    },
    template: `
    <div>
    <section>
        <historyItem 
            v-for="booking of bookings"
            :key="booking_id"
            :booking="booking"
            />
     </section>
    </div>
    `, 
    computed: {
        bookings() {
            return this.$store.state.bookings.filter((booking) => booking.user_id === this.user.user_id)
        },
        user() {
            return this.$store.state.user
        }
    }
}
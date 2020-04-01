export default {
    template: `
    <div>
        <section>
            title: {{ booking.time }} <br>
        </section>    
    </div>
    `,
    data () {
        return {
            booking: {

            }
        }
    },
    methods: {
        async created() {
            let booking = await fetch('/rest/bookings/' + this.$route.params.id)
            booking = await booking.json()
            console.log(booking)
            this.booking = booking
        },
    }
}
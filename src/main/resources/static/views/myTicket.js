export default {
    template: `
    <div>
        <section>
            <h1>test</h1>
            <!-- title: {{ booking.time }} --> <br>
        </section>    
    </div>
    `,
    data () {
        return {
            booking: {

            }
        }
    },
    /* methods: {
        async created() {
            let booking = await fetch('/rest/bookings/' + '1')
            booking = await booking.json()
            console.log(booking)
            this.booking = booking
        },
    } */
}
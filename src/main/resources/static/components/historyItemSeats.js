
export default {
    template: `
    <div>
      <div>
        <div v-for="(seat, i) of seats"
            :key="seat.seat_id"
            :seat="seat">
            Seat number: {{ seat.name }}<br>
            </div><br>
      </div> 
    </div>
    `,
    props: ['tickets'],
    computed: {
        seats() {
            return this.$store.state.seats.filter((seat) => seat.seat_id === this.ticket.seat_id)
        }
    }
}

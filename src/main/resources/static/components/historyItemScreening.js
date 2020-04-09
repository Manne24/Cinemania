import historyItemFilms from './historyItemFilms.js'

export default {
  components: {
    historyItemFilms
  },
  template: `
    <div>
      <div>
      <div v-for="(seat, i) of seats"
          :key="seat.seat_id"
          :seat="seat">
          <p>Seat number: {{ seat.name }}</p> </div>
          <historyItemFilms 
          v-for="(screening, i) of screenings"
          :key="screening.screening_id"
          :screening="screening"/>
          <i class="far fa-trash-alt" @click="deleteTicket" ></i>
      </div> 
    </div>
    `,
  props: ['ticket'],
  methods: {
    async deleteTicket() {
      let response = await fetch("/rest/tickets/" + this.ticket.ticket_id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: this.ticket.ticket_id,
      });
      console.log(response);
    }
  },
  computed: {
    screenings() {
      return this.$store.state.screenings.filter((screening) => screening.screening_id === this.ticket.screening_id)
    },
    seats() {
      return this.$store.state.seats.filter((seat) => seat.seat_id === this.ticket.seat_id)
    },
    todaysDate() {
      let m = moment();
      let currentTime = m.format('YYYY-MM-DD');
      console.log(currentTime)
      return currentTime
    }
  }
}

/* Ticket id: {{ ticket.ticket_id }} */
/*  v-if="screening.date > todaysDate" */
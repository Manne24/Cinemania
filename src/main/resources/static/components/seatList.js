export default {
  template: `
        <div>
        <div class="salon">
            <div class="seats"
                v-for="seat of seats"
                v-if="seat.salon_id === currentScreening.salon_id"
                v-bind:style="[(seat.status === 'available' && seat.status !== 'reserved') ? {backgroundColor: bgColor} : {backgroundColor: bgColorSelected}]"
                :key="seat.name.id"
                @click="chooseSeat(seat)"
            >
                <p>{{ seat.row }}-{{ seat.name }}</p>
                </div>
            </div>  
            <button @click="bookTicket">BOOK</button>
            <p v-if="errorBooking">Error, could not execute booking</p>      
        </div>
    
    `,
  data() {
    return {
      bgColor: "#aaa",
      bgColorSelected: "#00ff00",
      bgColorReserved: "#ff0000",
      currentScreening: {},
      errorBooking: false
    }
  },

  methods: {
    chooseSeat(seat) {
      if (seat.status === "available") {
        seat.status = "selected";
      } else if (seat.status === "selected") {
        seat.status = "available";
      }
    },
    async bookTicket() {

      let currentDate = new Date();
      try {
      let booking = {
        user_id: this.$store.state.user.user_id,
        booking_time: currentDate
      }
      
      let result = await fetch('/rest/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(booking)
      })

      
        result = await result.json()
        console.log(result)
        /* this.$store.commit('appendBookings', result) */
        this.$router.push(
          "/tickets/ticketChoice/screening/:id/seats/" + result.booking_id
        )
      } catch {
        this.errorBooking = true
        console.log('Error, could not execute booking')
      }
    }
  },
  async created() {
    let screening = await fetch("/rest/screenings/" + this.$route.params.id);
    screening = await screening.json();
    console.log(screening);
    this.currentScreening = screening;
  },
  computed: {
    seats() {
      return this.$store.state.seats;
    },
    screenings() {
      return this.$store.state.screenings;
    },
  }
}


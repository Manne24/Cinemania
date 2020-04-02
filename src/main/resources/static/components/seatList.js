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
            <button @click="book">BOOK</button>      
        </div>
    
    `,
  data() {
    return {
      bgColor: "#aaa",
      bgColorSelected: "#00ff00",
      bgColorReserved: "#ff0000",
      currentScreening: {},
      /* user: {

      } */
      /* user_id: '', */

    };
  },
  methods: {
    chooseSeat(seat) {
      if (seat.status === "available") {
        seat.status = "selected";
      } else if (seat.status === "selected") {
        seat.status = "available";
      }
    },
    async book() {

      let currentDate = new Date();
      /* let user_id = this.$store.state.user */
      /* let currentTime = currentDate.getTime().getHour() */

      let booking = {
        user_id: '2',
        booking_time: currentDate
      }
      let result = await fetch('/rest/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(booking)
      })

      try {
        result = await result.json()
        console.log('Successfull booking:', result)
        /*  console.log(result.booking_id)  */
        this.$router.push(
          "/tickets/ticketChoice/screening/:id/seats/" + this.$route.params.id

        )
      } catch {
        console.log('Error, could not register')
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
    /* user (){
      return this.$store.state.user
    }  */
  }
}


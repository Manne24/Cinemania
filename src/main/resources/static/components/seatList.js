export default {
  template: `
        <div>
        <div class="salon">
            <div class="seats"
                v-for="seat of seats"
                v-if="seat.salon_id === currentScreening.salon_id"
                v-bind:style="[(seat.status !== 'available') ? (seat.status === 'reserved') ? {backgroundColor: bgColorReserved} : {backgroundColor: bgColorSelected} : {backgroundColor: bgColor}]"
                :key="seat.name.id"
                @click="chooseSeat(seat)"
            >
                <p>{{ seat.row }}-{{ seat.name }}</p>
                </div>
            </div>        
        </div>
    
    `,
  data() {
    return {
      bgColor: "#aaa",
      bgColorSelected: "#00ff00",
      bgColorReserved: "#ff0000",
      currentScreening: {},
    };
  },
  methods: {
    chooseSeat(seat) {
      console.log(seat.status);
      if (seat.status === "available") {
        seat.status = "selected";
      } else if (seat.status === "selected") {
        seat.status = "available";
      }
    },
  },
  async created() {
    let screening = await fetch("/rest/screenings/" + this.$route.params.id);
    screening = await screening.json();
    console.log(screening);
    this.currentScreening = screening;

    for (let ticket of this.tickets) {
      if (ticket.screening_id === this.currentScreening.screening_id) {
        let seatID = ticket.seat_id;
        let oneSeat = await fetch("/rest/seats/" + seatID);
        oneSeat = await oneSeat.json();
        oneSeat.status = "reserved";
        console.log(oneSeat);
        for (let seat of this.seats) {
          if (seat.seat_id === oneSeat.seat_id) {
            seat.status = "reserved";
          }
        }
      }
    }
  },
  computed: {
    seats() {
      return this.$store.state.seats;
    },
    screenings() {
      return this.$store.state.screenings;
    },
    tickets() {
      return this.$store.state.tickets;
    },
  },
};
